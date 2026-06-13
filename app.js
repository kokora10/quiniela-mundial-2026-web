"use strict";

// ====================== i18n ======================
const I18N = {
  es: {
    app_subtitle_login: "Acceso solo para participantes del grupo.",
    how_to_enter: "Cómo entrar",
    step1: "Elige tu nombre.",
    step2: "Escribe tu PIN. Si es tu primer ingreso, usa el PIN inicial que te dio el administrador.",
    step3: "En el primer ingreso tendrás que crear tu PIN personal.",
    label_name: "Nombre", opt_choose_name: "— elige tu nombre —",
    label_pin: "PIN", ph_pin: "Tu PIN", btn_enter: "Entrar",
    change_title_create: "Crea tu PIN", change_title_change: "Cambiar PIN",
    change_sub_forced: "Es tu primer ingreso: define tu PIN personal antes de continuar.",
    change_sub_normal: "Define un nuevo PIN. Necesitarás recordarlo para entrar.",
    label_new_pin: "Nuevo PIN", ph_new_pin: "Nuevo PIN",
    label_repeat_pin: "Repite el nuevo PIN", ph_confirm: "Confírmalo",
    btn_save_pin: "Guardar PIN", btn_cancel: "Cancelar",
    btn_change_pin: "Cambiar PIN", btn_logout: "Salir", hello: "Hola, {name}",
    tab_home: "Inicio", tab_results: "Resultados y tabla", tab_admin: "Admin",
    tab_upcoming: "Próximos partidos",
    upcoming_note: "Puedes registrar tu pronóstico de cualquier partido por adelantado.",
    no_upcoming: "No hay próximos partidos.",
    leaderboard: "Clasificación", preds_this_match: "Pronósticos de este partido",
    general_table: "Tabla general",
    evolution_title: "Evolución de puntos", evo_empty: "Aún no hay partidos puntuados.",
    evo_caption: "Puntos acumulados · eje X = partidos jugados (en orden)",
    evo_progress: "{j}/{m} jugados",
    evo_left: "faltan {n}",
    ph_group: "Grupos", ph_r32: "Dieciseisavos", ph_r16: "Octavos", ph_qf: "Cuartos", ph_sf: "Semis", ph_third: "3.er lugar", ph_final: "Final",
    scoring_title: "Puntuación", scoring_exact: "Marcador exacto",
    scoring_result: "Solo resultado (gana / empata / pierde)", scoring_miss: "Falla",
    admin: "Admin",
    admin_note: "Acciones protegidas por PIN de administrador.", admin_pin_label: "PIN admin:",
    load_result: "Cargar resultado real",
    admin_pin_title: "Cambiar PIN de un participante", admin_pin_force: "Obligar a cambiarlo en el primer ingreso",
    enter_pred_for: "Meter pronóstico de alguien (lo mandó por chat)",
    sync: "Sincronizar", resync: "Re-sincronizar calendario y resultados", save: "Guardar",
    footer: "Uso interno, sin fines de lucro. Datos de marcadores de fuente pública.",
    loading: "Cargando…", next_match: "Próximo partido",
    st_final: "Finalizado", st_open: "Abierto", st_closed: "Cerrado",
    st_live: "En juego", in_play_title: "Partido en juego",
    vs: "vs", center_mx: "(hora de México)", closes_in: "Cierra en {t}", closed_clock: "⏱ Cerrado",
    closes_note: "El pronóstico cierra 1 minuto antes del inicio.",
    pm_label: "Polymarket", pm_draw: "Empate", pm_hint: "Probabilidad implícita del mercado",
    final_result: "Resultado final:", your_pred: "Tu pronóstico:",
    closed_no_pred: "Ya cerró. No registraste pronóstico.",
    send: "Enviar", update: "Actualizar", complete_score: "Completa el marcador",
    pred_saved: "Pronóstico guardado", result_saved: "Resultado guardado",
    col_num: "#", col_participant: "Participante", col_pts: "Pts", col_pred: "Pronóstico",
    col_exact: "Exactos", col_result: "Result.", col_played: "Jug.",
    no_matches: "Aún no hay partidos cargados.", no_finished: "Aún no hay partidos finalizados.",
    tag_exact: "exacto", tag_result: "resultado",
    pin_updated: "PIN actualizado", pins_mismatch: "Los PIN no coinciden.",
    need_name_pin: "Elige tu nombre y escribe tu PIN.",
    syncing: "Sincronizando…", sync_summary: "Calendario: {cal} · Resultados nuevos: {n}",
    err_bad_login: "Nombre o PIN incorrecto", err_bad_current_pin: "Nombre o PIN actual incorrecto",
    err_bad_identity: "Identidad o PIN incorrecto", err_too_many: "Demasiados intentos. Intenta más tarde",
    err_pred_closed: "Pronósticos cerrados para este partido", err_bad_score: "Marcador inválido",
    err_bad_admin_pin: "PIN incorrecto", err_pin_same: "El nuevo PIN debe ser distinto al actual",
    err_pin_short: "El nuevo PIN debe tener al menos {n} caracteres", err_generic: "Error",
  },
  en: {
    app_subtitle_login: "Access for group participants only.",
    how_to_enter: "How to sign in",
    step1: "Choose your name.",
    step2: "Enter your PIN. On your first sign-in, use the initial PIN the admin gave you.",
    step3: "On your first sign-in you'll have to create your personal PIN.",
    label_name: "Name", opt_choose_name: "— choose your name —",
    label_pin: "PIN", ph_pin: "Your PIN", btn_enter: "Sign in",
    change_title_create: "Create your PIN", change_title_change: "Change PIN",
    change_sub_forced: "It's your first sign-in: set your personal PIN before continuing.",
    change_sub_normal: "Set a new PIN. You'll need to remember it to sign in.",
    label_new_pin: "New PIN", ph_new_pin: "New PIN",
    label_repeat_pin: "Repeat the new PIN", ph_confirm: "Confirm it",
    btn_save_pin: "Save PIN", btn_cancel: "Cancel",
    btn_change_pin: "Change PIN", btn_logout: "Sign out", hello: "Hi, {name}",
    tab_home: "Home", tab_results: "Results & table", tab_admin: "Admin",
    tab_upcoming: "Upcoming matches",
    upcoming_note: "You can submit your prediction for any match in advance.",
    no_upcoming: "No upcoming matches.",
    leaderboard: "Leaderboard", preds_this_match: "Predictions for this match",
    general_table: "Standings",
    evolution_title: "Points over time", evo_empty: "No scored matches yet.",
    evo_caption: "Cumulative points · X axis = matches played (in order)",
    evo_progress: "{j}/{m} played",
    evo_left: "{n} left",
    ph_group: "Groups", ph_r32: "Round of 32", ph_r16: "Round of 16", ph_qf: "Quarters", ph_sf: "Semis", ph_third: "3rd place", ph_final: "Final",
    scoring_title: "Scoring", scoring_exact: "Exact score",
    scoring_result: "Result only (win / draw / loss)", scoring_miss: "Wrong",
    admin: "Admin",
    admin_note: "Actions protected by admin PIN.", admin_pin_label: "Admin PIN:",
    load_result: "Enter actual result",
    admin_pin_title: "Change a participant's PIN", admin_pin_force: "Require them to change it on first sign-in",
    enter_pred_for: "Add someone's prediction (sent via chat)",
    sync: "Sync", resync: "Re-sync calendar and results", save: "Save",
    footer: "Internal use, non-profit. Score data from a public source.",
    loading: "Loading…", next_match: "Next match",
    st_final: "Finished", st_open: "Open", st_closed: "Closed",
    st_live: "Live", in_play_title: "Match in progress",
    vs: "vs", center_mx: "(Mexico time)", closes_in: "Closes in {t}", closed_clock: "⏱ Closed",
    closes_note: "Predictions close 1 minute before kickoff.",
    pm_label: "Polymarket", pm_draw: "Draw", pm_hint: "Market-implied probability",
    final_result: "Final result:", your_pred: "Your prediction:",
    closed_no_pred: "Closed. You didn't submit a prediction.",
    send: "Submit", update: "Update", complete_score: "Fill in the score",
    pred_saved: "Prediction saved", result_saved: "Result saved",
    col_num: "#", col_participant: "Participant", col_pts: "Pts", col_pred: "Prediction",
    col_exact: "Exact", col_result: "Result", col_played: "Played",
    no_matches: "No matches loaded yet.", no_finished: "No finished matches yet.",
    tag_exact: "exact", tag_result: "result",
    pin_updated: "PIN updated", pins_mismatch: "PINs don't match.",
    need_name_pin: "Choose your name and enter your PIN.",
    syncing: "Syncing…", sync_summary: "Calendar: {cal} · New results: {n}",
    err_bad_login: "Wrong name or PIN", err_bad_current_pin: "Wrong name or current PIN",
    err_bad_identity: "Wrong identity or PIN", err_too_many: "Too many attempts. Try again later",
    err_pred_closed: "Predictions closed for this match", err_bad_score: "Invalid score",
    err_bad_admin_pin: "Wrong PIN", err_pin_same: "The new PIN must be different from the current one",
    err_pin_short: "The new PIN must be at least {n} characters", err_generic: "Error",
  },
  ru: {
    app_subtitle_login: "Доступ только для участников группы.",
    how_to_enter: "Как войти",
    step1: "Выберите своё имя.",
    step2: "Введите PIN-код. При первом входе используйте начальный PIN от администратора.",
    step3: "При первом входе нужно будет создать свой личный PIN-код.",
    label_name: "Имя", opt_choose_name: "— выберите своё имя —",
    label_pin: "PIN-код", ph_pin: "Ваш PIN", btn_enter: "Войти",
    change_title_create: "Создайте PIN-код", change_title_change: "Сменить PIN",
    change_sub_forced: "Это ваш первый вход: задайте личный PIN-код, прежде чем продолжить.",
    change_sub_normal: "Задайте новый PIN-код. Его нужно запомнить для входа.",
    label_new_pin: "Новый PIN", ph_new_pin: "Новый PIN",
    label_repeat_pin: "Повторите новый PIN", ph_confirm: "Подтвердите",
    btn_save_pin: "Сохранить PIN", btn_cancel: "Отмена",
    btn_change_pin: "Сменить PIN", btn_logout: "Выйти", hello: "Привет, {name}",
    tab_home: "Главная", tab_results: "Результаты и таблица", tab_admin: "Админ",
    tab_upcoming: "Ближайшие матчи",
    upcoming_note: "Вы можете заранее сделать прогноз на любой матч.",
    no_upcoming: "Нет ближайших матчей.",
    leaderboard: "Таблица лидеров", preds_this_match: "Прогнозы на этот матч",
    general_table: "Турнирная таблица",
    evolution_title: "Динамика очков", evo_empty: "Пока нет сыгранных матчей.",
    evo_caption: "Накопленные очки · ось X = сыгранные матчи (по порядку)",
    evo_progress: "{j}/{m} сыграно",
    evo_left: "осталось {n}",
    ph_group: "Группы", ph_r32: "1/16", ph_r16: "1/8", ph_qf: "1/4", ph_sf: "1/2", ph_third: "За 3-е", ph_final: "Финал",
    scoring_title: "Подсчёт очков", scoring_exact: "Точный счёт",
    scoring_result: "Только исход (победа / ничья / поражение)", scoring_miss: "Не угадал",
    admin: "Админ",
    admin_note: "Действия защищены PIN-кодом администратора.", admin_pin_label: "PIN админа:",
    load_result: "Внести реальный счёт",
    admin_pin_title: "Изменить PIN участника", admin_pin_force: "Требовать смены при первом входе",
    enter_pred_for: "Добавить чей-то прогноз (прислан в чат)",
    sync: "Синхронизация", resync: "Пересинхронизировать календарь и результаты", save: "Сохранить",
    footer: "Для внутреннего использования, без коммерции. Данные о счёте из открытого источника.",
    loading: "Загрузка…", next_match: "Следующий матч",
    st_final: "Завершён", st_open: "Открыт", st_closed: "Закрыт",
    st_live: "В игре", in_play_title: "Идёт матч",
    vs: "vs", center_mx: "(время Мексики)", closes_in: "Закроется через {t}", closed_clock: "⏱ Закрыто",
    closes_note: "Приём прогнозов закрывается за 1 минуту до начала.",
    pm_label: "Polymarket", pm_draw: "Ничья", pm_hint: "Подразумеваемая рынком вероятность",
    final_result: "Итоговый счёт:", your_pred: "Ваш прогноз:",
    closed_no_pred: "Закрыто. Вы не сделали прогноз.",
    send: "Отправить", update: "Обновить", complete_score: "Укажите счёт",
    pred_saved: "Прогноз сохранён", result_saved: "Счёт сохранён",
    col_num: "#", col_participant: "Участник", col_pts: "Очки", col_pred: "Прогноз",
    col_exact: "Точные", col_result: "Исход", col_played: "Игр",
    no_matches: "Матчи ещё не загружены.", no_finished: "Завершённых матчей пока нет.",
    tag_exact: "точный", tag_result: "исход",
    pin_updated: "PIN обновлён", pins_mismatch: "PIN-коды не совпадают.",
    need_name_pin: "Выберите имя и введите PIN.",
    syncing: "Синхронизация…", sync_summary: "Календарь: {cal} · Новых результатов: {n}",
    err_bad_login: "Неверное имя или PIN", err_bad_current_pin: "Неверное имя или текущий PIN",
    err_bad_identity: "Неверная личность или PIN", err_too_many: "Слишком много попыток. Повторите позже",
    err_pred_closed: "Приём прогнозов на этот матч закрыт", err_bad_score: "Неверный счёт",
    err_bad_admin_pin: "Неверный PIN", err_pin_same: "Новый PIN должен отличаться от текущего",
    err_pin_short: "Новый PIN должен содержать не менее {n} символов", err_generic: "Ошибка",
  },
  de: {
    app_subtitle_login: "Zugang nur für Gruppenmitglieder.",
    how_to_enter: "So meldest du dich an",
    step1: "Wähle deinen Namen.",
    step2: "Gib deine PIN ein. Beim ersten Mal die Anfangs-PIN des Administrators verwenden.",
    step3: "Beim ersten Anmelden musst du deine persönliche PIN erstellen.",
    label_name: "Name", opt_choose_name: "— wähle deinen Namen —",
    label_pin: "PIN", ph_pin: "Deine PIN", btn_enter: "Anmelden",
    change_title_create: "PIN erstellen", change_title_change: "PIN ändern",
    change_sub_forced: "Erste Anmeldung: Lege deine persönliche PIN fest, bevor es weitergeht.",
    change_sub_normal: "Lege eine neue PIN fest. Du brauchst sie zum Anmelden.",
    label_new_pin: "Neue PIN", ph_new_pin: "Neue PIN",
    label_repeat_pin: "Neue PIN wiederholen", ph_confirm: "Bestätigen",
    btn_save_pin: "PIN speichern", btn_cancel: "Abbrechen",
    btn_change_pin: "PIN ändern", btn_logout: "Abmelden", hello: "Hallo, {name}",
    tab_home: "Start", tab_results: "Ergebnisse & Tabelle", tab_admin: "Admin",
    tab_upcoming: "Kommende Spiele",
    upcoming_note: "Du kannst deinen Tipp für jedes Spiel im Voraus abgeben.",
    no_upcoming: "Keine kommenden Spiele.",
    leaderboard: "Rangliste", preds_this_match: "Tipps für dieses Spiel",
    general_table: "Gesamttabelle",
    evolution_title: "Punkteverlauf", evo_empty: "Noch keine gewerteten Spiele.",
    evo_caption: "Kumulierte Punkte · X-Achse = gespielte Spiele (der Reihe nach)",
    evo_progress: "{j}/{m} gespielt",
    evo_left: "noch {n}",
    ph_group: "Gruppen", ph_r32: "Sechzehntel", ph_r16: "Achtel", ph_qf: "Viertel", ph_sf: "Halbfinale", ph_third: "Platz 3", ph_final: "Finale",
    scoring_title: "Punktevergabe", scoring_exact: "Exaktes Ergebnis",
    scoring_result: "Nur Tendenz (Sieg / Unentschieden / Niederlage)", scoring_miss: "Daneben",
    admin: "Admin",
    admin_note: "Aktionen durch Admin-PIN geschützt.", admin_pin_label: "Admin-PIN:",
    load_result: "Echtes Ergebnis eintragen",
    admin_pin_title: "PIN eines Teilnehmers ändern", admin_pin_force: "Änderung beim ersten Login erzwingen",
    enter_pred_for: "Tipp von jemandem eintragen (per Chat geschickt)",
    sync: "Synchronisieren", resync: "Kalender und Ergebnisse neu synchronisieren", save: "Speichern",
    footer: "Interne Nutzung, ohne Gewinnabsicht. Ergebnisdaten aus öffentlicher Quelle.",
    loading: "Laden…", next_match: "Nächstes Spiel",
    st_final: "Beendet", st_open: "Offen", st_closed: "Geschlossen",
    st_live: "Live", in_play_title: "Laufendes Spiel",
    vs: "vs", center_mx: "(Mexiko-Zeit)", closes_in: "Schließt in {t}", closed_clock: "⏱ Geschlossen",
    closes_note: "Tipps schließen 1 Minute vor Anpfiff.",
    pm_label: "Polymarket", pm_draw: "Unentschieden", pm_hint: "Vom Markt implizierte Wahrscheinlichkeit",
    final_result: "Endergebnis:", your_pred: "Dein Tipp:",
    closed_no_pred: "Geschlossen. Du hast keinen Tipp abgegeben.",
    send: "Abschicken", update: "Aktualisieren", complete_score: "Ergebnis eingeben",
    pred_saved: "Tipp gespeichert", result_saved: "Ergebnis gespeichert",
    col_num: "#", col_participant: "Teilnehmer", col_pts: "Pkt", col_pred: "Tipp",
    col_exact: "Exakt", col_result: "Tendenz", col_played: "Sp.",
    no_matches: "Noch keine Spiele geladen.", no_finished: "Noch keine beendeten Spiele.",
    tag_exact: "exakt", tag_result: "Tendenz",
    pin_updated: "PIN aktualisiert", pins_mismatch: "PINs stimmen nicht überein.",
    need_name_pin: "Wähle deinen Namen und gib deine PIN ein.",
    syncing: "Synchronisieren…", sync_summary: "Kalender: {cal} · Neue Ergebnisse: {n}",
    err_bad_login: "Falscher Name oder PIN", err_bad_current_pin: "Falscher Name oder aktuelle PIN",
    err_bad_identity: "Falsche Identität oder PIN", err_too_many: "Zu viele Versuche. Später erneut versuchen",
    err_pred_closed: "Tipps für dieses Spiel geschlossen", err_bad_score: "Ungültiges Ergebnis",
    err_bad_admin_pin: "Falsche PIN", err_pin_same: "Die neue PIN muss sich von der aktuellen unterscheiden",
    err_pin_short: "Die neue PIN muss mindestens {n} Zeichen haben", err_generic: "Fehler",
  },
};

