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
    nav_home: "Inicio", nav_upcoming: "Próximos", nav_results: "Resultados", nav_admin: "Admin",
    upcoming_note: "Puedes registrar tu pronóstico de cualquier partido por adelantado.",
    no_upcoming: "No hay próximos partidos.",
    leaderboard: "Clasificación", preds_this_match: "Pronósticos de este partido",
    pred_ready: "✓ listo", pred_hidden_note: "Los pronósticos de los demás se revelan al cierre (1 min antes del inicio).",
    general_table: "Tabla general",
    evolution_title: "Evolución de puntos", evo_empty: "Aún no hay partidos puntuados.",
    evo_caption: "Puntos acumulados · eje X = partidos jugados (en orden)",
    evo_progress: "{j}/{m} jugados",
    evo_left: "faltan {n}",
    ph_group: "Grupos", ph_r32: "Dieciseisavos", ph_r16: "Octavos", ph_qf: "Cuartos", ph_sf: "Semis", ph_third: "3.er lugar", ph_final: "Final",
    nav_winners: "Ganadores", winners_title: "🏆 Salón de campeones",
    winners_empty: "Aún no termina ninguna fase. Cuando concluya, aquí brillarán los campeones. 🏆",
    champ_label: "Campeón · {phase}", champ_tie_label: "Campeones · {phase}", champ_pts: "{pts} puntos",
    insp_single: "🏆 ¡{name}, campeón de {phase}! Con {pts} puntos demostraste que leer el fútbol también es un arte. Disfruta la cima… y que te impulse: lo mejor del torneo apenas comienza. 💪",
    insp_tie: "🏆 ¡Empate en la cima de {phase}! {names} comparten la corona con {pts} puntos cada uno. La gloria sabe mejor cuando hay con quién disputarla. 🔥",
    stage_table_h: "Tabla de esta etapa", stage_table_hint: "Solo cuenta los puntos ganados en esta fase.",
    stage_none: "Esta etapa aún no tiene partidos finalizados.",
    champ_in_progress: "En curso: {phase}", champ_leader_now: "Líder provisional: {name} ({pts})",
    sc_group: "Fase de grupos", sc_ko: "Dieciseisavos en adelante",
    sc_exact_w: "exacto", sc_result_w: "resultado",
    sc_note: "El cambio de puntos aplica solo a las nuevas etapas; lo ya jugado en la fase de grupos conserva su puntuación.",
    seg_total: "Total", seg_stage: "Esta etapa", badge_new: "NUEVO",
    who_advances: "¿Quién avanza?", who_advances_pen: "¿Quién avanzó (penales)?",
    pick_advances: "Elige quién avanza (empate en eliminatoria)",
    pens_short: "por penales", opt_pick: "— elige —",
    banner_review: "Resultado(s) en revisión: falta confirmar el ganador de penales. Aún no cuentan para puntos.",
    st_review: "En revisión",
    review_note: "Resultado sin verificar (falta confirmar el ganador de penales). No cuenta para puntos todavía.",
    saved_review: "Guardado · queda EN REVISIÓN (falta el ganador de penales)",
    scoring_title: "Puntuación", scoring_exact: "Marcador exacto (5 + 2 de resultado)",
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
    nav_home: "Home", nav_upcoming: "Upcoming", nav_results: "Results", nav_admin: "Admin",
    upcoming_note: "You can submit your prediction for any match in advance.",
    no_upcoming: "No upcoming matches.",
    leaderboard: "Leaderboard", preds_this_match: "Predictions for this match",
    pred_ready: "✓ in", pred_hidden_note: "Others' predictions are revealed at lock (1 min before kickoff).",
    general_table: "Standings",
    evolution_title: "Points over time", evo_empty: "No scored matches yet.",
    evo_caption: "Cumulative points · X axis = matches played (in order)",
    evo_progress: "{j}/{m} played",
    evo_left: "{n} left",
    ph_group: "Groups", ph_r32: "Round of 32", ph_r16: "Round of 16", ph_qf: "Quarters", ph_sf: "Semis", ph_third: "3rd place", ph_final: "Final",
    nav_winners: "Winners", winners_title: "🏆 Hall of Champions",
    winners_empty: "No phase has finished yet. When one wraps up, the champions will shine here. 🏆",
    champ_label: "Champion · {phase}", champ_tie_label: "Champions · {phase}", champ_pts: "{pts} points",
    insp_single: "🏆 {name}, champion of the {phase}! With {pts} points you proved that reading football is an art. Enjoy the top… and let it fuel you: the best of the tournament is just beginning. 💪",
    insp_tie: "🏆 A tie at the top of the {phase}! {names} share the crown with {pts} points each. Glory tastes better when it's contested. 🔥",
    stage_table_h: "This stage's table", stage_table_hint: "Counts only the points earned in this phase.",
    stage_none: "This stage has no finished matches yet.",
    champ_in_progress: "In progress: {phase}", champ_leader_now: "Current leader: {name} ({pts})",
    sc_group: "Group stage", sc_ko: "Round of 32 onward",
    sc_exact_w: "exact", sc_result_w: "result",
    sc_note: "The points change applies only to the new stages; what was already played in the group stage keeps its scoring.",
    seg_total: "Total", seg_stage: "This stage", badge_new: "NEW",
    who_advances: "Who advances?", who_advances_pen: "Who advanced (pens)?",
    pick_advances: "Pick who advances (knockout draw)",
    pens_short: "on penalties", opt_pick: "— pick —",
    banner_review: "Result(s) under review: penalty winner not confirmed yet. They don't count for points yet.",
    st_review: "Under review",
    review_note: "Unverified result (penalty winner pending). It doesn't count for points yet.",
    saved_review: "Saved · UNDER REVIEW (penalty winner missing)",
    scoring_title: "Scoring", scoring_exact: "Exact score (5 + 2 result)",
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
    nav_home: "Главная", nav_upcoming: "Матчи", nav_results: "Итоги", nav_admin: "Админ",
    upcoming_note: "Вы можете заранее сделать прогноз на любой матч.",
    no_upcoming: "Нет ближайших матчей.",
    leaderboard: "Таблица лидеров", preds_this_match: "Прогнозы на этот матч",
    pred_ready: "✓ готов", pred_hidden_note: "Чужие прогнозы открываются при закрытии (за 1 мин до начала).",
    general_table: "Турнирная таблица",
    evolution_title: "Динамика очков", evo_empty: "Пока нет сыгранных матчей.",
    evo_caption: "Накопленные очки · ось X = сыгранные матчи (по порядку)",
    evo_progress: "{j}/{m} сыграно",
    evo_left: "осталось {n}",
    ph_group: "Группы", ph_r32: "1/16", ph_r16: "1/8", ph_qf: "1/4", ph_sf: "1/2", ph_third: "За 3-е", ph_final: "Финал",
    nav_winners: "Победители", winners_title: "🏆 Зал чемпионов",
    winners_empty: "Ни одна стадия ещё не завершена. Когда это произойдёт, здесь засияют чемпионы. 🏆",
    champ_label: "Чемпион · {phase}", champ_tie_label: "Чемпионы · {phase}", champ_pts: "{pts} очк.",
    insp_single: "🏆 {name}, чемпион стадии «{phase}»! {pts} очков — ты доказал, что читать футбол это искусство. Наслаждайся вершиной… и пусть это вдохновляет: лучшее в турнире только начинается. 💪",
    insp_tie: "🏆 Ничья на вершине «{phase}»! {names} делят корону — по {pts} очков. Слава слаще, когда за неё борются. 🔥",
    stage_table_h: "Таблица этой стадии", stage_table_hint: "Учитываются только очки, набранные на этой стадии.",
    stage_none: "На этой стадии пока нет завершённых матчей.",
    champ_in_progress: "Идёт: {phase}", champ_leader_now: "Текущий лидер: {name} ({pts})",
    sc_group: "Групповой этап", sc_ko: "С 1/16 и далее",
    sc_exact_w: "точный", sc_result_w: "исход",
    sc_note: "Изменение очков касается только новых стадий; уже сыгранный групповой этап сохраняет свою систему.",
    seg_total: "Итого", seg_stage: "Эта стадия", badge_new: "НОВОЕ",
    who_advances: "Кто проходит?", who_advances_pen: "Кто прошёл (пенальти)?",
    pick_advances: "Выбери, кто проходит (ничья в плей-офф)",
    pens_short: "по пенальти", opt_pick: "— выбрать —",
    banner_review: "Результат(ы) на проверке: победитель серии пенальти не подтверждён. Пока не засчитываются.",
    st_review: "На проверке",
    review_note: "Результат не подтверждён (нужен победитель пенальти). Пока не идёт в зачёт.",
    saved_review: "Сохранено · НА ПРОВЕРКЕ (нет победителя пенальти)",
    scoring_title: "Подсчёт очков", scoring_exact: "Точный счёт (5 + 2 за исход)",
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
    nav_home: "Start", nav_upcoming: "Spiele", nav_results: "Tabelle", nav_admin: "Admin",
    upcoming_note: "Du kannst deinen Tipp für jedes Spiel im Voraus abgeben.",
    no_upcoming: "Keine kommenden Spiele.",
    leaderboard: "Rangliste", preds_this_match: "Tipps für dieses Spiel",
    pred_ready: "✓ ok", pred_hidden_note: "Fremde Tipps werden beim Schließen sichtbar (1 Min vor Anpfiff).",
    general_table: "Gesamttabelle",
    evolution_title: "Punkteverlauf", evo_empty: "Noch keine gewerteten Spiele.",
    evo_caption: "Kumulierte Punkte · X-Achse = gespielte Spiele (der Reihe nach)",
    evo_progress: "{j}/{m} gespielt",
    evo_left: "noch {n}",
    ph_group: "Gruppen", ph_r32: "Sechzehntel", ph_r16: "Achtel", ph_qf: "Viertel", ph_sf: "Halbfinale", ph_third: "Platz 3", ph_final: "Finale",
    nav_winners: "Sieger", winners_title: "🏆 Halle der Champions",
    winners_empty: "Noch keine Phase beendet. Sobald eine endet, glänzen hier die Champions. 🏆",
    champ_label: "Champion · {phase}", champ_tie_label: "Champions · {phase}", champ_pts: "{pts} Punkte",
    insp_single: "🏆 {name}, Champion der {phase}! Mit {pts} Punkten hast du bewiesen, dass Fußball lesen eine Kunst ist. Genieße die Spitze… und lass dich antreiben: Das Beste des Turniers fängt gerade erst an. 💪",
    insp_tie: "🏆 Gleichstand an der Spitze der {phase}! {names} teilen sich die Krone mit je {pts} Punkten. Ruhm schmeckt besser, wenn er umkämpft ist. 🔥",
    stage_table_h: "Tabelle dieser Phase", stage_table_hint: "Zählt nur die in dieser Phase erzielten Punkte.",
    stage_none: "Diese Phase hat noch keine beendeten Spiele.",
    champ_in_progress: "Läuft: {phase}", champ_leader_now: "Aktueller Spitzenreiter: {name} ({pts})",
    sc_group: "Gruppenphase", sc_ko: "Ab Sechzehntelfinale",
    sc_exact_w: "exakt", sc_result_w: "Ergebnis",
    sc_note: "Die Punkteänderung gilt nur für die neuen Phasen; die bereits gespielte Gruppenphase behält ihre Wertung.",
    seg_total: "Gesamt", seg_stage: "Diese Phase", badge_new: "NEU",
    who_advances: "Wer kommt weiter?", who_advances_pen: "Wer kam weiter (Elfmeter)?",
    pick_advances: "Wähle, wer weiterkommt (K.-o.-Unentschieden)",
    pens_short: "im Elfmeterschießen", opt_pick: "— wählen —",
    banner_review: "Ergebnis(se) in Prüfung: Elfmeter-Sieger noch nicht bestätigt. Zählen noch nicht.",
    st_review: "In Prüfung",
    review_note: "Unbestätigtes Ergebnis (Elfmeter-Sieger fehlt). Zählt noch nicht für Punkte.",
    saved_review: "Gespeichert · IN PRÜFUNG (Elfmeter-Sieger fehlt)",
    scoring_title: "Punktevergabe", scoring_exact: "Exaktes Ergebnis (5 + 2 Tendenz)",
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

