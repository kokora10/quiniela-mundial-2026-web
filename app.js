"use strict";

// ---- Banderas como emoji Unicode (neutral, sin assets/escudos oficiales) ----
const FLAG = {
  // Variantes en español (datos del grupo)
  "Canadá": "🇨🇦", "Bosnia y Herzegovina": "🇧🇦", "Estados Unidos": "🇺🇸",
  "México": "🇲🇽", "Brasil": "🇧🇷", "España": "🇪🇸", "Francia": "🇫🇷",
  "Alemania": "🇩🇪", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  // Selecciones (nombres de la fuente)
  "Algeria": "🇩🇿", "Argentina": "🇦🇷", "Australia": "🇦🇺", "Austria": "🇦🇹",
  "Belgium": "🇧🇪", "Bosnia and Herzegovina": "🇧🇦", "Brazil": "🇧🇷",
  "Canada": "🇨🇦", "Cape Verde": "🇨🇻", "Colombia": "🇨🇴", "Croatia": "🇭🇷",
  "Curaçao": "🇨🇼", "Czech Republic": "🇨🇿", "DR Congo": "🇨🇩", "Ecuador": "🇪🇨",
  "Egypt": "🇪🇬", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "France": "🇫🇷", "Germany": "🇩🇪",
  "Ghana": "🇬🇭", "Haiti": "🇭🇹", "Iran": "🇮🇷", "Iraq": "🇮🇶",
  "Ivory Coast": "🇨🇮", "Japan": "🇯🇵", "Jordan": "🇯🇴", "Mexico": "🇲🇽",
  "Morocco": "🇲🇦", "Netherlands": "🇳🇱", "New Zealand": "🇳🇿", "Norway": "🇳🇴",
  "Panama": "🇵🇦", "Paraguay": "🇵🇾", "Portugal": "🇵🇹", "Qatar": "🇶🇦",
  "Saudi Arabia": "🇸🇦", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Senegal": "🇸🇳",
  "South Africa": "🇿🇦", "South Korea": "🇰🇷", "Spain": "🇪🇸", "Sweden": "🇸🇪",
  "Switzerland": "🇨🇭", "Tunisia": "🇹🇳", "Turkey": "🇹🇷", "United States": "🇺🇸",
  "USA": "🇺🇸", "Uruguay": "🇺🇾", "Uzbekistan": "🇺🇿",
};
const flag = (t) => FLAG[t] || "⚽";

const $ = (s) => document.querySelector(s);
const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, (c) => (
  { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
));
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};

// ---- Sesion (en la pestaña) ----
let me = sessionStorage.getItem("q_me") || "";
let sessionPin = sessionStorage.getItem("q_pin") || "";
let STATE = null;
let countdownTimer = null;
let pollTimer = null;

function saveSession(nombre, pin) {
  me = nombre; sessionPin = pin;
  sessionStorage.setItem("q_me", nombre);
  sessionStorage.setItem("q_pin", pin);
}
function clearSession() {
  me = ""; sessionPin = "";
  sessionStorage.removeItem("q_me");
  sessionStorage.removeItem("q_pin");
  sessionStorage.removeItem("q_must");
}