let lang = localStorage.getItem("q_lang");
if (!I18N[lang]) lang = (navigator.language || "es").slice(0, 2);
if (!I18N[lang]) lang = "es";

function t(key, vars) {
  let s = (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  if (vars) for (const k in vars) s = s.replaceAll("{" + k + "}", vars[k]);
  return s;
}

// Traduce los mensajes de error que devuelve el backend (en español).
const SERVER_ERR = {
  "Nombre o PIN incorrecto": "err_bad_login",
  "Nombre o PIN actual incorrecto": "err_bad_current_pin",
  "Identidad o PIN incorrecto": "err_bad_identity",
  "Demasiados intentos. Intenta mas tarde": "err_too_many",
  "Pronosticos cerrados para este partido": "err_pred_closed",
  "Marcador invalido": "err_bad_score",
  "PIN incorrecto": "err_bad_admin_pin",
  "El nuevo PIN debe ser distinto al actual": "err_pin_same",
  "Error": "err_generic",
};
function trErr(msg) {
  if (!msg) return t("err_generic");
  if (SERVER_ERR[msg]) return t(SERVER_ERR[msg]);
  const m = msg.match(/al menos (\d+)/);
  if (m) return t("err_pin_short", { n: m[1] });
  return msg;
}

function applyStaticI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((e) => { e.textContent = t(e.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((e) => { e.placeholder = t(e.dataset.i18nPh); });
  document.querySelectorAll(".langb").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  if (me) $("#hola").textContent = t("hello", { name: me });
}

// ====================== Tema claro / oscuro ======================
let theme = localStorage.getItem("q_theme");
if (theme !== "dark" && theme !== "light") {
  theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
}
function applyTheme() {
  document.body.classList.toggle("dark", theme === "dark");
  document.querySelectorAll(".themeb").forEach((b) => { b.textContent = theme === "dark" ? "☀️" : "🌙"; });
}
function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("q_theme", theme);
  applyTheme();
}

function setLang(l) {
  if (!I18N[l]) return;
  lang = l;
  localStorage.setItem("q_lang", l);
  applyStaticI18n();
  if (STATE && !$("#app-screen").classList.contains("hidden")) render();
}

// ====================== Banderas (emoji Unicode, sin assets oficiales) ======================
const FLAG = {
  "Canadá": "🇨🇦", "Bosnia y Herzegovina": "🇧🇦", "Estados Unidos": "🇺🇸",
  "México": "🇲🇽", "Brasil": "🇧🇷", "España": "🇪🇸", "Francia": "🇫🇷",
  "Alemania": "🇩🇪", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
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
const flag = (x) => FLAG[x] || "⚽";

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
  let el2 = $(".toast");
  if (!el2) { el2 = el("div", "toast"); document.body.appendChild(el2); }
  el2.textContent = msg;
  el2.classList.add("show");
  setTimeout(() => el2.classList.remove("show"), 2200);
}

// El backend (API) vive en Railway. Si la página se sirve desde el propio backend
// se usan rutas relativas; en cualquier otro origen (GitHub Pages, copia local
// hosteada, etc.) se apunta al backend de Railway.
const RAILWAY_API = "https://web-production-a57dc.up.railway.app";
const API_BASE = location.hostname === "web-production-a57dc.up.railway.app" ? "" : RAILWAY_API;

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
  $("#change-title").textContent = forced ? t("change_title_create") : t("change_title_change");
  $("#change-sub").textContent = forced ? t("change_sub_forced") : t("change_sub_normal");
  $("#change-cancel").classList.toggle("hidden", forced);
}
function showApp() {
  show("app-screen");
  $("#hola").textContent = t("hello", { name: me });
  load();
  if (!pollTimer) pollTimer = setInterval(load, 30000);
}

// ============ Auth ============
async function fillNombres() {
  try {
    const st = await api("/api/state");
    const sel = $("#login-nombre");
    if (sel.options.length <= 1) {
      st.participantes.forEach((p) => sel.appendChild(new Option(p, p)));
    }
    $("#site-name").textContent = st.site_name;
    $("#login-title").textContent = st.site_name;
    document.title = st.site_name;
  } catch (e) { /* reintenta al interactuar */ }
}

document.querySelectorAll(".langb").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang));
});
document.querySelectorAll(".themeb").forEach((b) => {
  b.addEventListener("click", toggleTheme);
});