// ====================== Tema (Neón · Day · Black) ======================
const THEMES = ["neon", "day", "black"];
// Siempre arranca en Neón, aunque el usuario haya elegido otro tema antes.
// El switcher sigue funcionando dentro de la sesión; al recargar vuelve a Neón.
let theme = "neon";
function applyTheme() {
  document.body.setAttribute("data-theme", theme);
  document.querySelectorAll(".themeb").forEach((b) => {
    b.classList.toggle("active", b.dataset.theme === theme);
  });
}
function setTheme(name) {
  if (!THEMES.includes(name)) return;
  theme = name;
  localStorage.setItem("q_theme", name);
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
  b.addEventListener("click", () => setTheme(b.dataset.theme));
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

// ---- Sub-pestañas de Resultados (Total / Esta etapa) ----
document.querySelectorAll("#res-seg .seg-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#res-seg .seg-btn").forEach((b) => b.classList.toggle("active", b === btn));
    const which = btn.dataset.res;
    $("#res-total").classList.toggle("hidden", which !== "total");
    $("#res-etapa").classList.toggle("hidden", which !== "etapa");
  });
});

// ---- Indicadores "NUEVO": se ocultan cuando el usuario ya abrió la sección ----
function visto(key) { try { return localStorage.getItem("q_seen_" + key) === "1"; } catch (e) { return false; } }
function aplicarNuevos() {
  const set = (sel, key) => document.querySelectorAll(sel).forEach((e) => { e.style.display = visto(key) ? "none" : ""; });
  set('.navb[data-view="ganadores"] .tab-new', "ganadores");
  set('.navb[data-view="resultados"] .nav-newdot', "resultados");
  set("#res-seg .seg-new", "resultados");
}
function marcarVisto(key) { try { localStorage.setItem("q_seen_" + key, "1"); } catch (e) {} aplicarNuevos(); }