function toast(msg) {
  let t = $(".toast");
  if (!t) { t = el("div", "toast"); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// Si la página se sirve desde GitHub Pages, la API vive en el backend de Railway;
// si se sirve desde el propio backend, se usan rutas relativas.
const API_BASE = location.hostname.endsWith("github.io")
  ? "https://web-production-a57dc.up.railway.app"
  : "";

async function api(path, body) {
  const opts = body
    ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    : {};
  const r = await fetch(API_BASE + path, opts);
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.error || "Error");
  return data;
}

// ============ Pantallas ============
function show(screen) {
  ["login-screen", "change-screen", "app-screen"].forEach((id) => {
    $("#" + id).classList.toggle("hidden", id !== screen);
  });
}

function showLogin() {
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  show("login-screen");
  $("#login-pin").value = "";
  $("#login-error").textContent = "";
}

function showChange(forced) {
  show("change-screen");
  $("#new-pin").value = ""; $("#new-pin2").value = "";
  $("#change-error").textContent = "";
  $("#change-title").textContent = forced ? "Crea tu PIN" : "Cambiar PIN";
  $("#change-sub").textContent = forced
    ? "Es tu primer ingreso: define tu PIN personal antes de continuar."
    : "Define un nuevo PIN. Necesitarás recordarlo para entrar.";
  $("#change-cancel").classList.toggle("hidden", forced);
}

function showApp() {
  show("app-screen");
  $("#hola").textContent = "Hola, " + me;
  load();
  if (!pollTimer) pollTimer = setInterval(load, 30000);
}

// ============ Auth handlers ============
async function fillNombres() {
  // Llena el select de login con la lista publica de participantes.
  try {
    const st = await api("/api/state");
    const sel = $("#login-nombre");
    if (sel.options.length <= 1) {
      st.participantes.forEach((p) => sel.appendChild(new Option(p, p)));
    }
    $("#site-name").textContent = st.site_name;
    $("#login-title").textContent = st.site_name;
    document.title = st.site_name;
  } catch (e) { /* la app sigue usable al reintentar */ }
}

$("#login-btn").addEventListener("click", async () => {
  const nombre = $("#login-nombre").value;
  const pin = $("#login-pin").value;
  if (!nombre || !pin) { $("#login-error").textContent = "Elige tu nombre y escribe tu PIN."; return; }
  try {
    const r = await api("/api/login", { participante: nombre, pin });
    saveSession(nombre, pin);
    if (r.must_change) {
      sessionStorage.setItem("q_must", "1");
      showChange(true);
    } else {
      sessionStorage.removeItem("q_must");
      showApp();
    }
  } catch (e) { $("#login-error").textContent = e.message; }
});

$("#login-pin").addEventListener("keydown", (e) => { if (e.key === "Enter") $("#login-btn").click(); });

$("#change-btn").addEventListener("click", async () => {
  const nuevo = $("#new-pin").value, nuevo2 = $("#new-pin2").value;
  if (nuevo !== nuevo2) { $("#change-error").textContent = "Los PIN no coinciden."; return; }
  try {
    await api("/api/cambiar-pin", { participante: me, pin: sessionPin, nuevo });
    saveSession(me, nuevo);            // la sesion usa el nuevo PIN
    sessionStorage.removeItem("q_must");
    toast("PIN actualizado");
    showApp();
  } catch (e) { $("#change-error").textContent = e.message; }
});

$("#change-cancel").addEventListener("click", () => showApp());
$("#btn-cambiar").addEventListener("click", () => showChange(false));
$("#btn-salir").addEventListener("click", () => { clearSession(); showLogin(); });

// ---- Tabs ----
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    btn.classList.add("active");
    $("#view-" + btn.dataset.view).classList.add("active");
  });
});

// ============ Carga y render de la app ============
async function load() {
  if ($("#app-screen").classList.contains("hidden")) return;
  try {
    STATE = await api("/api/state");
    render();
  } catch (e) { console.error(e); }
}

function render() {
  $("#site-name").textContent = STATE.site_name;
  document.title = STATE.site_name;
  renderProximo();
  renderLeaderboard();
  renderGridProximo();
  renderTablaFull();
  renderResultados();
  renderAdminSelects();
}

function predByPartido(pid) {
  const m = {};
  STATE.pronosticos.filter((p) => p.partido_id === pid).forEach((p) => (m[p.participante] = p));
  return m;
}