$("#login-btn").addEventListener("click", async () => {
  const nombre = $("#login-nombre").value;
  const pin = $("#login-pin").value;
  if (!nombre || !pin) { $("#login-error").textContent = t("need_name_pin"); return; }
  try {
    const r = await api("/api/login", { participante: nombre, pin });
    saveSession(nombre, pin);
    if (r.must_change) { sessionStorage.setItem("q_must", "1"); showChange(true); }
    else { sessionStorage.removeItem("q_must"); showApp(); }
  } catch (e) { $("#login-error").textContent = trErr(e.message); }
});
$("#login-pin").addEventListener("keydown", (e) => { if (e.key === "Enter") $("#login-btn").click(); });

$("#change-btn").addEventListener("click", async () => {
  const nuevo = $("#new-pin").value, nuevo2 = $("#new-pin2").value;
  if (nuevo !== nuevo2) { $("#change-error").textContent = t("pins_mismatch"); return; }
  try {
    await api("/api/cambiar-pin", { participante: me, pin: sessionPin, nuevo });
    saveSession(me, nuevo);
    sessionStorage.removeItem("q_must");
    toast(t("pin_updated"));
    showApp();
  } catch (e) { $("#change-error").textContent = trErr(e.message); }
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

// ============ App ============
async function load() {
  if ($("#app-screen").classList.contains("hidden")) return;
  try { STATE = await api("/api/state"); render(); } catch (e) { console.error(e); }
}

function render() {
  $("#site-name").textContent = STATE.site_name;
  document.title = STATE.site_name;
  renderEnJuego();
  renderProximo();
  renderLeaderboard();
  renderGridProximo();
  renderProximos();
  renderTablaFull();
  renderEvolucion();
  renderResultados();
  renderAdminSelects();
}

function predByPartido(pid) {
  const m = {};
  STATE.pronosticos.filter((p) => p.partido_id === pid).forEach((p) => (m[p.participante] = p));
  return m;
}

// Fecha y hora de inicio en zona horaria de México, derivadas del kickoff real
// (la misma base que el cierre/countdown), para que siempre sean consistentes.
const LOCALE = { es: "es-MX", en: "en-US", ru: "ru-RU", de: "de-DE" };
function fmtKickoffMX(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  const loc = LOCALE[lang] || "es-MX";
  const opts = { timeZone: "America/Mexico_City" };
  try {
    const date = new Intl.DateTimeFormat(loc, { ...opts, weekday: "short", day: "numeric", month: "short" }).format(d);
    const time = new Intl.DateTimeFormat(loc, { ...opts, hour: "2-digit", minute: "2-digit", hour12: false }).format(d);
    return { date, time };
  } catch (e) { return null; }
}

// Barra 1/X/2 con las probabilidades implícitas de Polymarket (si hay datos).
// Las 3 probabilidades se normalizan a 100% para el ancho de la barra.
function pmBar(p) {
  const l = p.pm_local, d = p.pm_empate, v = p.pm_visitante;
  if (l == null || d == null || v == null) return "";
  const sum = l + d + v;
  if (!(sum > 0)) return "";
  let pl = Math.round((l / sum) * 100);
  let pd = Math.round((d / sum) * 100);
  let pv = Math.round((v / sum) * 100);
  const diff = 100 - (pl + pd + pv); // corrige el redondeo en el segmento mayor
  if (diff) {
    if (pl >= pd && pl >= pv) pl += diff;
    else if (pv >= pd) pv += diff;
    else pd += diff;
  }
  return `
    <div class="pm" title="${esc(t("pm_hint"))}">
      <div class="pm-h">📊 ${t("pm_label")}</div>
      <div class="pm-bar">
        <span class="pm-seg pm-l" style="width:${pl}%">${pl}%</span>
        <span class="pm-seg pm-d" style="width:${pd}%">${pd}%</span>
        <span class="pm-seg pm-v" style="width:${pv}%">${pv}%</span>
      </div>
      <div class="pm-legend">
        <span><i class="pm-sw pm-l"></i>${flag(p.local)} ${esc(p.local)} ${pl}%</span>
        <span><i class="pm-sw pm-d"></i>${t("pm_draw")} ${pd}%</span>
        <span><i class="pm-sw pm-v"></i>${flag(p.visitante)} ${esc(p.visitante)} ${pv}%</span>
      </div>
    </div>`;
}

function renderProximo() {
  const box = $("#proximo");
  const p = STATE.proximo;
  if (!p) { box.textContent = t("no_matches"); return; }

  const abierto = p.abierto;
  const finalizado = p.estado === "finalizado";
  const mine = predByPartido(p.id)[me];
  const badge = finalizado
    ? `<span class="badge closed">${t("st_final")}</span>`
    : abierto ? `<span class="badge open">${t("st_open")}</span>`
              : `<span class="badge closed">${t("st_closed")}</span>`;
  const real = finalizado ? `${p.res_local} – ${p.res_visitante}` : "";

  const mx = fmtKickoffMX(p.kickoff_utc);
  const fechaTxt = mx ? mx.date : (p.fecha || "");
  const horaTxt = mx ? `${mx.time} ${t("center_mx")}`
                     : (p.hora_centro_mx ? `${p.hora_centro_mx} ${t("center_mx")}` : "");
  const notaCierre = finalizado ? "" : `<div class="muted closes-note">${t("closes_note")}</div>`;

  box.innerHTML = `
    <div class="match-head"><strong>${t("next_match")}</strong>${badge}</div>
    <div class="teams">
      <div class="team"><div class="flag">${flag(p.local)}</div><div class="name">${esc(p.local)}</div></div>
      <div class="vs">${finalizado ? real : t("vs")}</div>
      <div class="team"><div class="flag">${flag(p.visitante)}</div><div class="name">${esc(p.visitante)}</div></div>
    </div>
    <div class="meta">${[fechaTxt, horaTxt, p.sede].filter(Boolean).map(esc).join(" · ")}</div>
    <div class="countdown" id="cd"></div>
    ${notaCierre}
    ${finalizado ? "" : pmBar(p)}
    <div id="predict-area"></div>`;

  const area = $("#predict-area");
  if (finalizado) {
    area.innerHTML = `<p class="muted" style="text-align:center">${t("final_result")} <strong>${real}</strong></p>`;
  } else if (!abierto) {
    area.innerHTML = mine
      ? `<p class="muted" style="text-align:center">${t("your_pred")} <strong>${mine.local} – ${mine.visitante}</strong></p>`
      : `<p class="muted" style="text-align:center">${t("closed_no_pred")}</p>`;
  } else {
    area.innerHTML = `
      <div class="predict">
        <input type="number" min="0" max="20" class="score" id="pl" value="${mine ? mine.local : ""}" />
        <span>–</span>
        <input type="number" min="0" max="20" class="score" id="pv" value="${mine ? mine.visitante : ""}" />
        <button id="send-pred">${mine ? t("update") : t("send")}</button>
      </div>`;
    $("#send-pred").addEventListener("click", () => enviarPronostico(p.id));
  }
  startCountdown(p);
}

async function enviarPronostico(pid) {
  const local = $("#pl").value, visitante = $("#pv").value;
  if (local === "" || visitante === "") { toast(t("complete_score")); return; }
  try {
    await api("/api/prediccion", { partido_id: pid, participante: me, pin: sessionPin, local, visitante });
    toast(t("pred_saved"));
    await load();
  } catch (e) {
    toast(trErr(e.message));
    if (/PIN|identidad|identity|неверн|falsch/i.test(e.message)) { clearSession(); showLogin(); }
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
    if (diff <= 0) { cd.textContent = t("closed_clock"); clearInterval(countdownTimer); return; }
    const h = Math.floor(diff / 3.6e6);
    const m = Math.floor((diff % 3.6e6) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    cd.textContent = t("closes_in", { t: `${h > 0 ? h + "h " : ""}${m}m ${s}s` });
  };
  tick();
  countdownTimer = setInterval(tick, 1000);
}

function renderLeaderboard() {
  const tb = $("#leaderboard");
  tb.innerHTML = `<tr><th>${t("col_num")}</th><th>${t("col_participant")}</th><th>${t("col_pts")}</th></tr>`;
  STATE.tabla.slice(0, 10).forEach((r) => {
    const tr = el("tr", r.participante === me ? "me" : "");
    tr.innerHTML = `<td>${r.posicion}</td><td>${esc(r.participante)}</td><td class="pts">${r.puntos}</td>`;
    tb.appendChild(tr);
  });
}

// Partido(s) en juego: muestra las proyecciones de todos (los pronósticos ya están
// cerrados, así que son visibles). Excluye el que ya se muestra como "Próximo".
function renderEnJuego() {
  const cont = $("#en-juego");
  cont.innerHTML = "";
  const proxId = STATE.proximo ? STATE.proximo.id : null;
  const live = STATE.partidos.filter((p) => p.estado === "en_juego" && p.id !== proxId);
  live.forEach((p) => {
    const preds = predByPartido(p.id);
    const mx = fmtKickoffMX(p.kickoff_utc);
    const when = [mx ? `${mx.time} ${t("center_mx")}` : (p.hora_centro_mx || ""), p.sede]
      .filter(Boolean).map(esc).join(" · ");
    const score = (p.res_local != null && p.res_visitante != null)
      ? `${p.res_local} – ${p.res_visitante}` : t("vs");
    let rows = "";
    STATE.participantes.forEach((nom) => {
      const pr = preds[nom];
      const marc = pr ? `${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}` : "—";
      rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td><td>${marc}</td></tr>`;
    });
    const card = el("div", "card");
    card.innerHTML = `
      <div class="match-head"><strong>${t("in_play_title")}</strong><span class="badge live">${t("st_live")}</span></div>
      <div class="teams" style="margin:8px 0">
        <div class="team"><div class="flag">${flag(p.local)}</div><div class="name">${esc(p.local)}</div></div>
        <div class="vs">${score}</div>
        <div class="team"><div class="flag">${flag(p.visitante)}</div><div class="name">${esc(p.visitante)}</div></div>
      </div>
      <div class="muted" style="margin-bottom:8px">${when}</div>
      <table class="grid"><tr><th>${t("col_participant")}</th><th>${t("col_pred")}</th></tr>${rows}</table>`;
    cont.appendChild(card);
  });
}

function renderGridProximo() {
  const tb = $("#grid-proximo");
  const p = STATE.proximo;
  if (!p) { tb.innerHTML = ""; return; }
  const preds = predByPartido(p.id);
  tb.innerHTML = `<tr><th>${t("col_participant")}</th><th>${t("col_pred")}</th></tr>`;
  STATE.participantes.forEach((nom) => {
    const pr = preds[nom];
    const marc = pr ? `${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}` : "—";
    const tr = el("tr", nom === me ? "me" : "");
    tr.innerHTML = `<td>${esc(nom)}</td><td>${marc}</td>`;
    tb.appendChild(tr);
  });
}

// ---- Próximos partidos (calendario, solo equipos definidos, agrupado por fecha) ----
let upMatches = [];
// Cruces de eliminatoria aún sin definir (placeholders): "Winner...", "Runner-up...", "3rd...", "Loser...".
const isPlaceholder = (name) => /^(Winner|Runner-up|Loser|3rd)\b/i.test(name || "");

function renderProximos() {
  const cont = $("#proximos-list");
  cont.innerHTML = "";
  upMatches = STATE.partidos
    .filter((p) => p.estado !== "finalizado" && !isPlaceholder(p.local) && !isPlaceholder(p.visitante))
    .sort((a, b) => {
      const ka = a.kickoff_utc || "9999", kb = b.kickoff_utc || "9999";
      return ka < kb ? -1 : ka > kb ? 1 : 0;
    });
  if (!upMatches.length) { cont.appendChild(el("div", "card muted", t("no_upcoming"))); return; }

  let lastDate = null;
  upMatches.forEach((p, i) => {
    const mine = predByPartido(p.id)[me];
    const mx = fmtKickoffMX(p.kickoff_utc);
    const dkey = mx ? mx.date : (p.fecha || "—");
    if (dkey !== lastDate) {
      lastDate = dkey;
      cont.appendChild(el("div", "up-date", esc(dkey)));
    }
    const hora = mx ? `${mx.time} ${t("center_mx")}` : (p.hora_centro_mx || "");
    const badge = p.abierto
      ? `<span class="badge open">${t("st_open")}</span>`
      : `<span class="badge closed">${t("st_closed")}</span>`;

    let form;
    if (p.abierto) {
      form = `<div class="predict">
        <input type="number" min="0" max="20" class="score" id="upl${i}" value="${mine ? mine.local : ""}" />
        <span>–</span>
        <input type="number" min="0" max="20" class="score" id="upv${i}" value="${mine ? mine.visitante : ""}" />
        <button class="up-save" data-i="${i}">${mine ? t("update") : t("send")}</button>
      </div>`;
    } else {
      form = mine
        ? `<p class="muted" style="text-align:center">${t("your_pred")} <strong>${mine.local} – ${mine.visitante}</strong></p>`
        : `<p class="muted" style="text-align:center">${t("st_closed")}</p>`;
    }

    const card = el("div", "card up-card");
    card.innerHTML = `
      <div class="up-head">
        <div class="up-teams">${flag(p.local)} ${esc(p.local)} <span class="vs">${t("vs")}</span> ${esc(p.visitante)} ${flag(p.visitante)}</div>
        ${badge}
      </div>
      <div class="muted up-when">${[hora, p.sede].filter(Boolean).map(esc).join(" · ")}</div>
      ${pmBar(p)}
      ${form}`;
    cont.appendChild(card);
  });

  cont.querySelectorAll(".up-save").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.i, p = upMatches[i];
      if (p) saveUpPred(p.id, $("#upl" + i).value, $("#upv" + i).value);
    });
  });
}

async function saveUpPred(pid, local, visitante) {
  if (local === "" || visitante === "") { toast(t("complete_score")); return; }
  try {
    await api("/api/prediccion", { partido_id: pid, participante: me, pin: sessionPin, local, visitante });
    toast(t("pred_saved"));
    await load();
  } catch (e) {
    toast(trErr(e.message));
    if (/PIN|identidad|identity|неверн|falsch/i.test(e.message)) { clearSession(); showLogin(); }
  }
}

function renderTablaFull() {
  const tb = $("#tabla-full");
  tb.innerHTML = `<tr><th>${t("col_num")}</th><th>${t("col_participant")}</th><th>${t("col_pts")}</th>` +
    `<th>${t("col_exact")}</th><th>${t("col_result")}</th><th>${t("col_played")}</th></tr>`;
  STATE.tabla.forEach((r) => {
    const tr = el("tr", r.participante === me ? "me" : "");
    tr.innerHTML = `<td>${r.posicion}</td><td>${esc(r.participante)}</td>
      <td class="pts">${r.puntos}</td><td>${r.exactos}</td><td>${r.resultados}</td><td>${r.jugados}</td>`;
    tb.appendChild(tr);
  });
}

// Colores bien distinguibles para hasta ~11 líneas (paleta categórica, legible en
// claro y oscuro; sin amarillo claro que se perdía).
const CHART_COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
  "#8c564b", "#e377c2", "#17becf", "#bcbd22", "#7f7f7f", "#b0234a"];

// Fase de un partido según su id (devuelve la clave i18n).
function faseDe(id) {
  if (!/Winner|Runner-up|Loser|3rd/i.test(id)) return "ph_group";   // dos países = grupos
  if (/Group/i.test(id)) return "ph_r32";                            // posiciones de grupo = 16avos
  if (/^Loser/i.test(id)) return "ph_third";
  const nums = (id.match(/Match (\d+)/g) || []).map((s) => +s.slice(6));
  const mx = Math.max(0, ...nums);
  if (mx >= 101) return "ph_final";
  if (mx >= 97) return "ph_sf";
  if (mx >= 89) return "ph_qf";
  if (mx >= 73) return "ph_r16";
  return "ph_group";
}

function niceMax(max) {
  const raw = Math.max(1, max) / 4;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10) * mag;
  return { step, top: Math.ceil(Math.max(1, max) / step) * step };
}

// Gráfica de líneas: puntos acumulados de cada participante, partido a partido.
// Eje X = partidos jugados (línea sólida) + por jugar (proyección punteada), para
// ver cuánto falta. El nombre de cada quien va al final de su línea.
function renderEvolucion() {
  const box = $("#evolucion");
  if (!box) return;
  const isPh = (p) => isPlaceholder(p.local) || isPlaceholder(p.visitante);
  const hasPred = (p) => STATE.pronosticos.some((pr) => pr.partido_id === p.id);
  // Secuencia: finalizados con pronóstico (cuentan) + próximos reales (no placeholders).
  const seq = STATE.partidos
    .filter((p) => (p.estado === "finalizado" && p.res_local != null && p.res_visitante != null && hasPred(p))
                || (p.estado !== "finalizado" && !isPh(p)))
    .sort((a, b) => ((a.kickoff_utc || "") < (b.kickoff_utc || "") ? -1 : 1));
  const pj = seq.filter((p) => p.estado === "finalizado").length;  // partidos ya jugados
  if (!pj) {
    box.innerHTML = `<p class="muted" style="text-align:center">${t("evo_empty")}</p>`;
    return;
  }
  const parts = STATE.participantes;
  const cum = {};
  parts.forEach((nom) => (cum[nom] = [0]));
  seq.forEach((p) => {
    const preds = p.estado === "finalizado" ? predByPartido(p.id) : {};
    parts.forEach((nom) => {
      const pr = preds[nom];
      const pts = pr ? (puntos(pr.local, pr.visitante, p.res_local, p.res_visitante) || 0) : 0;
      cum[nom].push(cum[nom][cum[nom].length - 1] + pts);
    });
  });

  const M = seq.length;                          // total (jugados + por jugar)
  const D = pj;                                  // dominio del eje X = solo lo jugado (zoom)
  const { step, top } = niceMax(Math.max(7, ...parts.map((nom) => cum[nom][pj])));
  const W = 380, H = 240, ml = 24, mr = 72, mt = 12, mb = 24;
  const pw = W - ml - mr, ph = H - mt - mb;
  const X = (i) => ml + (D ? (i / D) * pw : 0);
  const Y = (v) => mt + ph - (v / top) * ph;

  let grid = "";
  for (let v = 0; v <= top; v += step) {
    const y = Y(v).toFixed(1);
    grid += `<line x1="${ml}" y1="${y}" x2="${W - mr}" y2="${y}" class="evo-grid"/>`;
    grid += `<text x="${ml - 3}" y="${(Y(v) + 3).toFixed(1)}" class="evo-ylab">${v}</text>`;
  }
  const xstep = Math.max(1, Math.ceil(D / 6));
  let xlab = "";
  for (let i = xstep; i <= D; i += xstep) xlab += `<text x="${X(i).toFixed(1)}" y="${H - 7}" class="evo-xlab">${i}</text>`;

  // Líneas verticales de cambio de fase (dentro de lo jugado), con el nombre rotado.
  let phases = "";
  let prevFase = null;
  for (let k = 1; k <= D; k++) {
    const f = faseDe(seq[k - 1].id);
    if (f !== prevFase) {
      const xb = X(k - 1);
      if (k > 1) phases += `<line x1="${xb.toFixed(1)}" y1="${mt}" x2="${xb.toFixed(1)}" y2="${(mt + ph).toFixed(1)}" class="evo-phase"/>`;
      phases += `<text transform="rotate(-90 ${xb.toFixed(1)} ${(mt + ph - 4).toFixed(1)})" x="${xb.toFixed(1)}" y="${(mt + ph - 4).toFixed(1)}" dy="9" class="evo-phaselab">${esc(t(f))}</text>`;
      prevFase = f;
    }
  }

  let lines = "";
  parts.forEach((nom, idx) => {
    const color = CHART_COLORS[idx % CHART_COLORS.length];
    const solid = cum[nom].slice(0, pj + 1).map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
    lines += `<polyline points="${solid}" fill="none" stroke="${color}" class="evo-line ${nom === me ? "evo-me" : ""}"/>`;
    lines += `<circle cx="${X(pj).toFixed(1)}" cy="${Y(cum[nom][pj]).toFixed(1)}" r="${nom === me ? 3.5 : 2.4}" fill="${color}"/>`;
  });

  // Etiquetas de nombre al final de cada línea (borde derecho), separadas para no encimarse.
  const lab = parts.map((nom, idx) => ({
    nom, color: CHART_COLORS[idx % CHART_COLORS.length], total: cum[nom][pj], y: Y(cum[nom][pj]),
  })).sort((a, b) => a.y - b.y);
  const gap = 11, loLim = mt + 4, hiLim = H - 4;
  for (let i = 1; i < lab.length; i++) if (lab[i].y - lab[i - 1].y < gap) lab[i].y = lab[i - 1].y + gap;
  if (lab[lab.length - 1].y > hiLim) {            // si topan abajo, apila hacia arriba
    lab[lab.length - 1].y = hiLim;
    for (let i = lab.length - 2; i >= 0; i--) if (lab[i].y > lab[i + 1].y - gap) lab[i].y = lab[i + 1].y - gap;
  }
  if (lab[0].y < loLim) lab[0].y = loLim;
  const endlabs = lab.map((L) =>
    `<text x="${(X(pj) + 5).toFixed(1)}" y="${(L.y + 3).toFixed(1)}" fill="${L.color}" class="evo-endlab ${L.nom === me ? "evo-endlab-me" : ""}">${esc(L.nom)} ${L.total}</text>`
  ).join("");

  const svg = `<svg viewBox="0 0 ${W} ${H}" class="evo-svg" preserveAspectRatio="xMidYMid meet" role="img">
    ${grid}
    <line x1="${ml}" y1="${mt}" x2="${ml}" y2="${mt + ph}" class="evo-axis"/>
    <line x1="${ml}" y1="${mt + ph}" x2="${W - mr}" y2="${mt + ph}" class="evo-axis"/>
    ${phases}${lines}${endlabs}${xlab}
  </svg>`;

  // Lo que falta, al margen: barra de progreso del torneo.
  const restantes = Math.max(0, M - pj);
  const pct = M ? Math.round((pj / M) * 100) : 0;
  const bar = `<div class="evo-progress">
      <div class="evo-bar"><span style="width:${pct}%"></span></div>
      <div class="muted evo-cap">${t("evo_progress", { j: pj, m: M })} · ${t("evo_left", { n: restantes })}</div>
    </div>`;
  box.innerHTML = svg + bar;
}

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
  if (!jugados.length) { cont.appendChild(el("div", "card muted", t("no_finished"))); return; }
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
      const tag = pts === 7 ? `<span class="tag exact">${t("tag_exact")}</span>`
                : pts === 2 ? `<span class="tag res">${t("tag_result")}</span>` : "";
      rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td>
        <td>${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)} ${tag}</td><td class="pts">${pts}</td></tr>`;
    });
    const mx = fmtKickoffMX(p.kickoff_utc);
    const dt = mx ? `${mx.date} · ${mx.time} ${t("center_mx")}` : (p.fecha || "");
    card.innerHTML = `
      <h2>${flag(p.local)} ${esc(p.local)} ${p.res_local} – ${p.res_visitante} ${esc(p.visitante)} ${flag(p.visitante)}</h2>
      <div class="muted" style="margin-bottom:8px">${[dt, p.sede].filter(Boolean).map(esc).join(" · ")}</div>
      <table class="grid"><tr><th>${t("col_participant")}</th><th>${t("col_pred")}</th><th>${t("col_pts")}</th></tr>${rows}</table>`;
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
  ["#ar-partido", "#ap-partido"].forEach((id) => fillSelect($(id), partidos, (p) => p.label));
  const personas = STATE.participantes.map((p) => ({ value: p, label: p }));
  fillSelect($("#ap-participante"), personas, (p) => p.label);
  fillSelect($("#cp-participante"), personas, (p) => p.label);
}

$("#ar-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/resultado", {
      pin: $("#admin-pin").value, partido_id: $("#ar-partido").value,
      local: $("#ar-local").value, visitante: $("#ar-visitante").value,
    });
    toast(t("result_saved")); await load();
  } catch (e) { toast(trErr(e.message)); }
});
$("#ap-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/prediccion", {
      pin: $("#admin-pin").value, partido_id: $("#ap-partido").value,
      participante: $("#ap-participante").value,
      local: $("#ap-local").value, visitante: $("#ap-visitante").value,
    });
    toast(t("pred_saved")); await load();
  } catch (e) { toast(trErr(e.message)); }
});
$("#cp-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/cambiar-pin", {
      pin: $("#admin-pin").value, participante: $("#cp-participante").value,
      nuevo: $("#cp-nuevo").value, forzar_cambio: $("#cp-forzar").checked,
    });
    $("#cp-nuevo").value = ""; $("#cp-forzar").checked = false;
    toast(t("pin_updated"));
  } catch (e) { toast(trErr(e.message)); }
});
$("#sync-btn").addEventListener("click", async () => {
  $("#admin-msg").textContent = t("syncing");
  try {
    const r = await api("/api/admin/sync", { pin: $("#admin-pin").value });
    $("#admin-msg").textContent = t("sync_summary", {
      cal: (r.calendario ?? r.calendario_error ?? "—"), n: (r.resultados || []).length,
    });
    await load();
  } catch (e) { $("#admin-msg").textContent = trErr(e.message); }
});

// ============ Arranque ============
(async function boot() {
  applyTheme();
  applyStaticI18n();
  await fillNombres();
  if (me && sessionPin) {
    if (sessionStorage.getItem("q_must") === "1") showChange(true);
    else showApp();
  } else {
    showLogin();
  }
})();