// ---- Navegación inferior (tab bar) ----
document.querySelectorAll(".navb").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".navb").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    btn.classList.add("active");
    $("#view-" + btn.dataset.view).classList.add("active");
    if (btn.dataset.view === "ganadores" || btn.dataset.view === "resultados") marcarVisto(btn.dataset.view);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  renderTablaFase();
  renderGanadores();
  renderEvolucion();
  renderEvolucionFase();
  renderResultados();
  renderRevisionBanner();
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
      ? `<p class="muted" style="text-align:center">${t("your_pred")} <strong>${mine.local} – ${mine.visitante}</strong>${avanzaTag(p, mine.avanza)}</p>`
      : `<p class="muted" style="text-align:center">${t("closed_no_pred")}</p>`;
  } else {
    area.innerHTML = `
      <div class="predict">
        <input type="number" min="0" max="20" class="score" id="pl" value="${mine ? mine.local : ""}" />
        <span>–</span>
        <input type="number" min="0" max="20" class="score" id="pv" value="${mine ? mine.visitante : ""}" />
        <button id="send-pred">${mine ? t("update") : t("send")}</button>
      </div>
      ${avanzaHTML(p, "main", mine && mine.avanza)}`;
    wireAvanza("main", $("#pl"), $("#pv"));
    $("#send-pred").addEventListener("click", () => enviarPronostico(p.id));
  }
  startCountdown(p);
}