function renderProximo() {
  const box = $("#proximo");
  const p = STATE.proximo;
  if (!p) { box.textContent = "Aún no hay partidos cargados."; return; }

  const abierto = p.abierto;
  const finalizado = p.estado === "finalizado";
  const mine = predByPartido(p.id)[me];
  const badge = finalizado
    ? `<span class="badge closed">Finalizado</span>`
    : abierto ? `<span class="badge open">Abierto</span>`
              : `<span class="badge closed">Cerrado</span>`;

  const real = finalizado ? `${p.res_local} – ${p.res_visitante}` : "";

  box.innerHTML = `
    <div class="match-head"><strong>Próximo partido</strong>${badge}</div>
    <div class="teams">
      <div class="team"><div class="flag">${flag(p.local)}</div><div class="name">${esc(p.local)}</div></div>
      <div class="vs">${finalizado ? real : "vs"}</div>
      <div class="team"><div class="flag">${flag(p.visitante)}</div><div class="name">${esc(p.visitante)}</div></div>
    </div>
    <div class="meta">${[p.fecha, p.hora_centro_mx ? p.hora_centro_mx + " (Centro MX)" : "", p.sede]
      .filter(Boolean).map(esc).join(" · ")}</div>
    <div class="countdown" id="cd"></div>
    <div id="predict-area"></div>
  `;

  const area = $("#predict-area");
  if (finalizado) {
    area.innerHTML = `<p class="muted" style="text-align:center">Resultado final: <strong>${real}</strong></p>`;
  } else if (!abierto) {
    area.innerHTML = mine
      ? `<p class="muted" style="text-align:center">Tu pronóstico: <strong>${mine.local} – ${mine.visitante}</strong></p>`
      : `<p class="muted" style="text-align:center">Ya cerró. No registraste pronóstico.</p>`;
  } else {
    area.innerHTML = `
      <div class="predict">
        <input type="number" min="0" max="20" class="score" id="pl" value="${mine ? mine.local : ""}" />
        <span>–</span>
        <input type="number" min="0" max="20" class="score" id="pv" value="${mine ? mine.visitante : ""}" />
        <button id="send-pred">${mine ? "Actualizar" : "Enviar"}</button>
      </div>`;
    $("#send-pred").addEventListener("click", () => enviarPronostico(p.id));
  }
  startCountdown(p);
}

async function enviarPronostico(pid) {
  const local = $("#pl").value, visitante = $("#pv").value;
  if (local === "" || visitante === "") { toast("Completa el marcador"); return; }
  try {
    await api("/api/prediccion", {
      partido_id: pid, participante: me, pin: sessionPin, local, visitante,
    });
    toast("Pronóstico guardado");
    await load();
  } catch (e) {
    toast(e.message);
    // PIN invalidado (p.ej. lo cambiaste en otra pestaña): vuelve al login.
    if (/PIN|identidad/i.test(e.message)) { clearSession(); showLogin(); }
  }
}

function startCountdown(p) {
  if (countdownTimer) clearInterval(countdownTimer);
  const cd = $("#cd");
  if (!cd) return;
  if (p.estado === "finalizado" || !p.cierre_utc) { cd.textContent = ""; return; }
  const cierre = new Date(p.cierre_utc).getTime();
  const tick = () => {
    const diff = cierre - Date.now();
    if (diff <= 0) { cd.textContent = "⏱ Cerrado"; clearInterval(countdownTimer); return; }
    const h = Math.floor(diff / 3.6e6);
    const m = Math.floor((diff % 3.6e6) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    cd.textContent = `Cierra en ${h > 0 ? h + "h " : ""}${m}m ${s}s`;
  };
  tick();
  countdownTimer = setInterval(tick, 1000);
}

function renderLeaderboard() {
  const t = $("#leaderboard");
  t.innerHTML = `<tr><th>#</th><th>Participante</th><th>Pts</th></tr>`;
  STATE.tabla.slice(0, 10).forEach((r) => {
    const tr = el("tr", r.participante === me ? "me" : "");
    tr.innerHTML = `<td>${r.posicion}</td><td>${esc(r.participante)}</td><td class="pts">${r.puntos}</td>`;
    t.appendChild(tr);
  });
}

function renderGridProximo() {
  const t = $("#grid-proximo");
  const p = STATE.proximo;
  if (!p) { t.innerHTML = ""; return; }
  const preds = predByPartido(p.id);
  t.innerHTML = `<tr><th>Participante</th><th>Pronóstico</th></tr>`;
  STATE.participantes.forEach((nom) => {
    const pr = preds[nom];
    const marc = pr
      ? `${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}`
      : "—";
    const tr = el("tr", nom === me ? "me" : "");
    tr.innerHTML = `<td>${esc(nom)}</td><td>${marc}</td>`;
    t.appendChild(tr);
  });
}

function renderTablaFull() {
  const t = $("#tabla-full");
  t.innerHTML = `<tr><th>#</th><th>Participante</th><th>Pts</th><th>Exactos</th><th>Result.</th><th>Jug.</th></tr>`;
  STATE.tabla.forEach((r) => {
    const tr = el("tr", r.participante === me ? "me" : "");
    tr.innerHTML = `<td>${r.posicion}</td><td>${esc(r.participante)}</td>
      <td class="pts">${r.puntos}</td><td>${r.exactos}</td><td>${r.resultados}</td><td>${r.jugados}</td>`;
    t.appendChild(tr);
  });
}

// Puntos cliente (espejo de scoring.py) solo para mostrar en Resultados.
function puntos(pl, pv, rl, rv) {
  if (rl == null || rv == null) return null;
  if (pl === rl && pv === rv) return 7;
  const sign = (a, b) => (a > b) - (a < b);
  if (sign(pl, pv) === sign(rl, rv)) return 2;
  return 0;
}

function renderResultados() {
  const cont = $("#resultados-list");
  cont.innerHTML = "";
  const jugados = STATE.partidos.filter((p) => p.estado === "finalizado");
  if (!jugados.length) {
    cont.appendChild(el("div", "card muted", "Aún no hay partidos finalizados."));
    return;
  }
  jugados.forEach((p) => {
    const preds = predByPartido(p.id);
    const card = el("div", "card");
    let rows = "";
    STATE.participantes.forEach((nom) => {
      const pr = preds[nom];
      if (!pr) {
        rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td><td>—</td><td>0</td></tr>`;
        return;
      }
      const pts = puntos(pr.local, pr.visitante, p.res_local, p.res_visitante);
      const tag = pts === 7 ? `<span class="tag exact">exacto</span>`
                : pts === 2 ? `<span class="tag res">resultado</span>` : "";
      rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td>
        <td>${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)} ${tag}</td><td class="pts">${pts}</td></tr>`;
    });
    card.innerHTML = `
      <h2>${flag(p.local)} ${esc(p.local)} ${p.res_local} – ${p.res_visitante} ${esc(p.visitante)} ${flag(p.visitante)}</h2>
      <div class="muted" style="margin-bottom:8px">${[p.fecha, p.sede].filter(Boolean).map(esc).join(" · ")}</div>
      <table class="grid"><tr><th>Participante</th><th>Pronóstico</th><th>Pts</th></tr>${rows}</table>`;
    cont.appendChild(card);
  });
}

// ---- Admin ----
function fillSelect(sel, items, fmt) {
  sel.innerHTML = "";
  items.forEach((it) => sel.appendChild(new Option(fmt(it), it.value)));
}
function renderAdminSelects() {
  const partidos = STATE.partidos.map((p) => ({ value: p.id, label: `${p.local} vs ${p.visitante}` }));
  ["#ar-partido", "#ap-partido"].forEach((id) =>
    fillSelect($(id), partidos, (p) => p.label));
  fillSelect($("#ap-participante"),
    STATE.participantes.map((p) => ({ value: p, label: p })), (p) => p.label);
}

$("#ar-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/resultado", {
      pin: $("#admin-pin").value, partido_id: $("#ar-partido").value,
      local: $("#ar-local").value, visitante: $("#ar-visitante").value,
    });
    toast("Resultado guardado"); await load();
  } catch (e) { toast(e.message); }
});

$("#ap-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/prediccion", {
      pin: $("#admin-pin").value, partido_id: $("#ap-partido").value,
      participante: $("#ap-participante").value,
      local: $("#ap-local").value, visitante: $("#ap-visitante").value,
    });
    toast("Pronóstico guardado"); await load();
  } catch (e) { toast(e.message); }
});

$("#sync-btn").addEventListener("click", async () => {
  $("#admin-msg").textContent = "Sincronizando…";
  try {
    const r = await api("/api/admin/sync", { pin: $("#admin-pin").value });
    $("#admin-msg").textContent =
      `Calendario: ${r.calendario ?? r.calendario_error ?? "—"} · Resultados nuevos: ${(r.resultados || []).length}`;
    await load();
  } catch (e) { $("#admin-msg").textContent = e.message; }
});

// ============ Arranque ============
(async function boot() {
  await fillNombres();
  if (me && sessionPin) {
    if (sessionStorage.getItem("q_must") === "1") showChange(true);
    else showApp();
  } else {
    showLogin();
  }
})();