async function enviarPronostico(pid) {
  const local = $("#pl").value, visitante = $("#pv").value;
  if (local === "" || visitante === "") { toast(t("complete_score")); return; }
  const avanza = getAvanza("main");
  if (STATE.proximo && faltaAvanza(STATE.proximo, local, visitante, avanza)) { toast(t("pick_advances")); return; }
  try {
    await api("/api/prediccion", { partido_id: pid, participante: me, pin: sessionPin, local, visitante, avanza });
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
      const marc = pr ? `${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}${avanzaTag(p, pr.avanza)}` : "—";
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
  // Antes del cierre (partido aún abierto): cada quien ve solo SU marcador; de los
  // demás solo "✓ listo". Al cerrar/empezar se revelan todos.
  const oculto = !!p.abierto;
  tb.innerHTML = `<tr><th>${t("col_participant")}</th><th>${t("col_pred")}</th></tr>`;
  STATE.participantes.forEach((nom) => {
    const pr = preds[nom];
    let marc;
    if (!pr) marc = "—";
    else if (oculto && nom !== me) marc = `<span class="pred-ready">${t("pred_ready")}</span>`;
    else marc = `${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}${avanzaTag(p, pr.avanza)}`;
    const tr = el("tr", nom === me ? "me" : "");
    tr.innerHTML = `<td>${esc(nom)}</td><td>${marc}</td>`;
    tb.appendChild(tr);
  });
  if (oculto) {
    const note = el("tr", "");
    note.innerHTML = `<td colspan="2" class="muted pred-note">${t("pred_hidden_note")}</td>`;
    tb.appendChild(note);
  }
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
        ? `<p class="muted" style="text-align:center">${t("your_pred")} <strong>${mine.local} – ${mine.visitante}</strong>${avanzaTag(p, mine.avanza)}</p>`
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
      ${form}
      ${p.abierto ? avanzaHTML(p, "up" + i, mine && mine.avanza) : ""}`;
    cont.appendChild(card);
  });

  upMatches.forEach((p, i) => { if (p.abierto && esKO(p)) wireAvanza("up" + i, $("#upl" + i), $("#upv" + i)); });
  cont.querySelectorAll(".up-save").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.i, p = upMatches[i];
      if (p) saveUpPred(p.id, $("#upl" + i).value, $("#upv" + i).value, getAvanza("up" + i), p);
    });
  });
}

async function saveUpPred(pid, local, visitante, avanza, p) {
  if (local === "" || visitante === "") { toast(t("complete_score")); return; }
  if (p && faltaAvanza(p, local, visitante, avanza)) { toast(t("pick_advances")); return; }
  try {
    await api("/api/prediccion", { partido_id: pid, participante: me, pin: sessionPin, local, visitante, avanza });
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
// Secuencia base de una gráfica: partidos que cuentan (finalizados con pronóstico)
// + próximos reales (no placeholders), ordenados por kickoff.
function seqEvolucion(matches) {
  const isPh = (p) => isPlaceholder(p.local) || isPlaceholder(p.visitante);
  const hasPred = (p) => STATE.pronosticos.some((pr) => pr.partido_id === p.id);
  return matches
    .filter((p) => (finalizadoConRes(p) && hasPred(p))
                || (p.estado !== "finalizado" && !isPh(p)))
    .sort((a, b) => ((a.kickoff_utc || "") < (b.kickoff_utc || "") ? -1 : 1));
}

// Total: todo el torneo (con marcadores de fase).
function renderEvolucion() {
  dibujaEvolucion($("#evolucion"), seqEvolucion(STATE.partidos), { markers: true });
}
// Etapa actual: solo los partidos de la fase en curso (sin marcadores de fase).
function renderEvolucionFase() {
  const box = $("#evolucion-fase");
  if (!box) return;
  const cur = faseActual();
  const h = $("#evo-fase-h");
  if (h) h.textContent = t("evolution_title") + (cur ? " · " + t(cur) : "");
  if (!cur) { box.innerHTML = `<p class="muted" style="text-align:center">${t("evo_empty")}</p>`; return; }
  dibujaEvolucion(box, seqEvolucion(partidosDeFase(cur)), { markers: false });
}

// Núcleo reutilizable de la gráfica de evolución sobre una secuencia dada.
function dibujaEvolucion(box, seq, opts) {
  if (!box) return;
  opts = opts || {};
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
      const pts = pr ? (puntos(pr.local, pr.visitante, p.res_local, p.res_visitante, p.orden, pr.avanza, p.avanza) || 0) : 0;
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
  for (let k = 1; opts.markers && k <= D; k++) {
    const f = faseDeOrden(seq[k - 1].orden);
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

// Puntuación (espejo de scoring.py). Grupos: exacto 7 / resultado 2 (los empates
// son resultado final). Eliminatorias (orden>71): siempre hay ganador; un empate
// trae "avanza" (penales). Ver memoria/reglas.
const esEliminatoria = (orden) => orden != null && orden > 71;
const ladoGanador = (pl, pv, av) => (pl > pv ? "local" : pl < pv ? "visitante" : (av || null));

function puntosGrupos(pl, pv, rl, rv) {
  if (rl == null || rv == null) return null;
  if (pl === rl && pv === rv) return 7;
  const s = (a, b) => (a > b) - (a < b);
  if (s(pl, pv) === s(rl, rv)) return 2;
  return 0;
}
function puntosKO(pl, pv, predAv, rl, rv, realAv) {
  if (rl == null || rv == null) return null;
  const predEmp = pl === pv, realEmp = rl === rv, exacto = pl === rl && pv === rv;
  const predG = ladoGanador(pl, pv, predAv), realG = ladoGanador(rl, rv, realAv);
  if (!realEmp) {                                   // decidido en cancha
    if (!predEmp) return exacto ? 3 : (predG === realG ? 2 : 0);
    return (predAv != null && predAv === realG) ? 2 : 0;   // predijo empate, ganó en cancha
  }
  if (predEmp) {                                    // empate -> penales
    let pts = 2;
    if (exacto) pts += 1;
    if (predAv != null && realAv != null && predAv === realAv) pts += 1;
    return pts;
  }
  return (realAv != null && predG === realAv) ? 2 : 0;     // predijo ganador, fue a penales
}
function puntos(pl, pv, rl, rv, orden, predAv, realAv) {
  return esEliminatoria(orden) ? puntosKO(pl, pv, predAv, rl, rv, realAv) : puntosGrupos(pl, pv, rl, rv);
}
// ¿El pronóstico ganó puntos? ¿Y fue marcador exacto? (para etiquetas/tablas)
const esExacto = (pr, p) => pr.local === p.res_local && pr.visitante === p.res_visitante;
// Helpers de "avanza" (eliminatorias)
const esKO = (p) => (p.orden || 0) > 71;
const avanzaTeam = (p, av) => (av === "local" ? p.local : av === "visitante" ? p.visitante : null);
function avanzaTag(p, av) {
  const tm = avanzaTeam(p, av);
  return tm ? ` <span class="avz-tag">→ ${flag(tm)} ${esc(tm)}</span>` : "";
}
// Control "¿quién avanza?" (eliminatorias): se muestra solo cuando el marcador es
// empate. idp = sufijo único. cur = valor actual ('local'/'visitante'/null).
function avanzaHTML(p, idp, cur) {
  if (!esKO(p)) return "";
  const a = (v) => (cur === v ? " active" : "");
  return `<div class="avanza-pick hidden" id="avz-${idp}" data-av="${cur || ""}">
      <div class="avanza-q">${t("who_advances")}</div>
      <div class="avanza-btns">
        <button type="button" class="avz-btn${a("local")}" data-av="local">${flag(p.local)} ${esc(p.local)}</button>
        <button type="button" class="avz-btn${a("visitante")}" data-av="visitante">${flag(p.visitante)} ${esc(p.visitante)}</button>
      </div>
    </div>`;
}
function wireAvanza(idp, plEl, pvEl) {
  const box = document.getElementById("avz-" + idp);
  if (!box || !plEl || !pvEl) return;
  const sync = () => {
    const draw = plEl.value !== "" && pvEl.value !== "" && Number(plEl.value) === Number(pvEl.value);
    box.classList.toggle("hidden", !draw);
  };
  box.querySelectorAll(".avz-btn").forEach((b) => b.addEventListener("click", () => {
    box.dataset.av = b.dataset.av;
    box.querySelectorAll(".avz-btn").forEach((x) => x.classList.toggle("active", x === b));
  }));
  plEl.addEventListener("input", sync);
  pvEl.addEventListener("input", sync);
  sync();
}
const getAvanza = (idp) => { const b = document.getElementById("avz-" + idp); return b && b.dataset.av ? b.dataset.av : null; };
const faltaAvanza = (p, plVal, pvVal, av) =>
  esKO(p) && plVal !== "" && pvVal !== "" && Number(plVal) === Number(pvVal) && !av;

// ====================== Fases y ganadores ======================
// El campo `orden` codifica la fase de forma estable (independiente de los nombres,
// que pasan de placeholder a equipos reales): 0-71 grupos, 72-87 16avos, etc.
const PHASES = [
  { key: "ph_group", lo: 0,   hi: 71  },
  { key: "ph_r32",   lo: 72,  hi: 87  },
  { key: "ph_r16",   lo: 88,  hi: 95  },
  { key: "ph_qf",    lo: 96,  hi: 99  },
  { key: "ph_sf",    lo: 100, hi: 101 },
  { key: "ph_final", lo: 102, hi: 103 },
];
function faseInfo(key) { return PHASES.find((p) => p.key === key); }
function faseDeOrden(o) { const f = PHASES.find((p) => o >= p.lo && o <= p.hi); return f ? f.key : "ph_group"; }
function partidosDeFase(key) {
  const f = faseInfo(key);
  return STATE.partidos.filter((p) => p.orden >= f.lo && p.orden <= f.hi);
}
// Cuenta para puntos: finalizado, con marcador, y NO en revisión.
const finalizadoConRes = (p) => p.estado === "finalizado" && p.res_local != null && p.res_visitante != null && !p.en_revision;

// Tabla de una sola fase: puntos que cada quien ganó SOLO en esos partidos.
function tablaFase(key) {
  const matches = partidosDeFase(key);
  const fin = matches.filter(finalizadoConRes);
  const stats = {};
  STATE.participantes.forEach((nom) => (stats[nom] = { participante: nom, puntos: 0, exactos: 0, resultados: 0, jugados: 0 }));
  fin.forEach((p) => {
    const preds = predByPartido(p.id);
    STATE.participantes.forEach((nom) => {
      const pr = preds[nom];
      if (!pr) return;
      const pts = puntos(pr.local, pr.visitante, p.res_local, p.res_visitante, p.orden, pr.avanza, p.avanza);
      if (pts == null) return;
      const s = stats[nom];
      s.jugados++; s.puntos += pts;
      if (esExacto(pr, p)) s.exactos++; else if (pts > 0) s.resultados++;
    });
  });
  const arr = Object.values(stats).sort((a, b) =>
    b.puntos - a.puntos || b.exactos - a.exactos || a.participante.localeCompare(b.participante));
  let pos = 0, prev = null;
  arr.forEach((r, i) => { if (prev === null || r.puntos !== prev) { pos = i + 1; prev = r.puntos; } r.posicion = pos; });
  return { arr, total: matches.length, finalizados: fin.length };
}
const faseCompleta = (key) => { const t = tablaFase(key); return t.total > 0 && t.finalizados === t.total; };
// Fase "actual" / etapa en curso: la PRIMERA fase que aún no termina (tiene
// partidos pero no todos finalizados). Así la "tabla de esta etapa" arranca en
// ceros al empezar una fase nueva y va sumando solo lo de esa fase. Si todo está
// terminado, devuelve la última.
function faseActual() {
  for (const ph of PHASES) {
    const tt = tablaFase(ph.key);
    if (tt.total > 0 && tt.finalizados < tt.total) return ph.key;
  }
  const conPartidos = PHASES.filter((ph) => partidosDeFase(ph.key).length > 0);
  return conPartidos.length ? conPartidos[conPartidos.length - 1].key : null;
}
// Ganadores de una fase (incluye TODOS los empatados en el máximo).
function ganadoresDe(key) {
  const { arr, finalizados, total } = tablaFase(key);
  if (!finalizados) return null;
  const max = arr.length ? arr[0].puntos : 0;
  return { campeones: max > 0 ? arr.filter((r) => r.puntos === max) : [], max, arr, finalizados, total };
}

function listaNombres(noms) {
  if (noms.length <= 1) return noms[0] || "";
  return noms.slice(0, -1).join(", ") + " & " + noms[noms.length - 1];
}

function champCardHTML(key) {
  const g = ganadoresDe(key);
  const phase = t(key);
  const names = g.campeones.map((c) => c.participante);
  const tie = names.length > 1;
  const insp = tie
    ? t("insp_tie", { names: esc(listaNombres(names)), phase: esc(phase), pts: g.max })
    : t("insp_single", { name: esc(names[0]), phase: esc(phase), pts: g.max });
  const crowns = g.campeones.map((c) =>
    `<div class="champ-one"><span class="champ-crown">👑</span><span class="champ-name${c.participante === me ? " me" : ""}">${esc(c.participante)}</span></div>`).join("");
  const medals = ["🥇", "🥈", "🥉"];
  // Podio por VALOR de puntos: los 3 mejores puntajes distintos. Cada escalón
  // muestra a TODOS los empatados en ese puntaje (oro/plata/bronce compartidos).
  const distintos = [...new Set(g.arr.filter((r) => r.puntos > 0).map((r) => r.puntos))]
    .sort((a, b) => b - a).slice(0, 3);
  const tiers = distintos.map((val, idx) => ({
    cls: "pp" + (idx + 1), medal: medals[idx], pts: val,
    names: g.arr.filter((r) => r.puntos === val).map((r) => r.participante),
  }));
  const orden = tiers.length === 3 ? [1, 0, 2] : tiers.length === 2 ? [0, 1] : [0];
  const podium = orden.map((i) => {
    const ti = tiers[i];
    if (!ti) return "";
    const names = ti.names.map((n) => `<div class="podium-name${n === me ? " me" : ""}">${esc(n)}</div>`).join("");
    return `<div class="podium-col ${ti.cls}">
        <div class="podium-medal">${ti.medal}</div>
        <div class="podium-names">${names}</div>
        <div class="podium-bar"><b>${ti.pts}</b></div>
      </div>`;
  }).join("");
  return `<div class="champ-card">
    <div class="champ-hero">
      <div class="champ-conf" aria-hidden="true">🎉 ✨ 🎊 ✨ 🎉</div>
      <div class="champ-trophy">🏆</div>
      <div class="champ-label">${tie ? t("champ_tie_label", { phase: esc(phase) }) : t("champ_label", { phase: esc(phase) })}</div>
      <div class="champ-names${tie ? " tie" : ""}">${crowns}</div>
      <div class="champ-pts">${t("champ_pts", { pts: g.max })}</div>
      <p class="champ-insp">${insp}</p>
    </div>
    ${podium ? `<div class="podium">${podium}</div>` : ""}
  </div>`;
}

function renderGanadores() {
  const box = $("#ganadores");
  if (!box) return;
  let html = `<div class="winners-title">${t("winners_title")}</div>`;
  const completas = PHASES.filter((ph) => faseCompleta(ph.key));
  if (!completas.length) {
    box.innerHTML = html + `<div class="card muted" style="text-align:center">${t("winners_empty")}</div>`;
    return;
  }
  // Más reciente primero (campeón más nuevo arriba).
  html += completas.slice().reverse().map((ph) => champCardHTML(ph.key)).join("");
  // Fase en curso (no completa pero con partidos finalizados): líder provisional.
  const cur = faseActual();
  if (cur && !faseCompleta(cur)) {
    const g = ganadoresDe(cur);
    if (g && g.campeones.length) {
      html += `<div class="champ-progress card">
        <span class="cp-tag">${t("champ_in_progress", { phase: esc(t(cur)) })}</span>
        <span class="cp-leader">${t("champ_leader_now", { name: esc(listaNombres(g.campeones.map((c) => c.participante))), pts: g.max })}</span>
      </div>`;
    }
  }
  box.innerHTML = html;
}

// Segunda tabla en "Resultados": acumulado SOLO de la etapa actual.
function renderTablaFase() {
  const box = $("#tabla-fase-wrap");
  if (!box) return;
  const cur = faseActual();
  if (!cur) { box.innerHTML = `<p class="muted">${t("stage_none")}</p>`; return; }
  const { arr } = tablaFase(cur);
  let rows = `<tr><th>${t("col_num")}</th><th>${t("col_participant")}</th><th>${t("col_pts")}</th>` +
    `<th>${t("col_exact")}</th><th>${t("col_result")}</th><th>${t("col_played")}</th></tr>`;
  arr.forEach((r) => {
    rows += `<tr class="${r.participante === me ? "me" : ""}"><td>${r.posicion}</td><td>${esc(r.participante)}</td>` +
      `<td class="pts">${r.puntos}</td><td>${r.exactos}</td><td>${r.resultados}</td><td>${r.jugados}</td></tr>`;
  });
  box.innerHTML = `<div class="stage-sub">${esc(t(cur))}</div>` +
    `<p class="muted stage-hint">${t("stage_table_hint")}</p>` +
    `<table class="lb">${rows}</table>`;
}

function renderResultados() {
  const cont = $("#resultados-list");
  cont.innerHTML = "";
  const jugados = STATE.partidos.filter((p) => p.estado === "finalizado");
  if (!jugados.length) { cont.appendChild(el("div", "card muted", t("no_finished"))); return; }
  jugados.forEach((p) => {
    const preds = predByPartido(p.id);
    const enRev = !!p.en_revision;
    const card = el("div", "card" + (enRev ? " card-rev" : ""));
    let rows = "";
    STATE.participantes.forEach((nom) => {
      const pr = preds[nom];
      if (!pr) {
        rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td><td>—</td><td>${enRev ? "·" : "0"}</td></tr>`;
        return;
      }
      const pts = puntos(pr.local, pr.visitante, p.res_local, p.res_visitante, p.orden, pr.avanza, p.avanza);
      const tag = enRev ? "" : (esExacto(pr, p) ? `<span class="tag exact">${t("tag_exact")}</span>`
                : (pts > 0 ? `<span class="tag res">${t("tag_result")}</span>` : ""));
      rows += `<tr class="${nom === me ? "me" : ""}"><td>${esc(nom)}</td>
        <td>${flag(p.local)} ${pr.local} – ${pr.visitante} ${flag(p.visitante)}${avanzaTag(p, pr.avanza)} ${tag}</td><td class="pts">${enRev ? "·" : pts}</td></tr>`;
    });
    const mx = fmtKickoffMX(p.kickoff_utc);
    const dt = mx ? `${mx.date} · ${mx.time} ${t("center_mx")}` : (p.fecha || "");
    const penTxt = (p.res_local === p.res_visitante && p.avanza)
      ? ` <span class="avz-tag">${avanzaTag(p, p.avanza)} ${t("pens_short")}</span>` : "";
    const revBadge = enRev ? ` <span class="badge rev">${t("st_review")}</span>` : "";
    card.innerHTML = `
      <h2>${flag(p.local)} ${esc(p.local)} ${p.res_local} – ${p.res_visitante} ${esc(p.visitante)} ${flag(p.visitante)}${penTxt}${revBadge}</h2>
      <div class="muted" style="margin-bottom:8px">${[dt, p.sede].filter(Boolean).map(esc).join(" · ")}</div>
      ${enRev ? `<div class="rev-note">${t("review_note")}</div>` : ""}
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
  updateAdminAvanza("ar");
  updateAdminAvanza("ap");
}

// Banner parpadeante con los resultados de eliminatoria sin verificar (penales).
function renderRevisionBanner() {
  const box = $("#revision-banner");
  if (!box) return;
  const rev = STATE.partidos.filter((p) => p.en_revision);
  if (!rev.length) { box.classList.add("hidden"); box.innerHTML = ""; return; }
  const lista = rev.map((p) =>
    `${flag(p.local)} ${esc(p.local)} ${p.res_local}–${p.res_visitante} ${esc(p.visitante)} ${flag(p.visitante)}`).join(" · ");
  box.innerHTML = `<span class="rev-ico">⚠️</span> <strong>${t("banner_review")}</strong> <span class="rev-list">${lista}</span>`;
  box.classList.remove("hidden");
}

// Selector "¿quién avanza?" en Admin (cargar resultado / meter pronóstico): se
// muestra cuando el partido elegido es de eliminatoria y el marcador es empate.
function updateAdminAvanza(prefix) {
  const row = $("#" + prefix + "-avanza-row"), sel = $("#" + prefix + "-avanza");
  if (!row || !sel) return;
  const p = STATE.partidos.find((x) => x.id === ($("#" + prefix + "-partido").value));
  const lv = $("#" + prefix + "-local").value, vv = $("#" + prefix + "-visitante").value;
  const draw = lv !== "" && vv !== "" && Number(lv) === Number(vv);
  if (p && esKO(p) && draw) {
    sel.innerHTML = `<option value="">${t("opt_pick")}</option>` +
      `<option value="local">${esc(p.local)}</option>` +
      `<option value="visitante">${esc(p.visitante)}</option>`;
    if (prefix === "ar" && p.avanza) sel.value = p.avanza;
    row.classList.remove("hidden");
  } else {
    row.classList.add("hidden");
  }
}
["ar", "ap"].forEach((px) => {
  ["-partido", "-local", "-visitante"].forEach((suf) => {
    const e = $("#" + px + suf);
    if (e) { e.addEventListener("change", () => updateAdminAvanza(px)); e.addEventListener("input", () => updateAdminAvanza(px)); }
  });
});

$("#ar-save").addEventListener("click", async () => {
  try {
    const r = await api("/api/admin/resultado", {
      pin: $("#admin-pin").value, partido_id: $("#ar-partido").value,
      local: $("#ar-local").value, visitante: $("#ar-visitante").value,
      avanza: $("#ar-avanza").value || null,
    });
    toast(r && r.en_revision ? t("saved_review") : t("result_saved")); await load();
  } catch (e) { toast(trErr(e.message)); }
});
$("#ap-save").addEventListener("click", async () => {
  try {
    await api("/api/admin/prediccion", {
      pin: $("#admin-pin").value, partido_id: $("#ap-partido").value,
      participante: $("#ap-participante").value,
      local: $("#ap-local").value, visitante: $("#ap-visitante").value,
      avanza: $("#ap-avanza").value || null,
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
  aplicarNuevos();
  await fillNombres();
  if (me && sessionPin) {
    if (sessionStorage.getItem("q_must") === "1") showChange(true);
    else showApp();
  } else {
    showLogin();
  }
})();
