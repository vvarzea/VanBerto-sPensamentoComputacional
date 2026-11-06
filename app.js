
document.addEventListener("DOMContentLoaded", () => {
"use strict";

/* ============================= LANGUAGE / i18n ============================= */
const LANG_STRINGS = {
  pt: {
    // Header & Navigation
    appTitle: "VanBerto's Pensamento Computacional",
    teacherLabel: "Professora:",
    soundOn: "🔊 Som",
    soundOff: "🔇 Sem som",
    darkMode: "🌙 Modo escuro",
    lightMode: "☀️ Modo claro",
    resetLevel: "🔁 Reiniciar nível",
    resetTheme: "🗑 Reset tema",
    changeUniverse: "🌍 Mudar universo",
    // Sidebar
    sideHome: "🏠 Início",
    sideUniverses: "🌍 Universos",
    sideProfile: "👤 Perfil",
    sideCycles: "Ciclos",
    sideProgress: "Progresso",
    sideProgressText: "⭐ {n} níveis concluídos",
    sideTip: "💡 Pensa antes de agir!",
    // Universe screen
    chooseUniverse: "Escolhe o teu universo!",
    universeDesc: "Programa o VanBerto's, explora temas reais e sobe de nível — do 1.º Ciclo ao Secundário. Escolhe um universo e depois o teu ciclo!",
    // Menu screen
    chooseYourCycle: "Escolhe o teu ciclo",
    cycleMenuDesc: "Começa pelo 1.º Ciclo e sobe de nível.",
    // Game
    movements: "Movimentos: {n}",
    kbdHint: "Teclas: ↑↓←→ · Enter=Recolher · Backspace=Depositar",
    difficultyLabel: "Dificuldade: {d}",
    optimalTag: "🏁 Ótimo: {n}",
    levelOf: "Nível {a} de {b}",
    levelDesc: "Nível {n}: {desc} Só podes levar 1 objeto de cada vez.",
    hintDirect: "No 1.º ciclo, os comandos são imediatos.",
    hintQueue2c: "No 2.º ciclo, escolhe a sequência e executa.",
    hintQueue3c: "No 3.º ciclo, cria uma sequência eficiente.",
    hintQueueSec: "No secundário, otimiza a sequência para ganhar 3 estrelas.",
    hintEscape: "Recolhe todos os ficheiros 📁, leva-os à zona segura 🛡️ e encontra a porta 🚪!",
    feedbackInit: "Guia o VanBerto's: usa os comandos para recolher todos os itens e depositá-los no 📥.",
    // Command buttons
    cmdMove: "⬆️ Avançar",
    cmdBack: "⬇️ Recuar",
    cmdLeft: "↩️ Esq.",
    cmdRight: "↪️ Dir.",
    cmdCollect: "✋ Recolher",
    cmdDrop: "📥 Depositar",
    runQueue: "▶️ Executar",
    undoQueue: "↩ Desfazer",
    clearQueue: "🗑 Limpar",
    backBtn: "← Voltar",
    // Feedback messages
    fbMoveOk: "➡️ Avançaste.",
    fbBackOk: "⬇️ Recuaste.",
    fbTurnLeft: "↩️ Viraste à esquerda.",
    fbTurnRight: "↪️ Viraste à direita.",
    fbEdge: "❌ Borda do tabuleiro! O robô não pode sair dos limites.",
    fbObstacle: "⛔ Obstáculo! Vira primeiro (Esq./Dir.) e depois tenta avançar.",
    fbAlreadyCarrying: "✋ Já tens um objeto! Leva-o ao 📥 e deposita antes de apanhar outro.",
    fbNothingHere: "❌ Aqui não há nada! Move-te para cima de um objeto (📦) antes de recolher.",
    fbCollected: "✅ Objeto recolhido! Agora navega até ao contentor 📥 e deposita.",
    fbNothingToDeposit: "❌ Não carregas nada! Primeiro recolhe um objeto (✋) e depois deposita.",
    fbNotOnDeposit: "📥 Tens de estar em cima do contentor (📥) para depositar. Navega até lá!",
    fbDeposited: "📥 Depositado com sucesso! Continua a recolher os restantes.",
    fbAllSafeEscape: "✅ Todos os ficheiros seguros! Agora encontra a porta de saída 🚪.",
    fbUniverseSelected: "Universo selecionado: {name}",
    // Popup
    levelComplete: "Nível concluído! 🎉",
    nextLevel: "Próximo nível ▶️",
    tryAgain: "🔁 Tentar de novo",
    backToThemes: "← Temas",
    starsMsg3: "⭐⭐⭐ Incrível! Resolveste com o mínimo de movimentos!",
    starsMsg2: "⭐⭐ Muito bem! Podes ainda otimizar um pouco.",
    starsMsg1: "⭐ Conseguiste! Tenta usar menos movimentos.",
    optimalMoves: "🏁 Mínimo: {n} movimentos | Usaste: {u}",
    // Hint
    hintCarryingNearDeposit: "Estás perto do contentor 📥! Usa Depositar quando chegares.",
    hintCarrying: "Tens um objeto! Vai ao contentor 📥 (fila {r}, col {c}).",
    hintGoTo: "Tenta ir ao {emoji} (fila {r}, col {c}) e usa Recolher.",
    // Profile
    profileTitle: "O meu Perfil",
    profileDesc: "Escreve o teu nome e acompanha o progresso.",
    profilePlaceholder: "O teu nome...",
    exportBtn: "📤 Exportar progresso",
    importBtn: "📥 Importar progresso",
    rankingTitle: "🏆 Ranking da Turma",
    achievementsTitle: "Conquistas",
    themeProgressTitle: "Progresso por tema",
    exportOk: "✅ Progresso exportado com sucesso!",
    exportErr: "❌ Erro ao exportar: {e}",
    importOk: "✅ {n} entradas importadas! A atualizar...",
    importErr: "❌ Ficheiro inválido.",
    // Reset confirm
    confirmReset: "Tens a certeza que queres reiniciar este tema? Todo o progresso será apagado.",
    confirmYes: "Sim",
    confirmNo: "Não",
    // Escape quiz
    escapeQuizTitle: "🚪 Porta bloqueada!",
    escapeQuizDesc: "Responde à pergunta de Internet Mais Segura para o VanBerto's conseguir sair.",
    escapeCorrect: "🎉 Resposta certa! A porta abriu e o VanBerto's escapou!",
    escapeWrong: "⚠️ Resposta incorreta. Lembra-te das regras de segurança e tenta outra vez!",
    // Breadcrumbs & back
    backToMenu: "🏠 Menu",
    breadTheme: "Tema",
    backToThemesBtn: "← Temas",
    // cycle labels
    cycle1c: "1.º Ciclo",
    cycle2c: "2.º Ciclo",
    cycle3c: "3.º Ciclo",
    cycleSec: "Secundário",
    cycleAge1c: "6–10 anos",
    cycleAge2c: "10–12 anos",
    cycleAge3c: "12–15 anos",
    cycleAgeSec: "15–18 anos",
    // Mode descriptions in theme cards
    modeDirect: "Comandos imediatos",
    modeQueue: "Planeia a sequência",
    levels: "nível(eis)",
    // Queue mode hint text (bottom)
    selectUnlockedDoor: "Selecciona uma porta desbloqueada para começar.",
    chooseMission: "Escolhe uma porta",
    startAtDoor1: "Começa na Porta 1",
    helloChoose: "Olá! Escolhe a primeira porta para começar!",
    clickDoor: "Clica numa porta para ver o desafio.",
    // Universe screen pills
    heroThink: "💡 Pensa antes de agir.",
    heroOneItem: "📥 Só 1 objeto de cada vez.",
    heroStars: "⭐ Menos movimentos = mais estrelas.",
    langBtn: "🇬🇧 English",
    // Universe card titles & descs
    uTitleCiberseg: "Segurança na Internet",
    uDescCiberseg: "Protege dados, deteta phishing e cria palavras-passe invencíveis.",
    uTitleAgua: "Missões da Água",
    uDescAgua: "Limpa oceanos, repara fugas e protege as nascentes da nossa água.",
    uTitleAr: "Qualidade do Ar",
    uDescAr: "Reduz a poluição, instala filtros e monitoriza a qualidade do ar.",
    uTitleAmbiente: "Missões Ambientais",
    uDescAmbiente: "Cuida da floresta, recicla e ajuda a cidade sustentável a crescer.",
    uTitleCiberseguras: "Missões CiberSeguras",
    uDescCiberseguras: "Dentro do computador: combate malware fictício e protege a rede.",
    uTitleEscape: "Escape da Internet Perigosa",
    uDescEscape: "Recolhe ficheiros suspeitos, leva-os à zona segura e responde ao quiz para fugir!",
    uTitleEscapeRooms: "VanBerto's Escape Rooms",
    uDescEscapeRooms: "5 salas temáticas com puzzles, anagramas e desafios. Internet, Água, Ar, Malware e Fake News!",
    allCycles: "Todos os Ciclos",
    cycles14: "Todos os Ciclos",
    // Popup level complete
    popupContinue: "Continuar ➡️",
    popupCopyResult: "📋 Copiar resultado",
    popupCopied: "✅ Copiado!",
    // Queue feedback
    cmdAdded: "✅ Comando adicionado.",
    cmdUndone: "Apagaste o último comando.",
    queueCleared: "🧹 Sequência limpa.",
    queueEmpty: "Escolhe comandos primeiro.",
    // Level/theme resets
    levelReset: "↺ Nível reiniciado!",
    levelResetConfirm: "🔁 Reiniciar o nível atual?",
    levelResetDone: "↺ Reiniciado!",
    themeResetConfirm: "🗑 Voltar ao nível 1 deste tema?",
    themeResetDone: "✨ Tema reiniciado!",
    enterLevelFirst: "Entra num nível primeiro.",
    chooseThemeFirst: "Escolhe um tema primeiro.",
    // Solution
    showSolution: "💡 Ver solução",
    hideSolution: "🙈 Esconder solução",
    solutionBanner: "🗺️ Caminho ótimo mostrado na grelha.",
    solutionHide: "Esconder",
    solutionError: "❌ Não foi possível calcular a solução.",
    normalModeActive: "Modo normal ativo.",
    // Export/Import
    exportReportOk: "✅ Relatório exportado! {n} níveis, {s} estrelas.",
    exportErr: "❌ Erro ao exportar: {e}",
    importOk: "✅ {n} entradas importadas! A atualizar...",
    importErr: "❌ Ficheiro inválido.",
    exportProgressOk: "✅ Progresso exportado com sucesso!",
    // Universe start
    chooseUniverseFirst: "Escolhe um universo para começares!",
    // Sequence label
    sequenceLabel: "Sequência:",
    // Cycle screen subtitles
    cycleDescText1c: "1.º Ciclo · Comandos imediatos.",
    cycleDescText2c: "2.º Ciclo · Planeia a sequência.",
    cycleDescText3c: "3.º Ciclo · Sequência e otimização.",
    cycleDescTextSec: "Secundário · Estratégia e eficiência.",
    // Level/cycle navigation feedback
    nextLevelMsg: "Próximo nível!",
    welcomeCycle: "Bem-vindo ao {cycle}!",
    cycleCompleteMsg2: "🎉 Ciclo concluído! Escolhe outro tema.",
    themeCompleteMsg: "🎉 Tema concluído! Escolhe outro desafio.",
    // Escape Rooms module
    erNoTimer: "Sem limite de tempo",
    erTimerDesc: "Modo desafio · 15 minutos. Resolve todas as portas!",
    erDoorWord: "Porta",
    erRoomWord: "Sala",
    erLetsGo: "vamos lá! 💪",
    erMissionComplete: "Missão concluída!",
    erChooseRoom: "🏠 Escolher sala",
    erBackToGame: "← Voltar ao jogo",
    erPrev: "◀ Anterior",
    erNext: "Próxima ▶",
    erHint: "💡 Pista",
    erTeacher: "🔒 Notas professora",
    erRestart: "↺ Recomeçar",
    erPlayAgain: "🔁 Jogar de novo",
    erTryAgain: "🔁 Tentar de novo",
    // Tutorial
    tutSkip: "Saltar",
    tutOk: "Ok! →",
    tutStep: "{a} / {b}",
    tutMsg1: "Carrega aqui para avançar o robô!",
    tutMsg2: "Usa estas setas para virar o robô.",
    tutMsg3: "Vai até ao item colorido e usa Recolher!",
    tutMsg4: "Quando estiveres no item, carrega em Recolher.",
    tutMsg5: "Leva o item ao contentor e carrega em Depositar!",
    // Queue mode tutorial (2nd/3rd Cycle / Secondary)
    tutQ1: "Adiciona comandos à sequência — começa por Avançar!",
    tutQ2: "Usa Esq./Dir. para virar o robô antes de avançar.",
    tutQ3: "Recolher e Depositar também fazem parte da sequência.",
    tutQ4: "Quando a sequência estiver pronta, carrega em Executar ▶️.",
    tutQ5: "Enganaste-te? Usa Apagar para remover o último comando.",
    tutQ6: "Cada item colorido precisa de ser recolhido e depositado no 📥.",
    // Escape mode tutorial
    tutEsc1: "Recolhe todos os ficheiros suspeitos 📁 na grelha.",
    tutEsc2: "Usa Recolher quando o robô estiver sobre um ficheiro.",
    tutEsc3: "Leva os ficheiros à zona segura 🛡️ e usa Depositar.",
    tutEsc4: "Depois de depositar tudo, vai até à porta 🚪 para escapar!",
    tutBtnLabel: "❓ Tutorial",
    tutOnlyDirect: "💡 Entra num nível para ver o tutorial.",
    // Cycle / theme completion
    themeComplete: "Tema concluído!",
    cycleComplete: "Ciclo concluído!",
    cycleCompleteMsg: "Completaste todos os temas do {cycle}.",
    nextCycleBtn: "Experimentar o {cycle}",
    viewThemesBtn: "Ver temas",
    continueBtn: "Continuar ➡️",
    // Progress badge
    extraLevelBadge: "✨ extra",
    // Welcome back
    welcomeBack: "Bem-vindo de volta! Usa 'Mudar universo' para escolher outro.",
    // Universe group labels
    groupSecurity: "Segurança na Internet",
    groupEnvironment: "Missões Ambientais",
    groupEscapeRooms: "Escape Rooms",
  },
  en: {
    appTitle: "VanBerto's Pensamento Computacional",
    teacherLabel: "Teacher:",
    soundOn: "🔊 Sound",
    soundOff: "🔇 Muted",
    darkMode: "🌙 Dark mode",
    lightMode: "☀️ Light mode",
    resetLevel: "🔁 Reset level",
    resetTheme: "🗑 Reset theme",
    changeUniverse: "🌍 Change universe",
    sideHome: "🏠 Home",
    sideUniverses: "🌍 Universes",
    sideProfile: "👤 Profile",
    sideCycles: "Cycles",
    sideProgress: "Progress",
    sideProgressText: "⭐ {n} levels done",
    sideTip: "💡 Think before you act!",
    chooseUniverse: "Choose your universe!",
    universeDesc: "Program VanBerto's, explore real topics and level up — from 1st Cycle to Secondary. Choose a universe, then pick your cycle!",
    chooseYourCycle: "Choose your cycle",
    cycleMenuDesc: "Start with the 1st Cycle and level up.",
    movements: "Moves: {n}",
    kbdHint: "Keys: ↑↓←→ · Enter=Collect · Backspace=Deposit",
    difficultyLabel: "Difficulty: {d}",
    optimalTag: "🏁 Optimal: {n}",
    levelOf: "Level {a} of {b}",
    levelDesc: "Level {n}: {desc} You can only carry 1 item at a time.",
    hintDirect: "1st Cycle: commands are immediate.",
    hintQueue2c: "2nd Cycle: plan your sequence then run it.",
    hintQueue3c: "3rd Cycle: create an efficient sequence.",
    hintQueueSec: "Secondary: optimise the sequence for 3 stars.",
    hintEscape: "Collect all files 📁, bring them to the safe zone 🛡️ and find the exit door 🚪!",
    feedbackInit: "Guide VanBerto's: use commands to collect all items and deposit them in 📥.",
    cmdMove: "⬆️ Forward",
    cmdBack: "⬇️ Backward",
    cmdLeft: "↩️ Left",
    cmdRight: "↪️ Right",
    cmdCollect: "✋ Collect",
    cmdDrop: "📥 Deposit",
    runQueue: "▶️ Run",
    undoQueue: "↩ Undo",
    clearQueue: "🗑 Clear",
    backBtn: "← Back",
    fbMoveOk: "➡️ Moved forward.",
    fbBackOk: "⬇️ Moved backward.",
    fbTurnLeft: "↩️ Turned left.",
    fbTurnRight: "↪️ Turned right.",
    fbEdge: "❌ Board edge! The robot cannot leave the grid.",
    fbObstacle: "⛔ Obstacle! Turn (Left/Right) first, then try moving.",
    fbAlreadyCarrying: "✋ Already carrying an item! Deposit it at 📥 before picking up another.",
    fbNothingHere: "❌ Nothing here! Move on top of an item (📦) before collecting.",
    fbCollected: "✅ Item collected! Now navigate to the container 📥 and deposit.",
    fbNothingToDeposit: "❌ Not carrying anything! Collect an item first (✋), then deposit.",
    fbNotOnDeposit: "📥 You must be on the container (📥) to deposit. Navigate there!",
    fbDeposited: "📥 Deposited! Keep collecting the rest.",
    fbAllSafeEscape: "✅ All files safe! Now find the exit door 🚪.",
    fbUniverseSelected: "Universe selected: {name}",
    levelComplete: "Level complete! 🎉",
    nextLevel: "Next level ▶️",
    tryAgain: "🔁 Try again",
    backToThemes: "← Themes",
    starsMsg3: "⭐⭐⭐ Amazing! You solved it with the minimum moves!",
    starsMsg2: "⭐⭐ Well done! You can still optimise a bit.",
    starsMsg1: "⭐ You made it! Try using fewer moves.",
    optimalMoves: "🏁 Minimum: {n} moves | You used: {u}",
    hintCarryingNearDeposit: "Near the container 📥! Use Deposit when you arrive.",
    hintCarrying: "Carrying an item! Go to container 📥 (row {r}, col {c}).",
    hintGoTo: "Try going to {emoji} (row {r}, col {c}) and use Collect.",
    profileTitle: "My Profile",
    profileDesc: "Enter your name and track your progress.",
    profilePlaceholder: "Your name...",
    exportBtn: "📤 Export progress",
    importBtn: "📥 Import progress",
    rankingTitle: "🏆 Class Ranking",
    achievementsTitle: "Achievements",
    themeProgressTitle: "Progress by theme",
    exportOk: "✅ Progress exported successfully!",
    exportErr: "❌ Export error: {e}",
    importOk: "✅ {n} entries imported! Updating...",
    importErr: "❌ Invalid file.",
    confirmReset: "Are you sure you want to reset this theme? All progress will be lost.",
    confirmYes: "Yes",
    confirmNo: "No",
    escapeQuizTitle: "🚪 Door locked!",
    escapeQuizDesc: "Answer the Safer Internet question so VanBerto's can escape.",
    escapeCorrect: "🎉 Correct! The door opened and VanBerto's escaped!",
    escapeWrong: "⚠️ Wrong answer. Remember the safety rules and try again!",
    backToMenu: "🏠 Menu",
    breadTheme: "Theme",
    backToThemesBtn: "← Themes",
    cycle1c: "1st Cycle",
    cycle2c: "2nd Cycle",
    cycle3c: "3rd Cycle",
    cycleSec: "Secondary",
    cycleAge1c: "6–10 yrs",
    cycleAge2c: "10–12 yrs",
    cycleAge3c: "12–15 yrs",
    cycleAgeSec: "15–18 yrs",
    modeDirect: "Immediate commands",
    modeQueue: "Plan the sequence",
    levels: "level(s)",
    selectUnlockedDoor: "Select an unlocked door to start.",
    chooseMission: "Choose a door",
    startAtDoor1: "Start at Door 1",
    helloChoose: "Hello! Choose the first door to start!",
    clickDoor: "Click a door to see the challenge.",
    heroThink: "💡 Think before you act.",
    heroOneItem: "📥 Only 1 item at a time.",
    heroStars: "⭐ Fewer moves = more stars.",
    langBtn: "🇵🇹 Português",
    // Universe card titles & descs
    uTitleCiberseg: "Internet Safety",
    uDescCiberseg: "Protect data, detect phishing and create unbreakable passwords.",
    uTitleAgua: "Water Missions",
    uDescAgua: "Clean oceans, fix leaks and protect freshwater sources.",
    uTitleAr: "Air Quality",
    uDescAr: "Reduce pollution, install filters and monitor air quality.",
    uTitleAmbiente: "Environmental Missions",
    uDescAmbiente: "Care for the forest, recycle and help the sustainable city grow.",
    uTitleCiberseguras: "CyberSafe Missions",
    uDescCiberseguras: "Inside the computer: fight fictional malware and protect the network.",
    uTitleEscape: "Escape the Dangerous Internet",
    uDescEscape: "Collect suspicious files, bring them to the safe zone and answer the quiz to escape!",
    uTitleEscapeRooms: "VanBerto's Escape Rooms",
    uDescEscapeRooms: "5 themed rooms with puzzles, anagrams and challenges. Internet, Water, Air, Malware and Fake News!",
    allCycles: "All Cycles",
    cycles14: "All Cycles",
    // Popup level complete
    popupContinue: "Continue ➡️",
    popupCopyResult: "📋 Copy result",
    popupCopied: "✅ Copied!",
    // Queue feedback
    cmdAdded: "✅ Command added.",
    cmdUndone: "Last command removed.",
    queueCleared: "🧹 Sequence cleared.",
    queueEmpty: "Add commands first.",
    // Level/theme resets
    levelReset: "↺ Level restarted!",
    levelResetConfirm: "🔁 Restart this level?",
    levelResetDone: "↺ Restarted!",
    themeResetConfirm: "🗑 Go back to level 1 of this theme?",
    themeResetDone: "✨ Theme reset!",
    enterLevelFirst: "Enter a level first.",
    chooseThemeFirst: "Choose a theme first.",
    // Solution
    showSolution: "💡 Show solution",
    hideSolution: "🙈 Hide solution",
    solutionBanner: "🗺️ Optimal path shown on the grid.",
    solutionHide: "Hide",
    solutionError: "❌ Could not calculate the solution.",
    normalModeActive: "Normal mode active.",
    // Export/Import
    exportReportOk: "✅ Report exported! {n} levels, {s} stars.",
    exportErr: "❌ Export error: {e}",
    importOk: "✅ {n} entries imported! Updating...",
    importErr: "❌ Invalid file.",
    exportProgressOk: "✅ Progress exported successfully!",
    // Universe start
    chooseUniverseFirst: "Choose a universe to get started!",
    // Sequence label
    sequenceLabel: "Sequence:",
    // Cycle screen subtitles
    cycleDescText1c: "1st Cycle · Immediate commands.",
    cycleDescText2c: "2nd Cycle · Plan your sequence.",
    cycleDescText3c: "3rd Cycle · Sequence & optimisation.",
    cycleDescTextSec: "Secondary · Strategy & efficiency.",
    // Level/cycle navigation feedback
    nextLevelMsg: "Next level!",
    welcomeCycle: "Welcome to {cycle}!",
    cycleCompleteMsg2: "🎉 Cycle complete! Choose another theme.",
    themeCompleteMsg: "🎉 Theme complete! Choose another challenge.",
    // Escape Rooms module
    erNoTimer: "No time limit",
    erTimerDesc: "Challenge mode · 15 minutes. Solve all doors!",
    erDoorWord: "Door",
    erRoomWord: "Room",
    erLetsGo: "let's go! 💪",
    erMissionComplete: "Mission complete!",
    erChooseRoom: "🏠 Choose room",
    erBackToGame: "← Back to game",
    erPrev: "◀ Previous",
    erNext: "Next ▶",
    erHint: "💡 Hint",
    erTeacher: "🔒 Teacher notes",
    erRestart: "↺ Restart",
    erPlayAgain: "🔁 Play again",
    erTryAgain: "🔁 Try again",
    // Tutorial
    tutSkip: "Skip",
    tutOk: "Got it! →",
    tutStep: "{a} / {b}",
    tutMsg1: "Press here to move the robot forward!",
    tutMsg2: "Use these arrows to turn the robot.",
    tutMsg3: "Go to the coloured item and use Collect!",
    tutMsg4: "When you're on the item, press Collect.",
    tutMsg5: "Bring the item to the container and press Deposit!",
    // Queue mode tutorial (2nd/3rd Cycle / Secondary)
    tutQ1: "Add commands to the sequence — start with Forward!",
    tutQ2: "Use Left/Right to turn the robot before moving.",
    tutQ3: "Collect and Deposit are also part of the sequence.",
    tutQ4: "When your sequence is ready, press Run ▶️.",
    tutQ5: "Made a mistake? Use Undo to remove the last command.",
    tutQ6: "Each coloured item must be collected and deposited in 📥.",
    // Escape mode tutorial
    tutEsc1: "Collect all suspicious files 📁 on the grid.",
    tutEsc2: "Use Collect when the robot is on top of a file.",
    tutEsc3: "Bring the files to the safe zone 🛡️ and use Deposit.",
    tutEsc4: "Once everything is deposited, go to the door 🚪 to escape!",
    tutBtnLabel: "❓ Tutorial",
    tutOnlyDirect: "💡 Enter a level to see the tutorial.",
    // Cycle / theme completion
    themeComplete: "Theme complete!",
    cycleComplete: "Cycle complete!",
    cycleCompleteMsg: "You finished all themes in {cycle}.",
    nextCycleBtn: "Try {cycle}",
    viewThemesBtn: "View themes",
    continueBtn: "Continue ➡️",
    // Progress badge
    extraLevelBadge: "✨ extra",
    // Welcome back
    welcomeBack: "Welcome back! Use 'Change universe' to pick a different one.",
    // Universe group labels
    groupSecurity: "Internet Safety",
    groupEnvironment: "Environmental Missions",
    groupEscapeRooms: "Escape Rooms",
  }
};

let currentLang = 'pt';
try { currentLang = localStorage.getItem('vanbertos_lang_v1') || 'pt'; } catch(e) {}
function T(key, vars) {
  let s = (LANG_STRINGS[currentLang] || LANG_STRINGS.pt)[key] || LANG_STRINGS.pt[key] || key;
  if (vars) Object.entries(vars).forEach(([k,v]) => { s = s.replace('{'+k+'}', v); });
  return s;
}
function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('vanbertos_lang_v1', lang); } catch(e) {}
  applyLangToDOM();
  if(typeof applyQxStatic==="function") applyQxStatic();
}
function applyLangToDOM() {
  // Header — only update text nodes, keep logo-robot span intact
  const h1 = document.querySelector('header h1');
  if (h1) {
    // Update only the text portion, preserve the logo-robot span
    const logoSpan = h1.querySelector('#logo-robot');
    h1.innerHTML = `<span class="logo-emoji" id="logo-robot"></span> ${T('appTitle')}`;
    // Re-inject SVG after rewrite
    const newLogoSpan = h1.querySelector('#logo-robot');
    if (newLogoSpan) newLogoSpan.innerHTML = VANBERTO_SVG;
  }
  const tp = document.querySelector('header p');
  if (tp) tp.innerHTML = `${T('teacherLabel')} <strong>Vanda Várzea</strong>`;
  // Buttons
  const btnMap = {
    'btn-mute': isMuted ? T('soundOff') : T('soundOn'),
    'btn-dark-mode': isDark ? T('lightMode') : T('darkMode'),
    'btn-reset-level-top': T('resetLevel'),
    'btn-reset-theme': T('resetTheme'),
    'btn-change-universe': T('changeUniverse'),
    'btn-lang': T('langBtn'),
  };
  Object.entries(btnMap).forEach(([id,txt]) => { const el=$(id); if(el) el.textContent=txt; });
  // Sidebar
  const sideMap = {
    'side-home': T('sideHome'), 'side-universes': T('sideUniverses'), 'side-profile': T('sideProfile'),
    'side-tip': T('sideTip'),
  };
  // sidebar group title
  const sgt = document.querySelector('.side-group-title');
  if (sgt) sgt.textContent = T('sideCycles');
  const sideProgressEl = $('side-progress');
  if (sideProgressEl) { const s=getOverallStats(); sideProgressEl.innerHTML=`<span>⭐ ${s.completed} ${currentLang==='en'?'levels done':'níveis'}</span><span style="font-size:.75rem;color:var(--muted)">🌟 ${s.stars} ${currentLang==='en'?'stars':'estrelas'}</span>`; }
  Object.entries(sideMap).forEach(([id,txt]) => { const el=$(id); if(el) el.textContent=txt; });
  // Footer tip
  const ft = document.querySelector('.side-tip');
  if (ft) ft.textContent = T('sideTip');
  // Universe hero
  const uh2 = document.querySelector('.universe-hero h2');
  if (uh2) uh2.textContent = T('chooseUniverse');
  const up = document.querySelector('.universe-hero p');
  if (up) up.textContent = T('universeDesc');
  // Hero pills
  const pills = document.querySelectorAll('.hero-bottom .pill');
  const pillTexts = [T('heroThink'), T('heroOneItem'), T('heroStars')];
  pills.forEach((p,i) => { if(pillTexts[i]) p.textContent = pillTexts[i]; });
  // Cmd buttons (in game)
  const cmdBtnMap = {
    'btn-cmd-move': T('cmdMove'), 'btn-cmd-back': T('cmdBack'),
    'btn-cmd-left': T('cmdLeft'), 'btn-cmd-right': T('cmdRight'),
    'btn-cmd-collect': T('cmdCollect'), 'btn-cmd-drop': T('cmdDrop'),
    'btn-run-queue': T('runQueue'), 'btn-undo-queue': T('undoQueue'),
    'btn-clear-queue': T('clearQueue'), 'btn-cmd-back-btn': T('backBtn'),
    'btn-back-themes': T('backToThemesBtn'), 'btn-main-menu': T('backToMenu'),
    'popup-next': T('popupContinue'), 'popup-share': T('popupCopyResult'),
    'btn-show-tut': T('tutBtnLabel'),
    'solution-banner-text': T('solutionBanner'),
    'solution-banner-hide': T('solutionHide'),
    'queue-label': T('sequenceLabel'),
    'btn-show-solution': solutionVisible ? T('hideSolution') : T('showSolution'),
    'cycle-desc-1c': T('cycleDescText1c'),
    'cycle-desc-2c': T('cycleDescText2c'),
    'cycle-desc-3c': T('cycleDescText3c'),
    'cycle-desc-sec': T('cycleDescTextSec'),
    // Escape Rooms overlay buttons
    'er-btn-mute': (typeof erIsMuted!=='undefined'&&erIsMuted) ? T('soundOff') : T('soundOn'),
    'er-btn-hub': T('erChooseRoom'),
    'er-btn-universe': T('changeUniverse'),
    'er-btn-back': T('erBackToGame'),
    'er-btn-prev': T('erPrev'),
    'er-btn-next': T('erNext'),
    'er-btn-hint': T('erHint'),
    'er-btn-teacher': sessionStorage.getItem("vb_teacher_pin")==="ok" ? "🔓 Notas professora" : T('erTeacher'),
    'er-btn-restart': T('erRestart'),
    'er-btn-final-restart': T('erPlayAgain'),
    'er-btn-final-hub': T('erChooseRoom'),
    'er-btn-timeup-restart': T('erTryAgain'),
    'er-btn-timeup-hub': T('erChooseRoom'),
    // Main mute button
    'btn-mute': isMuted ? T('soundOff') : T('soundOn'),
  };
  const _DPAD_IDS=new Set(['btn-cmd-move','btn-cmd-back','btn-cmd-left','btn-cmd-right','btn-cmd-collect','btn-cmd-drop']);
  Object.entries(cmdBtnMap).forEach(([id,txt]) => {
    const el=$(id); if(!el) return;
    if(_DPAD_IDS.has(id)){   // "⬆️ Avançar" → seta grande + legenda por baixo
      const k=txt.indexOf(' '), arrow=k>0?txt.slice(0,k):'', label=k>0?txt.slice(k+1):txt;
      el.innerHTML='<span class="dpad-arrow"></span><span class="dpad-label"></span>';
      el.firstChild.textContent=arrow; el.lastChild.textContent=label;
    } else el.textContent=txt;
  });
  // Universe group labels
  document.querySelectorAll('.universe-group-label[data-group]').forEach(el=>{
    const g=el.getAttribute('data-group');
    const icon=el.querySelector('.group-icon');
    const iconHtml=icon?icon.outerHTML:'';
    if(g==='security') el.innerHTML=iconHtml+' '+T('groupSecurity');
    else if(g==='environment') el.innerHTML=iconHtml+' '+T('groupEnvironment');
    else if(g==='escaperooms') el.innerHTML=iconHtml+' '+T('groupEscapeRooms');
  });
  // Kbd hint
  const kh = $('kbd-hint'); if(kh) kh.textContent = T('kbdHint');
  // Moves counter
  updateMoves();
  // Cycle labels in sidebar
  ['1c','2c','3c','sec'].forEach(ck => {
    const btn = $('side-'+ck);
    if (btn) btn.textContent = T('cycle'+ck.charAt(0).toUpperCase()+ck.slice(1)) || (ck==='sec'?T('cycleSec'):ck);
  });
  // re-inject robot SVG for hero and sidebar (logo-robot already handled above)
  ['hero-robot','hero-robot-menu'].forEach(id => {
    const el=$(id); if(el) el.innerHTML=VANBERTO_POPUP_SVG();
  });
  const sr=$('side-robot'); if(sr) sr.innerHTML=VANBERTO_SVG;
  // Profile screen
  const pTitle = document.querySelector('#profile-screen h2');
  if (pTitle) pTitle.textContent = T('profileTitle');
  const pDesc = document.querySelector('#profile-screen > div > div > p');
  if (pDesc) pDesc.textContent = T('profileDesc');
  const pInput = $('student-name-input');
  if (pInput) pInput.placeholder = T('profilePlaceholder');
  const btnExp = $('btn-export-progress'); if(btnExp) btnExp.textContent=T('exportBtn');
  const btnImp = $('btn-import-trigger'); if(btnImp) btnImp.textContent=T('importBtn');
  const rTitle = document.querySelector('#profile-screen h3');
  if (rTitle) rTitle.textContent = T('rankingTitle');
  // Back buttons
  ['1c','2c','3c','sec'].forEach(ck => {
    const b = $('btn-back-menu-'+ck); if(b) b.textContent = '← ' + (currentLang==='en'?'Back':'Voltar ao menu');
  });
  // Universe cards — translate titles, descriptions and cycle chips
  const uCardMap = {
    'ciberseg':    { title: T('uTitleCiberseg'),    desc: T('uDescCiberseg'),    chip: T('allCycles') },
    'agua':        { title: T('uTitleAgua'),         desc: T('uDescAgua'),         chip: T('allCycles') },
    'ar':          { title: T('uTitleAr'),           desc: T('uDescAr'),           chip: T('allCycles') },
    'ambiente':    { title: T('uTitleAmbiente'),     desc: T('uDescAmbiente'),     chip: T('allCycles') },
    'ciberseguras':{ title: T('uTitleCiberseguras'), desc: T('uDescCiberseguras'), chip: T('allCycles') },
    'escape':      { title: T('uTitleEscape'),       desc: T('uDescEscape'),       chip: T('allCycles') },
    'escaperooms': { title: T('uTitleEscapeRooms'),  desc: T('uDescEscapeRooms'),  chip: null },
  };
  document.querySelectorAll('.universe-card[data-universe]').forEach(card => {
    const uid = card.getAttribute('data-universe');
    const m = uCardMap[uid]; if(!m) return;
    const titleEl = card.querySelector('.u-title');
    const descEl  = card.querySelector('.u-desc');
    const firstChip = card.querySelector('.u-chip');
    if(titleEl) titleEl.textContent = m.title;
    if(descEl)  descEl.textContent  = m.desc;
    if(firstChip && m.chip) firstChip.textContent = m.chip;
  });
  // Menu screen header
  const mh2 = document.querySelector('#menu-screen .menu-header h2');
  if(mh2) mh2.textContent = T('chooseYourCycle');
  const mp = document.querySelector('#menu-screen .menu-header p');
  if(mp) mp.textContent = T('cycleMenuDesc');
}

/* ============================= ROBOT SVG ============================= */
// The robot faces UP (direction 0). A bright arrow triangle points to the top
// so rotation by 0/90/180/270 deg makes the facing direction crystal-clear.

/* ============================= VANBERTO (canvas) =============================
   Desenho do robô portado de "Cibersegurança — Programação!". Na grelha é um
   canvas vivo (piscar, braços, dança); no resto da página usa-se uma imagem
   estática desenhada pelo mesmo código, para o robô ser igual em todo o lado. */
  function rrVan(ctx,x,y,w,h,r){
    const rr=Math.min(r,w/2,h/2);
    ctx.beginPath();ctx.moveTo(x+rr,y);ctx.arcTo(x+w,y,x+w,y+h,rr);ctx.arcTo(x+w,y+h,x,y+h,rr);ctx.arcTo(x,y+h,x,y,rr);ctx.arcTo(x,y,x+w,y,rr);ctx.closePath();
  }
  function cfVan(ctx,x,y,r,color){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();}

  window.drawVanBerto=drawVanBerto;
  function drawVanBerto(ctx,blink,step,armsUp){
    const w=96,h=96;
    ctx.clearRect(0,0,w,h);
    ctx.lineJoin="round"; ctx.lineCap="round";
    ctx.save(); ctx.translate(0,6);
    const NAVY="#16233e", NAVY2="#26365a", OUT="#101a30";
    function white(x0,y0,x1,y1){const g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,"#ffffff");g.addColorStop(0.55,"#e6edf7");g.addColorStop(1,"#b4c4dc");return g;}

    const LIFT=8, STRIDE=3;
    let lTop=70, rTop=70, lDX=0, rDX=0;
    if(step===0){ lTop=70-LIFT; lDX=STRIDE; rDX=-STRIDE; }
    else if(step===1){ rTop=70-LIFT; rDX=STRIDE; lDX=-STRIDE; }
    function leg(cx,top){
      rrVan(ctx,cx-5,top,10,11,4.5); ctx.fillStyle=white(cx-5,top,cx+5,top); ctx.fill();
      ctx.lineWidth=2.6; ctx.strokeStyle=OUT; ctx.stroke();
      const fy=top+9;
      rrVan(ctx,cx-6.5,fy,13,9,4); ctx.fillStyle=NAVY; ctx.fill();
      ctx.lineWidth=2.6; ctx.strokeStyle=OUT; ctx.stroke();
      rrVan(ctx,cx-6.5,fy+2,13,2.4,1.2); ctx.fillStyle="rgba(255,255,255,0.85)"; ctx.fill();
      cfVan(ctx,cx-2.5,fy+4.5,1.4,"rgba(255,255,255,0.5)");
    }
    leg(41+lDX,lTop); leg(55+rDX,rTop);

    const ARM_SWING = 0.24;
    const JUMP_RAISE = 2.9;
    let lArmSwing = 0, rArmSwing = 0;
    if(armsUp){ lArmSwing = JUMP_RAISE; rArmSwing = -JUMP_RAISE; }
    else if(step===0){ lArmSwing=-ARM_SWING; rArmSwing=ARM_SWING; }
    else if(step===1){ lArmSwing=ARM_SWING; rArmSwing=-ARM_SWING; }
    function arm(sx,swing){
      ctx.save();
      const px=sx+4.5, py=52;
      ctx.translate(px,py); ctx.rotate(swing); ctx.translate(-px,-py);
      rrVan(ctx,sx,52,9,13,4.5); ctx.fillStyle=white(sx,52,sx+9,52); ctx.fill();
      ctx.lineWidth=2.6; ctx.strokeStyle=OUT; ctx.stroke();
      const hx=sx+4.5, hy=67;
      cfVan(ctx,hx,hy,5,NAVY);
      ctx.lineWidth=2.3; ctx.strokeStyle=OUT; ctx.beginPath(); ctx.arc(hx,hy,5,0,Math.PI*2); ctx.stroke();
      cfVan(ctx,hx-2,hy+1.6,1.4,NAVY2); cfVan(ctx,hx+0.5,hy+2.4,1.4,NAVY2); cfVan(ctx,hx+2.5,hy+1.6,1.4,NAVY2);
      ctx.restore();
    }
    arm(17,lArmSwing); arm(70,rArmSwing);

    rrVan(ctx,26,44,44,32,15); ctx.fillStyle=white(28,46,68,46); ctx.fill();
    ctx.save(); rrVan(ctx,26,44,44,32,15); ctx.clip();
    const wg=ctx.createLinearGradient(0,64,0,76); wg.addColorStop(0,"rgba(22,35,62,0)"); wg.addColorStop(0.4,"#1c2c4c"); wg.addColorStop(1,"#142038");
    ctx.fillStyle=wg; ctx.fillRect(26,62,44,16);
    ctx.strokeStyle="rgba(16,26,48,0.6)"; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(28,64); ctx.lineTo(68,64); ctx.stroke();
    ctx.fillStyle="rgba(255,255,255,0.5)"; ctx.beginPath(); ctx.ellipse(36,52,9,5.5,-0.5,0,Math.PI*2); ctx.fill();
    ctx.restore();
    ctx.lineWidth=3; ctx.strokeStyle=OUT; rrVan(ctx,26,44,44,32,15); ctx.stroke();

    cfVan(ctx,48,56,8,NAVY);
    ctx.lineWidth=2.5; ctx.strokeStyle=OUT; ctx.beginPath(); ctx.arc(48,56,8,0,Math.PI*2); ctx.stroke();
    const dome=ctx.createRadialGradient(45.5,53.5,1,48,56,7); dome.addColorStop(0,"#aebccf"); dome.addColorStop(0.6,"#5a6a85"); dome.addColorStop(1,"#2b3a57");
    ctx.fillStyle=dome; ctx.beginPath(); ctx.arc(48,56,5.7,0,Math.PI*2); ctx.fill();
    cfVan(ctx,46,53.8,1.5,"rgba(255,255,255,0.85)");

    function pod(cx){
      cfVan(ctx,cx,32,6,NAVY);
      ctx.lineWidth=2.3; ctx.strokeStyle=OUT; ctx.beginPath(); ctx.arc(cx,32,6,0,Math.PI*2); ctx.stroke();
      cfVan(ctx,cx,32,2.8,NAVY2); cfVan(ctx,cx-0.8,31,1,"rgba(255,255,255,0.6)");
    }
    pod(25); pod(71);

    ctx.fillStyle=NAVY; ctx.beginPath(); ctx.moveTo(45,16); ctx.lineTo(51,16); ctx.lineTo(49.2,8); ctx.lineTo(46.8,8); ctx.closePath(); ctx.fill();
    const halo=ctx.createRadialGradient(48,5,1,48,5,11); halo.addColorStop(0,"rgba(90,200,255,0.55)"); halo.addColorStop(1,"rgba(90,200,255,0)");
    ctx.fillStyle=halo; ctx.beginPath(); ctx.arc(48,5,11,0,Math.PI*2); ctx.fill();
    const bg=ctx.createRadialGradient(46.3,3.5,0.5,48,5,5.5); bg.addColorStop(0,"#e6f7ff"); bg.addColorStop(0.4,"#48b4ff"); bg.addColorStop(1,"#1670d8");
    ctx.fillStyle=bg; ctx.beginPath(); ctx.arc(48,5,5.5,0,Math.PI*2); ctx.fill();
    cfVan(ctx,46.2,3.4,1.6,"#ffffff");

    rrVan(ctx,26,14,44,34,17); ctx.fillStyle=white(28,15,68,15); ctx.fill();
    ctx.lineWidth=3; ctx.strokeStyle=OUT; ctx.stroke();
    ctx.save(); rrVan(ctx,26,14,44,34,17); ctx.clip();
    ctx.fillStyle="rgba(255,255,255,0.6)"; ctx.beginPath(); ctx.ellipse(38,19,10,4,-0.5,0,Math.PI*2); ctx.fill(); ctx.restore();

    rrVan(ctx,30,20,36,23,12); ctx.fillStyle=NAVY; ctx.fill();
    rrVan(ctx,32.5,22,31,19,10);
    const vg=ctx.createLinearGradient(0,22,0,41); vg.addColorStop(0,"#7fd4ff"); vg.addColorStop(0.5,"#2a9bf0"); vg.addColorStop(1,"#1366c6");
    ctx.fillStyle=vg; ctx.fill();
    ctx.save(); rrVan(ctx,32.5,22,31,19,10); ctx.clip();
    ctx.fillStyle="rgba(255,255,255,0.45)"; ctx.beginPath(); ctx.ellipse(42,25,9,3.5,-0.4,0,Math.PI*2); ctx.fill(); ctx.restore();

    if(!blink){
      ctx.fillStyle="#0a0f1c";
      ctx.beginPath(); ctx.ellipse(41,30,3.3,4,0,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(55,30,3.3,4,0,0,Math.PI*2); ctx.fill();
      cfVan(ctx,42.3,28.4,1.5,"#fff"); cfVan(ctx,39.9,31,0.8,"#fff");
      cfVan(ctx,56.3,28.4,1.5,"#fff"); cfVan(ctx,53.9,31,0.8,"#fff");
    } else if(blink==="happy"){
      ctx.lineWidth=3.2; ctx.strokeStyle="#0a0f1c"; ctx.lineCap="round";
      ctx.beginPath(); ctx.arc(41,31,3.9,0.10*Math.PI,0.90*Math.PI); ctx.stroke();
      ctx.beginPath(); ctx.arc(55,31,3.9,0.10*Math.PI,0.90*Math.PI); ctx.stroke();
      cfVan(ctx,33.5,35.5,3,"rgba(255,120,120,0.55)");
      cfVan(ctx,62.5,35.5,3,"rgba(255,120,120,0.55)");
    } else {
      ctx.lineWidth=3; ctx.strokeStyle="#0a0f1c";
      ctx.beginPath(); ctx.arc(41,31,3.5,0.15*Math.PI,0.85*Math.PI); ctx.stroke();
      ctx.beginPath(); ctx.arc(55,31,3.5,0.15*Math.PI,0.85*Math.PI); ctx.stroke();
    }
    ctx.fillStyle="#0a0f1c";
    if(blink==="happy"){
      ctx.beginPath(); ctx.ellipse(48,36,6.2,4.2,0,0,Math.PI); ctx.fill();
      ctx.fillStyle="#ff7a7a";
      ctx.beginPath(); ctx.ellipse(48,38,3.2,1.9,0,0,Math.PI); ctx.fill();
    } else {
      ctx.beginPath(); ctx.ellipse(48,36,4.6,3.2,0,0,Math.PI); ctx.fill();
      ctx.fillStyle="#ff7a7a";
      ctx.beginPath(); ctx.ellipse(48,37.4,2.4,1.5,0,0,Math.PI); ctx.fill();
    }
    ctx.restore();
  }

  /* ── Helpers de expressão para qualquer canvas do VanBerto (grelha, dpad, etc.) ── */
  function vbFlashPose(canvas, blink, step, armsUp, duration){
    if(!canvas) return;
    const ctx=canvas.getContext && canvas.getContext('2d'); if(!ctx) return;
    drawVanBerto(ctx, blink, step, armsUp);
    setTimeout(()=>{ drawVanBerto(ctx,false,-1,false); }, duration||450);
  }
  function vbDanceSequence(canvas, cycles){
    if(!canvas) return;
    const ctx=canvas.getContext && canvas.getContext('2d'); if(!ctx) return;
    let i=0; const total=(cycles||4)*2;
    drawVanBerto(ctx,'happy',0,true);
    const iv=setInterval(()=>{
      i++;
      if(i>=total){ clearInterval(iv); drawVanBerto(ctx,false,-1,false); return; }
      drawVanBerto(ctx,'happy', i%2===0?0:1, i%2===0);
    },170);
  }


const VB_ROBOT_CANVAS_HTML='<canvas class="grid-vb-robot" width="96" height="96" aria-hidden="true"></canvas>';

const VANBERTO_SVG = "";   // robô só na grelha e na mascote do canto

// Popup version — exact same SVG as index.html (Adivinha a Capital) where animations work reliably
function VANBERTO_POPUP_SVG(){ return ""; }   // sem robô duplicado em popups/cabeçalhos

/* ============================= ALL UNIVERSE DATA ============================= */
const ALL_UNIVERSES = {

  ciberseg: {
    id: "ciberseg",
    name: "Segurança na Internet",
    emoji: "🔒",
    badge: "🔒 Segurança na Internet · Pensamento computacional",
    menuTitle: "Programa o robô e protege-te online!",
    menuDesc: "Guia o VanBerto's por missões reais de cibersegurança.",
    colors: { primary:"#6366f1", rgb:"99,102,241", dark:"#3730a3", soft:"rgba(99,102,241,0.12)", bg1:"#e0e7ff", bg2:"#f0f0ff" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: { "1c":"Comandos imediatos", "2c":"Sequência · Planeamento", "3c":"Sequência + otimização", "sec":"Estratégia e eficiência" },
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        oceanos: { name:"Palavra-passe Forte", emoji:"🔑🧠", itemEmojis:["🔠","🔢","🔣"], obstacleEmoji:"⚠️",
          levels:[
            {size:5,robot:[4,2],items:[[2,2]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"🔑 Uma boa palavra-passe tem letras E números. Recolhe as peças e guarda no cofre!"},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"⚠️ Palavras simples como '123456' são perigosas! Evita os obstáculos e recolhe os símbolos seguros."},
            {size:6,robot:[5,5],items:[[4,1],[3,4],[2,5]],deposit:[[0,0]],obstacles:[[3,2],[3,5],[1,3]],difficulty:"Difícil",desc:"🛡️ Uma palavra-passe forte tem 12+ caracteres com letras, números e símbolos! Junta tudo no cofre."}
          ]},
        torneira: { name:"Anti-Phishing", emoji:"🎣🚫", itemEmojis:["🔗","📧","🕵️"], obstacleEmoji:"❗",
          levels:[
            {size:5,robot:[4,0],items:[[2,1]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"🎣 Phishing = emails falsos que tentam roubar os teus dados. Apanha o link suspeito e elimina-o!"},
            {size:5,robot:[4,0],items:[[3,2],[1,3]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"📧 Nunca cliques em links de emails que não esperavas! Evita os obstáculos e filtra as mensagens."},
            {size:6,robot:[5,1],items:[[4,3],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"🕵️ Sinais de phishing: erros ortográficos, urgência, pedidos de dados. Recolhe todos e confirma!"}
          ]},
        ribeira: { name:"Privacidade e Dados", emoji:"🛡️🔒", itemEmojis:["📍","📸","🪪"], obstacleEmoji:"👀",
          levels:[
            {size:5,robot:[4,1],items:[[2,1]],deposit:[[0,3]],obstacles:[],difficulty:"Fácil",desc:"🛡️ Dados pessoais (nome, morada, escola) devem ser protegidos. Guarda-os em segurança!"},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,3]],obstacles:[[2,2]],difficulty:"Médio",desc:"👀 Não partilhes a tua localização ou escola online! Evita os curiosos e guarda os teus dados."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,4]],obstacles:[[3,1],[2,2],[2,3]],difficulty:"Difícil",desc:"🔒 Privacidade online = escolher o que partilhas e com quem. Protege todos os teus dados pessoais!"}
          ]},
        redes: { name:"Redes Sociais", emoji:"📱🗣️", itemEmojis:["✅","🙅‍♂️","🔒"], obstacleEmoji:"🚫",
          levels:[
            {size:5,robot:[4,2],items:[[2,1]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"📱 Perfil privado = só os teus amigos veem. Recolhe as boas escolhas e guarda no teu perfil seguro!"},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"🚫 Nunca aceites pedidos de desconhecidos! Evita-os e escolhe apenas partilhas que não revelam dados."},
            {size:6,robot:[5,5],items:[[4,1],[3,4],[2,5]],deposit:[[0,0]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"🗣️ Nas redes sociais: perfil privado, sem dados pessoais, sem aceitar estranhos. Protege tudo!"}
          ]},
        jogos: { name:"Jogos Online", emoji:"🎮🔒", itemEmojis:["🎮","🕹️","🏆"], obstacleEmoji:"💢",
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"🎮 Nos jogos online: respeita os outros, não partilhes a tua password! Recolhe as regras seguras."},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"💢 Ciberbullying nos jogos é crime! Evita conflitos e bloqueia quem se comporta mal."},
            {size:6,robot:[5,1],items:[[4,3],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[2,3]],difficulty:"Difícil",desc:"🏆 Nunca dês a tua password a outro jogador. Protege a conta e trata todos com respeito!"}
          ]}
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        fugas: { name:"Downloads Seguros", emoji:"⬇️✅", itemEmojis:["📄","🧩","🧰"], obstacleEmoji:"❗",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,1]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"⬇️ Só faz download de sites oficiais e conhecidos. Planeia a sequência para evitar ficheiros maliciosos!"},
            {size:7,robot:[6,0],items:[[5,4],[3,5],[2,2]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,4]],difficulty:"Médio",desc:"🦠 Malware esconde-se em downloads falsos. Cria uma sequência eficiente e evita as armadilhas!"},
            {size:7,robot:[6,1],items:[[5,5],[4,1],[3,6],[2,3]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],difficulty:"Difícil",desc:"✅ Antes de descarregar: verifica o site, lê as avaliações e confirma a origem. Sem atalhos perigosos!"}
          ]},
        tratamento: { name:"Mensagens e Golpes", emoji:"📩🛑", itemEmojis:["💬","🧾","🔐"], obstacleEmoji:"🚫",
          levels:[
            {size:6,robot:[5,1],items:[[4,3],[2,4]],deposit:[[0,2]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"📩 Mensagens a pedir dinheiro ou dados urgentes são golpes! Leva os alertas ao centro de verificação."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"🛑 Nunca cliques em links de mensagens não esperadas. Confirma sempre com a pessoa diretamente!"},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[3,2],[2,4]],deposit:[[0,5]],obstacles:[[4,2],[4,3],[3,3],[2,2],[1,4]],difficulty:"Difícil",desc:"🔐 Golpes online usam urgência e medo. Mantém a calma, confirma a fonte e nunca partilhes dados!"}
          ]},
        nascente: { name:"Ciberbullying", emoji:"🤝🧡", itemEmojis:["🆘","📵","🚫"], obstacleEmoji:"💢",
          levels:[
            {size:6,robot:[5,2],items:[[4,1],[2,3]],deposit:[[0,4]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"🆘 Ciberbullying = agressão online. Guarda as provas (screenshot) e conta a um adulto de confiança!"},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"📵 Se fores vítima online: bloqueia, denuncia e pede ajuda. Nunca respondas com agressividade!"},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[2,5]],difficulty:"Difícil",desc:"🤝 Trata os outros online como gostavas de ser tratado. Ciberbullying tem consequências reais!"}
          ]}
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        escola: { name:"Pegada Digital", emoji:"👣🌐", itemEmojis:["📋","🔧","🔒"], obstacleEmoji:"❗",
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"👣 A tua pegada digital são todos os rastos que deixas online. Recolhe e controla o que fica público!"},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],difficulty:"Difícil",desc:"🌐 Tudo o que publicas pode ficar online para sempre. Pensa antes de publicar — é a tua reputação!"},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"🔍 Empregadores e escolas pesquisam perfis online. Otimiza a tua sequência e cuida da tua imagem digital!"}
          ]},
        rota: { name:"Definições de Conta", emoji:"⚙️🔐", itemEmojis:["📩","🧫","🔒"], obstacleEmoji:"🚫",
          levels:[
            {size:7,robot:[6,2],items:[[5,4],[3,5],[2,1]],deposit:[[0,4]],obstacles:[[4,3],[4,4],[3,3],[2,4]],difficulty:"Médio",desc:"⚙️ Configurar privacidade nas definições é essencial. Activa autenticação em dois passos (2FA)!"},
            {size:8,robot:[7,2],items:[[6,6],[4,1],[3,6],[2,2]],deposit:[[0,4]],obstacles:[[5,4],[5,5],[4,4],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"🔐 2FA (dois fatores) = password + código no telemóvel. Muito mais seguro! Planeia e activa."},
            {size:8,robot:[7,3],items:[[6,1],[6,7],[4,6],[2,2],[1,5]],deposit:[[0,4]],obstacles:[[5,4],[4,4],[3,4],[2,5],[2,3],[1,3]],difficulty:"Desafio",desc:"🛡️ Revê as definições de segurança regularmente. Um caminho eficiente protege a tua conta!"}
          ]},
        seca: { name:"Segurança em Redes", emoji:"📱🛡️", itemEmojis:["📦","🔒","🔑"], obstacleEmoji:"💢",
          levels:[
            {size:7,robot:[6,1],items:[[5,5],[4,2],[2,4]],deposit:[[0,6]],obstacles:[[5,3],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"📱 Wi-Fi público não é seguro para dados pessoais. Usa VPN ou dados móveis em locais públicos!"},
            {size:8,robot:[7,1],items:[[6,6],[5,2],[4,7],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,4],[2,5],[1,5]],difficulty:"Difícil",desc:"🔒 HTTPS = ligação encriptada. Verifica sempre o cadeado no browser antes de inserir dados!"},
            {size:8,robot:[7,2],items:[[6,7],[6,1],[4,6],[3,1],[2,5],[1,7]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"🛡️ Redes seguras: senha forte no router, WPA3, firmware atualizado. Minimiza os riscos!"}
          ]}
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        rede: { name:"Incidente Digital", emoji:"🚨💻", itemEmojis:["🛰️","🔧","🔒"], obstacleEmoji:"🚫",
          levels:[
            {size:8,robot:[7,1],items:[[6,6],[4,2],[3,5],[2,3]],deposit:[[0,7]],obstacles:[[5,4],[5,5],[4,5],[4,4],[3,4],[2,6],[1,6]],difficulty:"Difícil",desc:"🚨 Plano de resposta a incidentes: isolar, reportar, analisar, recuperar. Monitoriza e actua rápido!"},
            {size:8,robot:[7,0],items:[[6,5],[5,2],[4,6],[3,1],[2,4]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,3],[2,3],[1,4],[1,5]],difficulty:"Desafio",desc:"💻 Em caso de ataque: desliga da rede, preserva evidências, notifica o responsável. Otimiza a resposta!"}
          ]},
        eficiencia: { name:"Gestão de Risco", emoji:"📊🛡️", itemEmojis:["📈","📋","🔒"], obstacleEmoji:"❗",
          levels:[
            {size:8,robot:[7,2],items:[[6,6],[5,1],[4,5],[2,2],[1,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[3,5],[2,5],[1,5]],difficulty:"Difícil",desc:"📊 Gestão de risco = identificar ameaças × probabilidade × impacto. Recolhe os dados e prioriza!"},
            {size:9,robot:[8,1],items:[[7,7],[6,2],[5,6],[3,1],[2,6],[1,3]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,5],[3,5],[2,5],[1,6]],difficulty:"Desafio",desc:"🛡️ Mitigação de risco: aceitar, transferir, reduzir ou eliminar. Minimiza movimentos e maximiza proteção!"}
          ]},
        logistica: { name:"Estratégia de Segurança", emoji:"🧭🔒", itemEmojis:["📩","📦","🔒"], obstacleEmoji:"💢",
          levels:[
            {size:8,robot:[7,3],items:[[6,7],[5,1],[4,6],[3,2],[2,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[2,4],[1,5],[1,6]],difficulty:"Difícil",desc:"🧭 Estratégia de segurança: políticas, formação, tecnologia e processos. Prioriza os recursos críticos!"},
            {size:9,robot:[8,2],items:[[7,8],[7,1],[6,6],[5,2],[3,7],[2,3]],deposit:[[0,8]],obstacles:[[8,5],[7,5],[6,5],[5,5],[4,6],[3,6],[2,6],[1,7]],difficulty:"Desafio",desc:"🔒 Defesa em profundidade = múltiplas camadas de segurança. Planeia por etapas e não deixes brechas!"}
          ]}
      }}
    }
  },

  agua: {
    id: "agua",
    name: "Missões da Água",
    emoji: "💧",
    badge: "💧 Ambiente · Água · Pensamento computacional",
    menuTitle: "Programa o robô e protege a água!",
    menuDesc: "Limpa oceanos, repara fugas e preserva as nascentes.",
    colors: { primary:"#0ea5e9", rgb:"14,165,233", dark:"#0369a1", soft:"rgba(14,165,233,0.12)", bg1:"#e0f2fe", bg2:"#f0f9ff" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: { "1c":"Comandos imediatos", "2c":"Sequência · Planeamento", "3c":"Sequência + otimização", "sec":"Estratégia e eficiência" },
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        oceanos: { name:"Oceano Limpo", emoji:"🌊🐢", itemEmojis:["🧴","🛍️","🥤"], obstacleEmoji:"🪨",
          levels:[
            {size:5,robot:[4,2],items:[[2,2]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"Recolhe o plástico no mar e leva ao barco."},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"Limpa o oceano evitando a rocha."},
            {size:6,robot:[5,5],items:[[4,1],[3,4],[2,5]],deposit:[[0,0]],obstacles:[[3,2],[3,5],[1,3]],difficulty:"Difícil",desc:"Mais lixo no mar. Planeia a rota."}
          ]},
        torneira: { name:"Fecha a Torneira", emoji:"🚰💧", itemEmojis:["💧","🧽","🧰"], obstacleEmoji:"🚧",
          levels:[
            {size:5,robot:[4,0],items:[[2,1]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Recolhe a gota a pingar e leva ao ponto de reparação."},
            {size:5,robot:[4,0],items:[[3,2],[1,3]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"Há obras. Evita o obstáculo e poupa água."},
            {size:6,robot:[5,1],items:[[4,3],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"Recolhe as gotas e conclui a reparação."}
          ]},
        ribeira: { name:"Ribeira Limpa", emoji:"🏞️🧹", itemEmojis:["🗑️","🧴","🍬"], obstacleEmoji:"🌿",
          levels:[
            {size:5,robot:[4,1],items:[[2,1]],deposit:[[0,3]],obstacles:[],difficulty:"Fácil",desc:"Recolhe o lixo e deposita no contentor."},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,3]],obstacles:[[2,2]],difficulty:"Médio",desc:"A ribeira tem arbustos. Contorna e mantém a água limpa."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,4]],obstacles:[[3,1],[2,2],[2,3]],difficulty:"Difícil",desc:"Mais lixo perto da ribeira. Protege os animais."}
          ]}
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        fugas: { name:"Fugas e Reparação", emoji:"🧯🚰", itemEmojis:["💧","🧰","🔧"], obstacleEmoji:"🚧",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,1]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Planeia sequência para fechar fugas."},
            {size:7,robot:[6,0],items:[[5,4],[3,5],[2,2]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,4]],difficulty:"Médio",desc:"Há mais fugas e obras. Faz sequência eficiente."},
            {size:7,robot:[6,1],items:[[5,5],[4,1],[3,6],[2,3]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],difficulty:"Difícil",desc:"Evita becos e conclui a reparação."}
          ]},
        tratamento: { name:"Tratamento da Água", emoji:"🧪💧", itemEmojis:["🧫","🧪","🧴"], obstacleEmoji:"⛔",
          levels:[
            {size:6,robot:[5,1],items:[[4,3],[2,4]],deposit:[[0,2]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva as amostras à estação de tratamento."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Evita zonas interditas e entrega as amostras."},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[3,2],[2,4]],deposit:[[0,5]],obstacles:[[4,2],[4,3],[3,3],[2,2],[1,4]],difficulty:"Difícil",desc:"Muitas amostras e bloqueios."}
          ]},
        nascente: { name:"Protege a Nascente", emoji:"⛰️💧", itemEmojis:["🚯","🧴","🗑️"], obstacleEmoji:"🔥",
          levels:[
            {size:6,robot:[5,2],items:[[4,1],[2,3]],deposit:[[0,4]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Remove focos de poluição e leva ao contentor."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Evita zonas perigosas e protege a nascente."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[2,5]],difficulty:"Difícil",desc:"Muito lixo e obstáculos. Sequência eficiente!"}
          ]}
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        escola: { name:"Água na Escola", emoji:"🏫💧", itemEmojis:["📋","🔧","💧"], obstacleEmoji:"🚧",
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Recolhe registos e ferramentas."},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],difficulty:"Difícil",desc:"Mais pontos de desperdício. Sequência eficiente."},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"Otimiza o percurso."}
          ]},
        rota: { name:"Rota da Água", emoji:"🗺️💧", itemEmojis:["🧪","🧫","💧"], obstacleEmoji:"⛔",
          levels:[
            {size:7,robot:[6,2],items:[[5,4],[3,5],[2,1]],deposit:[[0,4]],obstacles:[[4,3],[4,4],[3,3],[2,4]],difficulty:"Médio",desc:"Leva amostras ao laboratório."},
            {size:8,robot:[7,2],items:[[6,6],[4,1],[3,6],[2,2]],deposit:[[0,4]],obstacles:[[5,4],[5,5],[4,4],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Mais amostras e bloqueios."},
            {size:8,robot:[7,3],items:[[6,1],[6,7],[4,6],[2,2],[1,5]],deposit:[[0,4]],obstacles:[[5,4],[4,4],[3,4],[2,5],[2,3],[1,3]],difficulty:"Desafio",desc:"Caminho eficiente ao laboratório."}
          ]},
        seca: { name:"Crise de Seca", emoji:"☀️💧", itemEmojis:["📦","💧","🚰"], obstacleEmoji:"🔥",
          levels:[
            {size:7,robot:[6,1],items:[[5,5],[4,2],[2,4]],deposit:[[0,6]],obstacles:[[5,3],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Distribui recursos essenciais."},
            {size:8,robot:[7,1],items:[[6,6],[5,2],[4,7],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,4],[2,5],[1,5]],difficulty:"Difícil",desc:"Seca agravada: evita zonas perigosas."},
            {size:8,robot:[7,2],items:[[6,7],[6,1],[4,6],[3,1],[2,5],[1,7]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Entrega tudo com mínimo de comandos."}
          ]}
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        rede: { name:"Rede Urbana", emoji:"🏙️💧", itemEmojis:["🛰️","🔧","💧"], obstacleEmoji:"⛔",
          levels:[
            {size:9,robot:[8,1],items:[[7,7],[5,2],[3,6],[2,3]],deposit:[[0,8]],obstacles:[[6,4],[6,5],[5,5],[4,4],[3,4],[2,6],[1,6]],difficulty:"Difícil",desc:"Monitoriza falhas e entrega no centro."},
            {size:9,robot:[8,0],items:[[7,6],[6,2],[4,7],[3,1],[2,5]],deposit:[[0,8]],obstacles:[[7,3],[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Rede congestionada. Otimiza a rota."}
          ]},
        eficiencia: { name:"Eficiência Hídrica", emoji:"📊💧", itemEmojis:["📈","📋","💧"], obstacleEmoji:"🚧",
          levels:[
            {size:9,robot:[8,2],items:[[7,7],[6,1],[4,6],[2,2],[1,6]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,4],[3,5],[2,5],[1,5]],difficulty:"Difícil",desc:"Recolhe dados e entrega com poucos comandos."},
            {size:10,robot:[9,1],items:[[8,8],[7,2],[6,6],[4,1],[3,7],[2,3]],deposit:[[0,9]],obstacles:[[8,4],[7,4],[6,4],[5,5],[4,5],[3,5],[2,6],[1,6]],difficulty:"Desafio",desc:"Mais dados e bloqueios: minimiza movimentos."}
          ]},
        logistica: { name:"Logística da Água", emoji:"🧭🚰", itemEmojis:["🧪","📦","💧"], obstacleEmoji:"🔥",
          levels:[
            {size:9,robot:[8,3],items:[[7,8],[6,1],[5,6],[3,2],[2,7]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,5]],difficulty:"Difícil",desc:"Entrega recursos com prioridades e risco."},
            {size:10,robot:[9,2],items:[[8,9],[8,1],[6,7],[5,2],[3,8],[2,3]],deposit:[[0,9]],obstacles:[[9,5],[8,5],[7,5],[6,5],[5,6],[4,6],[3,6],[2,7],[1,7]],difficulty:"Desafio",desc:"Caminhos longos e perigosos. Planeia por etapas."}
          ]}
      }}
    }
  },

  ar: {
    id: "ar",
    name: "Qualidade do Ar",
    emoji: "🌬️",
    badge: "🌬️ Ambiente · Ar · Pensamento computacional",
    menuTitle: "Programa o robô e melhora o ar!",
    menuDesc: "Reduz poluição, instala filtros e monitoriza a qualidade do ar.",
    colors: { primary:"#10b981", rgb:"16,185,129", dark:"#065f46", soft:"rgba(16,185,129,0.12)", bg1:"#d1fae5", bg2:"#f0fdf4" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: { "1c":"Comandos imediatos", "2c":"Sequência · Planeamento", "3c":"Sequência + otimização", "sec":"Estratégia e eficiência" },
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        cidade: { name:"Ar Limpo na Cidade", emoji:"🏙️💨", itemEmojis:["🚬","🛢️","🏭"], obstacleEmoji:"🚧",
          levels:[
            {size:5,robot:[4,2],items:[[2,2]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"Recolhe fonte de poluição e leva ao centro de recolha."},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"Reduz a poluição na cidade evitando obras."},
            {size:6,robot:[5,5],items:[[4,1],[3,4],[2,5]],deposit:[[0,0]],obstacles:[[3,2],[3,5],[1,3]],difficulty:"Difícil",desc:"Mais fontes poluentes. Planeia a rota."}
          ]},
        vento: { name:"Vento Amigo", emoji:"🌬️🍃", itemEmojis:["🍃","🪁","📟"], obstacleEmoji:"🏢",
          levels:[
            {size:5,robot:[4,0],items:[[2,1]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Recolhe um sinal e leva para ajudar o vento a circular."},
            {size:5,robot:[4,0],items:[[3,2],[1,3]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"Há edifícios a bloquear. Contorna e entrega."},
            {size:6,robot:[5,1],items:[[4,3],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"Recolhe tudo e entrega no ponto final."}
          ]},
        fumo: { name:"Sem Fumo", emoji:"🚭🔥", itemEmojis:["🚬","🧯","🌿"], obstacleEmoji:"🔥",
          levels:[
            {size:5,robot:[4,1],items:[[2,1]],deposit:[[0,3]],obstacles:[],difficulty:"Fácil",desc:"Recolhe o perigo e deposita no centro de recolha."},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,3]],obstacles:[[2,2]],difficulty:"Médio",desc:"Há zonas de risco. Evita obstáculos e melhora o ar."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,4]],obstacles:[[3,1],[2,2],[2,3]],difficulty:"Difícil",desc:"Recolhe tudo com segurança e deposita."}
          ]}
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        filtros: { name:"Filtros e Limpeza", emoji:"🧼🧰", itemEmojis:["🧼","🧰","♻️"], obstacleEmoji:"⛔",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,1]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Planeia sequência para recolher materiais e instalar filtros."},
            {size:7,robot:[6,0],items:[[5,4],[3,5],[2,2]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,4]],difficulty:"Médio",desc:"Mais pontos a tratar. Faz sequência eficiente."},
            {size:7,robot:[6,1],items:[[5,5],[4,1],[3,6],[2,3]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],difficulty:"Difícil",desc:"Evita bloqueios e conclui a instalação."}
          ]},
        sensores: { name:"Qualidade do Ar", emoji:"📟🧪", itemEmojis:["📟","🧪","📋"], obstacleEmoji:"🚧",
          levels:[
            {size:6,robot:[5,1],items:[[4,3],[2,4]],deposit:[[0,2]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva leituras e amostras ao centro de análise."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Evita zonas interditas e entrega os dados."},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[3,2],[2,4]],deposit:[[0,5]],obstacles:[[4,2],[4,3],[3,3],[2,2],[1,4]],difficulty:"Difícil",desc:"Muitas medições e bloqueios."}
          ]},
        mobilidade: { name:"Mobilidade Sustentável", emoji:"🚲🔋", itemEmojis:["🚲","🔋","🚌"], obstacleEmoji:"🚗",
          levels:[
            {size:6,robot:[5,2],items:[[4,1],[2,3]],deposit:[[0,4]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Recolhe recursos para mobilidade verde."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Há trânsito e bloqueios. Sequência eficiente."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[2,5]],difficulty:"Difícil",desc:"Recolhe tudo e entrega com poucos erros."}
          ]}
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        escola: { name:"Ar na Escola", emoji:"🏫🍃", itemEmojis:["📋","🌿","📟"], obstacleEmoji:"🚧",
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Recolhe registos e soluções."},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],difficulty:"Difícil",desc:"Mais problemas no edifício. Sequência eficiente."},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"Otimiza o percurso."}
          ]},
        mapa: { name:"Mapa de Emissões", emoji:"🗺️📈", itemEmojis:["🗺️","📈","📟"], obstacleEmoji:"⛔",
          levels:[
            {size:7,robot:[6,2],items:[[5,4],[3,5],[2,1]],deposit:[[0,4]],obstacles:[[4,3],[4,4],[3,3],[2,4]],difficulty:"Médio",desc:"Leva dados ao centro sem zonas interditas."},
            {size:8,robot:[7,2],items:[[6,6],[4,1],[3,6],[2,2]],deposit:[[0,4]],obstacles:[[5,4],[5,5],[4,4],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Mais dados e bloqueios."},
            {size:8,robot:[7,3],items:[[6,1],[6,7],[4,6],[2,2],[1,5]],deposit:[[0,4]],obstacles:[[5,4],[4,4],[3,4],[2,5],[2,3],[1,3]],difficulty:"Desafio",desc:"Rota eficiente ao centro."}
          ]},
        calor: { name:"Onda de Calor", emoji:"🔥💨", itemEmojis:["🌳","🧊","💧"], obstacleEmoji:"🔥",
          levels:[
            {size:7,robot:[6,1],items:[[5,5],[4,2],[2,4]],deposit:[[0,6]],obstacles:[[5,3],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Distribui soluções e reduz riscos."},
            {size:8,robot:[7,1],items:[[6,6],[5,2],[4,7],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,4],[2,5],[1,5]],difficulty:"Difícil",desc:"O calor agravou. Evita zonas perigosas."},
            {size:8,robot:[7,2],items:[[6,7],[6,1],[4,6],[3,1],[2,5],[1,7]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Entrega tudo com mínimo de comandos."}
          ]}
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        rede: { name:"Rede de Sensores", emoji:"📡📟", itemEmojis:["📡","📟","🛰️"], obstacleEmoji:"⛔",
          levels:[
            {size:9,robot:[8,1],items:[[7,7],[5,2],[3,6],[2,3]],deposit:[[0,8]],obstacles:[[6,4],[6,5],[5,5],[4,4],[3,4],[2,6],[1,6]],difficulty:"Difícil",desc:"Monitoriza falhas e entrega no centro."},
            {size:9,robot:[8,0],items:[[7,6],[6,2],[4,7],[3,1],[2,5]],deposit:[[0,8]],obstacles:[[7,3],[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Rede congestionada. Otimiza a rota."}
          ]},
        eficiencia: { name:"Eficiência Energética", emoji:"📊💡", itemEmojis:["🔋","📊","💡"], obstacleEmoji:"🚧",
          levels:[
            {size:9,robot:[8,2],items:[[7,7],[6,1],[4,6],[2,2],[1,6]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,4],[3,5],[2,5],[1,5]],difficulty:"Difícil",desc:"Recolhe dados e soluções."},
            {size:10,robot:[9,1],items:[[8,8],[7,2],[6,6],[4,1],[3,7],[2,3]],deposit:[[0,9]],obstacles:[[8,4],[7,4],[6,4],[5,5],[4,5],[3,5],[2,6],[1,6]],difficulty:"Desafio",desc:"Mais dados e bloqueios."}
          ]},
        logistica: { name:"Logística Verde", emoji:"🚚🌿", itemEmojis:["🚚","🌿","🔋"], obstacleEmoji:"🔥",
          levels:[
            {size:9,robot:[8,3],items:[[7,8],[6,1],[5,6],[3,2],[2,7]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,5]],difficulty:"Difícil",desc:"Entrega recursos com prioridades e risco."},
            {size:10,robot:[9,2],items:[[8,9],[8,1],[6,7],[5,2],[3,8],[2,3]],deposit:[[0,9]],obstacles:[[9,5],[8,5],[7,5],[6,5],[5,6],[4,6],[3,6],[2,7],[1,7]],difficulty:"Desafio",desc:"Caminhos longos e perigosos."}
          ]}
      }}
    }
  },

  ambiente: {
    id: "ambiente",
    name: "Missões Ambientais",
    emoji: "🌱",
    badge: "🌱 Pensamento computacional · Ambiente",
    menuTitle: "Programa o robô e cuida do planeta!",
    menuDesc: "Floresta, reciclagem, oceanos e muito mais.",
    colors: { primary:"#f59e0b", rgb:"245,158,11", dark:"#92400e", soft:"rgba(245,158,11,0.12)", bg1:"#fef3c7", bg2:"#fffbeb" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: { "1c":"Comandos imediatos", "2c":"Sequência · Planeamento", "3c":"Sequência + otimização", "sec":"Estratégia e eficiência" },
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        robo: { name:"Robô & Ambiente", emoji:"🌱", itemEmojis:["🍃","🍂","🌸"], obstacleEmoji:"⛰️",
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Recolhe a folha e leva ao contentor."},
            {size:5,robot:[4,0],items:[[3,2],[1,3]],deposit:[[0,4]],obstacles:[[2,1]],difficulty:"Médio",desc:"Recolhe as folhas e contorna o obstáculo."},
            {size:5,robot:[4,0],items:[[3,1],[1,2],[2,3]],deposit:[[0,4]],obstacles:[[2,1],[3,3]],difficulty:"Difícil",desc:"Mais folhas espalhadas. Planeia bem o caminho."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,5]],obstacles:[[3,1],[2,2],[2,4]],difficulty:"Difícil",desc:"O jardim é maior. Usa o mínimo de comandos."},
            {size:6,robot:[5,1],items:[[4,3],[3,1],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,2],[3,3],[2,1],[1,4]],difficulty:"Desafio",desc:"Último desafio do jardim!"}
          ]},
        oceanos: { name:"Oceanos", emoji:"🌊🐠", itemEmojis:["🐚","🪸","🧴"], obstacleEmoji:"🪨",
          levels:[
            {size:5,robot:[4,2],items:[[2,2]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"Recolhe o resíduo no mar e leva ao barco."},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"Limpa o oceano evitando a rocha."},
            {size:5,robot:[4,4],items:[[3,1],[1,3],[2,4]],deposit:[[0,0]],obstacles:[[2,2],[3,3]],difficulty:"Difícil",desc:"Mais plástico no mar. Evita as rochas."},
            {size:6,robot:[5,4],items:[[4,1],[3,3],[2,4]],deposit:[[0,0]],obstacles:[[3,2],[3,4],[1,2]],difficulty:"Difícil",desc:"O mar é maior. Planeia a rota."},
            {size:6,robot:[5,5],items:[[4,1],[4,3],[2,4],[1,1]],deposit:[[0,0]],obstacles:[[3,2],[3,4],[2,2],[1,3]],difficulty:"Desafio",desc:"Último desafio no oceano!"}
          ]},
        cidade: { name:"Cidade Sustentável", emoji:"🏙️♻️", itemEmojis:["🗑️","♻️","🚮"], obstacleEmoji:"🚧",
          levels:[
            {size:5,robot:[4,1],items:[[2,1]],deposit:[[0,3]],obstacles:[],difficulty:"Fácil",desc:"Leva o lixo ao ecoponto da cidade."},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,3]],obstacles:[[2,2]],difficulty:"Médio",desc:"Há mais lixo e obras. Planeia o caminho."},
            {size:5,robot:[4,1],items:[[3,3],[1,1],[2,4]],deposit:[[0,3]],obstacles:[[2,2],[3,2]],difficulty:"Difícil",desc:"A cidade está mais cheia de resíduos."},
            {size:6,robot:[5,1],items:[[4,3],[3,4],[1,2]],deposit:[[0,4]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"As ruas estão em obras. Encontra caminho seguro."},
            {size:6,robot:[5,0],items:[[4,2],[4,4],[2,1],[1,3]],deposit:[[0,4]],obstacles:[[3,1],[3,3],[2,3],[1,1]],difficulty:"Desafio",desc:"Último desafio da cidade!"}
          ]},
        natal: { name:"Natal Mágico", emoji:"🎄✨", itemEmojis:["🎄","🧦","✨"], obstacleEmoji:"🪵",
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Recolhe os enfeites e leva junto da árvore."},
            {size:5,robot:[4,0],items:[[3,1],[1,3]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"Recolhe enfeites e contorna os troncos."},
            {size:5,robot:[4,0],items:[[3,1],[1,3],[2,4]],deposit:[[0,4]],obstacles:[[2,2],[3,3]],difficulty:"Difícil",desc:"Mais presentes espalhados."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,5]],obstacles:[[3,1],[2,2],[2,4]],difficulty:"Difícil",desc:"A sala de Natal é maior."},
            {size:6,robot:[5,1],items:[[4,3],[4,5],[2,2],[1,4]],deposit:[[0,5]],obstacles:[[4,2],[3,3],[2,4],[1,2]],difficulty:"Desafio",desc:"Grande desafio de Natal!"}
          ]}
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        reciclagem: { name:"Reciclagem", emoji:"♻️🗑️", itemEmojis:["📦","🛢️","♻️"], obstacleEmoji:"🚧",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,1]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva as caixas ao ecoponto, evitando obras."},
            {size:6,robot:[5,0],items:[[4,4],[2,1],[1,3]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[4,1]],difficulty:"Médio",desc:"Mais resíduos e obstáculos."},
            {size:6,robot:[5,0],items:[[4,4],[3,1],[2,3],[1,4]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[4,1],[2,2]],difficulty:"Difícil",desc:"Caixas em vários pontos. Melhor sequência."},
            {size:7,robot:[6,0],items:[[5,2],[4,4],[2,1],[1,3]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Difícil",desc:"O armazém cresceu."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,4],[3,3],[2,2],[1,4]],difficulty:"Desafio",desc:"Grande desafio de reciclagem!"}
          ]},
        energia: { name:"Energia", emoji:"⚡💡", itemEmojis:["🔋","💡","🔌"], obstacleEmoji:"⛔",
          levels:[
            {size:6,robot:[5,1],items:[[4,3],[2,4]],deposit:[[0,2]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva baterias ao ponto de energia."},
            {size:7,robot:[6,1],items:[[5,4],[3,5],[2,2]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[2,4]],difficulty:"Médio",desc:"Evita zonas de sobrecarga."},
            {size:7,robot:[6,2],items:[[5,4],[4,6],[3,1],[2,5]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2],[1,4]],difficulty:"Difícil",desc:"Liga painéis solares com mínimo de comandos."},
            {size:7,robot:[6,1],items:[[5,4],[4,6],[3,5],[2,2]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[2,4],[1,2]],difficulty:"Difícil",desc:"Mais pontos de energia."},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[4,6],[3,2],[2,4]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2],[1,4],[1,2]],difficulty:"Desafio",desc:"Desafio final de energia!"}
          ]},
        floresta: { name:"Floresta & Habitat", emoji:"🌳🦉", itemEmojis:["🌱","🍄","🦋"], obstacleEmoji:"🔥",
          levels:[
            {size:6,robot:[5,2],items:[[4,1],[2,3]],deposit:[[0,4]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva mudas para a zona segura."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Protege a floresta."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[1,4]],difficulty:"Difícil",desc:"Espalha mudas pela floresta."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[3,5],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3]],difficulty:"Difícil",desc:"Mais zonas a reflorestar."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[1,4]],difficulty:"Desafio",desc:"Desafio final da floresta!"}
          ]},
        natal: { name:"Natal Sustentável", emoji:"🎄🌍", itemEmojis:["🎁","📦","🎄"], obstacleEmoji:"🧱",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,3]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Organiza presentes e leva ao ponto de recolha."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5]],difficulty:"Médio",desc:"Um Natal maior com mais desafios."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],difficulty:"Difícil",desc:"Mais presentes chegaram."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[4,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Organiza sem chocar com obstáculos."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[4,1],[3,6],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[3,4],[2,5],[1,3],[1,5]],difficulty:"Desafio",desc:"Desafio final de Natal sustentável!"}
          ]}
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        floresta3c: { name:"Floresta & Clima", emoji:"🌳🌡️", itemEmojis:["🌱","🍃","🌿"], obstacleEmoji:"🔥",
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Planta mudas e combate os focos de incêndio."},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],difficulty:"Difícil",desc:"A floresta está em risco. Sequência eficiente."},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"Otimiza o percurso de reflorestação."}
          ]},
        oceano3c: { name:"Oceanos & Biodiversidade", emoji:"🌊🐋", itemEmojis:["🧴","🛢️","🚯"], obstacleEmoji:"🪨",
          levels:[
            {size:7,robot:[6,2],items:[[5,4],[3,5],[2,1]],deposit:[[0,4]],obstacles:[[4,3],[4,4],[3,3],[2,4]],difficulty:"Médio",desc:"Remove poluição e protege a biodiversidade."},
            {size:8,robot:[7,2],items:[[6,6],[4,1],[3,6],[2,2]],deposit:[[0,4]],obstacles:[[5,4],[5,5],[4,4],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Mais poluição e obstáculos naturais."},
            {size:8,robot:[7,3],items:[[6,1],[6,7],[4,6],[2,2],[1,5]],deposit:[[0,4]],obstacles:[[5,4],[4,4],[3,4],[2,5],[2,3],[1,3]],difficulty:"Desafio",desc:"Limpa o oceano com mínimo de movimentos."}
          ]},
        energia3c: { name:"Energias Renováveis", emoji:"⚡🌞", itemEmojis:["🔋","☀️","🌬️"], obstacleEmoji:"⛔",
          levels:[
            {size:7,robot:[6,1],items:[[5,5],[4,2],[2,4]],deposit:[[0,6]],obstacles:[[5,3],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Instala painéis e turbinas evitando obstáculos."},
            {size:8,robot:[7,1],items:[[6,6],[5,2],[4,7],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,4],[2,5],[1,5]],difficulty:"Difícil",desc:"Rede de energia extensa. Planeia a sequência."},
            {size:8,robot:[7,2],items:[[6,7],[6,1],[4,6],[3,1],[2,5],[1,7]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Maximiza a instalação de energias verdes."}
          ]}
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        clima: { name:"Crise Climática", emoji:"🌍🌡️", itemEmojis:["📊","🌡️","🔬"], obstacleEmoji:"⛔",
          levels:[
            {size:8,robot:[7,1],items:[[6,6],[4,2],[3,5],[2,3]],deposit:[[0,7]],obstacles:[[5,4],[5,5],[4,5],[4,4],[3,4],[2,6],[1,6]],difficulty:"Difícil",desc:"Monitoriza dados climáticos e entrega no centro."},
            {size:9,robot:[8,1],items:[[7,7],[6,2],[4,7],[3,1],[2,5]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Rede climática extensa. Otimiza a rota."}
          ]},
        sustentabilidade: { name:"Economia Circular", emoji:"♻️📈", itemEmojis:["📦","🛢️","♻️"], obstacleEmoji:"🚧",
          levels:[
            {size:8,robot:[7,2],items:[[6,6],[5,1],[4,5],[2,2],[1,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[3,5],[2,5],[1,5]],difficulty:"Difícil",desc:"Fecha o ciclo de materiais com eficiência."},
            {size:9,robot:[8,1],items:[[7,7],[6,2],[5,6],[3,1],[2,6],[1,3]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,5],[3,5],[2,5],[1,6]],difficulty:"Desafio",desc:"Minimiza desperdício e fecha o ciclo."}
          ]},
        politica: { name:"Políticas Ambientais", emoji:"🏛️🌿", itemEmojis:["📋","🗂️","📈"], obstacleEmoji:"🚫",
          levels:[
            {size:8,robot:[7,3],items:[[6,7],[5,1],[4,6],[3,2],[2,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[2,4],[1,5],[1,6]],difficulty:"Difícil",desc:"Entrega propostas de política ambiental."},
            {size:9,robot:[8,2],items:[[7,8],[7,1],[6,6],[5,2],[3,7],[2,3]],deposit:[[0,8]],obstacles:[[8,5],[7,5],[6,5],[5,5],[4,6],[3,6],[2,6],[1,7]],difficulty:"Desafio",desc:"Implementa políticas com recursos limitados."}
          ]}
      }}
    }
  },

  escape: {
    id: "escape",
    name: "Escape da Internet Perigosa",
    emoji: "🚪",
    badge: "🚪 Escape · Internet Mais Segura · Pensamento computacional",
    menuTitle: "Foge do computador perigoso!",
    menuDesc: "Recolhe ficheiros suspeitos, leva-os à zona segura 🛡️ e responde ao quiz para sair pela porta 🚪.",
    colors: { primary:"#ec4899", rgb:"236,72,153", dark:"#9d174d", soft:"rgba(236,72,153,0.12)", bg1:"#fce7f3", bg2:"#fdf2f8" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: {
      "1c":"Comandos imediatos · Quiz final",
      "2c":"Planeia a sequência · Quiz final",
      "3c":"Sequência + otimização · Quiz final",
      "sec":"Estratégia e eficiência · Quiz final"
    },
    isEscape: true,
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        escape: {
          name:"Escape do Computador", emoji:"🚪🛡️",
          itemEmojis:["📁"], obstacleEmoji:"⛔",
          isEscapeTheme: true,
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],door:[0,0],difficulty:"Fácil",desc:"Primeira missão! Leva o ficheiro suspeito até à zona segura 🛡️ e depois encontra a porta 🚪."},
            {size:5,robot:[4,0],items:[[3,3],[1,1]],deposit:[[0,4]],obstacles:[[2,2]],door:[0,0],difficulty:"Fácil",desc:"Há dois ficheiros suspeitos. Não passes pelo quadrado de aviso vermelho."},
            {size:6,robot:[5,0],items:[[4,2],[3,4]],deposit:[[0,5]],obstacles:[[3,1],[2,2]],door:[0,0],difficulty:"Médio",desc:"Mais espaço na grelha e mais perigos. Mantém o VanBerto's longe dos quadrados vermelhos."},
            {size:5,robot:[4,1],items:[[3,3],[1,2],[2,4]],deposit:[[0,4]],obstacles:[[2,2],[3,1]],door:[0,0],difficulty:"Médio",desc:"Os ficheiros espalharam-se pelo computador. Pensa bem no caminho."},
            {size:6,robot:[5,1],items:[[4,3],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,2],[3,3],[2,1]],door:[0,0],difficulty:"Difícil",desc:"Três ficheiros suspeitos. Usa o menor número de movimentos que conseguires."},
            {size:7,robot:[6,2],items:[[5,4],[4,6],[2,5]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2]],door:[0,6],difficulty:"Difícil",desc:"Os ficheiros estão longe uns dos outros. Lembra-te: um de cada vez até à zona segura."},
            {size:6,robot:[5,4],items:[[4,1],[3,3],[2,4]],deposit:[[0,0]],obstacles:[[3,2],[3,4],[1,2]],door:[5,0],difficulty:"Difícil",desc:"A zona segura mudou de sítio. Observa bem o mapa antes de começares a andar."},
            {size:7,robot:[6,0],items:[[5,2],[4,4],[2,1]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3]],door:[0,0],difficulty:"Difícil",desc:"A grelha é maior e é mais fácil perderes-te. Planeia o caminho por partes."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[3,1]],deposit:[[0,6]],obstacles:[[4,2],[4,4],[3,3],[2,2]],door:[0,0],difficulty:"Desafio",desc:"Vários caminhos possíveis. Tenta evitar andar em círculos."},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[4,6],[2,4]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2],[1,4]],door:[0,6],difficulty:"Desafio",desc:"Última missão! Protege tudo e responde à pergunta para o VanBerto's escapar do computador."}
          ]
        }
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        escape2: {
          name:"Rede Infetada", emoji:"🌐⚠️",
          itemEmojis:["📁","💾","🗂️"], obstacleEmoji:"🦠",
          isEscapeTheme: true,
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,4]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],door:[0,0],difficulty:"Fácil",desc:"Planeia a sequência para recolher os ficheiros e levá-los à zona segura."},
            {size:6,robot:[5,0],items:[[4,4],[2,1],[1,3]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[4,1]],door:[0,0],difficulty:"Médio",desc:"Mais ficheiros e vírus no caminho. Faz uma sequência sem colisões."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[2,2]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,4]],door:[0,0],difficulty:"Difícil",desc:"A rede cresceu. Otimiza a tua sequência."},
            {size:7,robot:[6,2],items:[[5,5],[4,1],[3,6],[2,3]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],door:[0,0],difficulty:"Difícil",desc:"Último desafio da rede infetada! Responde ao quiz para sair."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,4],[3,3],[2,2]],door:[0,0],difficulty:"Desafio",desc:"Muitos ficheiros infetados. Planeia com cuidado."}
          ]
        }
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        escape3: {
          name:"Servidor Comprometido", emoji:"🖥️🔐",
          itemEmojis:["📦","🔑","📋"], obstacleEmoji:"💀",
          isEscapeTheme: true,
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],door:[0,0],difficulty:"Médio",desc:"O servidor foi comprometido. Recupera os dados e planeia a fuga."},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],door:[0,0],difficulty:"Difícil",desc:"Mais dados para proteger e zonas bloqueadas por malware."},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],door:[0,0],difficulty:"Desafio",desc:"Otimiza a recuperação de dados e responde ao quiz para sair!"}
          ]
        }
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        escapeSec: {
          name:"Ciberataque em Curso", emoji:"🚨🔓",
          itemEmojis:["🛰️","📡","🔐"], obstacleEmoji:"🚫",
          isEscapeTheme: true,
          levels:[
            {size:8,robot:[7,1],items:[[6,6],[4,2],[3,5],[2,3]],deposit:[[0,7]],obstacles:[[5,4],[5,5],[4,5],[4,4],[3,4],[2,6],[1,6]],door:[0,0],difficulty:"Difícil",desc:"O sistema está sob ataque. Recupera os logs e reporta ao centro de controlo."},
            {size:9,robot:[8,0],items:[[7,6],[6,2],[4,7],[3,1],[2,5]],deposit:[[0,8]],obstacles:[[7,3],[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],door:[0,0],difficulty:"Desafio",desc:"Ciberataque completo! Minimiza movimentos, recupera tudo e responde ao quiz final."}
          ]
        }
      }}
    }
  },

  ciberseguras: {
    id: "ciberseguras",
    name: "Missões CiberSeguras",
    emoji: "🛡️",
    badge: "🛡️ Pensamento computacional · Cibersegurança",
    menuTitle: "Protege o computador do VanBerto's!",
    menuDesc: "Dentro do computador mágico, combate malware fictício e protege a rede.",
    colors: { primary:"#7c3aed", rgb:"124,58,237", dark:"#4c1d95", soft:"rgba(124,58,237,0.12)", bg1:"#ede9fe", bg2:"#f5f3ff" },
    hasCycles: ["1c","2c","3c","sec"],
    cycleDescs: { "1c":"Comandos imediatos", "2c":"Sequência · Planeamento", "3c":"Sequência + otimização", "sec":"Estratégia e eficiência" },
    data: {
      "1c": { name:"1.º Ciclo", mode:"direct", themes: {
        computador: { name:"Computador Seguro", emoji:"💻🧼", itemEmojis:["🐞","🐛","🦠"], obstacleEmoji:"🧱",
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Apanha o bichinho digital e leva para a quarentena."},
            {size:5,robot:[4,0],items:[[3,2],[1,3]],deposit:[[0,4]],obstacles:[[2,1]],difficulty:"Médio",desc:"Mais bichinhos no computador. Contorna e coloca em quarentena."},
            {size:5,robot:[4,0],items:[[3,1],[1,2],[2,3]],deposit:[[0,4]],obstacles:[[2,1],[3,3]],difficulty:"Difícil",desc:"Os bichinhos espalharam-se. Pensa bem no caminho."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,5]],obstacles:[[3,1],[2,2],[2,4]],difficulty:"Difícil",desc:"O computador é maior. Usa o mínimo de comandos."},
            {size:6,robot:[5,1],items:[[4,3],[3,1],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,2],[3,3],[2,1],[1,4]],difficulty:"Desafio",desc:"Grande faxina digital!"}
          ]},
        internet: { name:"Internet Segura", emoji:"🌐🔒", itemEmojis:["🔗","📎","📁"], obstacleEmoji:"🚫",
          levels:[
            {size:5,robot:[4,2],items:[[2,2]],deposit:[[0,0]],obstacles:[],difficulty:"Fácil",desc:"Leva o link seguro até à zona protegida."},
            {size:5,robot:[4,4],items:[[3,1],[1,3]],deposit:[[0,0]],obstacles:[[2,2]],difficulty:"Médio",desc:"Evita o aviso 🚫 e guarda só ligações seguras."},
            {size:5,robot:[4,4],items:[[3,1],[1,3],[2,4]],deposit:[[0,0]],obstacles:[[2,2],[3,3]],difficulty:"Difícil",desc:"Links por todo o lado. Não passes por avisos."},
            {size:6,robot:[5,4],items:[[4,1],[3,3],[2,4]],deposit:[[0,0]],obstacles:[[3,2],[3,4],[1,2]],difficulty:"Difícil",desc:"Navegação mais complicada. Rota segura."},
            {size:6,robot:[5,5],items:[[4,1],[4,3],[2,4],[1,1]],deposit:[[0,0]],obstacles:[[3,2],[3,4],[2,2],[1,3]],difficulty:"Desafio",desc:"Último desafio da Internet Segura!"}
          ]},
        email: { name:"Emails & Phishing", emoji:"✉️🎣", itemEmojis:["✉️","📨","📧"], obstacleEmoji:"⚠️",
          levels:[
            {size:5,robot:[4,1],items:[[2,1]],deposit:[[0,3]],obstacles:[],difficulty:"Fácil",desc:"Leva o email importante à pasta segura."},
            {size:5,robot:[4,1],items:[[3,3],[1,1]],deposit:[[0,3]],obstacles:[[2,2]],difficulty:"Médio",desc:"Evita avisos de phishing ⚠️ e organiza emails."},
            {size:5,robot:[4,1],items:[[3,3],[1,1],[2,4]],deposit:[[0,3]],obstacles:[[2,2],[3,2]],difficulty:"Difícil",desc:"Emails em várias pastas. Só os seguros."},
            {size:6,robot:[5,1],items:[[4,3],[3,4],[1,2]],deposit:[[0,4]],obstacles:[[3,2],[2,2],[2,3]],difficulty:"Difícil",desc:"Evita alertas de phishing."},
            {size:6,robot:[5,0],items:[[4,2],[4,4],[2,1],[1,3]],deposit:[[0,4]],obstacles:[[3,1],[3,3],[2,3],[1,1]],difficulty:"Desafio",desc:"Caixa de entrada cheia!"}
          ]},
        passwords: { name:"Passwords Fortes", emoji:"🔑✨", itemEmojis:["🔑","⭐","🧩"], obstacleEmoji:"🧱",
          levels:[
            {size:5,robot:[4,0],items:[[2,2]],deposit:[[0,4]],obstacles:[],difficulty:"Fácil",desc:"Recolhe a senha forte e guarda no cofre."},
            {size:5,robot:[4,0],items:[[3,1],[1,3]],deposit:[[0,4]],obstacles:[[2,2]],difficulty:"Médio",desc:"Passa pelos símbolos certos e guarda senhas fortes."},
            {size:5,robot:[4,0],items:[[3,1],[1,3],[2,4]],deposit:[[0,4]],obstacles:[[2,2],[3,3]],difficulty:"Difícil",desc:"Várias senhas espalhadas."},
            {size:6,robot:[5,0],items:[[4,2],[3,4],[1,3]],deposit:[[0,5]],obstacles:[[3,1],[2,2],[2,4]],difficulty:"Difícil",desc:"O cofre está longe. Não partilhes passwords!"},
            {size:6,robot:[5,1],items:[[4,3],[4,5],[2,2],[1,4]],deposit:[[0,5]],obstacles:[[4,2],[3,3],[2,4],[1,2]],difficulty:"Desafio",desc:"Grande missão de segurança!"}
          ]}
      }},
      "2c": { name:"2.º Ciclo", mode:"queue", themes: {
        firewall: { name:"Firewall & Rede", emoji:"🧱🌐", itemEmojis:["📡","🔌","🔐"], obstacleEmoji:"⛔",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,1]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Leva pacotes de dados ao servidor protegido."},
            {size:6,robot:[5,0],items:[[4,4],[2,1],[1,3]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[4,1]],difficulty:"Médio",desc:"Mais dados para entregar e zonas proibidas."},
            {size:6,robot:[5,0],items:[[4,4],[3,1],[2,3],[1,4]],deposit:[[0,5]],obstacles:[[3,2],[3,3],[4,1],[2,2]],difficulty:"Difícil",desc:"Gere bem o caminho da rede."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2],[1,3]],difficulty:"Difícil",desc:"A rede cresceu e tem mais bloqueios."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[4,1],[3,4],[2,5]],deposit:[[0,6]],obstacles:[[4,2],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"Grande desafio da Firewall!"}
          ]},
        malware: { name:"Malware Fictício", emoji:"🐞🚫", itemEmojis:["🐛","🦠","🐞"], obstacleEmoji:"💀",
          levels:[
            {size:6,robot:[5,1],items:[[4,3],[2,4]],deposit:[[0,2]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Deteta ficheiros perigosos e leva para quarentena."},
            {size:7,robot:[6,1],items:[[5,4],[3,5],[2,2]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[2,4]],difficulty:"Médio",desc:"Mais malware. Faz sequência eficiente."},
            {size:7,robot:[6,2],items:[[5,4],[4,6],[3,1],[2,5]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2],[1,4]],difficulty:"Difícil",desc:"Liga o antivírus com mínimo de comandos."},
            {size:7,robot:[6,1],items:[[5,4],[4,6],[3,5],[2,2]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[2,4],[1,2]],difficulty:"Difícil",desc:"Malware espalhado."},
            {size:7,robot:[6,3],items:[[5,1],[5,5],[4,6],[3,2],[2,4]],deposit:[[0,3]],obstacles:[[4,2],[4,3],[3,3],[3,4],[2,2],[1,4],[1,2]],difficulty:"Desafio",desc:"Desafio final contra malware!"}
          ]},
        phishing: { name:"Phishing & Spam", emoji:"📨🎣", itemEmojis:["✉️","📩","🎣"], obstacleEmoji:"🚫",
          levels:[
            {size:6,robot:[5,2],items:[[4,1],[2,3]],deposit:[[0,4]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Filtra emails suspeitos."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2]],difficulty:"Médio",desc:"Evita armadilhas de phishing."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[1,4]],difficulty:"Difícil",desc:"Filtra tudo com segurança."},
            {size:7,robot:[6,2],items:[[5,4],[4,1],[3,5],[2,4]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3]],difficulty:"Difícil",desc:"Spam espalhado."},
            {size:7,robot:[6,3],items:[[5,5],[4,1],[3,5],[2,4],[1,2]],deposit:[[0,5]],obstacles:[[4,3],[3,3],[3,4],[2,2],[1,3],[1,4]],difficulty:"Desafio",desc:"Desafio final anti-phishing!"}
          ]},
        backup: { name:"Backups Seguros", emoji:"💾🛡️", itemEmojis:["💾","📀","🗜️"], obstacleEmoji:"🧱",
          levels:[
            {size:6,robot:[5,0],items:[[4,2],[2,3]],deposit:[[0,5]],obstacles:[[3,2],[3,3]],difficulty:"Fácil",desc:"Guarda cópias de segurança em locais protegidos."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5]],difficulty:"Médio",desc:"Mais dados para proteger."},
            {size:7,robot:[6,0],items:[[5,3],[4,5],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[2,5],[1,3]],difficulty:"Difícil",desc:"Garante que chegas sem ficar preso."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[4,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Organiza backups sem chocar."},
            {size:7,robot:[6,1],items:[[5,3],[5,5],[4,1],[3,6],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[3,2],[3,3],[3,4],[2,5],[1,3],[1,5]],difficulty:"Desafio",desc:"Desafio final de backups!"}
          ]}
      }},
      "3c": { name:"3.º Ciclo", mode:"queue", themes: {
        pegada3c: { name:"Pegada Digital Avançada", emoji:"👣💻", itemEmojis:["📋","🔧","🔒"], obstacleEmoji:"❗",
          levels:[
            {size:7,robot:[6,0],items:[[5,2],[3,1],[2,4]],deposit:[[0,6]],obstacles:[[4,2],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Rastreia e limpa a pegada digital."},
            {size:8,robot:[7,1],items:[[6,4],[4,6],[2,2],[1,5]],deposit:[[0,7]],obstacles:[[5,2],[5,3],[4,3],[3,4],[2,5]],difficulty:"Difícil",desc:"Mais dados para apagar e zonas restritas."},
            {size:8,robot:[7,0],items:[[6,2],[6,6],[3,1],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[5,2],[5,5],[4,4],[3,3],[2,2],[1,3]],difficulty:"Desafio",desc:"Otimiza a limpeza da pegada digital."}
          ]},
        privacidade3c: { name:"Privacidade Avançada", emoji:"🛡️🔐", itemEmojis:["🔑","🗝️","🔒"], obstacleEmoji:"👀",
          levels:[
            {size:7,robot:[6,2],items:[[5,4],[3,5],[2,1]],deposit:[[0,4]],obstacles:[[4,3],[4,4],[3,3],[2,4]],difficulty:"Médio",desc:"Protege dados pessoais de olhares curiosos."},
            {size:8,robot:[7,2],items:[[6,6],[4,1],[3,6],[2,2]],deposit:[[0,4]],obstacles:[[5,4],[5,5],[4,4],[3,4],[2,5],[1,3]],difficulty:"Difícil",desc:"Mais configurações de privacidade a ajustar."},
            {size:8,robot:[7,3],items:[[6,1],[6,7],[4,6],[2,2],[1,5]],deposit:[[0,4]],obstacles:[[5,4],[4,4],[3,4],[2,5],[2,3],[1,3]],difficulty:"Desafio",desc:"Configura privacidade máxima com eficiência."}
          ]},
        redes3c: { name:"Segurança em Redes Avançada", emoji:"📡🛡️", itemEmojis:["📦","🔌","🔐"], obstacleEmoji:"💢",
          levels:[
            {size:7,robot:[6,1],items:[[5,5],[4,2],[2,4]],deposit:[[0,6]],obstacles:[[5,3],[4,3],[3,3],[2,2]],difficulty:"Médio",desc:"Protege a rede de ataques externos."},
            {size:8,robot:[7,1],items:[[6,6],[5,2],[4,7],[2,4],[1,6]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,4],[2,5],[1,5]],difficulty:"Difícil",desc:"Evita intrusos e entrega dados seguros."},
            {size:8,robot:[7,2],items:[[6,7],[6,1],[4,6],[3,1],[2,5],[1,7]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,4],[3,4],[2,4],[1,5]],difficulty:"Desafio",desc:"Maximiza a segurança da rede."}
          ]}
      }},
      "sec": { name:"Secundário", mode:"queue", themes: {
        incidente: { name:"Resposta a Incidentes", emoji:"🚨💻", itemEmojis:["🛰️","🔧","🔒"], obstacleEmoji:"🚫",
          levels:[
            {size:8,robot:[7,1],items:[[6,6],[4,2],[3,5],[2,3]],deposit:[[0,7]],obstacles:[[5,4],[5,5],[4,5],[4,4],[3,4],[2,6],[1,6]],difficulty:"Difícil",desc:"Monitoriza falhas e entrega no centro de controlo."},
            {size:8,robot:[7,0],items:[[6,5],[5,2],[4,6],[3,1],[2,4]],deposit:[[0,7]],obstacles:[[6,3],[5,3],[4,3],[3,3],[2,3],[1,4],[1,5]],difficulty:"Desafio",desc:"A rede está congestionada. Otimiza a rota."}
          ]},
        risco: { name:"Gestão de Risco Digital", emoji:"📊🛡️", itemEmojis:["📈","📋","🔒"], obstacleEmoji:"❗",
          levels:[
            {size:8,robot:[7,2],items:[[6,6],[5,1],[4,5],[2,2],[1,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[3,5],[2,5],[1,5]],difficulty:"Difícil",desc:"Recolhe dados de risco e entrega com poucos comandos."},
            {size:9,robot:[8,1],items:[[7,7],[6,2],[5,6],[3,1],[2,6],[1,3]],deposit:[[0,8]],obstacles:[[7,4],[6,4],[5,4],[4,5],[3,5],[2,5],[1,6]],difficulty:"Desafio",desc:"Mais dados e bloqueios: minimiza movimentos."}
          ]},
        estrategia: { name:"Estratégia de Cibersegurança", emoji:"🧭🔒", itemEmojis:["📩","📦","🔒"], obstacleEmoji:"💢",
          levels:[
            {size:8,robot:[7,3],items:[[6,7],[5,1],[4,6],[3,2],[2,6]],deposit:[[0,7]],obstacles:[[6,4],[5,4],[4,4],[3,4],[2,4],[1,5],[1,6]],difficulty:"Difícil",desc:"Entrega recursos de segurança com prioridades."},
            {size:9,robot:[8,2],items:[[7,8],[7,1],[6,6],[5,2],[3,7],[2,3]],deposit:[[0,8]],obstacles:[[8,5],[7,5],[6,5],[5,5],[4,6],[3,6],[2,6],[1,7]],difficulty:"Desafio",desc:"Implementa estratégia de cibersegurança completa."}
          ]}
      }}
    }
  }

};

/* ============================= HELPERS ============================= */
const $ = (id) => document.getElementById(id);
let currentUniverseId = null;
let GAME_DATA = null;

// insert robots — logo + sidebar: static; hero robots: animated
[["logo-robot"],["side-robot"]].forEach(([id]) => {
  const el = $(id); if(el) el.innerHTML = VANBERTO_SVG;
});
[["hero-robot"],["hero-robot-menu"]].forEach(([id]) => {
  const el = $(id); if(el) el.innerHTML = VANBERTO_POPUP_SVG();
});

/* ============================= STORAGE ============================= */
const STORAGE_PREFIX = "vanbertos_unified_v1_";
const DARK_KEY = "vanbertos_dark_v1";
const STUDENT_NAME_KEY = "vanbertos_student_name_v1";
const UNIVERSE_KEY = "vanbertos_universe_v1";
const RANKING_KEY = "vanbertos_ranking_v1";

/* ============================= PEDAGOGICAL TIPS ============================= */
const THEME_SUMMARIES = {
  oceanos: "🔑 Aprendeste que uma palavra-passe forte tem 12+ caracteres, com letras, números e símbolos. Nunca uses a mesma em sítios diferentes!",
  torneira: "🎣 Aprendeste a identificar phishing: emails urgentes, links suspeitos, pedidos de dados. Quando tens dúvida, não cliques!",
  ribeira: "🛡️ Aprendeste que dados pessoais (nome, morada, escola) devem ser sempre protegidos. Privacidade é um direito!",
  redes: "📱 Aprendeste que nas redes sociais deves ter perfil privado, não aceitar estranhos e pensar antes de publicar.",
  jogos: "🎮 Aprendeste que nos jogos online nunca deves partilhar a password, deves respeitar os outros e reportar comportamentos abusivos.",
  fugas: "⬇️ Aprendeste que só deves fazer download de fontes oficiais. Malware esconde-se em downloads falsos!",
  tratamento: "📩 Aprendeste a reconhecer golpes online: urgência, pedidos de dinheiro, links suspeitos. Confirma sempre a fonte!",
  nascente: "🤝 Aprendeste que ciberbullying é crime. A resposta certa é: bloquear, guardar provas e contar a um adulto.",
  escola: "👣 Aprendeste que a tua pegada digital é permanente. Pensa antes de publicar — a tua reputação online importa!",
  rota: "⚙️ Aprendeste a importância de configurar bem a privacidade e de ativar a autenticação em dois fatores (2FA).",
  seca: "📡 Aprendeste que Wi-Fi público não é seguro para dados pessoais e que HTTPS indica uma ligação encriptada.",
  rede: "🚨 Aprendeste o plano de resposta a incidentes: isolar, reportar, analisar e recuperar. Velocidade de resposta é crucial!",
  eficiencia: "📊 Aprendeste a avaliar riscos digitais por probabilidade e impacto, e a escolher a melhor estratégia de mitigação.",
  logistica: "🧭 Aprendeste que a segurança digital precisa de múltiplas camadas: políticas, tecnologia, formação e processos.",
};
const THEME_TIPS = {
  // === CIBERSEG / ESCAPE ===
  "oceanos":    "💡 Uma palavra-passe forte tem 12+ caracteres, com letras maiúsculas, minúsculas, números e símbolos. Usa um gestor de passwords!",
  "torneira":   "💡 Phishing: verifica sempre o endereço do remetente — um email do 'banco' pode ser uma fraude!",
  "ribeira":    "💡 Não partilhes morada, escola ou número de telefone online. Uma vez publicado, é difícil apagar!",
  "redes":      "💡 Perfil privado nas redes sociais significa que só os teus amigos podem ver o que publicas.",
  "jogos":      "💡 Nunca dês a tua password a outro jogador, mesmo que prometa ajuda ou recompensas no jogo!",
  "fugas":      "💡 Antes de fazer download, verifica: site oficial? Avaliações? Extensão do ficheiro esperada?",
  "tratamento": "💡 SMS ou email a pedir dados urgentes? Para, respira e verifica diretamente com a entidade.",
  "nascente":   "💡 Ciberbullying: guarda as provas, bloqueia o agressor e fala com um adulto de confiança.",
  "escola":     "💡 A tua pegada digital pode ser pesquisada por empregadores. Cuida da tua reputação online!",
  "rota":       "💡 Autenticação em dois fatores (2FA) bloqueia 99% dos ataques automáticos à tua conta.",
  "seca":       "💡 Em Wi-Fi público evita banca online, compras ou login em contas importantes. Usa VPN!",
  "rede":       "💡 Num incidente de segurança: isola o sistema afetado, não apagues logs e reporta imediatamente.",
  "eficiencia": "💡 Risco = Probabilidade × Impacto. Prioriza sempre os riscos com maior impacto potencial.",
  "logistica":  "💡 Defesa em profundidade: combina firewall, antivírus, 2FA, backups e formação dos utilizadores.",
  "wifi":       "💡 Nunca uses redes Wi-Fi públicas sem VPN para enviar dados pessoais.",
  "computador": "💡 Nunca abras anexos de email de remetentes desconhecidos — pode ser malware!",
  "internet":   "💡 HTTPS significa que a ligação está encriptada. Verifica o cadeado antes de inserir dados.",
  "email":      "💡 Um email de phishing imita marcas reais. Verifica sempre o endereço completo do remetente.",
  "passwords":  "💡 Usa um gestor de passwords para criar e guardar senhas únicas para cada conta.",
  "firewall":   "💡 Uma firewall monitoriza o tráfego de rede e bloqueia acessos não autorizados.",
  "malware":    "💡 Um antivírus atualizado é a primeira linha de defesa contra vírus e malware.",
  "pegada3c":   "💡 A tua pegada digital inclui tudo o que publicas online. Pensa antes de partilhar!",
  "privacidade":"💡 Lê sempre as permissões antes de instalar uma app. Menos acesso = mais privacidade.",
  "phishing":   "💡 Desconfia de mensagens urgentes com links — verifica sempre o remetente antes de clicar.",
  "backup":     "💡 Guarda cópias de segurança em locais diferentes: disco externo + nuvem = proteção máxima!",
  "firewall2c": "💡 As firewalls filtram o tráfego de rede. Sem elas, qualquer dispositivo ficaria exposto!",
  // === AGUA universe ===
  "agua_oceanos":    "💡 Mais de 8 milhões de toneladas de plástico entram nos oceanos por ano. Recicla sempre!",
  "agua_torneira":   "💡 Uma torneira a pingar pode desperdiçar até 15 litros de água por dia!",
  "agua_ribeira":    "💡 Apenas 3% da água da Terra é doce. Proteger as nascentes e rios é essencial para a vida!",
  "agua_fugas":      "💡 Uma torneira a pingar desperdiça 5 500 litros de água por ano — mais do que uma pessoa bebe!",
  "agua_tratamento": "💡 A água potável percorre 7 etapas de tratamento antes de chegar à torneira. Não a desperdices!",
  "agua_nascente":   "💡 As nascentes alimentam rios e aquíferos. Uma nascente poluída pode contaminar toda a bacia.",
  "agua_escola":     "💡 Uma escola com torneiras com sensor gasta 40% menos água do que torneiras convencionais.",
  "agua_rota":       "💡 As chuvas em Portugal caem maioritariamente no inverno. Poupar água no verão é vital!",
  "agua_seca":       "💡 Uma seca severa pode durar anos. Poupar água hoje evita crises graves no futuro.",
  "agua_rede":       "💡 As redes urbanas de água em Portugal têm mais de 70 000 km de tubagens — muitas com fugas!",
  "agua_eficiencia": "💡 Uma duche de 5 min usa 50L de água. Uma banheira usa 150L — escolhe o duche!",
  "agua_logistica":  "💡 Em países áridos, a água é transportada em camiões — cada gota poupada tem valor enorme.",
  // === AR universe ===
  "ar_cidade":     "💡 As árvores nas cidades reduzem a temperatura até 5°C e filtram poluentes do ar.",
  "ar_vento":      "💡 A energia eólica já produz mais de 20% da eletricidade em Portugal!",
  "ar_fumo":       "💡 O tabagismo passivo é responsável por 600 000 mortes por ano no mundo.",
  "ar_filtros":    "💡 Os filtros de ar HEPA conseguem capturar partículas 300× menores que um cabelo humano.",
  "ar_sensores":   "💡 O Índice de Qualidade do Ar (IQA) mede 5 poluentes: ozono, partículas, CO, SO₂ e NO₂.",
  "ar_mobilidade": "💡 Uma viagem de bicicleta de 5 km em vez de carro poupa cerca de 1 kg de CO₂!",
  "ar_escola":     "💡 Ventilar a sala de aula 10 min por dia reduz o CO₂ e melhora a concentração.",
  "ar_calor":      "💡 As ondas de calor são 5× mais frequentes do que há 50 anos devido às alterações climáticas.",
  "ar_mapa":       "💡 Portugal é um dos países europeus mais afetados pelo aquecimento global.",
  "ar_rede":       "💡 Sensores IoT de qualidade do ar estão a ser instalados em cidades de todo o mundo.",
  "ar_eficiencia": "💡 Um edifício com certificação energética A+ gasta 75% menos energia que um edifício antigo.",
  "ar_logistica":  "💡 Planear rotas eficientes reduz consumo de combustível e emissões de CO₂.",
  // === AMBIENTE universe ===
  "robo":       "💡 Um adulto produz em média 1,3 kg de lixo por dia. Separar e reciclar faz diferença!",
  "natal":      "💡 O papel de embrulho não reciclado equivale a 3 milhões de toneladas de lixo por Natal.",
  "reciclagem": "💡 Reciclar 1 tonelada de papel poupa 17 árvores e 26 500 litros de água.",
  "energia":    "💡 Desligar aparelhos da tomada (não standby) poupa até 10% na fatura de luz.",
  "floresta":   "💡 As florestas tropicais albergam 50% de todas as espécies vivas do planeta.",
  "oceanos":    "💡 Mais de 8 milhões de toneladas de plástico entram nos oceanos por ano. Recicla sempre!",
  "cidade":     "💡 As cidades produzem 75% das emissões mundiais de CO₂. Soluções urbanas são essenciais!",
  // === CIBERSEGURAS universe (inside the computer) ===
  "ciberseg_computador": "💡 Um vírus informático pode replicar-se milhares de vezes em segundos. O antivírus é essencial!",
  "ciberseg_internet":   "💡 O HTTPS encripta a ligação entre o teu browser e o servidor. Procura sempre o cadeado 🔒!",
  "ciberseg_email":      "💡 90% dos ataques começam por email. Nunca cliques em links suspeitos — verifica sempre!",
  "ciberseg_passwords":  "💡 Um gestor de passwords como Bitwarden ou 1Password gera e guarda senhas únicas por conta.",
  "ciberseg_firewall":   "💡 Uma firewall analisa cada pacote de dados. Sem ela, qualquer porta do sistema fica exposta!",
  "ciberseg_malware":    "💡 O ransomware encripta os teus ficheiros e pede resgate. Backups regulares são a melhor defesa!",
  "ciberseg_phishing":   "💡 Cibercriminosos imitam marcas reais ao pixel. Verifica sempre o domínio completo do remetente!",
  "ciberseg_backup":     "💡 A regra 3-2-1: 3 cópias, em 2 formatos diferentes, 1 fora de casa. Os teus dados ficam seguros!",
  "ciberseg_pegada3c":   "💡 Tudo o que fazes online deixa rasto. Configura a privacidade das tuas contas regularmente!",
  // === Correções: dicas por universo (a chave "oceanos" era partilhada e a dica do plástico sobrepunha-se à das palavras-passe) ===
  "ciberseg_oceanos":      "💡 Uma palavra-passe forte tem 12+ caracteres, com letras maiúsculas, minúsculas, números e símbolos. Usa uma frase fácil de lembrar e nunca a partilhes!",
  "ambiente_oceano3c":     "💡 Os oceanos produzem cerca de metade do oxigénio que respiramos e absorvem uma grande parte do CO₂ que emitimos.",
  "ambiente_clima":        "💡 Desde o final do século XIX, a temperatura média do planeta já subiu mais de 1 °C.",
  "ambiente_sustentabilidade": "💡 Na economia circular, os produtos são reutilizados, reparados e reciclados em vez de irem para o lixo ao fim de pouco tempo.",
  "ambiente_politica":     "💡 O Acordo de Paris (2015) propõe limitar o aquecimento global a bem menos de 2 °C, de preferência a 1,5 °C.",
  "ciberseguras_redes3c":  "💡 Numa rede Wi-Fi pública os teus dados podem ser intercetados. Usa sites com HTTPS e, se puderes, uma VPN.",
  "ciberseguras_incidente":"💡 Num incidente de segurança: isola o sistema afetado, não apagues registos (logs) e avisa logo o responsável.",
  "ciberseguras_risco":    "💡 Risco = Probabilidade × Impacto. Trata primeiro os riscos com maior impacto.",
  "ciberseguras_estrategia":"💡 Defesa em profundidade: junta firewall, antivírus, autenticação em dois fatores e backups — se uma falhar, as outras protegem."
};
function getTipForTheme(themeKey){
  // Try universe-specific tip first (prevents wrong universe tips)
  const uKey = (currentUniverseId||"") + "_" + themeKey;
  if(THEME_TIPS[uKey]) return THEME_TIPS[uKey];
  // For ciberseguras, try ciberseg_ prefix too
  const csKey = "ciberseg_" + themeKey;
  if(currentUniverseId==="ciberseguras"&&THEME_TIPS[csKey]) return THEME_TIPS[csKey];
  // Fall back to generic key
  if(THEME_TIPS[themeKey]) return THEME_TIPS[themeKey];
  // Fuzzy match (no underscores to avoid cross-universe hits)
  const k=Object.keys(THEME_TIPS).find(t=>!t.includes("_")&&(themeKey.includes(t)||t.includes(themeKey)));
  return k?THEME_TIPS[k]:"💡 Pensa no caminho mais curto antes de começar a programar o robô!";
}

/* ============================= EXPORT / IMPORT PROGRESS ============================= */
function exportClassReport(){
  try{
    const name=(()=>{try{return localStorage.getItem(STUDENT_NAME_KEY)||"Aluno";}catch(e){return "Aluno";}})();
    const date=new Date().toLocaleDateString("pt-PT");
    const rows=["Nome,Universo,Ciclo,Tema,Nivel,Tipo,Estrelas,Movimentos,Data"];
    let totalCompleted=0,totalStars=0;
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);if(!k||!k.startsWith(STORAGE_PREFIX))continue;
      try{
        const val=JSON.parse(localStorage.getItem(k)||"{}");
        const parts=k.replace(STORAGE_PREFIX,"").split("_");
        const uid=parts[0],ck=parts[1],tk=parts[2];
        if(!val.levels)continue;
        const u=ALL_UNIVERSES[uid];
        const uName=u?u.name:uid;
        const ckLabel={"1c":T('cycle1c'),"2c":T('cycle2c'),"3c":T('cycle3c'),"sec":T('cycleSec')}[ck]||ck;
        const theme=u&&u.data[ck]&&u.data[ck].themes[tk];
        const thName=theme?theme.name:tk;
        const designedCount=theme&&theme._designedCount!=null?theme._designedCount:999;
        Object.entries(val.levels).forEach(([li,lv])=>{
          if(!lv.completed) return;
          const li_n=Number(li);
          const tipo=li_n<designedCount?"Desenhado":"Extra";
          rows.push([name,uName,ckLabel,thName,li_n+1,tipo,lv.lastStars||1,lv.lastMoves||"?",date].join(","));
          totalCompleted++;totalStars+=(lv.lastStars||1);
        });
      }catch(e){}
    }
    // Summary row at the end
    rows.push("","# Resumo","");
    rows.push(`Nome,${name}`);
    rows.push(`Níveis concluídos,${totalCompleted}`);
    rows.push(`Total de estrelas,${totalStars}`);
    rows.push(`Data de exportação,${date}`);
    const blob=new Blob(["\uFEFF"+rows.join("\n")],{type:"text/csv;charset=utf-8;"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download="vanbertos_"+name.replace(/\s+/g,"_")+"_"+new Date().toISOString().slice(0,10)+".csv";a.click();
    URL.revokeObjectURL(url);setFeedback(T('exportReportOk',{n:totalCompleted,s:totalStars}),"ok");
  }catch(e){setFeedback(T('exportErr',{e:e.message}),"err");}
}
function exportProgress(){
  try{
    const data={};
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      if(k&&k.startsWith("vanbertos_")) data[k]=localStorage.getItem(k);
    }
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;a.download="vanbertos_progresso.json";a.click();
    URL.revokeObjectURL(url);
    setFeedback(T("exportProgressOk"),"ok");
  }catch(e){setFeedback(T('exportErr',{e:e.message}),"err");}
}
function importProgress(file){
  if(!file) return;
  const reader=new FileReader();
  reader.onload=ev=>{
    try{
      const data=JSON.parse(ev.target.result);
      let count=0;
      Object.entries(data).forEach(([k,v])=>{ if(k.startsWith("vanbertos_")){localStorage.setItem(k,v);count++;} });
      setFeedback(T("importOk",{n:count}),"ok");
      updateSideProgress();updateThemeProgressUI();renderProfile();
    }catch(e){setFeedback(T("importErr"),"err");}
  };
  reader.readAsText(file);
}

/* ============================= RANKING ============================= */
function getRanking(){ try{return JSON.parse(localStorage.getItem(RANKING_KEY)||"[]");}catch(e){return [];} }
function saveRanking(list){ try{localStorage.setItem(RANKING_KEY,JSON.stringify(list));}catch(e){} }
function updateRanking(){
  let name=""; try{name=localStorage.getItem(STUDENT_NAME_KEY)||"";}catch(e){}
  if(!name.trim()) return;
  const s=getOverallStats();
  const list=getRanking().filter(e=>e.name!==name.trim());
  list.push({name:name.trim(),stars:s.stars,completed:s.completed,date:new Date().toLocaleDateString("pt-PT")});
  list.sort((a,b)=>b.stars-a.stars||b.completed-a.completed);
  saveRanking(list.slice(0,20));
}


function storageKey(universeId){ return STORAGE_PREFIX + universeId; }
function loadAllProgress(universeId){
  try{ const r = localStorage.getItem(storageKey(universeId)); return r ? JSON.parse(r) : {}; }catch(e){ return {}; }
}
function saveAllProgress(universeId, obj){
  try{ localStorage.setItem(storageKey(universeId), JSON.stringify(obj)); }catch(e){}
}
function loadProgress(cycleKey, themeKey){
  const ck = effectiveCycleKey(cycleKey);
  const all = loadAllProgress(currentUniverseId);
  if(!all[ck]||!all[ck][themeKey]) return {currentLevelIndex:0,levels:{}};
  const d = all[ck][themeKey];
  if(!d.levels) d.levels={};
  if(typeof d.currentLevelIndex!=="number") d.currentLevelIndex=0;
  return d;
}
function saveProgress(cycleKey, themeKey, data){
  const ck = effectiveCycleKey(cycleKey);
  const all = loadAllProgress(currentUniverseId);
  if(!all[ck]) all[ck]={};
  all[ck][themeKey]=data;
  saveAllProgress(currentUniverseId, all);
}

/* ============================= NÍVEIS ============================= */
function effectiveCycleKey(cycleKey){ return cycleKey; }
function levelsFor(cycleKey, theme){ return (theme&&theme.levels)?theme.levels:[]; }

/* ============================= DARK MODE ============================= */
let isDark = false;
function applyDark(v){
  isDark=v;
  document.body.classList.toggle("dark",v);
  const btn=$("btn-dark-mode");
  if(btn) btn.textContent = v?T('lightMode'):T('darkMode');
  try{ localStorage.setItem(DARK_KEY,v?"1":"0"); }catch(e){}
}
// Always start in light mode — user can toggle during the session
// (removing auto-restore from localStorage so default is always light)
$("btn-dark-mode").addEventListener("click",()=>applyDark(!isDark));

/* ============================= TOUCH DEVICE DETECTION ============================= */
(function(){
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if(isTouch) document.body.classList.add("touch-device");
})();

/* ============================= LANGUAGE TOGGLE ============================= */
const btnLang = $("btn-lang");
if (btnLang) {
  btnLang.addEventListener("click", () => {
    setLang(currentLang === 'pt' ? 'en' : 'pt');
  });
}

/* ============================= SOUND — SFX object (inspirado no Dia da Criança) ============================= */
let isMuted = false;
let _audioCtx = null;
function _getCtx(){
  if(!_audioCtx){ try{ _audioCtx=new(window.AudioContext||window.webkitAudioContext)(); }catch(e){} }
  if(_audioCtx&&_audioCtx.state==='suspended'){ try{_audioCtx.resume();}catch(e){} }
  return _audioCtx;
}
// Primitiva única com slideTo — igual ao Dia da Criança
function _beep(freq,dur,type,vol,slideTo){
  if(isMuted) return;
  const ctx=_getCtx(); if(!ctx) return;
  try{
    const t0=ctx.currentTime;
    const o=ctx.createOscillator(), g=ctx.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,t0);
    if(slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(1,slideTo),t0+dur);
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime(vol||0.18,t0+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0+dur+0.02);
  }catch(e){}
}

// Objeto semântico de sons — inspirado diretamente no Dia da Criança
const SFX = {
  move()    { _beep(520,0.06,'triangle',0.10,420); },
  bump()    { _beep(110,0.05,'sawtooth',0.16); setTimeout(()=>_beep(90,0.12,'square',0.09),50); },
  collect() {
    // Melodia ascendente de 3 notas
    [[440,0.07,'sine',0.14],[554,0.07,'sine',0.15],[659,0.10,'sine',0.17]].forEach(([f,d,t,v],i)=>
      setTimeout(()=>_beep(f,d,t,v),i*55));
  },
  error()   { _beep(260,0.08,'sawtooth',0.13,160); setTimeout(()=>_beep(196,0.12,'square',0.09),90); },
  quiz()    { // Sino antes do quiz — 3 pings ascendentes
    [660,830,990].forEach((f,i)=>setTimeout(()=>_beep(f,0.10,'triangle',0.07,f*1.04),i*110));
  },
  correct() { // Resposta correta — dois pings altos
    _beep(523,0.08,'sine',0.18,660); setTimeout(()=>_beep(784,0.12,'sine',0.20,1047),110);
  },
  wrong()   { // Resposta errada — descida triste
    _beep(294,0.10,'triangle',0.14,220); setTimeout(()=>_beep(196,0.14,'sine',0.10,165),130);
  },
  win()     {
    // Fanfarra ascendente (nível concluído)
    [[392,0.08,'sine',0.16],[523,0.08,'sine',0.18],[659,0.08,'sine',0.20],[784,0.08,'sine',0.22],[1047,0.22,'sine',0.26]].forEach(([f,d,t,v],i)=>
      setTimeout(()=>_beep(f,d,t,v),i*90));
    setTimeout(()=>{ [[523,0.14,'sine',0.14],[659,0.14,'sine',0.14],[784,0.18,'sine',0.14]].forEach(([f,d,t,v])=>_beep(f,d,t,v)); },540);
  },
  starMelody() {
    // Melodia Star — inspirada diretamente no Dia da Criança
    const notes=[659,740,830,880,932,1047,1175,1319,1175,1047,932,880,830,740,659,587];
    notes.forEach((f,i)=>setTimeout(()=>{
      _beep(f,0.10,'square',0.055);
      if(i%2===0) _beep(f*1.26,0.10,'triangle',0.018);
    },i*90));
  },
  finalWin() {
    // Fanfarra épica de conclusão de ciclo — do Dia da Criança
    const seq=[560,700,840,1120,1050,840,1120,1400,1260,1400,1680,1400,1680,1900,1680,1900];
    seq.forEach((n,i)=>setTimeout(()=>
      _beep(n,i<4?0.08:i<8?0.10:0.13,i<8?'square':'triangle',0.055,n*1.12),i*90));
    setTimeout(()=>_beep(1900,0.28,'triangle',0.055,2200),seq.length*90+80);
    setTimeout(()=>{
      [560,840,1120].forEach((n,i)=>setTimeout(()=>_beep(n,0.32,'triangle',0.05,n*1.05),i*60));
    },seq.length*90+440);
  }
};

// Compatibilidade com chamadas anteriores (playSound / playVictorySound)
function playSound(el){
  if(isMuted) return;
  const id=el&&el.id;
  if(id==='soundMove')    SFX.move();
  else if(id==='soundSuccess') SFX.collect();
  else if(id==='soundError')   SFX.error();
  else if(id==='soundBump')    SFX.bump();
}
function playVictorySound(){ SFX.win(); }

$("btn-mute").addEventListener("click",()=>{ isMuted=!isMuted; $("btn-mute").textContent=isMuted?T("soundOff"):T("soundOn"); });
// Desbloquear contexto de áudio na primeira interação
document.addEventListener("click",()=>{ const c=_getCtx(); if(c&&c.state==='suspended') c.resume(); },{once:true});

/* ============================= CONFIRM POPUP ============================= */
function showConfirmPopup(msg, onConfirm){
  const box=document.createElement("div");
  box.style.cssText="position:fixed;inset:0;background:rgba(15,23,42,0.35);display:flex;align-items:center;justify-content:center;z-index:9999;animation:fadeIn .2s ease;";
  const dm=document.body.classList.contains('dark');
  const cpBg=dm?'#1e293b':'#fff'; const cpBorder=dm?'#334155':'rgba(199,210,254,0.6)';
  const cpColor=dm?'#e2e8f0':'#334155'; const cpSecBg=dm?'#293548':'#f1f5f9'; const cpSecColor=dm?'#94a3b8':'#475569'; const cpSecBorder=dm?'#475569':'#cbd5e1';
  box.innerHTML=`<div style="background:${cpBg};padding:20px 24px;border-radius:18px;text-align:center;max-width:320px;width:90%;border:1px solid ${cpBorder};box-shadow:0 16px 48px rgba(99,102,241,0.18);font-family:'Nunito Sans',sans-serif;animation:popIn .25s cubic-bezier(.34,1.56,.64,1) both;"><p style="font-size:.9rem;color:${cpColor};margin:0 0 16px;font-weight:600;line-height:1.5;">${msg}</p><div style="display:flex;gap:8px;justify-content:center;"><button id="cp-yes" style="padding:8px 20px;border:none;background:linear-gradient(135deg,#6366f1,#0891b2);color:#fff;border-radius:999px;cursor:pointer;font-weight:700;font-size:.85rem;font-family:'Nunito',sans-serif;">Sim</button><button id="cp-no" style="padding:8px 16px;border:1px solid ${cpSecBorder};background:${cpSecBg};color:${cpSecColor};border-radius:999px;cursor:pointer;font-weight:600;font-size:.85rem;font-family:'Nunito',sans-serif;">Não</button></div></div>`;
  document.body.appendChild(box);
  box.querySelector("#cp-no").onclick=()=>box.remove();
  box.querySelector("#cp-yes").onclick=()=>{ box.remove(); if(typeof onConfirm==="function") onConfirm(); };
  box.addEventListener("click",(e)=>{ if(e.target===box) box.remove(); });
}

/* ============================= STATS ============================= */
function getOverallStats(){
  if(!currentUniverseId) return {completed:0,stars:0};
  const all=loadAllProgress(currentUniverseId);
  let completed=0,stars=0;
  try{
    Object.values(all).forEach(byTheme=>{
      if(!byTheme) return;
      Object.values(byTheme).forEach(data=>{
        if(!data||!data.levels) return;
        Object.values(data.levels).forEach(lv=>{ if(lv&&lv.completed){completed++;stars+=(lv.stars||1);} });
      });
    });
  }catch(e){}
  return {completed,stars};
}
function themeStats(cycleKey, themeKey){
  const data=loadProgress(cycleKey,themeKey);
  const theme=GAME_DATA&&GAME_DATA[cycleKey]?.themes?.[themeKey];
  const total=levelsFor(cycleKey,theme).length;
  let done=0,stars=0;
  if(data&&data.levels) Object.values(data.levels).forEach(lv=>{ if(lv&&lv.completed){done++;stars+=(lv.stars||1);} });
  return {done,total,stars};
}
function updateThemeProgressUI(){
  document.querySelectorAll(".theme-card").forEach(card=>{
    const ck=card.getAttribute("data-cycle"), tk=card.getAttribute("data-theme");
    if(!ck||!tk||!GAME_DATA) return;
    const st=themeStats(ck,tk);
    const pct=st.total?Math.round((st.done/st.total)*100):0;
    const bar=card.querySelector(".theme-progress-bar");
    if(bar) bar.style.width=pct+"%";

    // Per-level stars row
    const starsRow=card.querySelector(".theme-stars-row");
    if(!starsRow) return;
    const designedCount=parseInt(starsRow.getAttribute("data-designed"))||st.total;
    const totalCount=parseInt(starsRow.getAttribute("data-total"))||st.total;
    const progress=loadProgress(ck,tk);
    const levels=progress.levels||{};

    // Only show designed levels in the stars row (extra levels clutter)
    const showCount=Math.min(designedCount, totalCount);
    let html="";
    for(let i=0;i<showCount;i++){
      const lv=levels[i];
      const s=lv&&lv.completed?(lv.lastStars||1):0;
      const starHtml=s===3?'⭐⭐⭐':s===2?'⭐⭐':s===1?'⭐':'<span class="theme-star-empty">○○○</span>';
      const cls=s>0?'theme-star-lvl theme-star-done':'theme-star-lvl theme-star-todo';
      html+=`<span class="${cls}" title="Nível ${i+1}">${starHtml}</span>`;
    }
    if(totalCount>designedCount){
      const extraDone=Object.entries(levels).filter(([i,lv])=>Number(i)>=designedCount&&lv&&lv.completed).length;
      if(extraDone>0) html+=`<span class="theme-star-extra">+${extraDone} ✨</span>`;
    }
    starsRow.innerHTML=html;
  });
}
function updateSideProgress(){
  const s=getOverallStats();
  const el=$("side-progress");
  if(el) el.innerHTML=`<span>⭐ ${s.completed} ${currentLang==='en'?'levels done':'níveis'}</span><span style="font-size:.75rem;color:var(--muted)">🌟 ${s.stars} ${currentLang==='en'?'stars':'estrelas'}</span>`;
}

/* ============================= SCREEN NAVIGATION ============================= */
const ALL_SCREENS = ["universe-screen","menu-screen","profile-screen","themes-1c","themes-2c","themes-3c","themes-sec","game-screen"];
function showScreen(id){
  ALL_SCREENS.forEach(sid=>{
    const s=$(sid);
    if(!s) return;
    if(sid===id){ s.classList.remove("hidden"); void s.offsetWidth; s.classList.add("active"); }
    else { s.classList.remove("active"); s.classList.add("hidden"); }
  });
  const _fr=document.getElementById("fixed-robot-wrap");
  if(_fr) _fr.classList.toggle("vb-hidden", id==="game-screen");   // no jogo só há o robô do tabuleiro
}

/* ============================= UNIVERSE SELECTION ============================= */
function applyUniverse(uid){
  currentUniverseId = uid;
  const u = ALL_UNIVERSES[uid];
  GAME_DATA = u.data;

  // Flash the transition overlay — masks the instant CSS variable swap
  const overlay=document.getElementById('universe-transition');
  if(overlay){
    overlay.classList.add('flash');
    setTimeout(()=>overlay.classList.remove('flash'), 120);
  }

  // Apply universe color CSS variables
  const c = u.colors || { primary:"#6366f1", rgb:"99,102,241", dark:"#3730a3", soft:"rgba(99,102,241,0.12)", bg1:"#e0e7ff", bg2:"#f0f0ff" };
  const root = document.documentElement;
  root.style.setProperty('--u-pop-color',   c.primary);
  root.style.setProperty('--u-pop-rgb',     c.rgb);
  root.style.setProperty('--u-pop-dark',    c.dark);
  root.style.setProperty('--u-pop-soft',    c.soft);
  // Update body background gradient variables
  root.style.setProperty('--u-bg1', c.bg1||'#e0e7ff');
  root.style.setProperty('--u-bg2', c.bg2||'#f0f0ff');
  // badge
  const badge=$("universe-badge"); if(badge) badge.textContent=u.badge;
  // side sub
  const sub=$("side-sub-universe"); if(sub) sub.textContent=u.name;
  // menu content
  const mt=$("menu-title"); if(mt) mt.textContent=u.menuTitle;
  const md=$("menu-desc"); if(md) md.textContent=u.menuDesc;
  const mcd=$("menu-cycle-desc"); if(mcd) mcd.textContent=T("cycleMenuDesc");

  // Build cycle cards
  const cg=$("cycle-grid"); if(cg){
    cg.innerHTML="";
    const cycleClasses={"1c":"cycle-card--1c","2c":"cycle-card--2c","3c":"cycle-card--3c","sec":"cycle-card--sec"};
    const cycleEmojis={
      "1c":`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M16.3 5.6l-2.1 2.1M5.6 18.4l2.1-2.1"/></svg>`,
      "2c":`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      "3c":`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.84-4.3A2.5 2.5 0 0 1 3 12a2.5 2.5 0 0 1 2.2-2.48A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.84-4.3A2.5 2.5 0 0 0 21 12a2.5 2.5 0 0 0-2.2-2.48A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
      "sec":`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
    };
    const cycleAges={"1c":T('cycleAge1c'),"2c":T('cycleAge2c'),"3c":T('cycleAge3c'),"sec":T('cycleAgeSec')};
    const cycleLabels={"1c":T('cycle1c'),"2c":T('cycle2c'),"3c":T('cycle3c'),"sec":T('cycleSec')};
    u.hasCycles.forEach(ck=>{
      const div=document.createElement("div");
      div.className=`cycle-card ${cycleClasses[ck]}`;
      div.id=`btn-cycle-${ck}`;
      const themes=Object.values(u.data[ck].themes);
      const chips=themes.slice(0,4).map(t=>'<div class="chip">'+(t.emoji?'<span class="emoji">'+t.emoji+'</span> ':'')+t.name+'</div>').join("");
      // Cycle-level progress summary (stars + completed themes)
      let cycleStars=0, cycleDesignedDone=0, cycleDesignedTotal=0;
      themes.forEach((th,_)=>{
        const tk=Object.keys(u.data[ck].themes)[_];
        const st=themeStats(ck,tk);
        cycleStars+=st.stars;
        cycleDesignedTotal+=(th._designedCount||st.total);
        cycleDesignedDone+=Math.min(st.done,(th._designedCount||st.total));
      });
      const cycleStarsSummary=cycleStars>0?`<span class="cycle-stars-summary">⭐ ${cycleStars} · ✅ ${cycleDesignedDone}/${cycleDesignedTotal}</span>`:"";
      div.innerHTML=`<div class="cycle-badge">${cycleLabels[ck]}${cycleStarsSummary}</div><div class="cycle-title"><span class="cycle-icon">${cycleEmojis[ck]}</span><span class="cycle-age">${cycleAges[ck]}</span></div><div class="cycle-sub">${u.cycleDescs[ck]||""}</div><div class="chip-row">${chips}</div>`;
      div.addEventListener("click",()=>showThemesFor(ck));
      cg.appendChild(div);
    });
  }

  // Show/hide sidebar cycle links
  const hasExtended = u.hasCycles.includes("3c")||u.hasCycles.includes("sec");
  $("side-cycles-group").style.display="";
  $("side-3c").style.display=u.hasCycles.includes("3c")?"":"none";
  $("side-sec").style.display=u.hasCycles.includes("sec")?"":"none";
  // Update sidebar cycle link labels with cycle name
  ["1c","2c","3c","sec"].forEach(ck=>{
    const btn=$("side-"+ck); if(!btn) return;
    btn.textContent=T('cycle'+ck.charAt(0).toUpperCase()+ck.slice(1))||ck;
  });

  // sidebar links
  ["1c","2c","3c","sec"].forEach(ck=>{
    const btn=$("side-"+ck);
    if(!btn) return;
    if(btn._listener){ btn.removeEventListener("click",btn._listener); }
    btn._listener=()=>{ if(GAME_DATA&&GAME_DATA[ck]) showThemesFor(ck); };
    btn.addEventListener("click",btn._listener);
  });

  // Build theme grids
  ["1c","2c","3c","sec"].forEach(ck=>{
    const grid=$(`theme-grid-${ck}`);
    if(!grid) return;
    grid.innerHTML="";
    if(!u.data[ck]) return;
    Object.entries(u.data[ck].themes).forEach(([tk,theme])=>{
      const card=document.createElement("div");
      card.className="theme-card";
      card.setAttribute("data-cycle",ck);
      card.setAttribute("data-theme",tk);
      const totalLevels=levelsFor(ck,theme).length;
      const designedCount=theme._designedCount||totalLevels;
      card.innerHTML=`
        <div class="theme-title"><span>${theme.name}</span><span>${theme.emoji}</span></div>
        <div class="theme-sub">${totalLevels} nível(eis) · ${u.data[ck].mode==="direct"?"Comandos imediatos":"Planeia a sequência"}</div>
        <div class="theme-progress"><div class="theme-progress-bar" data-progress="0"></div></div>
        <div class="theme-stars-row" data-designed="${designedCount}" data-total="${totalLevels}"></div>`;
      card.addEventListener("click",()=>pickTheme(ck,tk));
      grid.appendChild(card);
    });
  });

  try{ localStorage.setItem(UNIVERSE_KEY,uid); }catch(e){}
  updateSideProgress();
  updateThemeProgressUI();
}

document.querySelectorAll(".universe-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const uid=card.getAttribute("data-universe");
    if(uid==="escaperooms") return; // handled by ER module
    applyUniverse(uid);
    showScreen("menu-screen");
    setFeedback(T('fbUniverseSelected',{name:ALL_UNIVERSES[uid].name}),"ok");
  });
});

// sidebar
$("side-home").addEventListener("click",()=>showScreen("menu-screen"));
$("side-universes").addEventListener("click",()=>showScreen("universe-screen"));
$("side-profile").addEventListener("click",()=>{ renderProfile(); showScreen("profile-screen"); });
$("btn-back-profile").addEventListener("click",()=>{ currentUniverseId ? showScreen("menu-screen") : showScreen("universe-screen"); });
// mobile top-row buttons on menu-screen
const _bbum=$("btn-back-universes-menu"); if(_bbum) _bbum.addEventListener("click",()=>showScreen("universe-screen"));
const _bpm=$("btn-profile-mobile"); if(_bpm) _bpm.addEventListener("click",()=>{ renderProfile(); showScreen("profile-screen"); });

// Export / Import

const _ecb=$("btn-export-class");if(_ecb)_ecb.addEventListener("click",()=>exportClassReport());


$("btn-change-universe").addEventListener("click",()=>showScreen("universe-screen"));

/* ============================= THEMES ============================= */
function showThemesFor(ck){
  updateThemeProgressUI();
  showScreen(`themes-${ck}`);
  animateCards($(`themes-${ck}`));
}
function animateCards(screen){
  if(!screen) return;
  screen.querySelectorAll(".theme-card,.cycle-card").forEach((el,i)=>{
    el.classList.remove("card-anim");
    el.style.animationDelay=(i*40)+"ms";
    el.classList.add("card-anim");
  });
}

["1c","2c","3c","sec"].forEach(ck=>{
  const btn=$(`btn-back-menu-${ck}`);
  if(btn) btn.addEventListener("click",()=>showScreen("menu-screen"));
});

/* ============================= GAME STATE ============================= */
let currentCycleKey=null,currentThemeKey=null,currentCycle=null,currentTheme=null,currentLevelIndex=0;
let levelState=null,dir=0,carriedItem=false,moveCount=0;
let runningQueue=false,queuedCommands=[],groupStack=[];
let currentMinMoves=null,shouldDanceOnRender=false;
let stuckMoves=0,lastItemCount=0;
const STUCK_THRESHOLD=8;
const DIR_ARROWS=["⬆️","➡️","⬇️","⬅️"];
const OPT_CACHE=new Map();

function isQueueMode(){ return currentCycle&&currentCycle.mode==="queue"; }
function isEscapeMode(){ return currentUniverseId==="escape"; }

/* ============================= ESCAPE QUIZ ============================= */
// Questions indexed 0-9: simpler (1c/2c), 10-19: intermediate (3c), 20-29: advanced (sec)
const QUIZ_QUESTIONS=[
  // 1.º Ciclo / 2.º Ciclo — perguntas mais simples
  {question:"Recebes um email a dizer que ganhaste um telemóvel, mas nunca participaste em nenhum concurso. O que deves fazer?",options:["Clicar no link para ver o prémio","Dar os teus dados para receber o telemóvel","Ignorar ou apagar o email","Enviar o email aos teus amigos"],correctIndex:2},
  {question:"Qual destas passwords é mais segura?",options:["123456","futebol","Maria2009","Sol!Lua_27?"],correctIndex:3},
  {question:"Um desconhecido envia-te uma mensagem numa rede social. O que deves fazer?",options:["Responder para ver quem é","Bloquear ou ignorar","Enviar uma selfie","Partilhar o teu nome e idade"],correctIndex:1},
  {question:"Estás num site que mostra \"Foste selecionado! Clica aqui para ganhar!\". O que fazes?",options:["Clicas imediatamente","Mostras a um adulto de confiança","Escreves os teus dados","Partilhas com amigos"],correctIndex:1},
  {question:"Num jogo online, alguém pede a tua password para \"te ajudar a subir de nível\". O que fazes?",options:["Entregas a password","Trocas a password e dizes a antiga","Nunca partilhas a password","Pedes a password dele também"],correctIndex:2},
  {question:"Qual destas informações nunca deves partilhar com desconhecidos online?",options:["Idade aproximada","Nome verdadeiro","Morada e escola","O teu animal preferido"],correctIndex:2},
  {question:"O teu computador pede para atualizar o sistema. O que significa?",options:["O computador vai apagar tudo","O computador vai ficar lento para sempre","O computador vai ficar mais seguro e corrigir erros","A internet vai ficar mais rápida automaticamente"],correctIndex:2},
  {question:"Estás num café e queres usar a Wi-Fi pública. O que é mais seguro evitar?",options:["Jogar um jogo simples","Ver vídeos","Fazer compras online","Ver notícias"],correctIndex:2},
  {question:"Uma aplicação nova pede acesso à tua localização. O que deves pensar?",options:["Aceitar sempre tudo","Só permitir se for realmente necessário","Permitir para ver o que acontece","Dar a localização exata a todos os contactos"],correctIndex:1},
  {question:"Queres publicar uma foto da tua turma. O que é mais seguro?",options:["Publicar a foto sem perguntar a ninguém","Pedir autorização a todas as pessoas que aparecem","Editar e pôr filtros sem pedir autorização","Escrever o nome completo de todos"],correctIndex:1},
  // 2.º Ciclo — perguntas intermédias
  {question:"O que é o phishing?",options:["Um vírus que apaga ficheiros","Uma tentativa de enganar alguém para obter dados pessoais","Um programa antivírus","Um tipo de firewall"],correctIndex:1},
  {question:"Qual é a melhor forma de proteger as tuas contas online?",options:["Usar a mesma password em todo o lado","Usar autenticação de dois fatores","Partilhar a password com amigos de confiança","Usar o teu nome como password"],correctIndex:1},
  {question:"O que é malware?",options:["Um programa para melhorar o desempenho","Software malicioso que pode danificar o sistema","Um tipo de antivírus","Uma rede social segura"],correctIndex:1},
  {question:"Recebes um email do teu 'banco' a pedir para confirmares os dados. O que fazes?",options:["Clicas no link e preenchas os dados","Ignoras completamente","Contactas o banco diretamente pelos contactos oficiais","Respondes ao email com os teus dados"],correctIndex:2},
  {question:"O que é HTTPS num endereço web?",options:["O site carrega mais devagar","A ligação está encriptada e é mais segura","O site é sempre de confiança","Indica que o site é gratuito"],correctIndex:1},
  // 3.º Ciclo — perguntas mais avançadas
  {question:"O que é um ataque de engenharia social?",options:["Um ataque físico a servidores","Manipulação psicológica para obter informações confidenciais","Um vírus que se propaga por email","Um tipo de firewall avançado"],correctIndex:1},
  {question:"O que é a autenticação de dois fatores (2FA)?",options:["Usar duas passwords diferentes","Verificar a identidade com dois métodos independentes","Ter duas contas no mesmo serviço","Partilhar a conta com outra pessoa"],correctIndex:1},
  {question:"O que é uma VPN?",options:["Um tipo de vírus","Uma rede privada virtual que encripta o tráfego","Um antivírus gratuito","Um sistema operativo seguro"],correctIndex:1},
  {question:"Qual das seguintes práticas é mais segura ao usar redes sociais?",options:["Aceitar todos os pedidos de amizade","Partilhar a localização em tempo real","Configurar a privacidade do perfil como privado","Usar o nome completo e morada no perfil"],correctIndex:2},
  {question:"O que é ransomware?",options:["Um software de proteção","Malware que encripta ficheiros e exige pagamento para os recuperar","Um tipo de firewall","Uma rede social segura"],correctIndex:1},
  // Secundário — perguntas avançadas
  {question:"O que é um ataque Man-in-the-Middle (MitM)?",options:["Um ataque onde o invasor interceta comunicações entre duas partes","Um vírus que apaga o sistema operativo","Um método de encriptação","Um protocolo de segurança de rede"],correctIndex:0},
  {question:"Qual é a principal diferença entre um vírus e um worm informático?",options:["Os vírus são mais perigosos","Um worm propaga-se sozinho pela rede sem precisar de um ficheiro hospedeiro","Um worm só afeta dispositivos móveis","Os vírus só afetam emails"],correctIndex:1},
  {question:"O que é o princípio do menor privilégio em cibersegurança?",options:["Usar as passwords mais simples possíveis","Dar a cada utilizador apenas os acessos estritamente necessários","Partilhar as credenciais com toda a equipa","Desativar todas as atualizações do sistema"],correctIndex:1},
  {question:"O que é SQL Injection?",options:["Um método de backup de bases de dados","Um ataque que insere código malicioso em campos de entrada para manipular bases de dados","Um protocolo de comunicação segura","Uma técnica de encriptação avançada"],correctIndex:1},
  {question:"Numa análise de risco de cibersegurança, o que significa 'superfície de ataque'?",options:["O tamanho físico dos servidores","O conjunto de pontos vulneráveis que um atacante pode explorar","O número de funcionários de uma empresa","A velocidade da ligação à internet"],correctIndex:1},
];

// Select questions by cycle complexity
// Theme-to-question mapping for educational relevance
const THEME_QUIZ_MAP = {
  oceanos:    [1,0,6],    // password strength
  torneira:   [0,7,4],    // phishing, links
  ribeira:    [5,8,9],    // privacy, data sharing
  redes:      [2,5,9],    // social networks
  jogos:      [4,2,1],    // online safety
  fugas:      [10,13,6],  // downloads, malware
  tratamento: [10,11,12], // messages, scams
  nascente:   [3,2,5],    // cyberbullying
  escola:     [15,16,17], // digital footprint
  rota:       [15,17,18], // account settings
  seca:       [16,18,7],  // network security
  rede:       [20,21,22], // incident response
  eficiencia: [22,23,24], // risk management
  logistica:  [21,23,24], // security strategy
};
function getQuizQuestion(levelIdx) {
  const themeMap = THEME_QUIZ_MAP[currentThemeKey];
  if(themeMap) {
    const qIdx = themeMap[levelIdx % themeMap.length];
    if(QUIZ_QUESTIONS[qIdx]) return QUIZ_QUESTIONS[qIdx];
  }
  // fallback by cycle
  if(currentCycleKey==="sec") { const pool=QUIZ_QUESTIONS.slice(20); return pool[levelIdx%pool.length]; }
  else if(currentCycleKey==="3c") { const pool=QUIZ_QUESTIONS.slice(15,20); return pool[levelIdx%pool.length]; }
  else if(currentCycleKey==="2c") { const pool=QUIZ_QUESTIONS.slice(10,15); return pool[levelIdx%pool.length]; }
  else { return QUIZ_QUESTIONS[levelIdx%10]; }
}
let escapeAllDeposited=false;
let escapeQuizOpen=false;

/* ============================= FEEDBACK ============================= */
const feedbackEl=$("feedback");
function setFeedback(msg,type){
  if(!feedbackEl) return;
  feedbackEl.textContent=Q(msg);
  feedbackEl.classList.remove("feedback-ok","feedback-err","feedback-warn","feedback-info");
  if(type==="ok") feedbackEl.classList.add("feedback-ok");
  else if(type==="err") feedbackEl.classList.add("feedback-err");
  else if(type==="warn") feedbackEl.classList.add("feedback-warn");
  else feedbackEl.classList.add("feedback-info");
}

/* ============================= HINT ============================= */
function resetStuckTracker(){ stuckMoves=0; lastItemCount=levelState?levelState.items.length:0; clearHintBubble(); }
function clearHintBubble(){ const e=document.getElementById("hint-bubble-el"); if(e) e.remove(); }
function showHintBubble(text){
  clearHintBubble();
  const box=document.createElement("div");
  box.id="hint-bubble-el"; box.className="hint-bubble";
  box.innerHTML=`<span class="hint-bubble-icon">💡</span><span>${text}</span>`;
  if(feedbackEl&&feedbackEl.parentNode) feedbackEl.parentNode.insertBefore(box,feedbackEl.nextSibling);
}
function buildProgressiveHint(){
  if(!levelState||!currentTheme) return null;
  const [rr,rc]=levelState.robot;
  if(carriedItem&&levelState.deposit.length){
    const [dr,dc]=levelState.deposit[0];
    const d=Math.abs(rr-dr)+Math.abs(rc-dc);
    if(d<=2) return T('hintCarryingNearDeposit');
    return T('hintCarrying',{r:dr+1,c:dc+1});
  }
  if(!levelState.items.length) return null;
  let closest=null,minD=Infinity;
  levelState.items.forEach(it=>{ const d=Math.abs(rr-it.row)+Math.abs(rc-it.col); if(d<minD){minD=d;closest=it;} });
  if(!closest) return null;
  const list=currentTheme.itemEmojis||["📦"];
  return T('hintGoTo',{emoji:list[closest.emojiIndex%list.length],r:closest.row+1,c:closest.col+1});
}
function trackProgress(){
  if(!levelState) return;
  const ci=levelState.items.length;
  if(ci<lastItemCount){ stuckMoves=0;lastItemCount=ci;clearHintBubble();return; }
  stuckMoves++;lastItemCount=ci;
  const dynThresh=currentCycleKey==="1c"?4:currentCycleKey==="2c"?6:STUCK_THRESHOLD;
  if(stuckMoves>=dynThresh&&stuckMoves%4===0){ const h=buildProgressiveHint(); if(h) showHintBubble(h); }
}

/* ============================= BFS SOLVER ============================= */
function optKey(ck,tk,li){ return `${effectiveCycleKey(ck)}|${tk}|${li}`; }
function computeOptimal(base){
  const size=base.size;
  const obstacles=new Set((base.obstacles||[]).map(o=>`${o[0]},${o[1]}`));
  const deposits=new Set((base.deposit||[]).map(d=>`${d[0]},${d[1]}`));
  const items=base.items||[];
  const itemIdx=new Map();
  items.forEach((p,i)=>itemIdx.set(`${p[0]},${p[1]}`,i));
  const allMask=(1<<items.length)-1;
  const q=[],dist=new Map();
  let head=0;
  const enc=(r,c,d,ca,m)=>`${r}|${c}|${d}|${ca}|${m}`;
  const inB=(r,c)=>r>=0&&r<size&&c>=0&&c<size;
  const isObs=(r,c)=>obstacles.has(`${r},${c}`);
  const s0=enc(base.robot[0],base.robot[1],0,0,allMask);
  dist.set(s0,0); q.push([base.robot[0],base.robot[1],0,0,allMask]);
  while(head<q.length){
    const [r,c,d,ca,m]=q[head++];
    const dd=dist.get(enc(r,c,d,ca,m));
    if(m===0&&ca===0&&(!base.door||(r===base.door[0]&&c===base.door[1]))) return dd;   // salas de escape: falta chegar à porta
    // turn L/R
    [{nd:(d+3)%4},{nd:(d+1)%4}].forEach(({nd})=>{ const k=enc(r,c,nd,ca,m); if(!dist.has(k)){dist.set(k,dd+1);q.push([r,c,nd,ca,m]);} });
    // move
    let nr=r,nc=c;
    if(d===0)nr--;else if(d===1)nc++;else if(d===2)nr++;else nc--;
    if(inB(nr,nc)&&!isObs(nr,nc)){ const k=enc(nr,nc,d,ca,m); if(!dist.has(k)){dist.set(k,dd+1);q.push([nr,nc,d,ca,m]);} }
    // move backward (Recuar)
    { let br=r,bc=c; if(d===0)br++;else if(d===1)bc--;else if(d===2)br--;else bc++;
      if(inB(br,bc)&&!isObs(br,bc)){ const k=enc(br,bc,d,ca,m); if(!dist.has(k)){dist.set(k,dd+1);q.push([br,bc,d,ca,m]);} } }
    // collect
    if(ca===0){ const idx=itemIdx.get(`${r},${c}`); if(idx!==undefined){ const bit=1<<idx; if(m&bit){ const nm=m&~bit;const k=enc(r,c,d,1,nm);if(!dist.has(k)){dist.set(k,dd+1);q.push([r,c,d,1,nm]);} } } }
  // drop (and check for escape-door victory)
    if(ca===1&&deposits.has(`${r},${c}`)){ const k=enc(r,c,d,0,m);if(!dist.has(k)){dist.set(k,dd+1);q.push([r,c,d,0,m]);} }
    // escape door: if door exists, goal is reach door after all collected+deposited
    if(base.door&&m===0&&ca===0){
      const [dr,dc]=base.door;
      if(r===dr&&c===dc) return dd;
    }
  }
  return null;
}

/* ============================= SOLUTION PATH (BFS with backtrack) ============================= */
let currentSolutionPath = null; // array of {r,c} visited robot positions
let solutionVisible = false;
let levelAttempts = 0; // attempts on current level
const SOLUTION_SHOW_AFTER = 3; // show button after this many attempts

function computeSolutionPath(base){
  // Extended BFS that records predecessor for path reconstruction
  const size=base.size;
  const obstacles=new Set((base.obstacles||[]).map(o=>`${o[0]},${o[1]}`));
  const deposits=new Set((base.deposit||[]).map(d=>`${d[0]},${d[1]}`));
  const items=base.items||[];
  const itemIdx=new Map();
  items.forEach((p,i)=>itemIdx.set(`${p[0]},${p[1]}`,i));
  const allMask=(1<<items.length)-1;
  const enc=(r,c,d,ca,m)=>`${r}|${c}|${d}|${ca}|${m}`;
  const inB=(r,c)=>r>=0&&r<size&&c>=0&&c<size;
  const isObs=(r,c)=>obstacles.has(`${r},${c}`);
  const dist=new Map(), prev=new Map(), q=[];
  let head=0;
  const s0=enc(base.robot[0],base.robot[1],0,0,allMask);
  dist.set(s0,0); q.push([base.robot[0],base.robot[1],0,0,allMask]);
  let goalKey=null;
  outer: while(head<q.length){
    const [r,c,d,ca,m]=q[head++];
    const key=enc(r,c,d,ca,m);
    const dd=dist.get(key);
    if(m===0&&ca===0&&(!base.door||(r===base.door[0]&&c===base.door[1]))){ goalKey=key; break outer; }
    if(base.door&&m===0&&ca===0){ const [dr,dc]=base.door; if(r===dr&&c===dc){ goalKey=key; break outer; } }
    const tryAdd=(nr,nc,nd,nca,nm,pk)=>{ const k=enc(nr,nc,nd,nca,nm); if(!dist.has(k)){dist.set(k,dd+1);prev.set(k,pk);q.push([nr,nc,nd,nca,nm]);} };
    tryAdd(r,c,(d+3)%4,ca,m,key); tryAdd(r,c,(d+1)%4,ca,m,key);
    let nr=r,nc=c;
    if(d===0)nr--;else if(d===1)nc++;else if(d===2)nr++;else nc--;
    if(inB(nr,nc)&&!isObs(nr,nc)) tryAdd(nr,nc,d,ca,m,key);
    { let br=r,bc=c; if(d===0)br++;else if(d===1)bc--;else if(d===2)br--;else bc++;   // Recuar
      if(inB(br,bc)&&!isObs(br,bc)) tryAdd(br,bc,d,ca,m,key); }
    if(ca===0){ const idx=itemIdx.get(`${r},${c}`); if(idx!==undefined){ const bit=1<<idx; if(m&bit) tryAdd(r,c,d,1,m&~bit,key); } }
    if(ca===1&&deposits.has(`${r},${c}`)) tryAdd(r,c,d,0,m,key);
  }
  if(!goalKey) return null;
  // reconstruct path of robot positions
  const path=[];
  let cur=goalKey;
  while(cur){
    const [r,c]=cur.split('|').map(Number);
    path.unshift({r,c});
    cur=prev.get(cur)||null;
  }
  // deduplicate consecutive same positions (turns don't move)
  const reduced=path.filter((p,i)=>i===0||p.r!==path[i-1].r||p.c!==path[i-1].c);
  return reduced;
}

function showSolutionPath(){
  if(!levelState||!currentTheme) return;
  const levels=levelsFor(currentCycleKey,currentTheme);
  const base=levels[currentLevelIndex];
  if(!base) return;
  // compute if not cached
  if(!currentSolutionPath) currentSolutionPath=computeSolutionPath(base);
  if(!currentSolutionPath){ setFeedback(T('solutionError'),"err"); return; }
  if(window._board3dSet) window._board3dSet(false);   // o caminho só se desenha no tabuleiro 2D
  solutionVisible=true;
  _drawSolutionOverlay();
  const banner=$("solution-banner");
  if(banner){ banner.classList.add("visible"); }
  const btn=$("btn-show-solution");
  if(btn){ btn.textContent=T("hideSolution"); }
}
function hideSolutionPath(){
  solutionVisible=false;
  _clearSolutionOverlay();
  const banner=$("solution-banner");
  if(banner) banner.classList.remove("visible");
  const btn=$("btn-show-solution");
  if(btn){ btn.textContent=T("showSolution"); }
}
function _clearSolutionOverlay(){
  document.querySelectorAll(".solution-path-cell").forEach(e=>e.remove());
}
function _drawSolutionOverlay(){
  _clearSolutionOverlay();
  if(!currentSolutionPath||!levelState) return;
  const gridEl=$("grid"); if(!gridEl) return;
  const firstCell=gridEl.querySelector(".cell"); if(!firstCell) return;
  const cellW=firstCell.offsetWidth||54, cellH=firstCell.offsetHeight||54;
  const wrap=document.querySelector(".grid-wrapper"); if(!wrap) return;
  currentSolutionPath.forEach((p,i)=>{
    const dot=document.createElement("div");
    dot.className="solution-path-cell";
    dot.style.width=(cellW*0.45)+"px";
    dot.style.height=(cellH*0.45)+"px";
    dot.style.left=(p.c*cellW + cellW*0.275)+"px";
    dot.style.top=(p.r*cellH + cellH*0.275)+"px";
    dot.style.animationDelay=(i*30)+"ms";
    const num=document.createElement("span");
    num.className="solution-step-num";
    num.textContent=i+1;
    dot.appendChild(num);
    wrap.appendChild(dot);
  });
}
function updateSolutionBtn(){
  const btn=$("btn-show-solution"); if(!btn) return;
  if(levelAttempts>=SOLUTION_SHOW_AFTER){
    btn.classList.add("visible");
    const ac=btn.parentNode&&btn.parentNode.querySelector(".attempt-counter");
    if(ac) ac.textContent=`(${levelAttempts} tentativas)`;
  } else {
    btn.classList.remove("visible");
  }
}


function buildLevelState(base){
  const ie=currentTheme.itemEmojis||[];
  return {
    size:base.size,robot:[base.robot[0],base.robot[1]],
    items:(base.items||[]).map((p,i)=>({row:p[0],col:p[1],emojiIndex:ie.length?(i%ie.length):0})),
    deposit:(base.deposit||[]).map(d=>[d[0],d[1]]),
    obstacles:(base.obstacles||[]).map(o=>[o[0],o[1]]),
    door: base.door ? [base.door[0],base.door[1]] : null
  };
}
function loadLevel(index){
  const levels=levelsFor(currentCycleKey,currentTheme);
  if(index<0||index>=levels.length) return;
  currentLevelIndex=index;
  const base=levels[index];
  levelState=buildLevelState(base);
  dir=0;carriedItem=false;moveCount=0; if(window.vbTrailSync) window.vbTrailSync();
  updateMoves();runningQueue=false;resetQueue();
  escapeAllDeposited=false;escapeQuizOpen=false;
  const popupEscape=$("popup-escape-quiz"); if(popupEscape) popupEscape.classList.remove("visible");
  const popup=$("popup-complete"); if(popup) popup.classList.remove("visible");
  levelAttempts=0; currentSolutionPath=null; solutionVisible=false;
  _clearSolutionOverlay();
  hideSolutionPath();
  shouldDanceOnRender=false; resetStuckTracker();
  const gridEl=$("grid");
  if(gridEl){ gridEl.classList.remove("big","huge"); if(levelState.size>=8)gridEl.classList.add("big"); if(levelState.size>=9)gridEl.classList.add("huge"); }
  const ok=optKey(currentCycleKey,currentThemeKey,index);
  if(OPT_CACHE.has(ok)){
    currentMinMoves=OPT_CACHE.get(ok);
    const tagOpt=$("tag-optimal"); if(tagOpt) tagOpt.textContent=`🏁 Ótimo: ${Number.isFinite(currentMinMoves)?currentMinMoves:"—"}`;
  } else {
    // Defer BFS on large grids to avoid blocking the UI
    currentMinMoves=null;
    const tagOpt=$("tag-optimal"); if(tagOpt) tagOpt.textContent="🏁 Ótimo: …";
    const _ok=ok, _base=base;
    setTimeout(()=>{
      const result=computeOptimal(_base);
      OPT_CACHE.set(_ok,result);
      if(ok===_ok){ currentMinMoves=result; }
      const t=$("tag-optimal"); if(t) t.textContent=`🏁 Ótimo: ${Number.isFinite(result)?result:"—"}`;
    }, base.size>=8 ? 60 : 0);
  }
  const crumbLevel=$("crumb-level");
  const designedCount=currentTheme._designedCount||levels.length;
  const isGenerated=base._generated||index>=designedCount;
  if(crumbLevel){
    const genBadge=isGenerated?` <span style="font-size:.7rem;background:#fef3c7;color:#92400e;border:1px solid #fcd34d;border-radius:999px;padding:1px 7px;font-weight:700;">✨ extra</span>`:"";
    crumbLevel.innerHTML=T('levelOf',{a:currentLevelIndex+1,b:levels.length})+genBadge;
  }
  const pill=$("pill-difficulty"); if(pill) pill.textContent=`Dificuldade: ${base.difficulty}`;
  const ltt=$("level-title-text"); if(ltt) ltt.textContent=currentTheme.name;
  const le=$("level-emoji"); if(le) le.textContent=currentTheme.emoji;
  const ld=$("level-desc");
  if(ld){
    ld.textContent=T('levelDesc',{n:currentLevelIndex+1,desc:base.desc});
    if(isGenerated) ld.style.opacity="0.7";
    else ld.style.opacity="";
  }
  const qb=$("queue-box"); const rq=$("btn-run-queue"); const uq=$("btn-undo-queue"); const cq=$("btn-clear-queue");
  const qMode=isQueueMode();
  if(qb) qb.classList.toggle("hidden",!qMode);
  if(rq) rq.style.display=qMode?"inline-flex":"none";
  if(uq) uq.style.display=qMode?"inline-flex":"none";
  if(cq) cq.style.display=qMode?"inline-flex":"none";
  progLevelSetup();
  const backBtn=$("btn-cmd-back"); if(backBtn) backBtn.style.display="";   // Recuar disponível em todos os ciclos
  const ht=$("hint-text");
  if(ht){
    if(isEscapeMode()) ht.textContent=T('hintEscape');
    else if(qMode){ if(currentCycleKey==="sec") ht.textContent=T('hintQueueSec'); else if(currentCycleKey==="3c") ht.textContent=T('hintQueue3c'); else ht.textContent=T('hintQueue2c'); }
    else ht.textContent=T('hintDirect');
  }
  setFeedback(T('feedbackInit'),"info");
  renderGrid();
  // Auto-show tutorial only on first visit to this theme (level 0, never seen before)
  if(index===0){
    const tutKey="vb_tut_seen_"+(currentUniverseId||"")+"_"+(currentCycleKey||"")+"_"+(currentThemeKey||"");
    let alreadySeen=false;
    try{ alreadySeen=!!localStorage.getItem(tutKey); }catch(e){}
    if(!alreadySeen){
      try{ localStorage.setItem(tutKey,"1"); }catch(e){}
      // Delay to ensure grid + elements are fully rendered
      setTimeout(()=>{ _tutOn=false; _showTut(); }, 650);
    }
  }
}
let _tutStep=0,_tutOn=false;

// Returns tutorial steps adapted to the current mode
function _getTutData(){
  if(isEscapeMode()) return [
    {sel:".cell.item",        msg:T('tutEsc1')},
    {sel:"#btn-cmd-collect",  msg:T('tutEsc2')},
    {sel:".cell.deposit",     msg:T('tutEsc3')},
    {sel:".cell.door-cell",   msg:T('tutEsc4')},
  ];
  if(isQueueMode()) return [
    {sel:"#btn-cmd-move",     msg:T('tutQ1')},
    {sel:"#btn-cmd-left",     msg:T('tutQ2')},
    {sel:"#btn-cmd-collect",  msg:T('tutQ3')},
    {sel:"#btn-run-queue",    msg:T('tutQ4')},
    {sel:"#btn-undo-queue",   msg:T('tutQ5')},
    {sel:".cell.item",        msg:T('tutQ6')},
  ];
  // Direct mode (1st Cycle)
  return [
    {sel:"#btn-cmd-move",     msg:T('tutMsg1')},
    {sel:"#btn-cmd-left",     msg:T('tutMsg2')},
    {sel:".cell.item",        msg:T('tutMsg3')},
    {sel:"#btn-cmd-collect",  msg:T('tutMsg4')},
    {sel:".cell.deposit",     msg:T('tutMsg5')},
  ];
}

function _showTut(){if(_tutOn)return;_tutOn=true;_tutStep=0;_tutNext();}
function _tutNext(){
  _tutRm();
  const tutData=_getTutData();
  if(_tutStep>=tutData.length){_tutOn=false;return;}
  const s=tutData[_tutStep],el=document.querySelector(s.sel);
  if(!el){_tutStep++;_tutNext();return;}
  const uc=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-color').trim()||'#6366f1';
  const ur=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-rgb').trim()||'99,102,241';
  const d=document.createElement("div");d.id="vb-tut";
  d.style.cssText=`position:fixed;z-index:9999;background:linear-gradient(135deg,rgba(6,8,24,.97),rgba(10,12,32,.97));color:#fff;padding:12px 15px;border-radius:16px;font-size:.83rem;font-weight:700;font-family:Nunito,sans-serif;box-shadow:0 0 0 1.5px rgba(${ur},.45),0 6px 24px rgba(0,0,0,.6),0 0 32px rgba(${ur},.15);max-width:240px;line-height:1.45;border:1px solid rgba(${ur},.35);`;
  const step=document.createElement("div");step.style.cssText=`font-size:.65rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:${uc};opacity:.9;margin-bottom:5px;`;step.textContent=T('tutStep',{a:_tutStep+1,b:tutData.length});
  const p=document.createElement("p");p.style.cssText="margin:0 0 9px;color:rgba(255,255,255,.88);";p.textContent=s.msg;
  const btnRow=document.createElement("div");btnRow.style.cssText="display:flex;gap:6px;";
  const btn=document.createElement("button");btn.textContent=T('tutOk');
  btn.style.cssText=`background:${uc};border:none;color:#fff;border-radius:8px;padding:4px 12px;cursor:pointer;font-size:.76rem;font-weight:800;font-family:Nunito,sans-serif;`;
  btn.onclick=()=>{_tutStep++;_tutNext();};
  const skip=document.createElement("button");skip.textContent=T('tutSkip');
  skip.style.cssText="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.65);border-radius:8px;padding:4px 9px;cursor:pointer;font-size:.72rem;font-weight:600;font-family:Nunito,sans-serif;";
  skip.onclick=()=>{_tutOn=false;_tutRm();};
  btnRow.appendChild(btn);btnRow.appendChild(skip);
  d.appendChild(step);d.appendChild(p);d.appendChild(btnRow);document.body.appendChild(d);
  const r=el.getBoundingClientRect();
  d.style.top=Math.min(r.bottom+10,window.innerHeight-140)+"px";
  d.style.left=Math.max(8,Math.min(r.left,window.innerWidth-256))+"px";
  el.style.outline=`2.5px solid ${uc}`;el.style.outlineOffset="3px";el.classList.add("vb-tut-hl");
}
function _tutRm(){const t=document.getElementById("vb-tut");if(t)t.remove();document.querySelectorAll(".vb-tut-hl").forEach(e=>{e.style.outline="";e.style.outlineOffset="";e.classList.remove("vb-tut-hl");});}

/* ============================= DOOR SVG ============================= */
function buildDoorSVG(unlocked, opening){
  // Colours
  const frameCol  = unlocked ? '#16a34a' : '#dc2626';
  const panelCol  = unlocked ? '#4ade80' : '#fca5a5';
  const panelDark = unlocked ? '#15803d' : '#b91c1c';
  const knobCol   = unlocked ? '#14532d' : '#7f1d1d';
  const archCol   = unlocked ? '#bbf7d0' : '#fee2e2';
  const glowCol   = unlocked ? 'rgba(74,222,128,0.35)' : 'rgba(252,165,165,0.35)';
  const icon      = unlocked ? '🔓' : '🔒';
  // Panel transform for opening animation
  const panelStyle = opening ? 'style="transform-origin:left center;animation:doorOpen 0.5s ease forwards;"' : '';
  return `<svg viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <filter id="dg${unlocked?'u':'l'}"><feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="${glowCol}"/></filter>
    </defs>
    <!-- arch background -->
    <rect x="3" y="8" width="42" height="45" rx="3" fill="${archCol}" filter="url(#dg${unlocked?'u':'l'})"/>
    <!-- frame -->
    <rect x="3" y="8" width="42" height="45" rx="3" fill="none" stroke="${frameCol}" stroke-width="3"/>
    <!-- arch top -->
    <path d="M3,20 Q3,8 24,8 Q45,8 45,20" fill="${panelCol}" stroke="${frameCol}" stroke-width="2.5"/>
    <!-- door panel -->
    <rect ${panelStyle} x="6" y="20" width="36" height="30" rx="2" fill="${panelCol}" stroke="${panelDark}" stroke-width="1.5"/>
    <!-- panel detail lines -->
    <rect x="9" y="23" width="30" height="11" rx="2" fill="${panelDark}" opacity="0.18"/>
    <rect x="9" y="37" width="30" height="10" rx="2" fill="${panelDark}" opacity="0.18"/>
    <!-- knob -->
    <circle cx="${unlocked?'32':'16'}" cy="36" r="3" fill="${knobCol}"/>
    <circle cx="${unlocked?'32':'16'}" cy="36" r="1.5" fill="${unlocked?'#86efac':'#fca5a5'}"/>
    <!-- lock/unlock icon -->
    <text x="24" y="57" text-anchor="middle" font-size="10" dominant-baseline="auto">${icon}</text>
  </svg>`;
}


function shakeRobot(){
  const icon=document.querySelector(".robot-cell .robot-icon");
  if(!icon) return;
  icon.classList.remove("robot-icon-shake");
  void icon.offsetWidth;
  icon.classList.add("robot-icon-shake");
  const inner=icon.querySelector(".robot-icon-inner");
  const target=inner||icon;
  target.addEventListener("animationend",()=>icon.classList.remove("robot-icon-shake"),{once:true});
}

/* robot rendered inside cell — overlay removed */
/* ===== MOBILE GRID SCALE ===== */
function _scaleGridForMobile(){
  const wrap=document.querySelector(".grid-wrapper");
  const gridEl=$("grid");
  if(!wrap||!gridEl) return;
  wrap.style.transform="none";
  wrap.style.marginBottom="";
  if(wrap.classList.contains("mode3d")) return;
  const naturalW=gridEl.scrollWidth+8;
  const availW=wrap.parentElement?wrap.parentElement.clientWidth:window.innerWidth;
  if(naturalW>availW && availW>0){
    const scale=Math.max(0.45, availW/naturalW);
    wrap.style.transform="scale("+scale+")";
    const naturalH=gridEl.scrollHeight+8;
    wrap.style.marginBottom=((naturalH*scale)-naturalH)+"px";
  }
}
window.addEventListener("resize",()=>{ if(levelState) _scaleGridForMobile(); });

/* ===== LEVEL TRANSITION ===== */
function _transitionLevel(fn){
  const gameLayout=document.querySelector(".game-layout");
  if(!gameLayout){ fn(); return; }
  gameLayout.classList.add("level-fade-out");
  setTimeout(()=>{
    gameLayout.classList.remove("level-fade-out");
    fn();
    gameLayout.classList.add("level-fade-in");
    gameLayout.addEventListener("animationend",()=>gameLayout.classList.remove("level-fade-in"),{once:true});
  },180);
}

/* Portal de depósito animado (portado de "Cibersegurança — Programação!") */
function buildPortalSVG(state,uid){
  const P={waiting:["#6366f1","#c7d2fe","#312e81"],ready:["#22c55e","#bbf7d0","#14532d"],complete:["#f59e0b","#fef08a","#78350f"]}[state]||["#6366f1","#c7d2fe","#312e81"];
  return `<svg class="portal-svg portal-${state}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <defs><radialGradient id="pg${uid}"><stop offset="0" stop-color="${P[1]}"/><stop offset=".55" stop-color="${P[0]}"/><stop offset="1" stop-color="${P[2]}" stop-opacity=".9"/></radialGradient></defs>
    <circle class="pt-wave" cx="50" cy="50" r="42" fill="none" stroke="${P[0]}" stroke-width="3"/>
    <circle class="pt-wave pt-wave2" cx="50" cy="50" r="42" fill="none" stroke="${P[1]}" stroke-width="2.5"/>
    <circle class="pt-ring" cx="50" cy="50" r="36" fill="${P[0]}" fill-opacity=".14" stroke="${P[0]}" stroke-width="2.5"/>
    <g class="pt-spin"><circle cx="50" cy="50" r="31" fill="none" stroke="${P[1]}" stroke-width="4" stroke-linecap="round" stroke-dasharray="16 12"/></g>
    <g class="pt-spin pt-spin2"><circle cx="50" cy="50" r="23" fill="none" stroke="${P[0]}" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="9 9"/></g>
    <circle class="pt-core" cx="50" cy="50" r="14" fill="url(#pg${uid})"/>
    <polygon class="pt-star" points="50,40 53,47 61,47.5 55,52.5 57,60 50,56 43,60 45,52.5 39,47.5 47,47" fill="#fff" fill-opacity=".9"/>
  </svg>`;
}
function renderGrid(){
  const gridEl=$("grid"); if(!gridEl||!levelState) return;
  const size=levelState.size;
  // Ângulo acumulado do robô: vira pelo caminho mais curto, para a viragem poder ser animada
  const _gp=renderGrid._prev;
  let rotNow=dir*90, rotFrom=dir*90, turned=0;
  if(_gp && _gp.ls===levelState && _gp.size===size && typeof _gp.acc==="number"){
    turned=(((dir*90-_gp.acc)%360)+540)%360-180;
    rotFrom=_gp.acc; rotNow=_gp.acc+turned;
    const k=Math.trunc(rotNow/360); rotNow-=k*360; rotFrom-=k*360;
  }
  const rotInit=turned?rotFrom:rotNow;
  if(gridEl.parentElement) gridEl.parentElement.style.setProperty("--n",size);
  gridEl.innerHTML="";
  // estado do portal: à espera (há itens por trazer), pronto (o robô vem a carregar) ou completo (tudo entregue)
  const _pState=(levelState.items.length===0&&!carriedItem)?"complete":(carriedItem?"ready":"waiting");
  renderGrid._uid=(renderGrid._uid||0)+1;
  const _portalHtml=()=>buildPortalSVG(_pState,renderGrid._uid+"_"+Math.random().toString(36).slice(2,6));
  // bússola: acumula o ângulo para rodar sempre pelo caminho mais curto
  if(!(_gp && _gp.ls===levelState && _gp.size===size)) renderGrid._cAcc=dir*90; else renderGrid._cAcc=(renderGrid._cAcc||0)+turned;
  const _nd=$("compass-needle"); if(_nd) _nd.style.transform="rotate("+renderGrid._cAcc+"deg)";
  const _cp=$("dpad-compass"); if(_cp) _cp.setAttribute("title","Direção do robô: "+DIR_ARROWS[dir]);
  gridEl.style.gridTemplateColumns=`repeat(${size},1fr)`;
  gridEl.classList.remove("big","huge");
  if(size>=8)gridEl.classList.add("big");
  if(size>=9)gridEl.classList.add("huge");
  for(let r=0;r<size;r++){
    for(let c=0;c<size;c++){
      const cell=document.createElement("div");
      cell.className="cell";
      cell.dataset.r=r; cell.dataset.c=c;
      const isObs=levelState.obstacles.some(o=>o[0]===r&&o[1]===c);
      const isDep=levelState.deposit.some(d=>d[0]===r&&d[1]===c);
      const itemAt=levelState.items.find(it=>it.row===r&&it.col===c);
      const isRobot=levelState.robot[0]===r&&levelState.robot[1]===c;
      if(isObs){ cell.classList.add("obstacle"); cell.innerHTML=`<span class="obstacle-emoji">${currentTheme.obstacleEmoji||"⚠️"}</span>`; }
      if(isDep){ cell.classList.add("deposit"); cell.innerHTML=_portalHtml(); }
      // SVG door
      if(levelState.door && levelState.door[0]===r && levelState.door[1]===c && !isObs && !isDep){
        const unlocked=escapeAllDeposited;
        cell.classList.add("door-cell","door-"+(unlocked?"open":"locked"));
        cell.style.padding="2px";
        cell.innerHTML=buildDoorSVG(unlocked,false);
      }
      if(itemAt){ cell.classList.add("item"); const list=currentTheme.itemEmojis||[]; const emojiHtml=`<span class="item-emoji">${list.length?list[itemAt.emojiIndex%list.length]:"📦"}</span>`; if(!isRobot) cell.innerHTML=emojiHtml; else cell.dataset.itemEmoji=emojiHtml; }
      if(isRobot){
        cell.classList.add("robot-cell");
        if(carriedItem) cell.classList.add("robot-carrying");
        const angle=dir*90;
        const carryBadge=carriedItem?`<span class="carry-badge">📦</span>`:"";
        const itemUnder=cell.dataset.itemEmoji?`<span class="item-under">${cell.dataset.itemEmoji.replace(/<[^>]*>/g,'').trim()}</span>`:"";
        const itemEmojiRaw=itemAt?(currentTheme.itemEmojis||[])[itemAt.emojiIndex%(((currentTheme.itemEmojis||[]).length)||1)]||"📦":"";
        cell.style.setProperty("--rot",rotInit+"deg");
        cell.innerHTML=`
          ${isDep?_portalHtml():""}
          ${itemAt?`<span class="item-under">${itemEmojiRaw}</span>`:""}
          <div class="robot-icon" style="transform:rotate(var(--rot));"><div class="robot-icon-inner">${VB_ROBOT_CANVAS_HTML}</div></div>
          <span class="robot-dir">${DIR_ARROWS[dir]}</span>
          ${carryBadge}
        `;
        const _gcv=cell.querySelector(".grid-vb-robot");
        if(_gcv){ const _gctx=_gcv.getContext("2d"); if(_gctx) drawVanBerto(_gctx,false,-1,false); }
        const _doDance=shouldDanceOnRender;
        setTimeout(()=>{
          const icon=cell.querySelector(".robot-icon");
          if(!icon) return;
          if(_doDance){
            const inner=icon.querySelector(".robot-icon-inner");
            icon.classList.add("robot-pirouette");
            if(inner) inner.addEventListener("animationend",()=>icon.classList.remove("robot-pirouette"),{once:true});
            vbDanceSequence(icon.querySelector(".grid-vb-robot"),3);
          } else if(!runningQueue){
            icon.classList.add("robot-icon-bounce");
            icon.addEventListener("animationend",()=>icon.classList.remove("robot-icon-bounce"),{once:true});
          }
        },10);
      }
      gridEl.appendChild(cell);
    }
  }
  wrapBillboards(gridEl);
  if(window._cam3dUpdate) window._cam3dUpdate(levelState.robot[0],levelState.robot[1],size);
  // Deslize: se o robô andou exatamente 1 casa no mesmo nível, parte da casa anterior
  const _pv=renderGrid._prev;
  if(_pv && _pv.ls===levelState && _pv.size===size && gridEl.offsetParent!==null){
    const step=Math.abs(_pv.r-levelState.robot[0])+Math.abs(_pv.c-levelState.robot[1]);
    const rcell=gridEl.children[levelState.robot[0]*size+levelState.robot[1]], pcell=gridEl.children[_pv.r*size+_pv.c];
    if(step===1 && rcell && pcell && rcell.classList.contains("robot-cell")){
      rcell.style.transition="none";
      rcell.style.setProperty("--gx",(pcell.offsetLeft-rcell.offsetLeft)+"px");
      rcell.style.setProperty("--gy",(pcell.offsetTop-rcell.offsetTop)+"px");
      void rcell.offsetWidth;
      rcell.style.transition="";
      rcell.style.setProperty("--gx","0px");
      rcell.style.setProperty("--gy","0px");
    }
  }
  // Viragem animada (transição de --rot + pequeno "swivel" 3D)
  if(turned && gridEl.offsetParent!==null){
    const tc=gridEl.children[levelState.robot[0]*size+levelState.robot[1]];
    if(tc && tc.classList.contains("robot-cell")){
      void tc.offsetWidth;
      tc.style.setProperty("--rot",rotNow+"deg");
      const ti=tc.querySelector(".robot-icon");
      if(ti){
        ti.style.setProperty("--turn-from",(-turned*0.85).toFixed(0)+"deg");
        ti.classList.add("robot-turn");
        ti.addEventListener("animationend",e=>{ if(e.animationName==="robotTurn") ti.classList.remove("robot-turn"); });
      }
    }
  }
  renderGrid._prev={ls:levelState,size,r:levelState.robot[0],c:levelState.robot[1],acc:rotNow};
  setTimeout(()=>{
    _scaleGridForMobile();
    if(solutionVisible) _drawSolutionOverlay();
  },10);
  shouldDanceOnRender=false;
}
  /* 3D: agrupa o conteúdo "de pé" de cada célula (tudo menos o SVG do portal) */
  function wrapBillboards(g){
    g.querySelectorAll(".cell").forEach(cell=>{
      const nodes=[...cell.childNodes].filter(n=>!(n.nodeType===1&&n.nodeName.toLowerCase()==="svg"));
      if(!nodes.length) return;
      const bb=document.createElement("div"); bb.className="bb";
      nodes.forEach(n=>bb.appendChild(n));
      cell.appendChild(bb);
      // sombra de contacto no chão (só se vê em 3D) — fica FORA do "bb", deitada na casa
      const sh=document.createElement("span"); sh.className="cshadow"; sh.setAttribute("aria-hidden","true");
      cell.appendChild(sh);
    });
  }

  /* 3D: alternar 2D/3D, rodar, inclinar e seguir o robô (preferências guardadas) */
  (function board3dToggle(){
    const KEY="vb_pc_board3d", KEYF="vb_pc_board3d_follow", KEYF2="vb_pc_board3d_follow_v2";
    const gw=document.querySelector(".grid-wrapper"), btn=document.getElementById("btn-3d");
    const g=document.getElementById("grid");
    if(!gw||!btn||!g) return;
    window._board3dOn=()=>on;
    // follow: null = AUTOMÁTICO (no telemóvel, em grelhas 7×7 ou maiores a câmara aproxima-se
    // e segue o robô sozinha); true/false = o aluno carregou em "Seguir" e a escolha dele manda.
    let on=true, follow=null;
    try{
      { const _k=localStorage.getItem(KEY); on=(_k===null)?(window.innerWidth>=900):(_k!=="0"); }   // sem preferência guardada: 3D só em ecrãs largos
      const v2=localStorage.getItem(KEYF2);
      follow=v2==="1"?true:v2==="0"?false:(localStorage.getItem(KEYF)==="1"?true:null);
    }catch(e){}
    const camL=document.getElementById("btn-cam-l"), camR=document.getElementById("btn-cam-r");
    const tiltB=document.getElementById("btn-tilt"), folB=document.getElementById("btn-follow");
    const rstB=document.getElementById("btn-cam-reset");
    const PRESETS=[[30,"De cima"],[50,"Média"],[65,"Baixa"]];
    const DEF_TILT=window.matchMedia("(max-width:600px)").matches?40:50;
    let yaw=0, tilt=DEF_TILT, pos=null;
    const rad=d=>d*Math.PI/180;
    const isPhone=()=>window.matchMedia("(max-width:600px)").matches;
    // O zoom que segue o robô é SÓ por escolha do aluno (botão "Seguir"): por defeito o tabuleiro
    // inteiro ajusta-se ao espaço do ecrã, sem ficar cortado.
    const followOn=()=>follow===true;
    // zoom da câmara: no telemóvel (7×7 ou maior) um zoom mais suave, para ainda se ver o caminho à frente
    const zoomFor=n=>(isPhone()&&n>=7)?Math.min(1.7,Math.max(1.35,n/4.5)):Math.max(1.3,n/3.6);
    let camShift=1;       // 1 = robô um pouco abaixo do centro (cabeça cabe); 0 = câmara encostada ao bordo do tabuleiro
    const D=1700;        // perspective do CSS
    const GAP=4;         // gap da grelha
    const PADV=14;       // folga vertical dentro da caixa (px)
    const SAFE_X=6;      // folga horizontal (px)

    /* ── Enquadramento ────────────────────────────────────────────────
       Em vez de margens em % (que só serviam para o tabuleiro plano), projeta-se
       o tabuleiro 3D de verdade — laje + uma "parede" com a altura do robô a
       cada canto — e daí saem: a escala que cabe na largura, a altura da caixa
       e o deslocamento vertical que centra tudo. O robô nunca fica cortado. */
    function layout(){
      if(!on){ gw.style.height=""; gw.style.setProperty("--cy","0px"); return; }
      const Wg=g.offsetWidth, Hg=g.offsetHeight;
      if(!gw.clientWidth||!Wg||!Hg) return;
      const n=pos?pos[2]:5;
      const cell=(Wg-(n-1)*GAP)/n;
      const hS=cell*0.95+6;                       // altura do robô de pé (px, antes da escala)
      const ct=Math.cos(rad(tilt)), st=Math.sin(rad(tilt));
      const cw=Math.cos(rad(yaw)),  sw=Math.sin(rad(yaw));
      const u=[-hS*ct*sw, -hS*ct*cw, hS*st];      // vetor "para cima" do robô, no referencial da grelha
      const hw=Wg/2, hh=Hg/2, pts=[];
      [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b])=>{
        pts.push([a*(hw+9),b*(hh+9),-16]);          // cantos da laje
        const x=a*(hw-cell*0.2), y=b*(hh-cell*0.2);
        pts.push([x,y,3],[x+u[0],y+u[1],3+u[2]]);   // pé e cabeça de um robô nesse canto
      });
      const proj=(p,s,fx,fy)=>{
        const x=(p[0]+fx)*s, y=(p[1]+fy)*s;
        const rx=x*cw-y*sw, ry=x*sw+y*cw;
        return [rx, ry*ct-p[2]*st, ry*st+p[2]*ct];
      };
      const box=(s,T)=>{
        let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
        pts.forEach(p=>{
          const q=proj(p,s,0,0), k=D/(D-q[2]), X=q[0]*k, Y=(q[1]+T)*k;
          if(X<x0)x0=X; if(X>x1)x1=X; if(Y<y0)y0=Y; if(Y>y1)y1=Y;
        });
        return [x0,x1,y0,y1];
      };
      // 1) escala que cabe na largura
      const avail=gw.clientWidth-16-SAFE_X;
      let s=0.85;
      for(let i=0;i<6;i++){ const b=box(s,0); const w=Math.max(-b[0],b[1])*2; if(w>0) s*=avail/w; }
      s=Math.max(0.3,Math.min(1.2,s));
      // 2) desloca (T) até o conjunto ficar centrado na vertical
      let T=0, b=box(s,T);
      const solveH=()=>{ T=0; for(let i=0;i<6;i++){ b=box(s,T); T-=((b[2]+b[3])/2)/1.05; } b=box(s,T); return Math.round((b[3]-b[2])+2*PADV); };
      let Hb=solveH();
      // em ecrãs baixos (portáteis 768 px) o tabuleiro não pode ser mais alto do que o ecrã: reduz a escala até caber
      const maxH=Math.max(320,window.innerHeight-130);
      if(!followOn()&&!isPhone()&&Hb>maxH){ s=Math.max(0.3,s*(maxH-2*PADV)/(Hb-2*PADV)); Hb=solveH(); }
      // 3) com "Seguir": o robô vai para o centro (um pouco abaixo, para a cabeça caber)
      let T2=T;
      if(followOn()&&pos){
        const zf=zoomFor(n), q=proj([0,cell*0.28,3],s*zf,0,0), k=D/(D-q[2]);
        T2=(0.12*Hb*camShift)/k-q[1];
      }
      // posição da grelha no fluxo (a partir do topo da caixa) vs. onde queremos o centro
      const Cflow=gw.clientTop+g.offsetTop+Hg/2;
      const cy=T2-(Cflow-Hb/2);
      gw.style.height=Hb+"px";
      gw.style.setProperty("--sfit",s.toFixed(4));
      gw.style.setProperty("--cy",cy.toFixed(1)+"px");
    }

    function setYaw(y){
      yaw=y;
      gw.style.setProperty("--yaw",y+"deg");
      layout();
    }
    function setTilt(t){
      tilt=Math.max(25,Math.min(68,t));
      gw.style.setProperty("--tilt",tilt.toFixed(1)+"deg");
      if(tiltB){ let best=PRESETS[0]; PRESETS.forEach(q=>{ if(Math.abs(q[0]-tilt)<Math.abs(best[0]-tilt)) best=q; }); tiltB.textContent="📐 "+best[1]; }
      layout();
    }
    function applyFollow(){
      let fx=0,fy=0,z=1; camShift=1;
      const fo=on&&followOn()&&!!pos;
      if(fo){
        const r=pos[0], c=pos[1], n=pos[2];
        z=zoomFor(n);
        // A câmara não passa dos bordos do tabuleiro (senão via-se só vazio). Só no lado do ecrã
        // que fica "para cima" se deixa uma margem, porque é para lá que sai a cabeça do robô de pé.
        const base=Math.max(0,0.5-1/(2*z)), m=0.9/n;
        const gx=-Math.sin(rad(yaw)), gy=-Math.cos(rad(yaw));          // "para cima" no ecrã, no referencial da grelha
        const lim=(o,gv)=>Math.max(-(base+m*Math.max(0,-gv)),Math.min(base+m*Math.max(0,gv),o));
        const ox=(c+0.5)/n-0.5, oy=(r+0.5)/n-0.5;
        const cx=lim(ox,gx), cy=lim(oy,gy);
        fx=-cx*100; fy=-cy*100;
        // perto de um bordo desliga o "robô um pouco abaixo do centro", para o bordo não fugir do ecrã
        camShift=Math.max(0,Math.min(1,(base-Math.abs(cx*gx+cy*gy))/m));
      }
      if(folB) folB.setAttribute("aria-pressed",fo?"true":"false");
      gw.style.setProperty("--fx",fx.toFixed(2)+"%");
      gw.style.setProperty("--fy",fy.toFixed(2)+"%");
      gw.style.setProperty("--zoom",z.toFixed(2));
      layout();
    }
    // chamado pelo renderGrid sempre que o robô (ou o nível) muda
    window._cam3dUpdate=function(r,c,n){ pos=[r,c,n]; refit(); applyFollow(); };

    function apply(){
      gw.classList.toggle("mode3d",on);
      btn.setAttribute("aria-pressed",on?"true":"false");
      btn.textContent=on?"🧊 3D":"🔲 2D";
      if(on && typeof solutionVisible!=="undefined" && solutionVisible && typeof hideSolutionPath==="function") hideSolutionPath();
      if(typeof _scaleGridForMobile==="function") _scaleGridForMobile();
      [camL,camR,tiltB,folB,rstB].forEach(b=>{ if(b) b.style.display=on?"":"none"; });
      applyFollow();
    }
    // Recentrar: rotação, inclinação e arrasto voltam ao padrão (o "Seguir" fica como estava)
    function recenter(){
      const tgt=Math.round(yaw/360)*360;           // caminho mais curto até à rotação 0
      setYaw(tgt); setTilt(DEF_TILT); setPan(0,0);
      if(tgt!==0) setTimeout(()=>{
        if(yaw!==tgt) return;
        gw.classList.add("notrans"); setYaw(0);    // 360° == 0°: troca invisível
        requestAnimationFrame(()=>requestAnimationFrame(()=>gw.classList.remove("notrans")));
      },650);
    }
    window._board3dSet=function(v){ if(on===v) return; on=v; try{ localStorage.setItem(KEY,on?"1":"0"); }catch(e){} apply(); };
    btn.addEventListener("click",()=>{ on=!on; try{ localStorage.setItem(KEY,on?"1":"0"); }catch(e){} apply(); });
    if(camL) camL.addEventListener("click",()=>setYaw((Math.round(yaw/90)-1)*90));
    if(camR) camR.addEventListener("click",()=>setYaw((Math.round(yaw/90)+1)*90));
    if(tiltB) tiltB.addEventListener("click",()=>{
      let i=PRESETS.findIndex(q=>Math.abs(q[0]-tilt)<8); i=(i+1)%PRESETS.length; setTilt(PRESETS[i][0]);
    });
    if(folB) folB.addEventListener("click",()=>{ follow=!followOn(); try{ localStorage.setItem(KEYF2,follow?"1":"0"); }catch(e){} apply(); });
    if(rstB) rstB.addEventListener("click",recenter);
    gw.addEventListener("dblclick",()=>{ if(on) recenter(); });

    // Arrastar (rato) ou 2 dedos (telemóvel): move o tabuleiro para espreitar e, ao largar,
    // ele volta sozinho ao sítio. Shift+arrastar com o rato roda/inclina (encaixa nos 90°).
    // (Com 1 dedo, deslizar continua a mover o robô.)
    const clampPan=(v,m)=>Math.max(-m,Math.min(m,v));
    function setPan(x,y){
      gw.style.setProperty("--px",x+"px"); gw.style.setProperty("--py",y+"px");
    }
    // o arrasto é limitado: o tabuleiro nunca sai da caixa
    function pan(dx,dy){ setPan(clampPan(dx,gw.clientWidth*0.3),clampPan(dy,gw.clientHeight*0.3)); }
    let drag=null, panning=false;
    const touches=new Map();
    const centroid=()=>{ let x=0,y=0; touches.forEach(v=>{x+=v[0];y+=v[1];}); return [x/touches.size,y/touches.size]; };
    gw.addEventListener("pointerdown",e=>{
      if(!on) return;
      if(e.pointerType==="touch"){
        touches.set(e.pointerId,[e.clientX,e.clientY]);
        if(touches.size===2){ panning=true; const c0=centroid(); drag={mode:"pan",x:c0[0],y:c0[1]}; gw.classList.add("dragging"); }
        return;
      }
      if(e.pointerType!=="mouse"||e.button!==0) return;
      drag=e.shiftKey?{mode:"orbit",x:e.clientX,y:e.clientY,y0:yaw,t0:tilt}:{mode:"pan",x:e.clientX,y:e.clientY};
      gw.classList.add("dragging");
      try{ gw.setPointerCapture(e.pointerId); }catch(_){}
    });
    gw.addEventListener("pointermove",e=>{
      if(e.pointerType==="touch"){
        if(!touches.has(e.pointerId)) return;
        touches.set(e.pointerId,[e.clientX,e.clientY]);
        if(panning&&drag&&touches.size>=2){ const c1=centroid(); pan(c1[0]-drag.x,c1[1]-drag.y); }
        return;
      }
      if(!drag) return;
      if(drag.mode==="orbit"){ setYaw(drag.y0+(e.clientX-drag.x)*0.4); setTilt(drag.t0+(e.clientY-drag.y)*0.15); }
      else pan(e.clientX-drag.x,e.clientY-drag.y);
    });
    function endDrag(e){
      if(e&&e.pointerType==="touch"){
        touches.delete(e.pointerId);
        if(touches.size>=2) return;
        if(!panning) return;
        setTimeout(()=>{ panning=false; },80);   // evita que o fim do gesto conte como "deslizar" do robô
      } else if(!drag) return;
      const was=drag; drag=null; gw.classList.remove("dragging");
      if(was&&was.mode==="orbit") setYaw(Math.round(yaw/90)*90);
      setPan(0,0);                                 // volta ao sítio (com animação)
    }
    gw.addEventListener("pointerup",endDrag);
    gw.addEventListener("pointercancel",endDrag);
    // Rede de segurança: se o "largar" se perder (rato fora da janela, separador em segundo
    // plano, gesto interrompido), o tabuleiro não pode ficar deslocado.
    gw.addEventListener("lostpointercapture",e=>{ if(e.pointerType!=="touch") endDrag(e); });
    window.addEventListener("blur",()=>{ touches.clear(); panning=false; if(drag) endDrag(); else setPan(0,0); });
    document.addEventListener("visibilitychange",()=>{ if(document.hidden){ touches.clear(); panning=false; if(drag) endDrag(); else setPan(0,0); } });
    // enquanto 2 dedos estão a mover o tabuleiro, o "deslizar" do robô não pode disparar
    ["touchend","touchmove","touchstart"].forEach(t=>gw.addEventListener(t,e=>{ if(panning) e.stopImmediatePropagation(); },{capture:true,passive:false}));

    // A escala depende da largura real: recalcula quando o jogo aparece/muda de tamanho
    // (antes era calculada com o jogo escondido, largura 0, e o tabuleiro saía grande demais e cortado).
    let lastW=0;
    function refit(){
      const w=gw.clientWidth; if(!w||w===lastW) return;
      lastW=w; gw.classList.add("notrans"); applyFollow();
      requestAnimationFrame(()=>requestAnimationFrame(()=>gw.classList.remove("notrans")));
    }
    if(window.ResizeObserver) new ResizeObserver(refit).observe(gw);
    window.addEventListener("resize",refit);
    window._cam3dRefit=refit;

    setTilt(tilt); setYaw(0); apply();
  })();




/* ============================= COMMANDS ============================= */
function updateMoves(){ const m=$("moves"); if(m) m.textContent=T('movements',{n:moveCount}); if(window.vbTrailSync) window.vbTrailSync(); }
function starsToEmoji(n){ return n===3?"⭐⭐⭐":n===2?"⭐⭐":"⭐"; }
function computeStars(used,min){ if(!min||!Number.isFinite(min)) return 1; if(used<=min) return 3; if(used<=Math.ceil(min*1.25)) return 2; return 1; }

function openEscapeQuiz(){
  if(escapeQuizOpen) return;
  escapeQuizOpen=true;
  // ── SFX: sino antes do quiz (como no Dia da Criança) ──
  SFX.quiz();
  const q=getQuizQuestion(currentLevelIndex);
  const indexed=q.options.map((o,i)=>({text:o,correct:i===q.correctIndex}));
  for(let i=indexed.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[indexed[i],indexed[j]]=[indexed[j],indexed[i]];}
  const inner=$("popup-escape-quiz-inner");
  inner.innerHTML=`
    <div class="popup-vb-row" style="margin-bottom:12px;">
      <div class="popup-vb-avatar" style="width:48px;flex-shrink:0;filter:drop-shadow(0 4px 12px rgba(var(--u-pop-rgb),.5));animation:popVbFloat 3s ease-in-out infinite;">${VANBERTO_POPUP_SVG()}</div>
      <div class="popup-vb-bubble">${T('escapeQuizDesc')}</div>
    </div>
    <div class="popup-divider"></div>
    <div style="font-family:'Nunito',sans-serif;font-weight:900;color:var(--u-pop-dark);font-size:1rem;margin-bottom:10px;">${T('escapeQuizTitle')}</div>
    <p style="font-weight:700;margin-bottom:12px;font-size:.88rem;color:#1e293b;line-height:1.55;">${q.question}</p>
    ${indexed.map((opt)=>`<button class="quiz-option" data-correct="${opt.correct}"
      style="display:block;width:100%;margin:5px 0;text-align:left;padding:9px 13px;
      background:rgba(var(--u-pop-rgb),.05);border:1.5px solid rgba(var(--u-pop-rgb),.2);
      border-radius:10px;color:#1e293b;font-family:'Nunito Sans',sans-serif;
      font-size:.82rem;font-weight:600;cursor:pointer;transition:all .15s;"
      onmouseover="if(!this.disabled){this.style.background='rgba(99,102,241,.12)';this.style.borderColor='rgba(99,102,241,.45)'}"
      onmouseout="if(!this.disabled){this.style.background='rgba(var(--u-pop-rgb),.05)';this.style.borderColor='rgba(var(--u-pop-rgb),.2)'}"
      >${opt.text}</button>`).join("")}
    <div id="eq-feedback" style="margin-top:10px;font-size:.8rem;font-weight:700;min-height:20px;color:#64748b;"></div>
    <!-- Dica temática — aparece após resposta (como QUIZ_TIPS do Dia da Criança) -->
    <div id="vb-quiz-tip-box"></div>`;
  $("popup-escape-quiz").classList.add("visible");
  inner.querySelectorAll(".quiz-option").forEach(btn=>{
    btn.addEventListener("click",()=>{
      // Bloquear todos os botões imediatamente
      inner.querySelectorAll(".quiz-option").forEach(b=>{ b.disabled=true; b.style.cursor='default'; });
      const correct=btn.getAttribute("data-correct")==="true";
      const fb=inner.querySelector("#eq-feedback");
      const tipBox=inner.querySelector("#vb-quiz-tip-box");
      if(correct){
        btn.style.background="rgba(16,185,129,.15)";btn.style.borderColor="#10b981";btn.style.color="#065f46";
        SFX.correct();
        // ── starMelody na resposta correta ──
        setTimeout(()=>SFX.starMelody(),300);
        if(fb){ fb.style.color="#16a34a"; fb.textContent=currentLang==='en'?"✅ Correct! The door opens!":"✅ Certo! A porta abre-se! 🎉"; }
        // ── Dica temática após resposta correta ──
        const tip=getTipForTheme(currentThemeKey||"");
        if(tipBox&&tip){
          tipBox.style.display="block";
          tipBox.textContent=tip;
        }
        setTimeout(()=>{
          $("popup-escape-quiz").classList.remove("visible");
          escapeQuizOpen=false;
          handleLevelComplete();
        },900);
      } else {
        btn.style.background="rgba(239,68,68,.08)";btn.style.borderColor="rgba(239,68,68,.4)";btn.style.color="#991b1b";
        SFX.wrong();
        if(fb){ fb.style.color="#dc2626"; fb.textContent=T('escapeWrong'); }
        // Reabilitar os outros botões após 1s para nova tentativa
        setTimeout(()=>{
          inner.querySelectorAll(".quiz-option:not([style*='#065f46']):not([style*='#991b1b'])").forEach(b=>{ b.disabled=false; b.style.cursor='pointer'; });
          // Re-enable all except the wrong one clicked
          inner.querySelectorAll(".quiz-option").forEach(b=>{ if(b!==btn){ b.disabled=false; b.style.cursor='pointer'; } });
        },800);
      }
    });
  });
}

function moveForward(){
  const size=levelState.size;let[r,c]=levelState.robot,nr=r,nc=c;
  if(dir===0)nr--;else if(dir===1)nc++;else if(dir===2)nr++;else nc--;
  if(nr<0||nr>=size||nc<0||nc>=size){playSound({id:'soundBump'});shakeRobot();setFeedback(T('fbEdge'),"err");return;}
  if(levelState.obstacles.some(o=>o[0]===nr&&o[1]===nc)){playSound({id:'soundBump'});shakeRobot();setFeedback(T('fbObstacle'),"warn");return;}
  levelState.robot=[nr,nc];playSound({id:'soundMove'});setFeedback(T('fbMoveOk'),"info");
  // escape door check
  if(isEscapeMode()&&levelState.door&&escapeAllDeposited&&!escapeQuizOpen&&nr===levelState.door[0]&&nc===levelState.door[1]){
    renderGrid();
    setTimeout(()=>openEscapeQuiz(),120);
    return;
  }
}
function moveBackward(){
  const size=levelState.size;let[r,c]=levelState.robot,nr=r,nc=c;
  if(dir===0)nr++;else if(dir===1)nc--;else if(dir===2)nr--;else nc++;
  if(nr<0||nr>=size||nc<0||nc>=size){playSound({id:'soundBump'});shakeRobot();setFeedback(T('fbEdge'),"err");return;}
  if(levelState.obstacles.some(o=>o[0]===nr&&o[1]===nc)){playSound({id:'soundBump'});shakeRobot();setFeedback(T('fbObstacle'),"warn");return;}
  levelState.robot=[nr,nc];playSound({id:'soundMove'});setFeedback(T('fbBackOk'),"info");
  if(isEscapeMode()&&levelState.door&&escapeAllDeposited&&!escapeQuizOpen&&nr===levelState.door[0]&&nc===levelState.door[1]){
    renderGrid();
    setTimeout(()=>openEscapeQuiz(),120);
    return;
  }
}
function turnRobot(side){
  if(side==="left"){dir=(dir+3)%4;playSound({id:'soundMove'});setFeedback(T('fbTurnLeft'),"info");}
  else{dir=(dir+1)%4;playSound({id:'soundMove'});setFeedback(T('fbTurnRight'),"info");}
}
/* Pequena explosão de estrelas à volta do robô (apanhar / depositar) */
function fxBurst(list){
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  setTimeout(()=>{
    const icon=document.querySelector(".robot-cell .robot-icon"); if(!icon) return;
    for(let i=0;i<8;i++){
      const p=document.createElement("span"); p.className="fx-p"; p.textContent=list[i%list.length];
      const a=(Math.PI*2*i/8)+Math.random()*0.4;
      p.style.setProperty("--dx",Math.round(Math.cos(a)*46)+"px"); p.style.setProperty("--dy",Math.round(Math.sin(a)*46-10)+"px");
      icon.appendChild(p); setTimeout(()=>p.remove(),820);
    }
  },140);
}
function grabItem(){
  const[r,c]=levelState.robot;
  if(carriedItem){playSound({id:'soundError'});shakeRobot();setFeedback(T('fbAlreadyCarrying'),"warn");return;}
  const idx=levelState.items.findIndex(it=>it.row===r&&it.col===c);
  if(idx===-1){playSound({id:'soundError'});shakeRobot();setFeedback(T('fbNothingHere'),"err");return;}
  carriedItem=true;levelState.items.splice(idx,1);playSound({id:'soundSuccess'});clearHintBubble();setFeedback(T('fbCollected'),"ok");fxBurst(["✨","⭐","💫"]);
}
function dropItem(){
  const[r,c]=levelState.robot;
  if(!carriedItem){playSound({id:'soundError'});shakeRobot();setFeedback(T('fbNothingToDeposit'),"err");return;}
  const onDep=levelState.deposit.some(d=>d[0]===r&&d[1]===c);
  if(!onDep){playSound({id:'soundError'});shakeRobot();setFeedback(T('fbNotOnDeposit'),"warn");return;}
  carriedItem=false;playSound({id:'soundSuccess'});clearHintBubble();setFeedback(T('fbDeposited'),"ok");fxBurst(["🎉","⭐","✨"]);
  if(levelState.items.length===0){
    if(isEscapeMode()&&levelState.door){
      escapeAllDeposited=true;
      setFeedback(T('fbAllSafeEscape'),"ok");
      // Animate door opening: re-render grid (door turns green) then flash opening class
      renderGrid();
      setTimeout(()=>{
        const doorCell=document.querySelector(".door-cell");
        if(doorCell){
          doorCell.classList.add("door-opening");
          doorCell.innerHTML=buildDoorSVG(true,true);
        }
      },80);
    } else {
      handleLevelComplete();
    }
  }
}
function runSingleCommand(cmd){
  if(!levelState) return;
  moveCount++;updateMoves(); if(window.vbTrailPush) window.vbTrailPush(cmd);
  if(cmd==="MOVE")moveForward();
  else if(cmd==="BACK")moveBackward();
  else if(cmd==="LEFT")turnRobot("left");
  else if(cmd==="RIGHT")turnRobot("right");
  else if(cmd==="COLLECT")grabItem();
  else if(cmd==="DROP")dropItem();
  trackProgress();
  renderGrid();
}

/* ============================= LEVEL COMPLETE ============================= */
function spawnConfetti(){
  const c=$("popup-confetti"); if(!c) return;
  c.innerHTML="";
  // Use universe accent color alongside default colors
  const ur=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-color').trim()||'#6366f1';
  const colors=["#93c5fd",ur,"#22d3ee","#4ade80","#fbbf24","#f472b6",ur,"#fff"];
  for(let i=0;i<32;i++){
    const el=document.createElement("div");
    el.className="confetti-piece";
    el.style.left=(Math.random()*100)+"%";el.style.top=(Math.random()*30)+"%";
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDelay=(Math.random()*0.6)+"s";
    el.style.width=(6+Math.random()*8)+"px";el.style.height=(6+Math.random()*8)+"px";
    el.style.borderRadius=Math.random()>0.5?"50%":"2px";
    c.appendChild(el);
  }
}
function handleLevelComplete(){
  runningQueue=false;clearHintBubble();
  if(window._qxDemo){ shouldDanceOnRender=true; renderGrid(); return; }   // 🎬 demonstração: sem pop-up nem progresso
  // deixa o robô fazer a pirueta da vitória no tabuleiro antes de aparecer o pop-up
  const _g=$("grid");
  if(levelState && _g && _g.offsetParent!==null && !window.matchMedia("(prefers-reduced-motion:reduce)").matches && !handleLevelComplete._busy){
    handleLevelComplete._busy=true;
    shouldDanceOnRender=true; renderGrid();
    setTimeout(()=>{ handleLevelComplete._busy=false; _handleLevelCompleteNow(); },1150);
    return;
  }
  _handleLevelCompleteNow();
}
function _handleLevelCompleteNow(){
  runningQueue=false;clearHintBubble();
  const popup=$("popup-complete"); if(popup) popup.classList.add("visible");
  const used=moveCount;
  const stars=computeStars(used,currentMinMoves);

  // ── Título personalizado com nome do aluno (como no Dia da Criança) ──
  const sName=_getStudentName();
  const pt=$("popup-title");
  if(pt){
    if(stars===3&&sName) pt.textContent=`${T('levelComplete')} ${sName}! 🏆`;
    else pt.textContent=T('levelComplete');
  }

  // Stars animation
  for(let i=1;i<=3;i++){
    const s=$("popup-star"+i);
    if(!s) continue;
    s.classList.remove("earned");
    if(i<=stars) setTimeout(()=>s.classList.add("earned"),(i-1)*160+120);
  }

  // VanBerto bubble — elogio aleatório (banco de elogios como no Dia da Criança)
  const PRAISE_PT=["🌟 Excelente!","🎈 Muito bem!","🎊 Fantástico!","✨ Brilhante!","🎯 Perfeito!","🚀 Incrível!","🏆 Campeão!","💡 Génio!","🎖️ Impecável!","🌈 Perfeito mesmo!"];
  const PRAISE_EN=["🌟 Brilliant!","🎈 Well done!","🎊 Fantastic!","✨ Outstanding!","🎯 Perfect!","🚀 Amazing!","🏆 Champion!","💡 Genius!"];
  const pickPraise=()=>{ const p=currentLang==='en'?PRAISE_EN:PRAISE_PT; return p[Math.floor(Math.random()*p.length)]; };

  const universeMsg3={
    pt:{ciberseg:"Password segura desbloqueada!",agua:"O oceano agradece! Mínimo de passos!",ar:"Ar puro conquistado! Sem desperdício!",ambiente:"O planeta está orgulhoso!",escape:"Fugiste em tempo recorde!",ciberseguras:"Rede protegida com precisão máxima!"},
    en:{ciberseg:"Secure password unlocked!",agua:"The ocean thanks you! Minimum steps!",ar:"Clean air achieved! No waste!",ambiente:"The planet is proud!",escape:"You escaped in record time!",ciberseguras:"Network secured with maximum precision!"}
  };
  const vbMsgs={
    pt:{3:`${pickPraise()} ${universeMsg3.pt[currentUniverseId]||"Mínimo de movimentos!"}`,2:"Muito bem! 🎉 Podes ainda otimizar!",1:"Conseguiste! 💪 Tenta com menos movimentos!"},
    en:{3:`${pickPraise()} ${universeMsg3.en[currentUniverseId]||"Minimum moves!"}`,2:"Well done! 🎉 You can still optimise!",1:"You did it! 💪 Try using fewer moves!"}
  };
  const vbMsg=$("popup-vb-msg");
  if(vbMsg) vbMsg.textContent=(vbMsgs[currentLang]||vbMsgs.pt)[stars]||"";
  const av=$("popup-vb-avatar");
  if(av) av.innerHTML="";

  // Score text
  const px=$("popup-text");
  if(px) px.textContent=T('optimalMoves',{n:Number.isFinite(currentMinMoves)?currentMinMoves:"—",u:used});

  // ── SFX: starMelody nos 3 estrelas, fanfarra normal nos outros ──
  shouldDanceOnRender=true;
  SFX.win();
  if(stars===3) setTimeout(()=>SFX.starMelody(),650);

  spawnConfetti();

  // Pedagogical tip
  const existingTip=document.getElementById("popup-tip-el"); if(existingTip) existingTip.remove();
  const tipText=getTipForTheme(currentThemeKey||"");
  const tipEl=document.createElement("div"); tipEl.id="popup-tip-el"; tipEl.className="popup-tip";
  tipEl.innerHTML=`<span class="popup-tip-icon">💡</span><span class="popup-tip-text">${tipText.replace(/^💡\s*/,'')}</span>`;
  const pbEl=$("popup-btns"); if(pbEl) pbEl.parentNode.insertBefore(tipEl,pbEl);

  updateRanking();
  const _themeWasDone=certThemeDone(currentCycleKey,currentThemeKey), _cycleWasDone=certCycleDone(currentCycleKey);
  const p=loadProgress(currentCycleKey,currentThemeKey);
  if(!p.levels) p.levels={};
  if(!p.levels[currentLevelIndex]) p.levels[currentLevelIndex]={};
  p.levels[currentLevelIndex].completed=true;p.levels[currentLevelIndex].lastStars=stars;p.levels[currentLevelIndex].lastMoves=used;
  const lvls=levelsFor(currentCycleKey,currentTheme);
  if(currentLevelIndex<lvls.length-1) p.currentLevelIndex=Math.max(p.currentLevelIndex||0,currentLevelIndex+1);
  else p.currentLevelIndex=Math.max(0,lvls.length-1);
  saveProgress(currentCycleKey,currentThemeKey,p);
  updateSideProgress();
  certRefreshButtons();
  if(!isEscapeMode()&&!_themeWasDone&&certThemeDone(currentCycleKey,currentThemeKey)) themeCelebration(!_cycleWasDone&&certCycleDone(currentCycleKey));
}

/* ============================= POPUP NEXT ============================= */
const _psb=$("popup-share");
if(_psb)_psb.addEventListener("click",()=>{
  const st=computeStars(moveCount,currentMinMoves);
  const se=st===3?"⭐⭐⭐":st===2?"⭐⭐":"⭐";
  const isEn=currentLang==='en';
  const txt="VanBerto's — "+(currentTheme?currentTheme.name:"")+" "+se+" — "+(isEn?"moves":"movimentos")+": "+moveCount+" ("+(isEn?"min":"mín")+": "+(Number.isFinite(currentMinMoves)?currentMinMoves:"??")+")";
  if(navigator.clipboard)navigator.clipboard.writeText(txt).then(()=>setFeedback(T('popupCopied'),"ok")).catch(()=>setFeedback(txt,"info"));
  else setFeedback(txt,"info");
});
$("popup-next").addEventListener("click",()=>{
  $("popup-complete").classList.remove("visible");
  const lvls=levelsFor(currentCycleKey,currentTheme);
  if(currentLevelIndex<lvls.length-1){
    _transitionLevel(()=>{ loadLevel(currentLevelIndex+1); setFeedback("➡️ "+T("nextLevelMsg"),"ok"); });
  } else {
    const allCycleThemes = GAME_DATA&&GAME_DATA[currentCycleKey] ? Object.entries(GAME_DATA[currentCycleKey].themes) : [];
    const allThemesDone = allCycleThemes.length > 0 && allCycleThemes.every(([tk, theme])=>{
      const st = themeStats(currentCycleKey, tk);
      return st.done >= (theme._designedCount || st.total);
    });
    const summary = THEME_SUMMARIES[currentThemeKey];
    const uc  = getComputedStyle(document.documentElement).getPropertyValue('--u-pop-color').trim()||'#6366f1';
    const ur  = getComputedStyle(document.documentElement).getPropertyValue('--u-pop-rgb').trim()||'99,102,241';
    const ud  = getComputedStyle(document.documentElement).getPropertyValue('--u-pop-dark').trim()||'#3730a3';

    const sb = document.createElement("div");
    sb.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px;background:rgba(1,2,14,.88);backdrop-filter:blur(12px);animation:fadeIn .22s ease;";
    // Starfield overlay
    sb.innerHTML='';

    // Helper: shared inner card style
    const cardStyle=`background:linear-gradient(155deg,rgba(8,10,28,.99),rgba(4,6,18,.99));border:1.5px solid rgba(${ur},.35);border-radius:26px;padding:30px 28px;max-width:440px;width:100%;box-shadow:0 0 60px rgba(${ur},.12),0 28px 70px rgba(0,0,0,.8),0 0 0 1px rgba(${ur},.06);text-align:center;position:relative;animation:popIn .32s cubic-bezier(.34,1.56,.64,1) both;`;
    const glowLine=`<div style="position:absolute;top:0;left:12%;right:12%;height:1px;background:linear-gradient(90deg,transparent,rgba(${ur},.65),transparent);border-radius:99px;"></div>`;
    const btnPrimary=(id,txt)=>`<button id="${id}" style="background:linear-gradient(135deg,${ud},${uc});color:#fff;border:none;border-radius:999px;padding:11px 26px;font-size:.95rem;font-weight:800;cursor:pointer;font-family:Nunito,sans-serif;box-shadow:0 4px 20px rgba(${ur},.4);">${txt}</button>`;
    const btnSecondary=(id,txt)=>`<button id="${id}" style="background:rgba(255,255,255,.05);color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:10px 22px;font-size:.88rem;font-weight:700;cursor:pointer;font-family:Nunito,sans-serif;">${txt}</button>`;

    if(allThemesDone){
      const cycleOrder=["1c","2c","3c","sec"];
      const u=ALL_UNIVERSES[currentUniverseId];
      const curIdx=cycleOrder.indexOf(currentCycleKey);
      const nextCk=cycleOrder.slice(curIdx+1).find(ck=>u&&u.hasCycles&&u.hasCycles.includes(ck));
      const cycleEmojis={"1c":"🌱","2c":"🚀","3c":"🔬","sec":"🎓"};
      // Use T() so the label respects the current language automatically
      const _cl=ck=>T('cycle'+ck.charAt(0).toUpperCase()+ck.slice(1))||ck;
      const curLabel=_cl(currentCycleKey);
      const nextLabel=nextCk?_cl(nextCk):null;
      const summaryBlock=summary?`<p style="margin:10px 0 16px;font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.65;background:rgba(${ur},.07);border:1px solid rgba(${ur},.15);border-radius:12px;padding:10px 14px;">${summary}</p>`:'<div style="margin-bottom:16px;"></div>';
      sb.innerHTML=`<div style="${cardStyle}">${glowLine}
        <div style="font-size:2.8rem;margin-bottom:6px;">🏆</div>
        <h3 style="margin:0 0 5px;font-size:1.3rem;color:${uc};font-family:Nunito,sans-serif;font-weight:900;text-shadow:0 0 22px rgba(${ur},.5);">${T('cycleComplete')}</h3>
        <p style="margin:0 0 4px;font-size:.86rem;color:rgba(255,255,255,.5);">${T('cycleCompleteMsg',{cycle:curLabel})}</p>
        ${summaryBlock}
        <div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;">
          ${nextLabel?btnPrimary('_sb_next_cycle',(cycleEmojis[nextCk]||'➡️')+' '+T('nextCycleBtn',{cycle:nextLabel})):''}
          ${btnSecondary('_sb_themes',T('viewThemesBtn'))}
        </div>
      </div>`;
      document.body.appendChild(sb);
      const _bnc=document.getElementById("_sb_next_cycle");
      if(_bnc)_bnc.onclick=()=>{ sb.remove(); showThemesFor(nextCk); setFeedback("🚀 "+T("welcomeCycle",{cycle:nextLabel}),"ok"); };
      document.getElementById("_sb_themes").onclick=()=>{ sb.remove(); showThemesFor(currentCycleKey); setFeedback(T("cycleCompleteMsg2"),"ok"); };
    } else if(summary){
      sb.innerHTML=`<div style="${cardStyle}">${glowLine}
        <div style="font-size:2.4rem;margin-bottom:8px;">🎓</div>
        <h3 style="margin:0 0 8px;font-size:1.2rem;color:${uc};font-family:Nunito,sans-serif;font-weight:900;text-shadow:0 0 20px rgba(${ur},.5);">${T('themeComplete')}</h3>
        <p style="margin:0 0 16px;font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.65;background:rgba(${ur},.07);border:1px solid rgba(${ur},.15);border-radius:12px;padding:10px 14px;">${summary}</p>
        ${btnPrimary('_sb_ok',T('continueBtn'))}
      </div>`;
      document.body.appendChild(sb);
      document.getElementById("_sb_ok").onclick=()=>{ sb.remove(); showThemesFor(currentCycleKey); setFeedback(T("themeCompleteMsg"),"ok"); };
    } else {
      setFeedback(T("themeCompleteMsg"),"ok");
      showThemesFor(currentCycleKey);
    }
    // Close on backdrop click
    sb.addEventListener("click",e=>{ if(e.target===sb){ sb.remove(); showThemesFor(currentCycleKey); } });
  }
});

/* ============================= COMMAND BUTTONS ============================= */
// Touch feedback helper — flashes the robot's current cell
function _flashRobotCell(){
  if(!levelState) return;
  const [r,c]=levelState.robot;
  const cell=document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
  if(cell){
    cell.classList.remove('touch-flash');
    void cell.offsetWidth; // reflow
    cell.classList.add('touch-flash');
    setTimeout(()=>cell.classList.remove('touch-flash'),320);
  }
}

document.querySelectorAll(".cmd-btn").forEach(btn=>{
  // Instant visual feedback on touchstart (before click fires)
  btn.addEventListener("touchstart",()=>{
    btn.classList.add("cmd-btn-active");
    setTimeout(()=>btn.classList.remove("cmd-btn-active"),180);
  },{passive:true});
  btn.addEventListener("click",()=>{
    if(!currentTheme||!levelState||runningQueue) return;
    const cmd=btn.getAttribute("data-cmd");
    const _ar=btn.querySelector(".dpad-arrow"), _lb=btn.querySelector(".dpad-label");
    const label=(_ar&&_lb)?(_ar.textContent.trim()+" "+_lb.textContent.trim()):btn.textContent.trim();
    if(isQueueMode()){ queuePushCmd(cmd); }
    else { runSingleCommand(cmd); _flashRobotCell(); }
  });
});

/* ============================= 🇬🇧 INGLÊS PARA AS FUNÇÕES NOVAS (Repetir, Escrever, Demonstração, Certificado, Desafio) =============================
   Q(texto_pt) devolve o inglês quando o jogo está em inglês (tabela exata + padrões); em português devolve o texto igual.
   As PALAVRAS do pseudocódigo (AVANÇAR, REPETIR…) mantêm-se em português: são a linguagem que os alunos escrevem. */
const QX_EN={
 "⚙️ Mais":"⚙️ More","🧩 Blocos":"🧩 Blocks","✍️ Escrever":"✍️ Write","🔁 Repetir":"🔁 Repeat","👁️ Pseudocódigo":"👁️ Pseudocode","🙈 Esconder pseudocódigo":"🙈 Hide pseudocode",
 "Quantas vezes?":"How many times?","✅ Fechar":"✅ Close","❌ Cancelar":"❌ Cancel","⇥ Indentar":"⇥ Indent","⇤ Desindentar":"⇤ Outdent",
 "▶️ Executar":"▶️ Run","🧹 Limpar":"🧹 Clear","🧩 Ver em blocos":"🧩 Show as blocks","📖 Que palavras posso usar?":"📖 Which words can I use?",
 "🎬 Demonstração":"🎬 Demo","🎓 Certificado":"🎓 Certificate","🎓 Ciclo":"🎓 Cycle","🎓 Certificado do tema":"🎓 Theme certificate","🎓 Certificado do ciclo":"🎓 Cycle certificate",
 "🧠 Desafio de Pseudocódigo":"🧠 Pseudocode Challenge","⛶ Ecrã":"⛶ Fullscreen","✕ Sair":"✕ Exit","Ecrã inteiro":"Fullscreen","Sair do ecrã inteiro":"Exit fullscreen",
 "🎬 A demonstrar…":"🎬 Demonstrating…",
 "// Um comando por linha. Por exemplo:\nAVANÇAR\nREPETIR 2 VEZES\n    VIRAR À DIREITA\n    AVANÇAR":"// One command per line. For example:\nAVANÇAR\nREPETIR 2 VEZES\n    VIRAR À DIREITA\n    AVANÇAR",
 "Certificado Oficial":"Official Certificate","Este certificado é atribuído a":"This certificate is awarded to","CERTIFICADO OFICIAL":"OFFICIAL CERTIFICATE",
 "estrelas":"stars","medalha":"medal","níveis":"levels","temas":"themes","← Voltar":"← Back","🖨️ Imprimir":"🖨️ Print","🖼️ Guardar PNG":"🖼️ Save PNG",
 "Programador(a)":"Programmer",
 "🥇 Perfeito":"🥇 Perfect","🥈 Excelente":"🥈 Excellent","🥉 Bom":"🥉 Good","✅ Concluído":"✅ Completed",
 "de Pensamento Computacional":"in Computational Thinking","de Pensamento Computacional — ciclo completo":"in Computational Thinking — full cycle",
 "que, com atenção e criatividade, programou o robô e completou o tema":"who, with care and creativity, programmed the robot and completed the theme",
 "que, com atenção e criatividade, programou o robô e completou todos os temas de":"who, with care and creativity, programmed the robot and completed all the themes of",
 "tornando-se oficialmente Programador(a) do Pensamento Computacional.":"officially becoming a Computational Thinking Programmer.",
 "tornando-se oficialmente Programador(a) do Pensamento Computacional deste ciclo.":"officially becoming a Computational Thinking Programmer for this cycle.",
 "Ensino Secundário":"Upper Secondary",
 "✍️ Caixa limpa.":"✍️ Box cleared.","✅ Programa válido — a executar…":"✅ Valid program — running…",
 "✅ Ciclo adicionado à sequência.":"✅ Loop added to the sequence.","✅ Ciclo aninhado fechado — continua o ciclo de fora.":"✅ Nested loop closed — carry on with the outer loop.",
 "❌ Bloco cancelado.":"❌ Block cancelled.","Adiciona pelo menos um passo ao ciclo antes de fechar.":"Add at least one step to the loop before closing it.",
 "🔁 Fecha o ciclo (✅ Fechar) ou cancela-o antes de executar.":"🔁 Close the loop (✅ Close) or cancel it before running.",
 "🔁 Fecha este ciclo antes de abrires outro (aninhar só existe no Secundário).":"🔁 Close this loop before opening another (nesting only exists in Upper Secondary).",
 "✍️ Há linhas a corrigir — vê a mensagem por baixo da caixa de texto.":"✍️ Some lines need fixing — see the message below the text box.",
 "↺ A recomeçar o nível para correr o teu programa desde o início…":"↺ Restarting the level to run your program from the start…",
 "🏁 O programa terminou. Não chegaste ao fim? Corrige o texto e carrega em ▶️ Executar — recomeça sempre do início.":"🏁 The program has finished. Didn't reach the end? Fix the text and press ▶️ Run — it always restarts from the beginning.",
 "🧩 O teu texto foi convertido em blocos.":"🧩 Your text was converted into blocks.",
 "😕 Não consegui calcular uma demonstração para este nível.":"😕 I couldn't work out a demo for this level.",
 "🎬 Repara na sequência completa — o passo atual fica em destaque!":"🎬 Watch the whole sequence — the current step is highlighted!",
 "🎬 Fim da demonstração! Carrega em ↺ Reiniciar e tenta tu — este nível ainda não conta.":"🎬 End of the demo! Press ↺ Restart and try it yourself — this level doesn't count yet.",
 "🎬 Repara: primeiro escreve-se o programa, depois o robô executa-o linha a linha.":"🎬 Look: first the program is written, then the robot runs it line by line.",
 "📋 A solução ficou escrita na caixa — carrega em ▶️ Executar para a veres outra vez, ou muda o que quiseres.":"📋 The solution is now in the box — press ▶️ Run to watch it again, or change whatever you like.",
 "🎬 Vou reiniciar este nível e mostrar uma forma de o resolver escrevendo o pseudocódigo. Continuar?":"🎬 I'll restart this level and show one way to solve it by writing the pseudocode. Continue?",
 "🎬 Vou reiniciar este nível e mostrar uma forma de o resolver usando os blocos. Continuar?":"🎬 I'll restart this level and show one way to solve it using the blocks. Continue?",
 "🔁 Só podes aninhar ciclos até 2 níveis — fecha o mais interno primeiro.":"🔁 You can nest loops up to 2 levels — close the innermost one first.",
 "Ainda não escreveste nenhum comando.":"You haven't written any commands yet.",
 "🧠 Desafio de Pseudocódigo ":"🧠 Pseudocode Challenge ",
 "Completaste todos os desafios de pseudocódigo! Já sabes ler um programa linha a linha e prever o que o robô faz.":"You completed all the pseudocode challenges! You can now read a program line by line and predict what the robot does.",
 "← Voltar ao jogo":"← Back to the game","Terminar ✓":"Finish ✓","Seguinte →":"Next →","Fechar":"Close",
 "✅ Certo! Seguiste o programa passo a passo.":"✅ Correct! You followed the program step by step.","❌ Não era essa — vê a opção a verde e a explicação.":"❌ Not that one — see the green option and the explanation.",
 "Tema concluído! 🏆":"Theme completed! 🏆","Ciclo concluído! 🎓":"Cycle completed! 🎓"
};
const QX_RX=[
 [/^✅ Passo adicionado ao ciclo \((\d+)\)\.$/,m=>"✅ Step added to the loop ("+m[1]+")."],
 [/^🔁 A construir um ciclo ANINHADO de (\d+)× dentro do ciclo anterior\.$/,m=>"🔁 Building a NESTED "+m[1]+"× loop inside the previous loop."],
 [/^🔁 A construir um ciclo de (\d+)×\. Escolhe os passos a repetir\.$/,m=>"🔁 Building a "+m[1]+"× loop. Choose the steps to repeat."],
 [/^(.*) — (\d+) passo\(s\) escolhido\(s\)( no nível mais interno)?$/,m=>m[1]+" — "+m[2]+" step(s) chosen"+(m[3]?" in the innermost level":"")],
 [/^… e mais (\d+)\.$/,m=>"… and "+m[1]+" more."],
 [/^❌ (.*)$/,m=>"❌ "+Q(m[1])],
 [/^Linha (\d+): o REPETIR está vazio — escreve por baixo, mais para dentro, os passos a repetir\.$/,m=>"Line "+m[1]+": the REPETIR is empty — write the steps to repeat below it, indented further in."],
 [/^Linha (\d+): a indentação não bate certo — só se põe mais para dentro por baixo de um REPETIR, sempre com o mesmo número de espaços\.$/,m=>"Line "+m[1]+": the indentation doesn't match — only indent further below a REPETIR, always with the same number of spaces."],
 [/^Linha (\d+): o REPETIR precisa de um número entre 2 e 9 — por exemplo REPETIR 3 VEZES\.$/,m=>"Line "+m[1]+": REPETIR needs a number from 2 to 9 — for example REPETIR 3 VEZES."],
 [/^Linha (\d+): só podes pôr REPETIR dentro de REPETIR até (\d+) níveis\.$/,m=>"Line "+m[1]+": you can nest REPETIR inside REPETIR up to "+m[2]+" levels."],
 [/^Linha (\d+): SE, ENQUANTO e PARA ainda não existem neste jogo — por agora usa REPETIR n VEZES\.$/,m=>"Line "+m[1]+": SE, ENQUANTO and PARA don't exist in this game yet — for now use REPETIR n VEZES."],
 [/^Linha (\d+): não é preciso escrever FIM — o REPETIR acaba quando as linhas deixam de estar mais para dentro\.$/,m=>"Line "+m[1]+": there's no need to write FIM — the REPETIR ends when the lines stop being indented."],
 [/^Linha (\d+): para repetir escreve REPETIR (\d+) VEZES e, na linha de baixo \(mais para dentro\), (.*)\.$/,m=>"Line "+m[1]+": to repeat, write REPETIR "+m[2]+" VEZES and, on the line below (indented), "+m[3]+"."],
 [/^Linha (\d+): diz para que lado: VIRAR À ESQUERDA ou VIRAR À DIREITA\.$/,m=>"Line "+m[1]+": say which way: VIRAR À ESQUERDA (turn left) or VIRAR À DIREITA (turn right)."],
 [/^Linha (\d+): não conheço «(.*)»\. Querias dizer (.*)\?$/,m=>"Line "+m[1]+": I don't know «"+m[2]+"». Did you mean "+m[3]+"?"],
 [/^Linha (\d+): não conheço «(.*)»\. Abre 📖 «Que palavras posso usar\?»\.$/,m=>"Line "+m[1]+": I don't know «"+m[2]+"». Open 📖 «Which words can I use?»."],
 [/^Parabéns, (.*)! Completaste todos os temas deste ciclo! Já podes tirar o certificado do ciclo\. 🎓$/,m=>"Congratulations, "+m[1]+"! You completed every theme in this cycle! You can now get the cycle certificate. 🎓"],
 [/^Parabéns! Completaste todos os temas deste ciclo! Já podes tirar o certificado do ciclo\. 🎓$/,m=>"Congratulations! You completed every theme in this cycle! You can now get the cycle certificate. 🎓"],
 [/^Parabéns, (.*)! Completaste "(.*)"! Já podes tirar o certificado do tema\. 🎓$/,m=>"Congratulations, "+m[1]+'! You completed "'+m[2]+'"! You can now get the theme certificate. 🎓'],
 [/^Parabéns! Completaste "(.*)"! Já podes tirar o certificado do tema\. 🎓$/,m=>'Congratulations! You completed "'+m[1]+'"! You can now get the theme certificate. 🎓']
];
function Q(s){
  if(typeof currentLang==="undefined"||currentLang!=="en"||typeof s!=="string"||!s) return s;
  if(Object.prototype.hasOwnProperty.call(QX_EN,s)) return QX_EN[s];
  if(s.indexOf("\n")>=0) return s.split("\n").map(Q).join("\n");
  for(const [rx,fn] of QX_RX){ const m=s.match(rx); if(m) return fn(m); }
  return s;
}
const QX_STATIC=[ // [seletor, texto PT original]
 ["#btn-hdr-more","⚙️ Mais"], ["#tab-blocks","🧩 Blocos"],["#tab-write","✍️ Escrever"],["#btn-block-repeat","🔁 Repetir"],["#queue-repeat-picker .queue-blocks-hint","Quantas vezes?"],
 ["#btn-group-close","✅ Fechar"],["#btn-group-cancel","❌ Cancelar"],["#wr-indent","⇥ Indentar"],["#wr-outdent","⇤ Desindentar"],["#wr-run","▶️ Executar"],["#wr-clear","🧹 Limpar"],
 ["#wr-to-blocks","🧩 Ver em blocos"],[".write-help summary","📖 Que palavras posso usar?"],["#btn-demo","🎬 Demonstração"],["#btn-cert-theme","🎓 Certificado"],["#btn-cert-cycle","🎓 Ciclo"],
 ["#popup-cert-btn","🎓 Certificado do tema"],["#popup-cert-cycle-btn","🎓 Certificado do ciclo"],["#btn-pseudo-challenge","🧠 Desafio de Pseudocódigo"],
 ["#certificateOverlay .certificate-title","Certificado Oficial"],["#btnCertBack","← Voltar"],["#btnCertPrint","🖨️ Imprimir"],["#btnCertPng","🖼️ Guardar PNG"]
];
const QX_HELP_PT='Um comando por linha: <code>AVANÇAR</code> · <code>RECUAR</code> · <code>VIRAR À ESQUERDA</code> · <code>VIRAR À DIREITA</code> · <code>APANHAR</code> · <code>DEPOSITAR</code><br>Para repetir: <code>REPETIR 3 VEZES</code> e, nas linhas de baixo, os passos a repetir <b>mais para dentro</b> (tecla Tab ou 4 espaços). Podes pôr um REPETIR dentro de outro (até 2 níveis).<br>Comentários começam por <code>//</code>. Maiúsculas, minúsculas e acentos não importam.<br>Ao carregar em ▶️ Executar, o nível recomeça sempre do início. Os botões de direção e as teclas W A S D E F também escrevem a linha por ti. (Esc e depois Tab sai da caixa de texto.)';
const QX_HELP_EN='One command per line (the words stay in Portuguese): <code>AVANÇAR</code> (move forward) · <code>RECUAR</code> (move back) · <code>VIRAR À ESQUERDA</code> (turn left) · <code>VIRAR À DIREITA</code> (turn right) · <code>APANHAR</code> (pick up) · <code>DEPOSITAR</code> (drop)<br>To repeat: <code>REPETIR 3 VEZES</code> (repeat 3 times) and, on the lines below, the steps to repeat <b>indented further in</b> (Tab key or 4 spaces). You can put one REPETIR inside another (up to 2 levels).<br>Comments start with <code>//</code>. Upper/lower case and accents don\'t matter.<br>Pressing ▶️ Run always restarts the level from the beginning. The direction buttons and the W A S D E F keys also write the line for you. (Esc then Tab leaves the text box.)';
function applyQxStatic(){
  QX_STATIC.forEach(([sel,pt])=>{ const el=document.querySelector(sel); if(el) el.textContent=Q(pt); });
  const hb=document.querySelector(".write-help div"); if(hb) hb.innerHTML=(typeof currentLang!=="undefined"&&currentLang==="en")?QX_HELP_EN:QX_HELP_PT;
  const ta=document.getElementById("write-code"); if(ta) ta.setAttribute("placeholder",Q("// Um comando por linha. Por exemplo:\nAVANÇAR\nREPETIR 2 VEZES\n    VIRAR À DIREITA\n    AVANÇAR"));
  document.querySelectorAll("#certificateOverlay .cert-stat span:last-child").forEach(e=>{ if(!e.id){ e.textContent=Q(e.dataset.pt||(e.dataset.pt=e.textContent)); } });
  const ct=document.querySelector("#certificateOverlay .certificate-text"); if(ct&&ct.id==="") ct.textContent=Q("Este certificado é atribuído a");
  if(typeof renderPseudoView==="function") renderPseudoView();
  const fb=document.getElementById("btn-fullscreen"); if(fb&&typeof window._qxFsUpd==="function") window._qxFsUpd();
}

/* ============================= PROGRAMAÇÃO: 🔁 REPETIR · ✍️ ESCREVER · 🎬 DEMONSTRAÇÃO =============================
   Portado do jogo "Cibersegurança — Programação". A fila (queuedCommands) passa a ser uma ÁRVORE:
   comando simples {cmd,label} ou bloco {type:"repeat",times,children:[…]}. Os blocos e o texto em
   pseudocódigo produzem a mesma árvore, por isso o motor do jogo (movimentos, estrelas, "Ótimo") não muda. */
const PSEUDO_CMD={MOVE:"AVANÇAR",BACK:"RECUAR",LEFT:"VIRAR À ESQUERDA",RIGHT:"VIRAR À DIREITA",COLLECT:"APANHAR",DROP:"DEPOSITAR"};
const CMD_ICONS={MOVE:"⬆️",BACK:"⬇️",LEFT:"↩️",RIGHT:"↪️",COLLECT:"✋",DROP:"📥"};
const CMD_TKEY={MOVE:"cmdMove",BACK:"cmdBack",LEFT:"cmdLeft",RIGHT:"cmdRight",COLLECT:"cmdCollect",DROP:"cmdDrop"};
const WRITE_CMDS=[[/^AVANCAR$/,"MOVE"],[/^RECUAR$/,"BACK"],[/^VIRAR (A )?ESQUERDA$/,"LEFT"],[/^VIRAR (A )?DIREITA$/,"RIGHT"],[/^APANHAR$/,"COLLECT"],[/^DEPOSITAR$/,"DROP"]];
const WRITE_WORDS=[["AVANCAR","AVANÇAR"],["RECUAR","RECUAR"],["VIRAR A ESQUERDA","VIRAR À ESQUERDA"],["VIRAR A DIREITA","VIRAR À DIREITA"],["APANHAR","APANHAR"],["DEPOSITAR","DEPOSITAR"],["REPETIR","REPETIR 3 VEZES"]];
const PSEUDO_KW=new Set(["SE","ENTÃO","SENÃO","ENQUANTO","PARA","CADA","EM","DE","ATÉ","REPETIR","VEZES","E","OU","NÃO","VERDADEIRO","FALSO"]);
const MAX_NEST=2;
let pseudoOn=false, pseudoLastRun=null, writeMode=false, writeLevelKey=null, writeTabFree=false, writePref=true, progThemeKey=null;

function cmdLabel(cmd){ return T(CMD_TKEY[cmd]||cmd); }
function escHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function cycleHasRepeat(ck){ return ck==="2c"||ck==="3c"||ck==="sec"; }
const qxWait=ms=>new Promise(r=>setTimeout(r,ms));

/* ── Fila (árvore) ── */
function entryIcons(e){ return e.type==="repeat" ? "🔁×"+e.times+" [ "+e.children.map(entryIcons).join(" ")+" ]" : (CMD_ICONS[e.cmd]||e.cmd); }
function resetQueue(){ queuedCommands=[]; groupStack=[]; renderQueue(); renderQueueGroupBar(); }
function renderQueue(){
  const qc=$("queue-commands"); if(!qc) return;
  qc.innerHTML="";
  queuedCommands.forEach(entry=>{
    const s=document.createElement("span"); s.className="queue-chip";
    if(entry.type==="repeat"){ s.classList.add("queue-chip-repeat"); s.textContent=entryIcons(entry); }
    else { s.dataset.cmd=entry.cmd||""; s.textContent=entry.label||cmdLabel(entry.cmd); }
    qc.appendChild(s);
  });
  renderPseudoView();
}
function renderQueueGroupBar(){
  renderPseudoView();
  const active=$("queue-group-active"), hint=$("queue-group-hint"); if(!active) return;
  if(groupStack.length){
    active.classList.remove("qx-hidden");
    const inner=groupStack[groupStack.length-1];
    const trail=groupStack.map(g=>"🔁×"+g.times).join(" › ");
    if(hint) hint.textContent=Q(trail+" — "+inner.children.length+" passo(s) escolhido(s)"+(groupStack.length>1?" no nível mais interno":""));
  } else active.classList.add("qx-hidden");
}
// Ponto único para adicionar UM comando (botões, teclado). Com um REPETIR em construção, entra no bloco mais interno.
function queuePushCmd(cmd){
  if(writeMode){ writeInsertLine(PSEUDO_CMD[cmd]||cmd); return; }
  const label=cmdLabel(cmd);
  if(groupStack.length){
    const inner=groupStack[groupStack.length-1];
    inner.children.push({cmd,label}); renderQueueGroupBar();
    setFeedback("✅ Passo adicionado ao ciclo ("+inner.children.length+").","info"); return;
  }
  queuedCommands.push({cmd,label}); renderQueue(); setFeedback(T('cmdAdded'),"info");
}

/* ── Pseudocódigo (vista só de leitura + realce) ── */
function pseudoTree(){
  let tail=null;
  for(let i=groupStack.length-1;i>=0;i--){ const g=groupStack[i]; tail={type:"repeat",times:g.times,open:true,children:tail?[...g.children,tail]:[...g.children]}; }
  return tail?[...queuedCommands,tail]:[...queuedCommands];
}
function pseudoLines(entries,depth,out){
  const pad="    ".repeat(depth);
  entries.forEach(e=>{
    if(e.type==="repeat"){
      out.push(pad+"REPETIR "+e.times+" VEZES"+(e.open?"   // a construir…":""));
      if(e.open&&!e.children.length) out.push(pad+"    // escolhe os passos a repetir");
      pseudoLines(e.children,depth+1,out);
    } else out.push(pad+(PSEUDO_CMD[e.cmd]||e.cmd));
  });
}
function highlightPseudo(text){
  return String(text).split("\n").map(line=>{
    const i=line.indexOf("//"); const code=i>=0?line.slice(0,i):line, com=i>=0?line.slice(i):"";
    const c=escHtml(code).replace(/[\p{L}\d_]+/gu,w=>PSEUDO_KW.has(w)?'<span class="ps-kw">'+w+'</span>':w);
    return c+(com?'<span class="ps-cm">'+escHtml(com)+'</span>':"");
  }).join("\n");
}
function renderPseudoView(){
  const pre=$("queue-pseudo"), btn=$("btn-pseudo-toggle"); const isSec=currentCycleKey==="sec";
  if(btn){ btn.classList.toggle("qx-hidden",!isSec); btn.textContent=Q(pseudoOn?"🙈 Esconder pseudocódigo":"👁️ Pseudocódigo"); btn.setAttribute("aria-pressed",pseudoOn?"true":"false"); }
  if(!pre) return;
  if(!isSec||!pseudoOn||writeMode){ pre.classList.add("qx-hidden"); return; }
  pre.classList.remove("qx-hidden");
  const lines=[], tree=pseudoTree();
  if(tree.length) pseudoLines(tree,0,lines);
  else if(pseudoLastRun&&pseudoLastRun.length){ lines.push("// última sequência executada"); pseudoLines(pseudoLastRun,0,lines); }
  else { lines.push("// Ainda não escolheste comandos."); lines.push("// O teu programa vai aparecer aqui, linha a linha."); }
  pre.innerHTML=highlightPseudo(lines.join("\n"));
}

/* ── ✍️ Escrever (só Secundário) ── */
function writeNorm(str){ return String(str).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().replace(/\s+/g," ").trim(); }
function writeLev(a,b){
  const m=a.length,n=b.length; if(!m) return n; if(!n) return m;
  let prev=Array.from({length:n+1},(_,j)=>j);
  for(let i=1;i<=m;i++){ const cur=[i]; for(let j=1;j<=n;j++) cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1)); prev=cur; }
  return prev[n];
}
function writeSuggest(norm){
  let best=null,bd=99;
  WRITE_WORDS.forEach(([n,disp])=>{
    const head=norm.split(" ").slice(0,n.split(" ").length).join(" ");
    const d=Math.min(writeLev(norm,n),writeLev(head,n)); if(d<bd){ bd=d; best=disp; }
  });
  return bd<=2?best:null;
}
function parsePseudoProgram(text){
  const errors=[], root={children:[]}; const stack=[{node:root,indent:null}]; let pending=null, count=0;
  const err=(line,msg)=>errors.push({line,msg});
  String(text).split(/\r?\n/).forEach((raw,i)=>{
    const ln=i+1; let code=raw; const ci=code.indexOf("//"); if(ci>=0) code=code.slice(0,ci);
    if(!code.trim()) return;
    const ind=code.match(/^[ \t]*/)[0].replace(/\t/g,"    ").length; const shown=code.trim();
    const norm=writeNorm(code.replace(/\(\s*\)\s*;?\s*$/,"").replace(/;\s*$/,""));
    if(pending){
      if(ind>pending.indent) stack.push({node:pending.node,indent:ind});
      else err(pending.line,"Linha "+pending.line+": o REPETIR está vazio — escreve por baixo, mais para dentro, os passos a repetir.");
      pending=null;
    }
    let top=stack[stack.length-1];
    while(stack.length>1&&ind<top.indent){ stack.pop(); top=stack[stack.length-1]; }
    if(top.indent===null) top.indent=ind;
    if(ind!==top.indent){ err(ln,"Linha "+ln+": a indentação não bate certo — só se põe mais para dentro por baixo de um REPETIR, sempre com o mesmo número de espaços."); return; }
    const rep=norm.match(/^REPETIR(?: (\d+))?(?: VEZES?)?$/);
    if(rep){
      const n=rep[1]?parseInt(rep[1],10):NaN;
      if(!(n>=2&&n<=9)) err(ln,"Linha "+ln+": o REPETIR precisa de um número entre 2 e 9 — por exemplo REPETIR 3 VEZES.");
      if(stack.length>MAX_NEST) err(ln,"Linha "+ln+": só podes pôr REPETIR dentro de REPETIR até "+MAX_NEST+" níveis.");
      const node={type:"repeat",times:(n>=2&&n<=9)?n:2,children:[]};
      top.node.children.push(node); pending={node,indent:ind,line:ln}; return;
    }
    const hit=WRITE_CMDS.find(([re])=>re.test(norm));
    if(hit){ top.node.children.push({cmd:hit[1],label:cmdLabel(hit[1])}); count++; return; }
    let msg; const withNum=norm.match(/^(.*?) (\d+)(?: VEZES?)?$/);
    if(/^(SE|ENQUANTO|PARA|SENAO|ENTAO)\b/.test(norm)) msg="SE, ENQUANTO e PARA ainda não existem neste jogo — por agora usa REPETIR n VEZES.";
    else if(/^FIM\b/.test(norm)) msg="não é preciso escrever FIM — o REPETIR acaba quando as linhas deixam de estar mais para dentro.";
    else if(withNum&&WRITE_CMDS.some(([re])=>re.test(withNum[1]))) msg="para repetir escreve REPETIR "+withNum[2]+" VEZES e, na linha de baixo (mais para dentro), "+shown.replace(/\s+\d+(\s+vezes?)?\s*$/i,"")+".";
    else if(/^VIRAR\b/.test(norm)) msg="diz para que lado: VIRAR À ESQUERDA ou VIRAR À DIREITA.";
    else { const sg=writeSuggest(norm); msg="não conheço «"+shown+"»."+(sg?" Querias dizer "+sg+"?":" Abre 📖 «Que palavras posso usar?»."); }
    err(ln,"Linha "+ln+": "+msg);
  });
  if(pending) err(pending.line,"Linha "+pending.line+": o REPETIR está vazio — escreve por baixo, mais para dentro, os passos a repetir.");
  if(!errors.length&&count===0) err(1,"Ainda não escreveste nenhum comando.");
  return {entries:root.children,errors};
}
function showWriteMsg(kind,text){ const m=$("write-msg"); if(!m) return; m.className="write-msg"+(kind?" "+kind:""); m.textContent=Q(text||""); }
function showWriteErrors(errors){
  const ta=$("write-code");
  showWriteMsg("err",errors.slice(0,3).map(e=>"❌ "+e.msg).join("\n")+(errors.length>3?"\n… e mais "+(errors.length-3)+".":""));
  if(!ta) return;
  const lines=ta.value.split(/\r?\n/); const ln=Math.min(errors[0].line,lines.length)-1;
  let start=0; for(let i=0;i<ln;i++) start+=lines[i].length+1;
  ta.focus(); ta.setSelectionRange(start,start+(lines[ln]||"").length);
}
function writeInsertLine(text){
  const ta=$("write-code"); if(!ta) return;
  const v=ta.value; let pos=ta.selectionEnd; if(typeof pos!=="number") pos=v.length;
  const ls=v.lastIndexOf("\n",pos-1)+1; let le=v.indexOf("\n",pos); if(le<0) le=v.length;
  const cur=v.slice(ls,le), ind=cur.match(/^[ \t]*/)[0]; let nv,caret;
  if(!cur.trim()){ nv=v.slice(0,ls)+ind+text+v.slice(le); caret=ls+ind.length+text.length; }
  else { const ni=/^\s*REPETIR\b/i.test(cur)?ind+"    ":ind; nv=v.slice(0,le)+"\n"+ni+text+v.slice(le); caret=le+1+ni.length+text.length; }
  ta.value=nv; ta.setSelectionRange(caret,caret); showWriteMsg("","");
}
function writeShift(dir){
  const ta=$("write-code"); if(!ta) return; const v=ta.value, pos=ta.selectionStart; const ls=v.lastIndexOf("\n",pos-1)+1;
  if(dir>0){ ta.value=v.slice(0,ls)+"    "+v.slice(ls); ta.setSelectionRange(pos+4,pos+4); }
  else { const m=v.slice(ls).match(/^ {1,4}|^\t/); if(!m) return; ta.value=v.slice(0,ls)+v.slice(ls+m[0].length); const np=Math.max(ls,pos-m[0].length); ta.setSelectionRange(np,np); }
}
// Mostra/esconde separadores, painéis e botões consoante ciclo e modo — chamada no loadLevel e ao trocar de separador.
function applyWriteModeUI(){
  const isSec=currentCycleKey==="sec"; if(!isSec) writeMode=false;
  const key=currentUniverseId+"|"+currentCycleKey+"|"+currentThemeKey+"|"+currentLevelIndex;
  if(key!==writeLevelKey){ writeLevelKey=key; const ta0=$("write-code"); if(ta0) ta0.value=""; showWriteMsg("",""); }
  const qMode=isQueueMode();
  $("queue-mode-tabs")?.classList.toggle("qx-hidden",!isSec||!qMode);
  const tb=$("tab-blocks"), tw=$("tab-write");
  if(tb){ tb.classList.toggle("secondary",writeMode); tb.setAttribute("aria-pressed",writeMode?"false":"true"); }
  if(tw){ tw.classList.toggle("secondary",!writeMode); tw.setAttribute("aria-pressed",writeMode?"true":"false"); }
  const qc=$("queue-commands"); if(qc) qc.style.display=writeMode?"none":"flex";
  ["btn-run-queue","btn-undo-queue","btn-clear-queue"].forEach(id=>{ const b=$(id); if(b) b.style.display=(qMode&&!writeMode)?"inline-flex":"none"; });
  $("queue-blocks-toolbar")?.classList.toggle("qx-hidden",writeMode||!qMode||!cycleHasRepeat(currentCycleKey));
  $("write-panel")?.classList.toggle("qx-hidden",!writeMode);
  renderPseudoView();
}
function setWriteMode(on){
  writeMode=!!on&&currentCycleKey==="sec"; if(currentCycleKey==="sec") writePref=!!on;
  if(writeMode){
    const ta=$("write-code");
    if(ta&&!ta.value.trim()){ const tree=pseudoTree(); if(tree.length){ const ls=[]; pseudoLines(tree,0,ls); ta.value=ls.map(l=>l.replace(/\s*\/\/.*$/,"")).filter(l=>l.trim()).join("\n"); } }
  }
  applyWriteModeUI();
}
// Chamada no fim do loadLevel (depois de o queue-box ser mostrado/escondido).
function progLevelSetup(){
  const tk=currentUniverseId+"|"+currentCycleKey+"|"+currentThemeKey;
  if(tk!==progThemeKey){ progThemeKey=tk; writeMode=(currentCycleKey==="sec")?writePref:false; }
  renderQueueGroupBar(); applyWriteModeUI(); certRefreshButtons();
  $("btn-pseudo-challenge")?.classList.toggle("qx-hidden",!(currentCycleKey==="sec"&&isQueueMode()&&!isEscapeMode()));
  const db=$("btn-demo");
  if(db){
    db.classList.toggle("qx-hidden",!(isQueueMode()&&!isEscapeMode()&&cycleHasRepeat(currentCycleKey)&&currentLevelIndex===0));
    db.title=currentCycleKey==="sec"?"Mostra uma forma de resolver este nível, escrita em pseudocódigo":"Mostra uma forma de resolver este nível usando os blocos";
  }
}

/* ── Execução da árvore ── */
function qxDelay(){ return (window.vbSpeed||1)*(currentCycleKey==="1c"?450:currentCycleKey==="2c"?320:currentCycleKey==="3c"?230:160);}
async function runQueueEntry(entry,delay){
  if(!runningQueue||!levelState) return;
  if(entry.type==="repeat"){
    for(let i=0;i<entry.times;i++) for(const child of entry.children){ if(!runningQueue||!levelState) return; await runQueueEntry(child,delay); }
  } else { runSingleCommand(entry.cmd); await qxWait(delay); }
}
async function executeQueueTree(){
  if(runningQueue||!queuedCommands.length||!levelState) return;
  runningQueue=true; const entries=[...queuedCommands]; pseudoLastRun=entries; const delay=qxDelay();
  document.querySelectorAll("#queue-commands .queue-chip").forEach(c=>c.classList.remove("done","queue-chip-active"));
  try{
    for(let i=0;i<entries.length;i++){
      if(!runningQueue||!levelState) break;
      const chips=document.querySelectorAll("#queue-commands .queue-chip");
      chips.forEach((c,k)=>{ c.classList.toggle("queue-chip-active",k===i); if(k<i) c.classList.add("done"); });
      await runQueueEntry(entries[i],delay);
    }
  } catch(e){ console.error("Erro ao executar sequência:",e); }
  finally{ runningQueue=false; document.querySelectorAll("#queue-commands .queue-chip").forEach(c=>c.classList.remove("queue-chip-active")); }
}
function levelPopupOpen(){ const p=$("popup-complete"); return !!(p&&p.classList.contains("visible")); }
async function runWrittenProgram(){
  if(runningQueue||!currentTheme||!levelState) return;
  const ta=$("write-code"), runBtn=$("wr-run"); const res=parsePseudoProgram(ta.value);
  if(res.errors.length){ showWriteErrors(res.errors); setFeedback("✍️ Há linhas a corrigir — vê a mensagem por baixo da caixa de texto.","warn"); return; }
  showWriteMsg("ok","✅ Programa válido — a executar…"); if(runBtn) runBtn.disabled=true;
  try{
    if(moveCount>0){ runningQueue=false; loadLevel(currentLevelIndex); setFeedback("↺ A recomeçar o nível para correr o teu programa desde o início…","info"); await qxWait(250); }
    queuedCommands=res.entries; groupStack=[]; renderQueue();
    await executeQueueTree();
    if(levelState&&!levelPopupOpen()) setFeedback("🏁 O programa terminou. Não chegaste ao fim? Corrige o texto e carrega em ▶️ Executar — recomeça sempre do início.","info");
    showWriteMsg("","");
  } finally { if(runBtn) runBtn.disabled=false; }
}

/* ── 🎬 Demonstração ── */
// BFS (mesmas regras do computeOptimal) que devolve a lista de ações da solução ótima.
function computeActionPath(base){
  const n=base.size, k=(base.items||[]).length, obs=new Set((base.obstacles||[]).map(o=>o[0]*n+o[1]));
  const dep=new Set((base.deposit||[]).map(o=>o[0]*n+o[1])), itemIdx=new Map((base.items||[]).map((p,i)=>[p[0]*n+p[1],i]));
  const mask=(1<<k)-1, enc=(p,d,ca,m)=>((((p*4+d)*2+ca)<<k)|m);
  const par=new Map(), act=new Map(); const s0=enc(base.robot[0]*n+base.robot[1],0,0,mask);
  par.set(s0,-1); const q=[s0]; let head=0, goal=-1;
  const add=(from,to,a)=>{ if(!par.has(to)){ par.set(to,from); act.set(to,a); q.push(to); } };
  while(head<q.length){
    const s=q[head++]; let rest=s; const m=rest&mask; rest>>=k; const ca=rest&1; rest>>=1; const d=rest&3; const p=rest>>2;
    if(m===0&&ca===0){ goal=s; break; }
    const r=Math.floor(p/n), c=p%n; const DR=[[-1,0],[0,1],[1,0],[0,-1]];
    const fr=r+DR[d][0], fc=c+DR[d][1];
    if(fr>=0&&fr<n&&fc>=0&&fc<n&&!obs.has(fr*n+fc)) add(s,enc(fr*n+fc,d,ca,m),"MOVE");
    add(s,enc(p,(d+3)%4,ca,m),"LEFT"); add(s,enc(p,(d+1)%4,ca,m),"RIGHT");
    if(ca===0){ const i=itemIdx.get(p); if(i!==undefined&&(m&(1<<i))) add(s,enc(p,d,1,m&~(1<<i)),"COLLECT"); }
    if(ca===1&&dep.has(p)) add(s,enc(p,d,0,m),"DROP");
    const br=r-DR[d][0], bc=c-DR[d][1];
    if(br>=0&&br<n&&bc>=0&&bc<n&&!obs.has(br*n+bc)) add(s,enc(br*n+bc,d,ca,m),"BACK");
  }
  if(goal<0) return null;
  const path=[]; for(let s=goal;par.get(s)!==-1;s=par.get(s)) path.push(act.get(s));
  return path.reverse();
}
// Corridas de 2+ ações iguais viram "repetir" (máx. 5×, como os botões 2×–5×).
function compactPathToQueue(path){
  const out=[]; let i=0;
  while(i<path.length){
    let j=i; while(j<path.length&&path[j]===path[i]) j++;
    let run=j-i; const cmd=path[i], label=cmdLabel(cmd);
    while(run>=2){ const chunk=Math.min(run,5); out.push({type:"repeat",times:chunk,children:[{cmd,label}]}); run-=chunk; }
    if(run===1) out.push({cmd,label});
    i=j;
  }
  return out;
}
async function runDemoEntries(entries){
  runningQueue=true; queuedCommands=entries; renderQueue();
  const qb=$("queue-box"); if(qb) qb.classList.add("demo-playing");
  const lbl=$("queue-label"), lblOriginal=lbl?lbl.textContent:null; if(lbl) lbl.textContent=Q("🎬 A demonstrar…");
  const qc=$("queue-commands"); if(qc) qc.scrollIntoView({behavior:"smooth",block:"nearest"});
  try{
    for(let idx=0;idx<entries.length;idx++){
      if(!runningQueue||!levelState) break;
      const chip=qc?qc.children[idx]:null; if(chip) chip.classList.add("queue-chip-active");
      await runQueueEntry(entries[idx],420);
      if(chip){ chip.classList.remove("queue-chip-active"); chip.classList.add("done"); }
    }
  } catch(e){ console.error("Erro na demonstração:",e); }
  finally{ runningQueue=false; if(qb) qb.classList.remove("demo-playing"); if(lbl&&lblOriginal!==null) lbl.textContent=lblOriginal; }
}
function pseudoLinesMap(entries,lines,map){
  entries.forEach(e=>{
    map.set(e,lines.length);
    if(e.type==="repeat"){ lines.push("REPETIR "+e.times+" VEZES"); e.children.forEach(c=>{ map.set(c,lines.length); lines.push("    "+(PSEUDO_CMD[c.cmd]||c.cmd)); }); }
    else lines.push(PSEUDO_CMD[e.cmd]||e.cmd);
  });
}
// No Secundário o programa é escrito linha a linha e depois executado, com a linha atual em destaque.
async function runDemoWritten(entries){
  const pre=$("write-demo"), ta=$("write-code"); if(!pre||!ta){ await runDemoEntries(entries); return; }
  const lines=[], map=new Map(); pseudoLinesMap(entries,lines,map); const done=new Set();
  const paint=(visible,active)=>{
    pre.innerHTML=lines.slice(0,visible).map((t,i)=>'<span class="ps-line'+(active&&active.has(i)?" ps-active":(done.has(i)?" ps-done":""))+'">'+highlightPseudo(t)+'</span>').join("");
    const el=pre.querySelector(".ps-active");
    if(el){ const top=el.offsetTop,h=el.offsetHeight; if(top<pre.scrollTop||top+h>pre.scrollTop+pre.clientHeight) pre.scrollTop=Math.max(0,top-pre.clientHeight/2); }
    else pre.scrollTop=pre.scrollHeight;
  };
  const lbl=$("queue-label"), lblOriginal=lbl?lbl.textContent:null; if(lbl) lbl.textContent=Q("🎬 A demonstrar…");
  runningQueue=true; ta.classList.add("qx-hidden"); pre.classList.remove("qx-hidden");
  showWriteMsg("","🎬 Repara: primeiro escreve-se o programa, depois o robô executa-o linha a linha.");
  try{
    for(let n=1;n<=lines.length;n++){ paint(n,null); await qxWait(280); }
    await qxWait(500);
    for(const entry of entries){
      if(!runningQueue||!levelState) break;
      const hdr=map.get(entry);
      if(entry.type==="repeat"){
        for(let k=0;k<entry.times;k++){
          for(const child of entry.children){ if(!runningQueue||!levelState) break; paint(lines.length,new Set([hdr,map.get(child)])); runSingleCommand(child.cmd); await qxWait(420); }
          if(!runningQueue||!levelState) break;
        }
        done.add(hdr); entry.children.forEach(c=>done.add(map.get(c)));
      } else { paint(lines.length,new Set([hdr])); runSingleCommand(entry.cmd); await qxWait(420); done.add(hdr); }
    }
    paint(lines.length,null); await qxWait(300);
  } catch(e){ console.error("Erro na demonstração:",e); }
  finally{
    runningQueue=false; pre.classList.add("qx-hidden"); ta.classList.remove("qx-hidden");
    if(lbl&&lblOriginal!==null) lbl.textContent=lblOriginal;
    if(!ta.value.trim()){ ta.value=lines.join("\n"); showWriteMsg("ok","📋 A solução ficou escrita na caixa — carrega em ▶️ Executar para a veres outra vez, ou muda o que quiseres."); }
    else showWriteMsg("","");
  }
}

/* ── Ligações dos botões ── */
$("btn-run-queue").addEventListener("click",()=>{
  if(!isQueueMode()||runningQueue||!levelState) return;
  if(!queuedCommands.length){ setFeedback(T('queueEmpty'),"warn"); return; }
  if(groupStack.length){ setFeedback("🔁 Fecha o ciclo (✅ Fechar) ou cancela-o antes de executar.","warn"); return; }
  executeQueueTree();
});
$("btn-undo-queue").addEventListener("click",()=>{
  if(!isQueueMode()||runningQueue) return;
  if(groupStack.length){
    const inner=groupStack[groupStack.length-1];
    if(inner.children.length) inner.children.pop(); else groupStack.pop();
    renderQueueGroupBar();
  } else { queuedCommands.pop(); renderQueue(); }
  setFeedback(T('cmdUndone'),"info");
});
$("btn-clear-queue").addEventListener("click",()=>{ if(!isQueueMode()||runningQueue) return; resetQueue(); setFeedback(T('queueCleared'),"info"); });
$("btn-pseudo-toggle")?.addEventListener("click",()=>{ pseudoOn=!pseudoOn; renderPseudoView(); });

$("btn-block-repeat")?.addEventListener("click",()=>{
  if(runningQueue) return;
  const maxNest=currentCycleKey==="sec"?MAX_NEST:1;
  if(groupStack.length>=maxNest){
    setFeedback(currentCycleKey==="sec"?"🔁 Só podes aninhar ciclos até "+MAX_NEST+" níveis — fecha o mais interno primeiro.":"🔁 Fecha este ciclo antes de abrires outro (aninhar só existe no Secundário).","warn"); return;
  }
  $("queue-repeat-picker")?.classList.remove("qx-hidden");
});
document.querySelectorAll(".times-btn").forEach(b=>b.addEventListener("click",()=>{
  const times=parseInt(b.getAttribute("data-times"),10)||2;
  groupStack.push({type:"repeat",times,children:[]});
  $("queue-repeat-picker")?.classList.add("qx-hidden"); renderQueueGroupBar();
  setFeedback(groupStack.length>1?"🔁 A construir um ciclo ANINHADO de "+times+"× dentro do ciclo anterior.":"🔁 A construir um ciclo de "+times+"×. Escolhe os passos a repetir.","info");
}));
$("btn-repeat-cancel")?.addEventListener("click",()=>$("queue-repeat-picker")?.classList.add("qx-hidden"));
$("btn-group-close")?.addEventListener("click",()=>{
  if(!groupStack.length) return; const inner=groupStack[groupStack.length-1];
  if(!inner.children.length){ setFeedback("Adiciona pelo menos um passo ao ciclo antes de fechar.","warn"); return; }
  groupStack.pop();
  if(groupStack.length){ groupStack[groupStack.length-1].children.push(inner); setFeedback("✅ Ciclo aninhado fechado — continua o ciclo de fora.","info"); }
  else { queuedCommands.push(inner); setFeedback("✅ Ciclo adicionado à sequência.","info"); }
  renderQueueGroupBar(); renderQueue();
});
$("btn-group-cancel")?.addEventListener("click",()=>{ if(groupStack.length) groupStack.pop(); renderQueueGroupBar(); setFeedback("❌ Bloco cancelado.","info"); });

const wrCode=$("write-code");
$("tab-blocks")?.addEventListener("click",()=>{ if(!runningQueue) setWriteMode(false); });
$("tab-write")?.addEventListener("click",()=>{ if(!runningQueue) setWriteMode(true); });
$("wr-run")?.addEventListener("click",runWrittenProgram);
$("wr-clear")?.addEventListener("click",()=>{ if(wrCode) wrCode.value=""; showWriteMsg("","✍️ Caixa limpa."); });
$("wr-repeat")?.addEventListener("click",()=>writeInsertLine("REPETIR 2 VEZES"));
$("wr-indent")?.addEventListener("click",()=>writeShift(1));
$("wr-outdent")?.addEventListener("click",()=>writeShift(-1));
$("wr-to-blocks")?.addEventListener("click",()=>{
  if(runningQueue||!wrCode) return; const res=parsePseudoProgram(wrCode.value);
  if(res.errors.length){ showWriteErrors(res.errors); return; }
  queuedCommands=res.entries; groupStack=[]; setWriteMode(false); renderQueueGroupBar(); renderQueue();
  setFeedback("🧩 O teu texto foi convertido em blocos.","ok");
});
if(wrCode) wrCode.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ writeTabFree=true; return; }   // Esc e depois Tab sai da caixa (acessibilidade)
  if(e.key==="Tab"){ if(writeTabFree){ writeTabFree=false; return; } e.preventDefault(); writeShift(e.shiftKey?-1:1); return; }
  writeTabFree=false;
});
$("btn-demo")?.addEventListener("click",()=>{
  if(!currentTheme||runningQueue||!levelState) return;
  const demoBtn=$("btn-demo"), demoPseudo=(currentCycleKey==="sec");
  showConfirmPopup(Q(demoPseudo?"🎬 Vou reiniciar este nível e mostrar uma forma de o resolver escrevendo o pseudocódigo. Continuar?":"🎬 Vou reiniciar este nível e mostrar uma forma de o resolver usando os blocos. Continuar?"),()=>{
    if(demoPseudo) writeMode=true;
    runningQueue=false; resetQueue(); loadLevel(currentLevelIndex);
    const base=levelsFor(currentCycleKey,currentTheme)[currentLevelIndex];
    const path=base?computeActionPath(base):null;
    if(!path){ setFeedback("😕 Não consegui calcular uma demonstração para este nível.","warn"); return; }
    demoBtn.disabled=true; const entries=compactPathToQueue(path);
    setFeedback("🎬 Repara na sequência completa — o passo atual fica em destaque!","info");
    setTimeout(async()=>{
      window._qxDemo=true;   // a demonstração não conta: não dá estrelas nem marca o nível como concluído
      try{ if(demoPseudo){ if(!writeMode) setWriteMode(true); await runDemoWritten(entries); } else await runDemoEntries(entries); }
      finally{ window._qxDemo=false; demoBtn.disabled=false; if(levelState) setFeedback("🎬 Fim da demonstração! Carrega em ↺ Reiniciar e tenta tu — este nível ainda não conta.","ok"); }
    },1200);
  });
});

/* ============================= 🎓 CERTIFICADO (por tema e por ciclo) =============================
   Portado do jogo "Cibersegurança — Programação". O certificado de TEMA existe quando os 5 níveis do tema estão
   feitos; o de CICLO quando todos os temas do ciclo estão feitos. Desenha-se num canvas para imprimir / PNG / PDF. */
const CERT_GOLD="#8a5a00", CERT_ORG="#c04a1a";
function certLevels(ck,tk){ const th=GAME_DATA&&GAME_DATA[ck]&&GAME_DATA[ck].themes[tk]; return levelsFor(ck,th); }
function certThemeStats(ck,tk){
  const lv=certLevels(ck,tk), prog=loadProgress(ck,tk); let done=0,stars=0;
  lv.forEach((_,i)=>{ const d=prog.levels&&prog.levels[i]; if(d&&d.completed){ done++; stars+=(d.lastStars||1); } });
  return {done,total:lv.length,stars,starsTotal:lv.length*3};
}
function certThemeDone(ck,tk){ const s=certThemeStats(ck,tk); return s.total>0&&s.done>=s.total; }
function certCycleStats(ck){
  const cy=GAME_DATA&&GAME_DATA[ck]; if(!cy) return {done:0,total:0,stars:0,starsTotal:0};
  let done=0,stars=0,starsTotal=0; const keys=Object.keys(cy.themes);
  keys.forEach(tk=>{ const s=certThemeStats(ck,tk); if(s.total>0&&s.done>=s.total) done++; stars+=s.stars; starsTotal+=s.starsTotal; });
  return {done,total:keys.length,stars,starsTotal};
}
function certCycleDone(ck){ const s=certCycleStats(ck); return s.total>0&&s.done>=s.total; }
function certMedal(pct){ return pct>=100?"🥇 Perfeito":pct>=80?"🥈 Excelente":pct>=60?"🥉 Bom":"✅ Concluído"; }
function certRefreshButtons(){
  const ok=!!currentTheme&&!isEscapeMode()&&currentCycleKey;
  const td=ok&&certThemeDone(currentCycleKey,currentThemeKey), cd=ok&&certCycleDone(currentCycleKey);
  ["btn-cert-theme","popup-cert-btn"].forEach(id=>$(id)?.classList.toggle("qx-hidden",!td));
  ["btn-cert-cycle","popup-cert-cycle-btn"].forEach(id=>$(id)?.classList.toggle("qx-hidden",!cd));
}
function showCertificate(ck,tk){
  const ov=$("certificateOverlay"); const cy=GAME_DATA&&GAME_DATA[ck]; if(!ov||!cy) return;
  const theme=tk?cy.themes[tk]:null, isCycle=!theme;
  const uni=(ALL_UNIVERSES[currentUniverseId]&&ALL_UNIVERSES[currentUniverseId].name)||"";
  const cycleLabel=ck==="sec"?"Ensino Secundário":cy.name;
  const set=(id,t)=>{ const e=$(id); if(e) e.textContent=Q(t); };
  set("certPlayerName",(_getStudentName()||"").trim()||"Programador(a)");
  set("certSubtitle",isCycle?"de Pensamento Computacional — ciclo completo":"de Pensamento Computacional");
  set("certAchText",isCycle?"que, com atenção e criatividade, programou o robô e completou todos os temas de":"que, com atenção e criatividade, programou o robô e completou o tema");
  set("certHighlight",isCycle?cycleLabel+" — "+uni:theme.name+" ("+cycleLabel+")");
  set("certFinalText",isCycle?"tornando-se oficialmente Programador(a) do Pensamento Computacional deste ciclo.":"tornando-se oficialmente Programador(a) do Pensamento Computacional.");
  const st=isCycle?certCycleStats(ck):certThemeStats(ck,tk);
  set("certThemes",st.done+"/"+st.total); set("certStatLabel",isCycle?"temas":"níveis");
  set("certStars",st.stars+"/"+st.starsTotal);
  set("certMedal",certMedal(st.starsTotal>0?Math.round(st.stars/st.starsTotal*100):0));
  set("certDate",new Date().toLocaleDateString(currentLang==="en"?"en-GB":"pt-PT",{day:"numeric",month:"long",year:"numeric"}));
  ov.dataset.slug=(isCycle?"ciclo-"+ck:"tema-"+tk);
  ov.classList.remove("qx-hidden");
  const img=$("certImage"); if(img){ img.removeAttribute("src"); certWhenFontsReady(()=>{ try{ img.src=buildCertCanvas().toDataURL("image/png"); }catch(e){ console.error("certImage:",e); } }); }
}
function certAccent(){
  const u=(typeof ALL_UNIVERSES!=="undefined"&&ALL_UNIVERSES[currentUniverseId])||null, c=u&&u.colors;
  return c?{main:c.primary,dark:c.dark,rgb:c.rgb}:{main:CERT_ORG,dark:CERT_GOLD,rgb:"217,164,65"};
}
function certStarPath(g,cx,cy,R,r){
  g.beginPath(); for(let i=0;i<10;i++){ const a=-Math.PI/2+i*Math.PI/5, rad=i%2?r:R; g[i?"lineTo":"moveTo"](cx+Math.cos(a)*rad,cy+Math.sin(a)*rad); } g.closePath();
}
function buildCertCanvas(){
  const W=1600,H=1131,F="'Nunito', sans-serif",cv=document.createElement("canvas"); cv.width=W; cv.height=H;
  const g=cv.getContext("2d"), txt=id=>($(id)?.textContent||"").trim(), AC=certAccent();
  const fit=(text,maxW,px,weight,minPx)=>{ let z=px; for(;;){ g.font=weight+" "+z+"px "+F; if(g.measureText(text).width<=maxW||z<=(minPx||18)) break; z-=2; } };
  // fundo e moldura (dourado por fora, cor do universo por dentro, enfeites nos cantos)
  const bg=g.createLinearGradient(0,0,0,H); bg.addColorStop(0,"#fffdf6"); bg.addColorStop(1,"#fff6df"); g.fillStyle=bg; g.fillRect(0,0,W,H);
  g.strokeStyle="#d9a441"; g.lineWidth=12; g.strokeRect(40,40,W-80,H-80);
  g.strokeStyle=AC.dark; g.lineWidth=3; g.strokeRect(70,70,W-140,H-140);
  g.strokeStyle="rgba("+AC.rgb+",0.35)"; g.lineWidth=2; g.strokeRect(82,82,W-164,H-164);
  [[70,70],[W-70,70],[70,H-70],[W-70,H-70]].forEach(([x,y])=>{ g.save(); g.translate(x,y); g.rotate(Math.PI/4); g.fillStyle="#d9a441"; g.fillRect(-15,-15,30,30); g.strokeStyle=AC.dark; g.lineWidth=3; g.strokeRect(-15,-15,30,30); g.restore(); });
  // coluna esquerda: VanBerto's (desenho oficial), estrelas ganhas e nome
  g.textAlign="center"; const lx=270;
  try{
    const rb=document.createElement("canvas"); rb.width=480; rb.height=480; const rg=rb.getContext("2d"); rg.scale(5,5); drawVanBerto(rg,"happy",-1,true);
    g.drawImage(rb,lx-240,235,480,480);
  }catch(e){ g.font="190px sans-serif"; g.fillStyle="#000"; g.fillText("🤖",lx,520); }
  const stN=txt("certStars").match(/(\d+)\s*\/\s*(\d+)/), pct=stN&&+stN[2]?+stN[1]/+stN[2]:1, earned=Math.max(1,Math.round(pct*3));
  for(let i=0;i<3;i++){ const sx=lx+(i-1)*92, sy=770; certStarPath(g,sx,sy,40,17); g.fillStyle=i<earned?"#f5b301":"#eadfc4"; g.fill(); g.lineWidth=4; g.strokeStyle=i<earned?"#b07d00":"#d6c79c"; g.stroke(); }
  g.fillStyle=AC.dark; g.font="900 46px "+F; g.fillText("VanBerto's",lx,885);
  // centro: título, nome, texto
  const cx=1000, mw=1000;
  g.fillStyle=AC.dark; fit(Q("CERTIFICADO OFICIAL"),mw,60,"900"); g.fillText(Q("CERTIFICADO OFICIAL"),cx,185);
  g.fillStyle=AC.main; const sub=txt("certSubtitle").toUpperCase(); fit(sub,mw,28,"800"); g.fillText(sub,cx,232);
  g.strokeStyle="#d9a441"; g.lineWidth=3; g.beginPath(); g.moveTo(cx-260,262); g.lineTo(cx+260,262); g.stroke();
  g.fillStyle="#d9a441"; g.beginPath(); g.arc(cx,262,7,0,Math.PI*2); g.fill();
  g.fillStyle="#555"; g.font="600 32px "+F; g.fillText(Q("Este certificado é atribuído a"),cx,325);
  g.fillStyle=AC.dark; fit(txt("certPlayerName"),mw,100,"900",40); g.fillText(txt("certPlayerName"),cx,430);
  g.fillStyle="#444"; fit(txt("certAchText"),mw,34,"600"); g.fillText(txt("certAchText"),cx,502);
  g.fillStyle=AC.main; fit(txt("certHighlight"),mw,54,"900",28); g.fillText(txt("certHighlight"),cx,574);
  g.fillStyle="#444"; fit(txt("certFinalText"),mw,32,"600"); g.fillText(txt("certFinalText"),cx,634);
  // caixas: níveis/temas, estrelas, medalha (desenhada)
  const bw=300,bh=170,gap=30,x0=cx-(3*bw+2*gap)/2,y0=690;
  const box=(x)=>{ g.fillStyle="rgba("+AC.rgb+",0.09)"; g.strokeStyle=AC.main; g.lineWidth=3; g.beginPath(); if(g.roundRect) g.roundRect(x,y0,bw,bh,20); else g.rect(x,y0,bw,bh); g.fill(); g.stroke(); };
  [[txt("certThemes"),txt("certStatLabel")],[txt("certStars"),Q("estrelas")]].forEach((st,i)=>{
    const x=x0+i*(bw+gap); box(x);
    g.fillStyle=AC.dark; fit(st[0],bw-40,68,"900",30); g.fillText(st[0],x+bw/2,y0+90);
    g.fillStyle="#777"; g.font="800 26px "+F; g.fillText(st[1].toUpperCase(),x+bw/2,y0+140);
  });
  const mx=x0+2*(bw+gap); box(mx);
  const medalTxt=txt("certMedal"), medalWord=medalTxt.replace(/^[^\p{L}]+/u,"").trim()||medalTxt;
  const mcol=medalTxt.startsWith("🥇")?["#f7c948","#b07d00"]:medalTxt.startsWith("🥈")?["#d5dde6","#7c8a99"]:medalTxt.startsWith("🥉")?["#e0a070","#8a5226"]:["#86efac","#15803d"];
  const mcx=mx+bw/2, mcy=y0+52;
  g.fillStyle=mcol[0]; g.strokeStyle=mcol[1]; g.lineWidth=6; g.beginPath(); g.arc(mcx,mcy,34,0,Math.PI*2); g.fill(); g.stroke();
  certStarPath(g,mcx,mcy+1,19,8); g.fillStyle=mcol[1]; g.fill();
  g.fillStyle=AC.dark; fit(medalWord,bw-40,40,"900",22); g.fillText(medalWord,mcx,y0+120);
  g.fillStyle="#777"; g.font="800 22px "+F; g.fillText(Q("medalha").toUpperCase(),mcx,y0+152);
  // data e assinatura
  g.fillStyle="#777"; g.font="italic 700 30px "+F; g.fillText(txt("certDate"),cx,922);
  g.strokeStyle=AC.dark; g.lineWidth=3; g.beginPath(); g.moveTo(cx-200,972); g.lineTo(cx+200,972); g.stroke();
  g.fillStyle=AC.dark; g.font="italic 800 38px "+F; g.fillText(Q("Prof.ª Vanda Várzea"),cx,1018);
  return cv;
}
function certSafeName(){
  const n=($("certPlayerName")?.textContent||"jogador").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"jogador";
  return "certificado-vanbertos-"+($("certificateOverlay")?.dataset.slug||"tema")+"-"+n;
}
function certDownload(href,name){ const a=document.createElement("a"); a.href=href; a.download=name; a.style.display="none"; document.body.appendChild(a); try{ a.click(); } finally{ a.remove(); } }
function certWhenFontsReady(go){ if(document.fonts&&document.fonts.ready) document.fonts.ready.then(go); else go(); }
function certPrint(){
  certWhenFontsReady(()=>{
    try{
      const url=buildCertCanvas().toDataURL("image/png");
      const f=document.createElement("iframe"); f.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;"; document.body.appendChild(f);
      const d=f.contentWindow.document; d.open();
      d.write('<!doctype html><html><head><meta charset="utf-8"><title>Certificado</title><style>@page{size:A4 landscape;margin:0}html,body{margin:0;padding:0;background:#fff;height:100%}img{display:block;width:100vw;height:100vh;object-fit:contain}</style></head><body><img src="'+url+'" alt="Certificado"></body></html>'); d.close();
      const img=d.querySelector("img"), fire=()=>{ try{ f.contentWindow.focus(); f.contentWindow.print(); }catch(e){ window.print(); } setTimeout(()=>f.remove(),3000); };
      if(img.complete) fire(); else img.onload=fire;
    }catch(e){ console.error("certPrint:",e); }
  });
}
function certSaveAs(){
  certWhenFontsReady(()=>{
    try{
      certDownload(buildCertCanvas().toDataURL("image/png"),certSafeName()+".png");
    }catch(e){ console.error("certSaveAs:",e); alert(currentLang==="en"?"Couldn't create the image in this browser. Use Print instead.":'Não foi possível gerar a imagem neste navegador. Usa "Imprimir" em alternativa.'); }
  });
}
$("btnCertBack")?.addEventListener("click",()=>$("certificateOverlay")?.classList.add("qx-hidden"));
$("btnCertPrint")?.addEventListener("click",certPrint);
$("btnCertPng")?.addEventListener("click",()=>certSaveAs());
document.addEventListener("keydown",e=>{ if(e.key==="Escape") $("certificateOverlay")?.classList.add("qx-hidden"); });
["btn-cert-theme","popup-cert-btn"].forEach(id=>$(id)?.addEventListener("click",()=>{ $("popup-complete")?.classList.remove("visible"); showCertificate(currentCycleKey,currentThemeKey); }));
["btn-cert-cycle","popup-cert-cycle-btn"].forEach(id=>$(id)?.addEventListener("click",()=>{ $("popup-complete")?.classList.remove("visible"); showCertificate(currentCycleKey,null); }));

/* ── 🏆 Celebração grande: tema ou ciclo concluído ── */
function launchBigCelebration(){
  if(!document.getElementById("bigCelebStyle")){
    const st=document.createElement("style"); st.id="bigCelebStyle";
    st.textContent="@keyframes bigStarFall{0%{top:-60px;opacity:1;transform:rotate(0deg) scale(1);}100%{top:110%;opacity:0;transform:rotate(var(--star-rot,360deg)) scale(.5);}}";
    document.head.appendChild(st);
  }
  let ov=document.getElementById("big-celebrate-overlay");
  if(!ov){ ov=document.createElement("div"); ov.id="big-celebrate-overlay"; ov.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:10040;overflow:hidden;"; document.body.appendChild(ov); }
  ov.innerHTML="";
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const emojis=["⭐","🌟","✨","🎉","🎊","🏆","🎈","💛","🩷","🌈"];
  for(let i=0;i<50;i++){
    const el=document.createElement("div"), rot=(Math.random()>.5?1:-1)*(180+Math.floor(Math.random()*360))+"deg";
    el.style.cssText="position:absolute;left:"+(Math.random()*100)+"%;top:-60px;font-size:"+(Math.random()*1.5+.8)+"rem;--star-rot:"+rot+";animation:bigStarFall "+(Math.random()*2+1.5)+"s "+(Math.random()*1.5)+"s ease-in forwards;";
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)]; ov.appendChild(el);
  }
  setTimeout(()=>{ ov.innerHTML=""; },5000);
}
function themeCelebration(cycleJustDone){
  const nome=(_getStudentName()||"").trim(), tema=(currentTheme&&currentTheme.name)||"este tema";
  const pt=$("popup-title"); if(pt) pt.textContent=Q(cycleJustDone?"Ciclo concluído! 🎓":"Tema concluído! 🏆");
  const tx=$("popup-text");
  if(tx) tx.textContent=Q((nome?"Parabéns, "+nome+"! ":"Parabéns! ")+(cycleJustDone?"Completaste todos os temas deste ciclo! Já podes tirar o certificado do ciclo. 🎓":"Completaste \""+tema+"\"! Já podes tirar o certificado do tema. 🎓"));
  setTimeout(()=>{ try{ SFX.starMelody(); }catch(e){} },500);
  launchBigCelebration();
  if(window._vbReact) window._vbReact('vb-spin');
}
/* ── ⛶ Ecrã inteiro ── */
(function(){
  const fsBtn=$("btn-fullscreen"); if(!fsBtn) return;
  const isFs=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
  const upd=()=>{ fsBtn.textContent=Q(isFs()?"✕ Sair":"⛶ Ecrã"); fsBtn.title=Q(isFs()?"Sair do ecrã inteiro":"Ecrã inteiro"); }; window._qxFsUpd=upd; upd();
  if(!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)){ fsBtn.classList.add("qx-hidden"); return; } // ex.: iPhone não permite
  fsBtn.addEventListener("click",()=>{
    const el=document.documentElement;
    if(!isFs()){ (el.requestFullscreen||el.webkitRequestFullscreen).call(el); }
    else { (document.exitFullscreen||document.webkitExitFullscreen).call(document); }
  });
  document.addEventListener("fullscreenchange",upd); document.addEventListener("webkitfullscreenchange",upd);
})();

/* ============================= 🧠 DESAFIO DE PSEUDOCÓDIGO (Secundário) =============================
   Perguntas de LEITURA de pseudocódigo do robô (sequência, REPETIR, REPETIR dentro de REPETIR). As respostas certas
   são CALCULADAS por um simulador (o mesmo texto é lido por parsePseudoProgram), por isso não há respostas escritas à mão. */
function dirNames(){ return currentLang==="en"?["up (North)","right (East)","down (South)","left (West)"]:["para cima (Norte)","para a direita (Este)","para baixo (Sul)","para a esquerda (Oeste)"]; }
function expandEntries(entries,out){ out=out||[]; entries.forEach(e=>{ if(e.type==="repeat"){ for(let i=0;i<e.times;i++) expandEntries(e.children,out); } else out.push(e.cmd); }); return out; }
function simEntries(entries){
  const acts=expandEntries(entries), DX=[0,1,0,-1], DY=[1,0,-1,0]; let x=0,y=0,d=0;
  acts.forEach(a=>{ if(a==="MOVE"){x+=DX[d];y+=DY[d];} else if(a==="BACK"){x-=DX[d];y-=DY[d];} else if(a==="LEFT") d=(d+3)%4; else if(a==="RIGHT") d=(d+1)%4; });
  return {acts,x,y,d,n:acts.length};
}
function posText(x,y){
  const en=currentLang==="en", p=[], sq=n=>en?(n===1?" square ":" squares "):(n===1?" casa ":" casas ");
  if(x) p.push(Math.abs(x)+sq(Math.abs(x))+(en?(x>0?"to the right":"to the left"):(x>0?"à direita":"à esquerda")));
  if(y) p.push(Math.abs(y)+sq(Math.abs(y))+(en?(y>0?"up":"down"):(y>0?"para cima":"para baixo")));
  return p.length?p.join(en?" and ":" e "):(en?"back where it started":"no mesmo sítio onde começou");
}
const PSEUDO_CH_SRC=[
  {t:"count",code:"AVANÇAR\nREPETIR 3 VEZES\n    AVANÇAR\n    VIRAR À DIREITA\nAPANHAR"},
  {t:"dir",code:"VIRAR À DIREITA\nVIRAR À DIREITA\nVIRAR À ESQUERDA"},
  {t:"pos",code:"AVANÇAR\nAVANÇAR\nVIRAR À DIREITA\nAVANÇAR\nAVANÇAR\nAVANÇAR"},
  {t:"count",code:"REPETIR 2 VEZES\n    AVANÇAR\n    REPETIR 3 VEZES\n        VIRAR À ESQUERDA\nDEPOSITAR"},
  {t:"dir",code:"REPETIR 5 VEZES\n    VIRAR À DIREITA"},
  {t:"pos",code:"AVANÇAR\nAVANÇAR\nAVANÇAR\nRECUAR"},
  {t:"pos",code:"REPETIR 4 VEZES\n    AVANÇAR\n    VIRAR À DIREITA"},
  {t:"equal",code:"AVANÇAR\nAVANÇAR\nAVANÇAR\nVIRAR À DIREITA\nAVANÇAR\nAVANÇAR\nAVANÇAR\nVIRAR À DIREITA",
   alts:["REPETIR 2 VEZES\n    REPETIR 3 VEZES\n        AVANÇAR\n    VIRAR À DIREITA","REPETIR 3 VEZES\n    AVANÇAR\n    VIRAR À DIREITA","REPETIR 6 VEZES\n    AVANÇAR\nVIRAR À DIREITA","REPETIR 2 VEZES\n    AVANÇAR\n    VIRAR À DIREITA\n    AVANÇAR\n    AVANÇAR"]}
];
let _pseudoCh=null, _pseudoChLang=null;
function buildPseudoChallenges(){
  if(_pseudoCh&&_pseudoChLang===currentLang) return _pseudoCh;
  _pseudoChLang=currentLang; const EN=currentLang==="en", DN=dirNames();
  const uniq=(arr)=>arr.filter((v,i)=>arr.indexOf(v)===i);
  _pseudoCh=PSEUDO_CH_SRC.map(src=>{
    const entries=parsePseudoProgram(src.code).entries, r=simEntries(entries), lines=src.code.split("\n").length;
    const trace=r.acts.map(a=>PSEUDO_CMD[a]).join(", ");
    if(src.t==="count"){
      const correct=String(r.n), ops=uniq([correct,String(r.n-1),String(r.n+2),String(lines)]).filter(v=>+v>0).slice(0,4);
      return {code:src.code,q:EN?"How many commands does the robot run in total, counting every repetition?":"Quantos comandos executa o robô ao todo, contando cada repetição?",ops,a:ops.indexOf(correct),
        e:EN?"REPETIR blocks count every pass. Step by step: "+trace+" → "+r.n+" commands (the program only has "+lines+" written lines).":"Os blocos REPETIR contam todas as voltas. Passo a passo: "+trace+" → "+r.n+" comandos (o programa só tem "+lines+" linhas escritas)."};
    }
    if(src.t==="dir"){
      const ops=DN.slice();
      return {code:src.code,q:EN?"The robot starts facing up. Which way is it facing at the end?":"O robô começa a olhar para cima. Para onde fica a olhar no fim?",ops,a:r.d,
        e:EN?"Each VIRAR À DIREITA turns 90° to the right and each VIRAR À ESQUERDA 90° to the left. The commands were: "+trace+". At the end it faces "+DN[r.d]+".":"Cada VIRAR À DIREITA roda 90° para a direita e cada VIRAR À ESQUERDA 90° para a esquerda. Os comandos foram: "+trace+". No fim olha "+DN[r.d]+"."};
    }
    if(src.t==="pos"){
      const correct=posText(r.x,r.y), ops=uniq([correct,posText(r.y,r.x),posText(r.x+1,r.y),posText(r.x,r.y-1),posText(-r.x,-r.y)]).slice(0,4);
      if(ops.indexOf(correct)<0) ops[0]=correct;
      return {code:src.code,q:EN?"The robot starts facing up. Where does it end up, compared with its starting square?":"O robô começa a olhar para cima. Onde fica, em relação à casa onde começou?",ops,a:ops.indexOf(correct),
        e:EN?"Following the commands: "+trace+". The robot always moves in the direction it is facing. It ends "+correct+(r.d?", facing "+DN[r.d]:", facing up")+".":"Seguindo os comandos: "+trace+". O robô anda sempre na direção para onde está virado. Fica "+correct+(r.d?", a olhar "+DN[r.d]:", a olhar para cima")+"."};
    }
    const mine=expandEntries(parsePseudoProgram(src.code).entries).join(","); const all=[src.alts[0]].concat(src.alts.slice(1));
    const good=all.findIndex(c=>expandEntries(parsePseudoProgram(c).entries).join(",")===mine);
    return {code:src.code,q:EN?"Which of these programs does exactly the same as the one above?":"Qual destes programas faz exatamente o mesmo que o programa de cima?",ops:all,a:good,code2:true,
      e:EN?"The program above is «3 steps forward, turn right» done twice. Only the right option, once expanded, gives the same list of commands: "+trace+".":"O programa de cima é «3 passos em frente, virar à direita» duas vezes. Só a opção certa, ao ser expandida, dá a mesma lista de comandos: "+trace+"."};
  });
  return _pseudoCh;
}
function closePseudoChallenge(){ $("popup-pseudo-ch")?.remove(); }
function openPseudoChallenge(idx){
  const list=buildPseudoChallenges(); idx=idx||0;
  let pop=$("popup-pseudo-ch");
  if(!pop){ pop=document.createElement("div"); pop.id="popup-pseudo-ch"; pop.setAttribute("role","dialog"); pop.setAttribute("aria-modal","true"); pop.setAttribute("aria-label",Q("🧠 Desafio de Pseudocódigo"));
    pop.addEventListener("click",e=>{ if(e.target===pop) closePseudoChallenge(); }); document.body.appendChild(pop); }
  const card=h=>'<div class="psch-card">'+h+'</div>';
  if(idx>=list.length){
    pop.innerHTML=card('<div style="font-size:2.2rem;text-align:center">🧠✅</div><p class="psch-done">'+Q("Completaste todos os desafios de pseudocódigo! Já sabes ler um programa linha a linha e prever o que o robô faz.")+'</p><div class="psch-actions"><button class="btn small" id="psch-close">'+Q("← Voltar ao jogo")+'</button></div>');
    $("psch-close").addEventListener("click",closePseudoChallenge); return;
  }
  const ch=list[idx];
  const opts=ch.ops.map((text,i)=>({text,ok:i===ch.a})); for(let i=opts.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [opts[i],opts[j]]=[opts[j],opts[i]]; }
  pop.innerHTML=card('<div class="psch-head"><span>'+Q("🧠 Desafio de Pseudocódigo")+'</span><span class="psch-count">'+(idx+1)+' / '+list.length+'</span></div>'
    +'<pre class="psch-code">'+highlightPseudo(ch.code)+'</pre><p class="psch-q">'+escHtml(ch.q)+'</p>'
    +'<div class="psch-opts">'+opts.map((o,i)=>'<button class="btn secondary psch-opt" data-ok="'+o.ok+'">'+(ch.code2?'<pre class="psch-opt-code">'+highlightPseudo(o.text)+'</pre>':escHtml(o.text))+'</button>').join("")+'</div>'
    +'<div class="psch-fb" id="psch-fb" role="status" aria-live="polite"></div><div class="psch-expl qx-hidden" id="psch-expl"></div>'
    +'<div class="psch-actions"><button class="btn small qx-hidden" id="psch-next">'+Q(idx+1>=list.length?"Terminar ✓":"Seguinte →")+'</button><button class="btn secondary small" id="psch-close">'+Q("Fechar")+'</button></div>');
  $("psch-close").addEventListener("click",closePseudoChallenge);
  pop.querySelectorAll(".psch-opt").forEach(b=>b.addEventListener("click",()=>{
    const ok=b.dataset.ok==="true", fb=$("psch-fb");
    pop.querySelectorAll(".psch-opt").forEach(x=>{ x.disabled=true; if(x.dataset.ok==="true") x.classList.add("psch-right"); });
    if(!ok) b.classList.add("psch-wrong");
    fb.textContent=Q(ok?"✅ Certo! Seguiste o programa passo a passo.":"❌ Não era essa — vê a opção a verde e a explicação."); fb.className="psch-fb "+(ok?"ok":"err");
    try{ ok?SFX.win():SFX.fail&&SFX.fail(); }catch(e){}
    const ex=$("psch-expl"); ex.textContent="💡 "+ch.e; ex.classList.remove("qx-hidden");
    const nx=$("psch-next"); nx.classList.remove("qx-hidden"); nx.addEventListener("click",()=>openPseudoChallenge(idx+1)); nx.focus();
  }));
}
$("btn-pseudo-challenge")?.addEventListener("click",()=>openPseudoChallenge(0));
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closePseudoChallenge(); });

/* ── ⚙️ Menu "Mais" do cabeçalho ── */
(function(){
  const b=$("btn-hdr-more"), m=$("hdr-more"); if(!b||!m) return;
  const close=()=>{ m.classList.add("qx-hidden"); b.setAttribute("aria-expanded","false"); };
  b.addEventListener("click",e=>{ e.stopPropagation(); const open=m.classList.contains("qx-hidden"); m.classList.toggle("qx-hidden",!open); b.setAttribute("aria-expanded",open?"true":"false"); });
  document.addEventListener("click",e=>{ if(!m.contains(e.target)&&e.target!==b) close(); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") close(); });
})();
$("btn-reset-level").addEventListener("click",()=>{
  if(!currentTheme) return;
  levelAttempts++; currentSolutionPath=null; solutionVisible=false; _clearSolutionOverlay();
  _transitionLevel(()=>{ runningQueue=false;resetQueue();loadLevel(currentLevelIndex); });
  updateSolutionBtn();
  setFeedback(T('levelReset'),"ok");
});
$("btn-reset-level-top").addEventListener("click",()=>{
  if(!currentTheme){setFeedback(T('enterLevelFirst'),"warn");return;}
  showConfirmPopup(T('levelResetConfirm'),()=>{
    levelAttempts++; currentSolutionPath=null; solutionVisible=false; _clearSolutionOverlay();
    runningQueue=false;resetQueue();loadLevel(currentLevelIndex);
    updateSolutionBtn();
    setFeedback(T('levelResetDone'),"ok");
  });
});
// Solution button
const btnSol=$("btn-show-solution");
if(btnSol){
  btnSol.addEventListener("click",()=>{
    if(solutionVisible){ hideSolutionPath(); }
    else { showSolutionPath(); }
  });
}
$("btn-reset-theme").addEventListener("click",()=>{
  if(!currentTheme){setFeedback(T('chooseThemeFirst'),"warn");return;}
  showConfirmPopup(T('themeResetConfirm'),()=>{
    const p=loadProgress(currentCycleKey,currentThemeKey);
    p.currentLevelIndex=0;p.levels={};
    saveProgress(currentCycleKey,currentThemeKey,p);
    runningQueue=false;resetQueue();loadLevel(0);setFeedback(T('themeResetDone'),"ok");
  });
});

/* ============================= PICK THEME ============================= */
function pickTheme(ck, tk){
  if(!GAME_DATA||!GAME_DATA[ck]) return;
  currentCycleKey=ck;currentThemeKey=tk;
  currentCycle=GAME_DATA[ck];currentTheme=currentCycle.themes[tk];
  try{localStorage.setItem('vb_last_v1_'+currentUniverseId,JSON.stringify({ck:ck,tk:tk}));}catch(e){}
  const progress=loadProgress(ck,tk);
  const lvls=levelsFor(ck,currentTheme);
  currentLevelIndex=Math.min(progress.currentLevelIndex||0,Math.max(0,lvls.length-1));
  const ct=$("crumb-theme"); if(ct) ct.textContent=currentTheme.name+" "+currentTheme.emoji;
  showScreen("game-screen");
  _transitionLevel(()=>loadLevel(currentLevelIndex));
}

/* ============================= BACK BUTTONS ============================= */
$("btn-back-themes").addEventListener("click",()=>{
  runningQueue=false;
  $("popup-complete").classList.remove("visible");
  const eq=$("popup-escape-quiz"); if(eq) eq.classList.remove("visible");
  escapeQuizOpen=false;
  showThemesFor(currentCycleKey);
});
$("btn-main-menu").addEventListener("click",()=>{
  runningQueue=false;$("popup-complete").classList.remove("visible");
  const eq=$("popup-escape-quiz"); if(eq) eq.classList.remove("visible");
  escapeQuizOpen=false;
  currentCycleKey=null;currentThemeKey=null;currentCycle=null;currentTheme=null;
  showScreen("menu-screen");updateSideProgress();updateThemeProgressUI();
});
// Tutorial re-trigger button
const _btnTut=$("btn-show-tut");
if(_btnTut) _btnTut.addEventListener("click",()=>{
  if(levelState){ _tutOn=false; _showTut(); }
  else setFeedback(T("enterLevelFirst"),"info");
});

/* ============================= KEYBOARD ============================= */
document.addEventListener("keydown",(e)=>{
  const gs=$("game-screen");
  if(e.key==="Escape"){ const p=$("popup-complete"); if(p&&p.classList.contains("visible")) p.classList.remove("visible"); return; }
  if(!gs||gs.classList.contains("hidden")) return;
  const p=$("popup-complete"); if(p&&p.classList.contains("visible")) return;
  if(!currentTheme||!levelState||runningQueue) return;
  if(e.target&&e.target.matches&&e.target.matches("input, textarea")) return;   // a escrever texto: não mexer o robô
  const km={"ArrowUp":"MOVE","w":"MOVE","W":"MOVE","ArrowDown":"BACK","s":"BACK","S":"BACK","ArrowLeft":"LEFT","a":"LEFT","A":"LEFT","ArrowRight":"RIGHT","d":"RIGHT","D":"RIGHT","e":"COLLECT","E":"COLLECT","f":"DROP","F":"DROP"};
  const cmd=km[e.key]; if(!cmd) return;
  if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) e.preventDefault();
  const btn=document.querySelector(`.cmd-btn[data-cmd="${cmd}"]`);
  if(btn){ btn.classList.add("cmd-btn-active"); setTimeout(()=>btn.classList.remove("cmd-btn-active"),180); }
  if(isQueueMode()){ queuePushCmd(cmd); }
  else{ runSingleCommand(cmd); setTimeout(_flashRobotCell, 30); }
});

/* ============================= PROFILE ============================= */
function renderProfile(){
  const inp=$("student-name-input");
  if(inp){
    try{ inp.value=localStorage.getItem(STUDENT_NAME_KEY)||""; }catch(e){}
    inp.oninput=()=>{ try{ localStorage.setItem(STUDENT_NAME_KEY,inp.value); }catch(e){} };
  }
  const s=getOverallStats();
  const os=$("overall-stats");
  if(os){
    if(s.completed>0||s.stars>0){
      os.innerHTML=`<div style="font-size:1.4rem;font-weight:900;color:var(--accent);font-family:'Nunito',sans-serif;">${s.completed}</div><div style="font-size:.72rem;color:var(--muted);">níveis</div><div style="font-size:1.4rem;font-weight:900;color:#d97706;font-family:'Nunito',sans-serif;margin-top:4px;">${s.stars}</div><div style="font-size:.72rem;color:var(--muted);">estrelas</div>`;
    } else {
      os.innerHTML=`<div style="font-size:.8rem;color:var(--muted);">Ainda sem progresso.<br>Escolhe um universo!</div>`;
    }
  }

  // badges — always show generic ones, themed only if universe loaded
  const bg=$("badge-grid");
  if(bg){
    bg.innerHTML="";
    const bds=[
      {emoji:"🚀",title:"Primeiro Nível",sub:"Completa o primeiro nível",ok:s.completed>=1},
      {emoji:"⭐",title:"5 Níveis",sub:"Completa 5 níveis",ok:s.completed>=5},
      {emoji:"🌟",title:"10 Níveis",sub:"Completa 10 níveis",ok:s.completed>=10},
      {emoji:"🏆",title:"Explorador",sub:"Completa 20 níveis",ok:s.completed>=20},
      {emoji:"💎",title:"Mestre",sub:"Obtém 30 estrelas",ok:s.stars>=30},
      {emoji:"🌈",title:"Colecionador",sub:"Obtém 50 estrelas",ok:s.stars>=50},
      {emoji:"⚡",title:"Velocista",sub:"3 estrelas num nível",ok:s.stars>=3},
    ];
    if(currentUniverseId&&ALL_UNIVERSES[currentUniverseId]){
      const u=ALL_UNIVERSES[currentUniverseId];
      let totalT=0,doneT=0;
      Object.entries(u.data).forEach(([ck,cy])=>Object.entries(cy.themes).forEach(([tk,th])=>{
        totalT++;
        const lvls=levelsFor(ck,th);
        const p=loadProgress(ck,tk);
        const done=Object.values(p.levels||{}).filter(l=>l.completed).length;
        if(done>=lvls.length&&lvls.length>0) doneT++;
      }));
      bds.push({emoji:u.emoji,title:"Mestre de "+u.name,sub:`Conclui todos os ${totalT} temas`,ok:doneT>=totalT&&totalT>0});
    }
    bds.forEach(b=>{
      const d=document.createElement("div");
      d.className="badge-card "+(b.ok?"unlocked":"locked");
      d.innerHTML=`<div class="badge-emoji">${b.emoji}</div><div><div class="badge-title">${b.title} ${b.ok?"✅":"🔒"}</div><div class="badge-sub">${b.sub}</div></div>`;
      bg.appendChild(d);
    });
  }

  // theme progress — only if universe loaded
  const tpl=$("theme-progress-list");
  const noU=$("profile-no-universe");
  if(tpl){
    // clear previous theme rows (keep the no-universe notice element)
    Array.from(tpl.children).forEach(ch=>{ if(ch.id!=="profile-no-universe") ch.remove(); });
    if(GAME_DATA){
      if(noU) noU.style.display="none";
      Object.entries(GAME_DATA).forEach(([ck,cycle])=>{
        // cycle header
        const cycleNames={"1c":"1.º Ciclo","2c":"2.º Ciclo","3c":"3.º Ciclo","sec":"Secundário"};
        const hdr=document.createElement("div");
        hdr.style.cssText="font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:10px 0 4px;";
        hdr.textContent=cycleNames[ck]||ck;
        tpl.appendChild(hdr);
        Object.entries(cycle.themes).forEach(([tk,theme])=>{
          const st=themeStats(ck,tk);
          const pct=st.total?Math.round((st.done/st.total)*100):0;
          const row=document.createElement("div");row.className="theme-progress-row";
          row.innerHTML=`<div class="theme-progress-row-top"><div class="theme-progress-row-title">${theme.emoji} ${theme.name}</div><div class="theme-progress-row-meta">${st.done}/${st.total} · 🌟${st.stars}</div></div><div class="theme-progress"><div class="theme-progress-bar" style="width:${pct}%"></div></div>`;
          tpl.appendChild(row);
        });
      });
    } else {
      if(noU) noU.style.display="block";
    }
  }
}

/* ============================= NÍVEIS FIXOS (5 POR TEMA) ============================= */
/* Cada tema tem sempre 5 níveis, com a dificuldade (nº de ações da solução ótima) a subir de nível para nível.
   Os níveis marcados em EXTRA_LEVELS foram calculados com o mesmo resolvedor BFS do jogo (computeOptimal) e já não
   são aleatórios. d = níveis antigos retirados (empatavam com o anterior); a = [posição final, nível] a inserir. */
const EXTRA_LEVELS = {"ciberseg|1c|oceanos":{"d":[],"a":[[1,{"size":5,"robot":[4,2],"items":[[1,2],[1,3]],"deposit":[[0,3]],"obstacles":[[2,2]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":6,"robot":[5,1],"items":[[4,2],[2,4],[1,2]],"deposit":[[0,5]],"obstacles":[[1,1],[2,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|1c|torneira":{"d":[],"a":[[1,{"size":5,"robot":[4,1],"items":[[2,3],[3,1]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,0],"items":[[3,3],[2,3],[2,2]],"deposit":[[0,3]],"obstacles":[[1,1],[2,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|1c|ribeira":{"d":[],"a":[[1,{"size":5,"robot":[4,0],"items":[[1,3],[2,3]],"deposit":[[0,3]],"obstacles":[[3,2]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,2],"items":[[1,1],[3,3]],"deposit":[[0,4]],"obstacles":[[3,2]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|1c|redes":{"d":[],"a":[[1,{"size":5,"robot":[4,1],"items":[[3,2],[3,3]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,1],"items":[[3,3],[1,1],[2,3]],"deposit":[[0,4]],"obstacles":[[2,2],[3,2],[3,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|1c|jogos":{"d":[],"a":[[1,{"size":5,"robot":[4,0],"items":[[1,2],[1,3]],"deposit":[[0,3]],"obstacles":[[1,1]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,1],"items":[[1,3],[3,1],[1,2]],"deposit":[[0,4]],"obstacles":[[3,3],[1,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|2c|fugas":{"d":[],"a":[[1,{"size":7,"robot":[6,2],"items":[[1,3],[3,4],[4,1]],"deposit":[[0,5]],"obstacles":[[5,2],[5,3],[5,4],[5,5]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,2],"items":[[2,3],[3,2],[5,1]],"deposit":[[0,6]],"obstacles":[[4,1],[4,2],[5,4],[6,4],[3,4]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|2c|tratamento":{"d":[],"a":[[1,{"size":7,"robot":[6,0],"items":[[4,1],[5,4]],"deposit":[[0,6]],"obstacles":[[4,5],[5,5],[1,2],[1,3]],"difficulty":"Fácil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":7,"robot":[6,1],"items":[[5,3],[3,3],[2,3],[1,2]],"deposit":[[0,5]],"obstacles":[[1,4],[2,4],[3,4],[4,3]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|2c|nascente":{"d":[],"a":[[1,{"size":6,"robot":[5,1],"items":[[2,3],[1,3],[2,4]],"deposit":[[0,4]],"obstacles":[[3,3],[3,4],[4,1],[2,2]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,1],"items":[[2,5],[2,1],[3,1],[5,4]],"deposit":[[0,5]],"obstacles":[[5,3],[3,3],[3,4],[3,5]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|3c|escola":{"d":[],"a":[[1,{"size":8,"robot":[7,1],"items":[[5,1],[6,4],[3,1]],"deposit":[[0,6]],"obstacles":[[4,2],[4,3],[4,4],[4,5],[6,2]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,1],"items":[[3,2],[5,5],[4,6],[5,3]],"deposit":[[0,7]],"obstacles":[[1,3],[2,3],[2,5],[3,5],[4,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|3c|rota":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[2,5],[3,5],[3,2],[4,4]],"deposit":[[0,6]],"obstacles":[[4,5],[5,5],[6,5],[7,5]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,1],"items":[[1,1],[6,2],[3,2],[4,3]],"deposit":[[0,6]],"obstacles":[[5,3],[5,4],[5,5],[6,4],[7,4],[2,3]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|3c|seca":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[4,1],[1,3],[2,6],[3,1]],"deposit":[[0,6]],"obstacles":[[2,4],[3,4],[4,4],[3,2]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,1],"items":[[2,4],[3,6],[4,5],[1,2],[5,2]],"deposit":[[0,7]],"obstacles":[[5,4],[6,4],[3,1],[3,2],[3,3],[6,1]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|sec|rede":{"d":[],"a":[[1,{"size":8,"robot":[7,0],"items":[[3,5],[3,1],[4,5],[6,4]],"deposit":[[0,7]],"obstacles":[[1,4],[1,5],[1,6],[3,3],[4,3],[5,3],[6,3]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":8,"robot":[7,2],"items":[[6,3],[3,3],[4,3],[4,2]],"deposit":[[0,7]],"obstacles":[[1,3],[1,4],[1,5],[1,6],[1,2],[6,4],[7,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,0],"items":[[1,6],[6,3],[5,6],[6,2],[1,4]],"deposit":[[0,6]],"obstacles":[[4,2],[4,3],[5,2],[2,4],[2,5],[2,6],[5,3]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseg|sec|eficiencia":{"d":[],"a":[[1,{"size":8,"robot":[7,1],"items":[[2,1],[2,3],[1,3],[1,4],[1,2],[3,3]],"deposit":[[0,6]],"obstacles":[[4,1],[5,1],[6,1],[3,1],[6,3],[6,4],[3,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[2,{"size":8,"robot":[7,0],"items":[[1,4],[6,5],[2,1],[1,6],[3,1],[4,3]],"deposit":[[0,6]],"obstacles":[[5,3],[5,4],[5,5],[5,6],[5,7],[3,5],[4,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,2],"items":[[6,5],[4,5],[6,6],[6,1],[6,3],[2,2]],"deposit":[[0,6]],"obstacles":[[3,1],[4,1],[5,1],[2,3],[3,3],[5,4],[5,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseg|sec|logistica":{"d":[],"a":[[1,{"size":8,"robot":[7,0],"items":[[6,2],[3,1],[1,2],[1,1],[2,5]],"deposit":[[0,7]],"obstacles":[[6,3],[6,4],[6,5],[6,6],[2,6],[2,7],[5,2]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":8,"robot":[7,2],"items":[[2,6],[5,2],[1,1],[4,2],[3,2]],"deposit":[[0,6]],"obstacles":[[1,5],[1,6],[2,1],[2,2],[3,6],[4,6],[6,2],[1,7]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":9,"robot":[8,0],"items":[[7,1],[5,5],[5,4],[4,4],[7,5]],"deposit":[[0,7]],"obstacles":[[1,7],[2,7],[3,7],[6,4],[6,5],[6,6],[6,7],[2,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"agua|1c|oceanos":{"d":[],"a":[[1,{"size":5,"robot":[4,1],"items":[[3,3],[2,2]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":6,"robot":[5,0],"items":[[2,1],[1,3],[3,1]],"deposit":[[0,4]],"obstacles":[[2,3],[2,4],[3,2]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|1c|torneira":{"d":[],"a":[[1,{"size":5,"robot":[4,0],"items":[[2,3],[3,3]],"deposit":[[0,3]],"obstacles":[[1,2]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,2],"items":[[2,2],[3,2]],"deposit":[[0,3]],"obstacles":[[1,2],[1,3],[1,4]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"agua|1c|ribeira":{"d":[],"a":[[1,{"size":5,"robot":[4,2],"items":[[2,3],[1,2]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":6,"robot":[5,2],"items":[[3,4],[2,3],[1,4]],"deposit":[[0,4]],"obstacles":[[2,1],[3,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|2c|fugas":{"d":[],"a":[[1,{"size":6,"robot":[5,0],"items":[[2,2],[4,3],[2,4]],"deposit":[[0,5]],"obstacles":[[1,1],[1,2],[1,3]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,2],"items":[[4,3],[5,3],[5,1]],"deposit":[[0,5]],"obstacles":[[2,1],[3,1],[1,3],[1,4]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"agua|2c|tratamento":{"d":[],"a":[[1,{"size":6,"robot":[5,0],"items":[[4,1],[2,2],[1,4]],"deposit":[[0,5]],"obstacles":[[2,1],[3,1],[3,3]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,2],"items":[[1,3],[5,3],[2,3],[4,2]],"deposit":[[0,5]],"obstacles":[[5,5],[5,6],[1,1],[2,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|2c|nascente":{"d":[],"a":[[1,{"size":7,"robot":[6,0],"items":[[5,1],[5,5]],"deposit":[[0,6]],"obstacles":[[4,2],[5,2],[3,4]],"difficulty":"Fácil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":7,"robot":[6,2],"items":[[4,2],[5,4],[4,5],[3,1]],"deposit":[[0,5]],"obstacles":[[2,4],[3,4],[4,4],[4,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|3c|escola":{"d":[],"a":[[2,{"size":8,"robot":[7,2],"items":[[5,6],[3,4],[4,4],[2,2]],"deposit":[[0,6]],"obstacles":[[3,5],[3,6],[3,7],[6,4],[6,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,0],"items":[[5,5],[4,5],[2,5],[6,3],[2,3]],"deposit":[[0,6]],"obstacles":[[6,4],[7,4],[2,1],[3,1],[4,1]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|3c|rota":{"d":[],"a":[[1,{"size":8,"robot":[7,0],"items":[[2,1],[3,5],[6,2]],"deposit":[[0,7]],"obstacles":[[4,3],[5,3],[6,3],[3,1],[4,1],[5,1]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,0],"items":[[4,3],[6,5],[5,4],[3,6],[2,6]],"deposit":[[0,6]],"obstacles":[[5,6],[5,7],[2,1],[2,2],[2,3],[4,6]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|3c|seca":{"d":[],"a":[[1,{"size":7,"robot":[6,1],"items":[[4,5],[4,4],[2,4],[1,1]],"deposit":[[0,6]],"obstacles":[[3,3],[3,4],[3,5],[5,3],[4,2],[5,2]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,0],"items":[[2,4],[5,3],[6,4],[1,6],[1,3],[1,4]],"deposit":[[0,6]],"obstacles":[[3,3],[4,3],[4,4],[4,5],[5,4],[5,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|sec|rede":{"d":[],"a":[[1,{"size":9,"robot":[8,0],"items":[[7,4],[1,4],[7,6],[4,2]],"deposit":[[0,7]],"obstacles":[[2,6],[3,6],[7,3],[4,7],[4,8],[3,5],[4,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,2],"items":[[1,7],[5,1],[7,7],[3,2],[5,6]],"deposit":[[0,8]],"obstacles":[[1,6],[2,6],[3,6],[4,6],[6,6],[7,6],[5,4]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[4,{"size":9,"robot":[8,1],"items":[[4,6],[4,4],[1,7],[3,3],[3,4],[5,2]],"deposit":[[0,8]],"obstacles":[[5,1],[6,1],[7,1],[2,5],[2,6],[5,5],[6,5],[7,5],[7,4]],"difficulty":"Desafio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"agua|sec|eficiencia":{"d":[],"a":[[1,{"size":9,"robot":[8,0],"items":[[4,6],[4,2],[3,1],[7,6],[1,1]],"deposit":[[0,7]],"obstacles":[[5,2],[5,3],[5,4],[5,5],[6,5],[6,6],[6,7],[6,2]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,2],"items":[[2,3],[2,7],[5,6],[3,3],[3,2],[4,4]],"deposit":[[0,8]],"obstacles":[[4,2],[5,2],[6,2],[7,2],[6,1],[5,1],[7,1],[7,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":10,"robot":[9,2],"items":[[6,7],[3,7],[6,6],[6,8],[5,5],[8,6]],"deposit":[[0,9]],"obstacles":[[8,3],[3,4],[3,5],[3,6],[7,3],[2,6],[2,7],[2,8]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"agua|sec|logistica":{"d":[],"a":[[1,{"size":9,"robot":[8,1],"items":[[4,1],[7,6],[2,2],[5,1],[2,6]],"deposit":[[0,8]],"obstacles":[[7,5],[8,5],[5,4],[5,5],[5,6],[7,2],[3,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,0],"items":[[6,1],[6,3],[4,1],[1,1],[1,3]],"deposit":[[0,7]],"obstacles":[[3,6],[4,6],[5,6],[3,7],[4,3],[4,4],[4,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":10,"robot":[9,0],"items":[[5,5],[1,6],[7,3],[1,1],[2,5],[5,8]],"deposit":[[0,9]],"obstacles":[[3,2],[3,3],[3,4],[3,5],[3,7],[4,7],[5,7],[4,3]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|1c|cidade":{"d":[],"a":[[1,{"size":5,"robot":[4,2],"items":[[1,2],[3,2]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":5,"robot":[4,2],"items":[[2,2],[1,2],[3,1]],"deposit":[[0,4]],"obstacles":[[3,2],[3,3],[1,3]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|1c|vento":{"d":[],"a":[[1,{"size":5,"robot":[4,0],"items":[[3,2],[2,3]],"deposit":[[0,3]],"obstacles":[],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":6,"robot":[5,0],"items":[[2,4],[3,4],[1,3]],"deposit":[[0,4]],"obstacles":[[4,4],[4,5]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|1c|fumo":{"d":[],"a":[[1,{"size":5,"robot":[4,1],"items":[[2,1]],"deposit":[[0,4]],"obstacles":[[3,1]],"difficulty":"Fácil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":5,"robot":[4,2],"items":[[3,1],[2,1]],"deposit":[[0,3]],"obstacles":[[2,3],[3,3],[3,4]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ar|2c|filtros":{"d":[],"a":[[1,{"size":6,"robot":[5,2],"items":[[4,1],[1,3],[4,4]],"deposit":[[0,5]],"obstacles":[[1,4],[2,4]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,2],"items":[[4,1],[3,1],[1,2]],"deposit":[[0,6]],"obstacles":[[1,3],[2,3],[3,3],[4,3],[5,3]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ar|2c|sensores":{"d":[],"a":[[1,{"size":7,"robot":[6,2],"items":[[1,3],[1,5],[4,3]],"deposit":[[0,6]],"obstacles":[[2,1],[3,1],[5,3],[5,4]],"difficulty":"Fácil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":7,"robot":[6,1],"items":[[4,4],[1,2],[4,5],[1,4]],"deposit":[[0,5]],"obstacles":[[1,5],[2,5],[4,1],[5,1],[3,5]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|2c|mobilidade":{"d":[],"a":[[1,{"size":7,"robot":[6,2],"items":[[4,4],[4,3]],"deposit":[[0,5]],"obstacles":[[4,2],[5,2],[5,3],[5,4]],"difficulty":"Fácil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":7,"robot":[6,0],"items":[[4,3],[4,1],[1,5],[1,2]],"deposit":[[0,6]],"obstacles":[[5,5],[5,6],[1,3],[2,3],[3,3],[2,1]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|3c|escola":{"d":[],"a":[[1,{"size":7,"robot":[6,1],"items":[[1,2],[2,3],[1,3],[4,3]],"deposit":[[0,6]],"obstacles":[[1,1],[2,1],[3,1],[4,1],[1,5]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,0],"items":[[3,1],[2,4],[1,3],[1,5],[4,1]],"deposit":[[0,6]],"obstacles":[[3,3],[3,4],[3,5],[3,6],[2,3]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|3c|mapa":{"d":[],"a":[[1,{"size":8,"robot":[7,0],"items":[[1,1],[6,2],[1,2]],"deposit":[[0,7]],"obstacles":[[3,1],[4,1],[5,4],[6,4]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,0],"items":[[1,4],[1,6],[5,3],[4,1],[2,2]],"deposit":[[0,6]],"obstacles":[[2,1],[3,1],[1,5],[2,5],[3,5],[4,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ar|3c|calor":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[4,4],[1,1],[6,6]],"deposit":[[0,7]],"obstacles":[[6,2],[4,6],[4,7],[4,2],[5,2]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,1],"items":[[5,5],[4,3],[3,5],[1,1],[1,5]],"deposit":[[0,7]],"obstacles":[[6,6],[6,7],[2,3],[2,4],[2,5],[2,6]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ar|sec|rede":{"d":[],"a":[[1,{"size":9,"robot":[8,1],"items":[[1,4],[4,6],[4,1],[3,1]],"deposit":[[0,8]],"obstacles":[[7,4],[7,5],[7,6],[7,7],[7,1],[3,2],[4,2]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,2],"items":[[5,5],[5,2],[7,5],[4,2]],"deposit":[[0,8]],"obstacles":[[1,3],[2,3],[3,3],[4,3],[4,6],[5,6],[6,6]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[4,{"size":9,"robot":[8,2],"items":[[4,7],[2,7],[7,3],[5,7],[4,1]],"deposit":[[0,8]],"obstacles":[[1,2],[1,3],[1,4],[1,7],[1,8],[5,1],[6,1],[7,1],[3,2]],"difficulty":"Desafio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ar|sec|eficiencia":{"d":[],"a":[[1,{"size":9,"robot":[8,2],"items":[[1,4],[2,6],[5,6],[6,4],[4,4],[4,7]],"deposit":[[0,8]],"obstacles":[[5,3],[5,4],[5,5],[7,7],[8,7],[4,5],[4,6]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[2,{"size":9,"robot":[8,2],"items":[[2,6],[5,4],[6,3],[7,1],[4,7],[4,3]],"deposit":[[0,7]],"obstacles":[[3,3],[3,4],[3,5],[6,7],[7,7],[8,7],[2,2]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":10,"robot":[9,2],"items":[[8,8],[5,1],[4,8],[3,1],[1,8],[2,5]],"deposit":[[0,9]],"obstacles":[[3,5],[3,6],[7,1],[7,2],[7,3],[7,8],[7,9],[1,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ar|sec|logistica":{"d":[],"a":[[1,{"size":9,"robot":[8,0],"items":[[1,7],[7,7],[3,3],[4,2],[1,1]],"deposit":[[0,8]],"obstacles":[[6,6],[6,7],[6,8],[7,3],[7,1],[7,2],[7,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":10,"robot":[9,0],"items":[[8,4],[2,4],[7,7],[5,2],[1,3]],"deposit":[[0,8]],"obstacles":[[7,1],[8,1],[4,5],[4,6],[4,7],[3,6],[3,7],[3,8]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":10,"robot":[9,1],"items":[[6,7],[5,3],[2,7],[7,2],[2,5],[2,4]],"deposit":[[0,9]],"obstacles":[[4,8],[5,8],[6,8],[1,2],[2,2],[3,2],[4,2],[7,7]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ambiente|1c|robo":{"d":[],"a":[]},"ambiente|1c|oceanos":{"d":[],"a":[]},"ambiente|1c|cidade":{"d":[],"a":[]},"ambiente|1c|natal":{"d":[],"a":[]},"ambiente|2c|reciclagem":{"d":[4],"a":[[3,{"size":6,"robot":[5,2],"items":[[4,1],[3,1],[1,1],[2,4]],"deposit":[[0,5]],"obstacles":[[4,3],[3,2],[3,3],[3,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|2c|energia":{"d":[3],"a":[[3,{"size":7,"robot":[6,0],"items":[[4,3],[1,1],[3,1],[4,1]],"deposit":[[0,6]],"obstacles":[[4,4],[5,4],[1,5],[1,6],[5,3],[3,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|2c|floresta":{"d":[],"a":[]},"ambiente|2c|natal":{"d":[3],"a":[[2,{"size":7,"robot":[6,1],"items":[[3,3],[3,4],[4,1],[4,4]],"deposit":[[0,5]],"obstacles":[[2,2],[2,3],[1,3],[1,4]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ambiente|3c|floresta3c":{"d":[],"a":[[2,{"size":8,"robot":[7,2],"items":[[4,2],[1,6],[5,2],[4,1]],"deposit":[[0,6]],"obstacles":[[2,5],[2,6],[2,7],[2,2],[3,2]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,1],"items":[[2,4],[5,6],[2,3],[5,1],[2,1]],"deposit":[[0,6]],"obstacles":[[1,3],[1,4],[6,5],[6,6],[6,7]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ambiente|3c|oceano3c":{"d":[],"a":[[1,{"size":8,"robot":[7,1],"items":[[2,1],[4,4],[6,6]],"deposit":[[0,7]],"obstacles":[[2,2],[3,2],[4,2],[5,2],[6,2]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,1],"items":[[6,6],[2,1],[3,1],[6,3]],"deposit":[[0,6]],"obstacles":[[4,5],[5,5],[4,2],[4,3],[4,4],[3,3]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|3c|energia3c":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[1,5],[2,3],[4,1],[1,3]],"deposit":[[0,7]],"obstacles":[[1,1],[2,1],[3,1],[6,6],[6,7]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,2],"items":[[5,1],[4,3],[6,5],[2,6],[3,2]],"deposit":[[0,6]],"obstacles":[[4,4],[5,4],[6,4],[7,4],[2,1],[3,1]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|sec|clima":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[1,1],[1,2],[2,1],[2,3]],"deposit":[[0,7]],"obstacles":[[4,1],[4,2],[4,3],[4,4],[3,6],[4,6],[5,6]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,2],"items":[[3,2],[5,2],[6,2],[1,4]],"deposit":[[0,8]],"obstacles":[[2,3],[2,4],[2,5],[4,7],[5,7],[6,7],[2,1]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":9,"robot":[8,0],"items":[[5,7],[4,5],[3,2],[4,2]],"deposit":[[0,8]],"obstacles":[[2,6],[3,6],[6,6],[6,7],[2,7],[2,8],[7,3]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|sec|sustentabilidade":{"d":[],"a":[[1,{"size":8,"robot":[7,1],"items":[[3,3],[3,5],[5,6],[3,1],[1,1],[2,4]],"deposit":[[0,6]],"obstacles":[[6,6],[6,7],[4,3],[5,3],[5,1],[5,2],[2,5]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[2,{"size":8,"robot":[7,0],"items":[[1,4],[1,3],[5,3],[4,2],[1,1],[6,2]],"deposit":[[0,6]],"obstacles":[[5,1],[6,1],[6,6],[6,7],[3,5],[3,6],[5,4]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,1],"items":[[6,1],[5,3],[2,3],[2,2],[5,6],[4,6]],"deposit":[[0,6]],"obstacles":[[2,5],[3,5],[3,1],[3,2],[3,6],[2,4],[2,6]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ambiente|sec|politica":{"d":[],"a":[[1,{"size":8,"robot":[7,0],"items":[[3,2],[5,3],[2,5],[5,2],[2,4]],"deposit":[[0,7]],"obstacles":[[3,4],[3,5],[2,6],[2,7],[6,1],[6,2],[6,3],[4,6]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":8,"robot":[7,0],"items":[[1,4],[2,1],[4,5],[5,2],[3,1]],"deposit":[[0,6]],"obstacles":[[2,4],[3,4],[4,4],[3,5],[3,6],[3,7],[6,2],[6,3]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,1],"items":[[1,3],[4,1],[3,1],[1,6],[5,2],[5,4]],"deposit":[[0,7]],"obstacles":[[4,5],[5,5],[6,5],[7,5],[6,1],[5,6],[5,7],[3,3]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseguras|1c|computador":{"d":[],"a":[]},"ciberseguras|1c|internet":{"d":[],"a":[]},"ciberseguras|1c|email":{"d":[],"a":[]},"ciberseguras|1c|passwords":{"d":[],"a":[]},"ciberseguras|2c|firewall":{"d":[],"a":[]},"ciberseguras|2c|malware":{"d":[3],"a":[[3,{"size":7,"robot":[6,0],"items":[[4,2],[5,1],[2,2],[3,2]],"deposit":[[0,6]],"obstacles":[[5,3],[5,4],[5,5],[6,4],[2,1],[3,1]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseguras|2c|phishing":{"d":[],"a":[]},"ciberseguras|2c|backup":{"d":[3],"a":[[2,{"size":7,"robot":[6,1],"items":[[2,2],[2,3],[3,3],[3,5]],"deposit":[[0,5]],"obstacles":[[5,1],[5,2],[5,3],[5,4],[3,2]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseguras|3c|pegada3c":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[1,4],[1,5],[6,2],[2,4]],"deposit":[[0,7]],"obstacles":[[5,2],[5,3],[4,3],[6,3]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,0],"items":[[1,5],[4,2],[6,3],[5,6]],"deposit":[[0,6]],"obstacles":[[2,2],[2,3],[2,4],[2,5],[4,6],[4,7]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseguras|3c|privacidade3c":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[2,5],[4,2],[5,4]],"deposit":[[0,7]],"obstacles":[[2,4],[3,4],[4,4],[2,6],[2,7],[5,2]],"difficulty":"Médio","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":8,"robot":[7,2],"items":[[1,3],[3,5],[6,4],[6,6],[3,3]],"deposit":[[0,6]],"obstacles":[[1,2],[2,2],[1,4],[2,4],[3,4],[4,4]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseguras|3c|redes3c":{"d":[],"a":[[1,{"size":8,"robot":[7,1],"items":[[6,4],[2,2],[2,3],[4,6]],"deposit":[[0,6]],"obstacles":[[6,5],[6,6],[6,7],[7,5],[5,2]],"difficulty":"Médio","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":8,"robot":[7,1],"items":[[3,6],[3,2],[5,1],[1,3],[5,6]],"deposit":[[0,7]],"obstacles":[[6,5],[7,5],[5,2],[5,3],[5,4],[5,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseguras|sec|incidente":{"d":[],"a":[[1,{"size":8,"robot":[7,2],"items":[[6,1],[6,5],[2,3],[3,3]],"deposit":[[0,7]],"obstacles":[[1,4],[1,5],[1,6],[2,5],[3,5],[4,5],[6,4]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":8,"robot":[7,2],"items":[[4,2],[1,6],[4,3],[2,4],[6,2]],"deposit":[[0,7]],"obstacles":[[5,6],[5,7],[1,4],[1,5],[3,1],[3,2],[6,3]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[4,{"size":8,"robot":[7,2],"items":[[4,3],[2,4],[6,5],[1,5],[3,3],[3,5]],"deposit":[[0,7]],"obstacles":[[4,6],[4,7],[2,6],[3,6],[6,2],[6,3],[6,4],[2,2],[2,3]],"difficulty":"Desafio","desc":"Mais objetos para recolher: planeia bem o percurso."}]]},"ciberseguras|sec|risco":{"d":[],"a":[[1,{"size":9,"robot":[8,0],"items":[[7,7],[7,2],[2,6],[3,3],[7,3]],"deposit":[[0,7]],"obstacles":[[2,2],[3,2],[4,2],[5,2],[1,5],[2,5],[3,5]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[2,{"size":9,"robot":[8,0],"items":[[4,1],[5,4],[3,5],[5,7],[6,5]],"deposit":[[0,8]],"obstacles":[[3,2],[3,3],[2,3],[4,3],[5,1],[6,1],[7,1]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}],[3,{"size":9,"robot":[8,0],"items":[[2,3],[5,5],[7,3],[1,2],[5,7]],"deposit":[[0,8]],"obstacles":[[5,4],[6,4],[7,4],[8,4],[1,6],[1,7],[1,8]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]},"ciberseguras|sec|estrategia":{"d":[],"a":[[1,{"size":9,"robot":[8,1],"items":[[5,3],[1,7],[6,7],[2,2],[4,6],[5,2]],"deposit":[[0,7]],"obstacles":[[4,2],[4,3],[4,4],[4,5],[1,1],[2,1],[3,1]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[2,{"size":9,"robot":[8,1],"items":[[7,6],[3,5],[4,7],[6,7],[3,1],[4,2]],"deposit":[[0,7]],"obstacles":[[6,2],[7,2],[6,3],[2,6],[3,6],[4,6],[2,4]],"difficulty":"Difícil","desc":"Mais objetos para recolher: planeia bem o percurso."}],[3,{"size":9,"robot":[8,1],"items":[[5,1],[5,3],[1,7],[4,5],[3,1],[1,5]],"deposit":[[0,8]],"obstacles":[[6,7],[6,8],[5,6],[6,6],[2,1],[2,2],[4,7],[5,7]],"difficulty":"Difícil","desc":"Mais bloqueios no caminho: procura a rota mais curta."}]]}};
const LEVELS_VERSION = 2;
(function applyFixedLevels(){
  Object.entries(ALL_UNIVERSES).forEach(([uid,u])=>{
    if(u.isEscape) return;                          // as salas de escape têm níveis próprios
    Object.entries(u.data).forEach(([ck,cycle])=>{
      Object.entries(cycle.themes).forEach(([tk,theme])=>{
        const ex = EXTRA_LEVELS[uid+"|"+ck+"|"+tk];
        if(!ex) return;
        const lv = theme.levels.filter((_,i)=>!ex.d.includes(i));
        ex.a.slice().sort((x,y)=>x[0]-y[0]).forEach(([pos,l])=>{ l._new=true; lv.splice(pos,0,l); });
        theme.levels = lv;
        theme._designedCount = lv.length;
      });
    });
  });
  /* Progresso antigo: os níveis aleatórios (6+) deixaram de existir e alguns níveis mudaram de sítio. */
  try{
    Object.entries(ALL_UNIVERSES).forEach(([uid,u])=>{
      if(u.isEscape) return;
      const raw = localStorage.getItem(STORAGE_PREFIX+uid); if(!raw) return;
      const all = JSON.parse(raw); let changed=false;
      Object.entries(u.data).forEach(([ck,cycle])=>{
        Object.entries(cycle.themes).forEach(([tk,theme])=>{
          const p = all[ck] && all[ck][tk]; if(!p || p.v===LEVELS_VERSION) return;
          const n = theme.levels.length;
          Object.keys(p.levels||{}).forEach(i=>{
            if(Number(i)>=n || (theme.levels[i] && theme.levels[i]._new)) delete p.levels[i];
          });
          let first=0; while(p.levels && p.levels[first] && p.levels[first].completed && first<n-1) first++;
          p.currentLevelIndex = Math.min(p.currentLevelIndex||0, first);
          p.v = LEVELS_VERSION; changed=true;
        });
      });
      if(changed) localStorage.setItem(STORAGE_PREFIX+uid, JSON.stringify(all));
    });
  }catch(e){}
})();

/* ============================= INIT ============================= */
// Always start at universe-screen — apply saved universe colours/data but let user pick again
let savedUniverse=null;
try{ savedUniverse=localStorage.getItem(UNIVERSE_KEY); }catch(e){}
if(savedUniverse&&ALL_UNIVERSES[savedUniverse]){
  applyUniverse(savedUniverse);
}
showScreen("universe-screen");
setFeedback(T("chooseUniverseFirst"),"info");



/* ============================= ESCAPE ROOMS MODULE ============================= */
(function(){
"use strict";


/* ═══════════════════ ROOM DATA ═══════════════════ */
const ROOMS = {

  ims: {
    id:"ims", cssClass:"room-ims", group:"security",
    icon:"🛡️", title:"Internet Mais Segura",
    desc:"Ciberbullying, privacidade e cidadania digital. 8 portas.",
    chips:["🤝 Ciberbullying","🔐 Passwords","👁️ Privacidade"],
    missionTitle:"Missão: Proteger a Comunidade Online",
    robotIntro:"Olá! Eu sou o VanBerto's.<br>Vamos construir uma Internet mais segura e mais humana! 🛡️",
    finalMessage:"Conseguiste abrir as 8 portas e activar o Escudo Digital!",
    pedagogicalSummary:"🛡️ Os teus direitos digitais existem sempre — online e offline! Respeito, privacidade e pedir ajuda a um adulto são as 3 chaves de uma internet mais segura. A tua identidade digital é permanente: pensa antes de publicar.",
    hints:[
      ["Porta 1: lê cada frase com atenção — nem todas as que 'parecem' verdadeiras o são.",
       "Porta 1: 2 frases são verdadeiras. A palavra-passe única por site é fundamental.",
       "Porta 1: verdadeiras são a 1 e a 4. Código = (nº verdadeiras)(cada verdadeira) = 214."],
      ["Porta 2: há 6 opções — algumas parecem certas mas podem piorar a situação.",
       "Porta 2: comentar publicamente pode escalar o conflito. Ignorar não é solução.",
       "Porta 2: corretas são 2 (apoiar), 3 (provas), 5 (bloquear) e 6 (avisar adulto)."],
      ["Porta 3: pensa nos 5 passos em sequência lógica — o que fazes primeiro?",
       "Porta 3: começa por parar e não reagir. Depois recolhe provas antes de agir.",
       "Porta 3: ordem — Parar → Apoiar vítima em privado → Guardar provas → Bloquear → Avisar adulto."],
      ["Porta 4: são 12 letras. Pensa em como nos comportamos no mundo digital.",
       "Porta 4: a palavra descreve a nossa postura, palavras e ações online.",
       "Porta 4: a palavra é CIBERCONDUTA."],
      ["Porta 5: analisa cada opção — qual tem mais comprimento e variedade de caracteres?",
       "Porta 5: palavras do dicionário + anos são fáceis de adivinhar, mesmo com maiúsculas.",
       "Porta 5: a resposta é C — Xk#9!mPq3@Lr. Aleatória, longa, sem padrão previsível."],
      ["Porta 6: lê o cenário com atenção — há 4 opções muito parecidas.",
       "Porta 6: nunca cliques em links de emails urgentes. Urgência é técnica de phishing.",
       "Porta 6: resposta C — vai diretamente ao site oficial do banco, sem usar o link."],
      ["Porta 7: são 17 letras formando 2 palavras sobre a tua presença permanente online.",
       "Porta 7: pensa no que deixas para trás na internet — permanente e pesquisável.",
       "Porta 7: a expressão é IDENTIDADE DIGITAL."],
      ["Porta 8: escolhe exatamente 3 regras — nem mais, nem menos.",
       "Porta 8: elimina as opções que claramente violam direitos ou propagam desinformação.",
       "Porta 8: corretas são 1 (respeito), 3 (não partilhar dados) e 5 (pedir ajuda)."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: <b>1 e 4</b>; código <b>214</b>. (Frase 2: passwords iguais são perigosas. Frase 3: nunca enviar fotos a desconhecidos.)<br>
<b>Porta 2</b> — Corretas: <b>2, 3, 5, 6</b> (apoiar em privado, guardar provas, bloquear, avisar adulto). Erradas: 1 (ignorar não é solução) e 4 (comentar publicamente pode escalar o conflito).<br>
<b>Porta 3</b> — Ordem: Parar → Apoiar vítima em privado → Guardar provas → Bloquear/denunciar → Avisar adulto.<br>
<b>Porta 4</b> — Anagrama: <b>CIBERCONDUTA</b> (12 letras).<br>
<b>Porta 5</b> — Resposta: <b>C</b> (Xk#9!mPq3@Lr — aleatória, longa, sem palavras reais). Erradas: A (palavra+ano fácil de adivinhar), B (sequência numérica), D (nome próprio+números previsível).<br>
<b>Porta 6</b> — Resposta: <b>C</b> (apagar o email e ir diretamente ao site oficial do banco sem usar o link). A urgência falsa é a técnica central do phishing — nunca clicar em links de emails suspeitos.<br>
<b>Porta 7</b> — Anagrama: <b>IDENTIDADE DIGITAL</b> (2 palavras, 17 letras sem acentos).<br>
<b>Porta 8</b> — Corretas: <b>1, 3, 5</b> (tratar com respeito, não partilhar dados pessoais, pedir ajuda a adulto/professor).`,
    doors:[
      {id:1,icon:"🧩",title:"Porta 1 · Código dos Direitos",topic:"Verdadeiro/Falso + código",points:10},
      {id:2,icon:"🤝",title:"Porta 2 · Anti-Ciberbullying",topic:"Selecciona as boas acções",points:10},
      {id:3,icon:"🧾",title:"Porta 3 · Passos de Ajuda",topic:"Ordem correcta",points:10},
      {id:4,icon:"🔤",title:"Porta 4 · Palavra Secreta",topic:"Anagrama",points:20},
      {id:5,icon:"🔐",title:"Porta 5 · Password Forte",topic:"Escolha segura",points:15},
      {id:6,icon:"🚨",title:"Porta 6 · O Que Fazes?",topic:"Decisão correcta",points:10},
      {id:7,icon:"🕵️",title:"Porta 7 · Direito Online",topic:"Anagrama",points:10},
      {id:8,icon:"✅",title:"Porta 8 · Promessa Digital",topic:"Escolhe 3 regras",points:15},
    ],
    renderDoor(idx,CE,addTry,completeDoor,S,setFeedback,playSound){ er_imsRoom(idx,CE,addTry,completeDoor,S,setFeedback,playSound); }
  },

  agua: {
    id:"agua", cssClass:"room-agua", group:"ambiente",
    icon:"💧", title:"A Aventura da Água",
    desc:"Ciclo da água, consumo responsável e nascentes. 8 portas.",
    chips:["☁️ Ciclo da Água","🚿 Poupar","🧮 Cálculo"],
    missionTitle:"Missão: Salvar a Fonte da Escola",
    robotIntro:"Olá! Eu sou o VanBerto's.<br>Vamos salvar a fonte da escola! 💧",
    finalMessage:"Conseguiste abrir as 8 portas e salvar a fonte da escola!",
    pedagogicalSummary:"💧 Cada gota conta! Uma torneira a pingar desperdiça +5 500 litros por ano. Um duche de 5 minutos usa 50L — a banheira usa 150L. Pequenas ações quotidianas podem salvar milhares de litros e proteger o futuro do planeta.",
    hints:[
      ["Porta 1: 4 frases — 3 são verdadeiras. Cuidado com mitos sobre desperdício!",
       "Porta 1: a frase 2 é mito — uma torneira a pingar desperdiça ~5500 litros/ano.",
       "Porta 1: verdadeiras 1, 3 e 4. Código = (3)(1.ª=1)(2.ª=3) = 313."],
      ["Porta 2: 6 opções — algumas parecem poupar água mas não tanto quanto pensas.",
       "Porta 2: a banheira usa ~150L. Um duche de 5 min usa ~50L. Qual poupa mais?",
       "Porta 2: corretas 1, 3, 4, 6. Erradas: 2 (banheira) e 5 (torneira aberta ao ensaboar)."],
      ["Porta 3: o ciclo da água tem 4 fases — em que ordem acontecem?",
       "Porta 3: começa pela evaporação (sol aquece a água) e termina com infiltração (solo).",
       "Porta 3: Evaporação → Condensação → Precipitação → Infiltração."],
      ["Porta 4: são 12 letras sobre uma fase do ciclo da água — quando a água cai do céu.",
       "Porta 4: pensa na chuva, neve ou granizo — todas são formas desta fase.",
       "Porta 4: a palavra é PRECIPITACAO."],
      ["Porta 5: calcula com atenção — duche × litros × pessoas × dias.",
       "Porta 5: duche de 4 min × 8L/min = 32L/pessoa/dia. Faz as contas para 4 pessoas, 7 dias.",
       "Porta 5: opção C — 4×4×8×7 + 12×7 = 896+84 = 980L/semana. A mais eficiente!"],
      ["Porta 6: quando há fuga de água, qual é a prioridade?",
       "Porta 6: avisar sempre um adulto — e fechar a torneira se for seguro fazê-lo.",
       "Porta 6: resposta B — avisar adulto/professor e fechar a torneira."],
      ["Porta 7: 2 palavras (sem acento) sobre água que podemos consumir.",
       "Porta 7: 4+7 letras — o adjetivo descreve a água segura para beber.",
       "Porta 7: a expressão é AGUA POTAVEL."],
      ["Porta 8: escreve pelo menos 3 práticas diferentes de poupança de água.",
       "Porta 8: pensa em: torneira, duche, máquina, rega, fuga...",
       "Porta 8: ex. fechar torneira ao escovar dentes, duche curto, regar ao fim do dia."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: 1, 3 e 4; código <b>3134</b>. (Frase 2 é mito: torneira a pingar desperdiça ~5500L/ano.)<br>
<b>Porta 2</b> — Corretas: 1, 3, 4, 6. Erradas: 2 (banheira usa ~150L vs duche 5min=50L), 5 (torneira aberta ao ensaboar desperdiça ~8L).<br>
<b>Porta 3</b> — Ordem: Evaporação → Condensação → Precipitação → Infiltração.<br>
<b>Porta 4</b> — Anagrama: <b>PRECIPITACAO</b>.<br>
<b>Porta 5</b> — Resposta: C (duche 4min×4pessoas×7dias + lava-loiças 1x/dia = ~980L/semana, o mais eficiente).<br>
<b>Porta 6</b> — Resposta: B (avisar adulto e fechar a torneira se for seguro).<br>
<b>Porta 7</b> — Anagrama: <b>AGUA POTAVEL</b>.<br>
<b>Porta 8</b> — Resposta livre: ≥ 3 práticas de poupança de água.`,
    doors:[
      {id:1,icon:"🧩",title:"Porta 1 · Código das Verdades",topic:"Verdadeiro/Falso + código",points:10},
      {id:2,icon:"🚿",title:"Porta 2 · Poupar ou Desperdiçar",topic:"Selecciona as boas acções",points:10},
      {id:3,icon:"☁️",title:"Porta 3 · Ciclo da Água",topic:"Ordem correcta",points:10},
      {id:4,icon:"🔤",title:"Porta 4 · Palavra Secreta",topic:"Anagrama",points:20},
      {id:5,icon:"🧮",title:"Porta 5 · Conta o Consumo",topic:"Cálculo de litros",points:15},
      {id:6,icon:"🛠️",title:"Porta 6 · Fuga de Água!",topic:"Decisão correcta",points:10},
      {id:7,icon:"💧",title:"Porta 7 · Água para Beber",topic:"Anagrama",points:10},
      {id:8,icon:"✅",title:"Porta 8 · Promessa da Água",topic:"3 boas práticas",points:15},
    ],
    renderDoor(idx,CE,addTry,completeDoor,S,setFeedback,playSound){ er_aguaRoom(idx,CE,addTry,completeDoor,S,setFeedback,playSound); }
  },

  ar: {
    id:"ar", cssClass:"room-ar", group:"ambiente",
    icon:"🌬️", title:"A Aventura do Ar",
    desc:"Qualidade do ar, poluição e mobilidade sustentável. 8 portas.",
    chips:["🌿 Ar limpo","🚲 Mobilidade","🏭 Poluição"],
    missionTitle:"Missão: Salvar o Ar da Escola",
    robotIntro:"Olá! Eu sou o VanBerto's.<br>Vamos melhorar o ar da escola! 🌬️",
    finalMessage:"Conseguiste abrir as 8 portas e limpar o ar da escola!",
    pedagogicalSummary:"🌬️ A qualidade do ar depende das nossas escolhas! Ir a pé, de bicicleta ou de comboio pode reduzir quilogramas de CO₂ por semana. Ventilar os espaços interiores e evitar velas perfumadas também faz diferença. O ar limpo começa em cada um de nós.",
    hints:[
      ["Porta 1: 4 frases — 2 são verdadeiras. Cuidado com mitos sobre carros elétricos e ozono!",
       "Porta 1: carros elétricos têm impacto na produção de energia. O ozono estratosférico protege-nos.",
       "Porta 1: verdadeiras 1 e 3. Código = (2)(1.ª=1)(2.ª=3) = 213."],
      ["Porta 2: 6 opções — algumas parecem melhorar o ar mas têm efeito contrário.",
       "Porta 2: velas perfumadas produzem partículas finas. Hora de ponta = pico de poluição.",
       "Porta 2: corretas 1, 2, 4, 6. Erradas: 3 (velas) e 5 (janela em hora de ponta)."],
      ["Porta 3: 4 opções — qual fonte polui MAIS o ar interior de uma sala com muitas pessoas?",
       "Porta 3: cada pessoa expira CO₂. Sem ventilação, os níveis sobem rapidamente.",
       "Porta 3: resposta B — muitas pessoas sem ventilação é a maior fonte de CO₂ interior."],
      ["Porta 4: 8 letras sobre a contaminação do ar por substâncias nocivas — gases, fumo, partículas.",
       "Porta 4: é o efeito de gases de escape, fábricas e queimadas no ar que respiramos.",
       "Porta 4: a palavra é POLUICAO."],
      ["Porta 5: usa a fórmula — distância × 2 × 5 dias × emissão por km.",
       "Porta 5: 15km×2×5 = 150km/semana. Multiplica pelo fator de cada transporte.",
       "Porta 5: Comboio: 150×14g = 2100g = 2,1kg CO₂. O mais eficiente!"],
      ["Porta 6: a sala tem CO₂ elevado. Qual é a solução mais eficaz e segura?",
       "Porta 6: abrir janelas renova o ar. Avisar um adulto é sempre a atitude certa.",
       "Porta 6: resposta B — abrir janelas para ventilar e avisar um adulto/professor."],
      ["Porta 7: 2 palavras (sem acento) sobre o que queremos respirar todos os dias.",
       "Porta 7: adjetivo + substantivo — descreve o ar que não tem poluição.",
       "Porta 7: a expressão é AR LIMPO."],
      ["Porta 8: escreve pelo menos 3 práticas para proteger a qualidade do ar.",
       "Porta 8: pensa em: transporte, energia, vegetação, ventilação...",
       "Porta 8: ex. ir a pé/bicicleta, plantar árvores, não queimar resíduos."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: 1 e 3; código <b>213</b>. (Frase 2: carros elétricos têm impacto na produção de energia. Frase 4: ozono estratosférico protege-nos.)<br>
<b>Porta 2</b> — Corretas: 1, 2, 4, 6. Erradas: 3 (velas produzem partículas finas), 5 (hora de ponta = mais poluição).<br>
<b>Porta 3</b> — Resposta: <b>B</b> (muitas pessoas sem ventilação — acumulação de CO₂ e humidade).<br>
<b>Porta 4</b> — Anagrama: <b>POLUICAO</b> (8 letras, sem acento).<br>
<b>Porta 5</b> — Resposta: C (comboio: 15×2×5×14g = 2.100g = 2,1kg CO₂/semana).<br>
<b>Porta 6</b> — Resposta: B (abrir janelas + avisar adulto).<br>
<b>Porta 7</b> — Anagrama: <b>AR LIMPO</b>.<br>
<b>Porta 8</b> — Resposta livre: ≥ 3 boas práticas (mínimo 4 caracteres cada) para proteger o ar.`,
    doors:[
      {id:1,icon:"🧩",title:"Porta 1 · Código das Verdades",topic:"Verdadeiro/Falso + código",points:10},
      {id:2,icon:"🚲",title:"Porta 2 · Boas Escolhas",topic:"Selecciona as boas acções",points:10},
      {id:3,icon:"🏫",title:"Porta 3 · Ar Interior",topic:"Maior fonte de poluição interior",points:10},
      {id:4,icon:"🔤",title:"Porta 4 · Palavra Secreta",topic:"Anagrama",points:20},
      {id:5,icon:"🧮",title:"Porta 5 · Conta as Emissões",topic:"Cálculo de poluição",points:15},
      {id:6,icon:"🏫",title:"Porta 6 · Sala com Ar Pesado!",topic:"Decisão correcta",points:10},
      {id:7,icon:"🌬️",title:"Porta 7 · Ar Saudável",topic:"Anagrama",points:10},
      {id:8,icon:"✅",title:"Porta 8 · Promessa do Ar",topic:"3 boas práticas",points:15},
    ],
    renderDoor(idx,CE,addTry,completeDoor,S,setFeedback,playSound){ er_arRoom(idx,CE,addTry,completeDoor,S,setFeedback,playSound); }
  },

  malware: {
    id:"malware", cssClass:"room-malware", group:"security",
    icon:"🦠", title:"Caçadores de Malware",
    desc:"8 salas com puzzles variados sobre vírus, ransomware e phishing. Sem limite de tempo.",
    chips:["🐛 Vírus","💣 Ransomware","🎣 Phishing"],
    missionTitle:"Missão: Limpar o Malware da Escola",
    robotIntro:"Olá! Eu sou o VanBerto's.<br>O computador da escola foi infectado! Vamos limpar o malware! 🦠",
    finalMessage:"Conseguiste eliminar todas as ameaças digitais e salvar a escola!",
    pedagogicalSummary:"🦠 A defesa digital precisa de várias camadas! Antivírus atualizado, backups regulares, não clicar em links suspeitos e reconhecer engenharia social são os 4 pilares da proteção. Prevenir é sempre mais fácil do que remediar.",
    noTimer:true,
    hints:[
      ["Sala 1: são 10 letras em inglês — o nome do tipo de malware mais lucrativo para criminosos.",
       "Sala 1: este malware encripta os ficheiros e exige pagamento para os recuperar.",
       "Sala 1: a palavra é RANSOMWARE."],
      ["Sala 2: escolhe 3 afirmações verdadeiras sobre vírus. Cuidado com as meias-verdades!",
       "Sala 2: um vírus não se espalha sozinho — precisa de ser executado num ficheiro hospedeiro.",
       "Sala 2: corretas: 1 (infecta ficheiros), 3 (multiplica-se) e 5 (precisa hospedeiro)."],
      ["Sala 3: ordena os 4 passos — como é que um Worm se propaga automaticamente?",
       "Sala 3: começa pela entrada no sistema. Depois copia-se sem ficheiro hospedeiro.",
       "Sala 3: ordem — Entra pela rede → Copia-se → Propaga-se → Causa danos."],
      ["Sala 4: são 2 palavras, 16 letras no total. Refere a técnica que usa psicologia humana.",
       "Sala 4: não usa código — explora confiança, medo e urgência para obter acesso.",
       "Sala 4: a expressão é ENGENHARIA SOCIAL."],
      ["Sala 5: liga cada malware à sua definição mais precisa — há diferenças subtis.",
       "Sala 5: Rootkit e Spyware parecem parecidos — rootkit esconde-se no sistema operativo.",
       "Sala 5: Worm→rede, Spyware→recolhe dados, Keylogger→captura teclas, Rootkit→acesso root."],
      ["Sala 6: 'ransom' em inglês significa o que os sequestradores pedem pela vítima.",
       "Sala 6: é o que os criminosos exigem para devolver os teus ficheiros encriptados.",
       "Sala 6: a resposta é RESGATE."],
      ["Sala 7: há 4 sinais clássicos de phishing neste email — identifica-os todos.",
       "Sala 7: domínio (.xyz), urgência, erros ortográficos e pedido de dados — 4 sinais.",
       "Sala 7: corretas: 1 (domínio), 3 (urgência), 5 (erros) e 6 (pedido dados pessoais)."],
      ["Sala 8: escolhe exatamente 3 boas práticas — nem mais, nem menos.",
       "Sala 8: antivírus, não clicar em links suspeitos e backups são as 3 mais eficazes.",
       "Sala 8: corretas: 1 (antivírus atualizado), 3 (não clicar em links) e 5 (backups)."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Anagrama: <b>RANSOMWARE</b> (10 letras, palavra em inglês).<br>
<b>Porta 2</b> — Corretas: <b>1, 3, 5</b> (infecta ficheiros, multiplica-se ao executar, precisa de hospedeiro). Erradas: 2 (espalha-se também pela internet), 4 (antivírus desligado é mais vulnerável), 6 (não se apaga sozinho).<br>
<b>Porta 3</b> — Ordem: Entra pelo sistema → Copia-se para memória → Propaga-se pela rede → Causa danos.<br>
<b>Porta 4</b> — Anagrama: <b>ENGENHARIA SOCIAL</b> (2 palavras, 16 letras).<br>
<b>Porta 5</b> — Ligações corretas: Spyware↔espia o que fazes, Keylogger↔regista teclas, Adware↔mostra anúncios, Rootkit↔esconde-se no sistema e dá acesso ao atacante.<br>
<b>Porta 6</b> — Resposta: <b>RESGATE</b> (tradução de "ransom" — o que os criminosos exigem para devolver os ficheiros).<br>
<b>Porta 7</b> — 4 sinais de phishing: <b>1</b> (domínio .xyz suspeito), <b>3</b> (urgência: "24h", "URGENTE"), <b>5</b> (erros ortográficos: "supeita", "daods"), <b>6</b> (pedido de dados pessoais via link).<br>
<b>Porta 8</b> — Corretas: <b>1, 3, 5</b> (antivírus atualizado, não clicar em links suspeitos, fazer backups regulares).`,
    doors:[
      {id:1,icon:"🔤",title:"Sala 1 · Código Secreto",topic:"Anagrama",points:15},
      {id:2,icon:"🧬",title:"Sala 2 · Como age um Vírus?",topic:"Selecciona as afirmações corretas",points:10},
      {id:3,icon:"🪱",title:"Sala 3 · O Caminho do Worm",topic:"Ordena os passos",points:15},
      {id:4,icon:"🐴",title:"Sala 4 · Palavra Oculta",topic:"Anagrama",points:15},
      {id:5,icon:"🔗",title:"Sala 5 · Liga & Aprende",topic:"Liga malware à definição",points:15},
      {id:6,icon:"💣",title:"Sala 6 · Código do Resgate",topic:"Palavra = tradução de ransom",points:15},
      {id:7,icon:"🎣",title:"Sala 7 · Email Suspeito",topic:"Identifica os sinais de phishing",points:15},
      {id:8,icon:"🛡️",title:"Sala 8 · Escudo Digital",topic:"Escolhe 3 boas práticas",points:15},
    ],
    renderDoor(idx,CE,addTry,completeDoor,S,setFeedback,playSound){ er_malwareRoom(idx,CE,addTry,completeDoor,S,setFeedback,playSound); }
  },

  fakenews: {
    id:"fakenews", cssClass:"room-fakenews", group:"security",
    icon:"📰", title:"Caçadores de Fake News",
    desc:"8 salas com puzzles variados sobre notícias falsas, fontes e deepfakes. Sem limite de tempo.",
    chips:["🔍 Fontes","🎥 Deepfakes","💬 Boatos"],
    missionTitle:"Missão: Caçar Fake News na Escola",
    robotIntro:"Olá! Eu sou o VanBerto's.<br>As Fake News estão a invadir a escola! Vamos travá-las! 📰",
    finalMessage:"Conseguiste identificar todas as Fake News e proteger a turma!",
    pedagogicalSummary:"📰 Antes de partilhar: PARA → verifica a fonte → compara com outros meios → só então partilha. Deepfakes, clickbait e linguagem emocional são sinais de alerta. Ser um utilizador crítico é a melhor defesa contra a desinformação.",
    noTimer:true,
    hints:[
      ["Sala 1: 4 frases — 2 são verdadeiras. Cuidado com mitos sobre fotos e títulos!",
       "Sala 1: fotos podem ser manipuladas com IA (deepfakes). Só o título não chega para verificar.",
       "Sala 1: verdadeiras 2 e 4. Código = (2)(1.ª=2)(2.ª=4) = 224."],
      ["Sala 2: são 13 letras. O conceito descreve informação falsa criada intencionalmente.",
       "Sala 2: começa por DES + INFORMAÇÃO — é o oposto de informação verdadeira.",
       "Sala 2: a palavra é DESINFORMACAO."],
      ["Sala 3: qual título usa linguagem exagerada, mistério e não tem fonte identificável?",
       "Sala 3: clickbait usa palavras como 'chocante', 'nunca viste', 'vai mudar tudo'.",
       "Sala 3: o título B é clickbait — exagerado, misterioso, sem fonte, apela à emoção."],
      ["Sala 4: ordena os 4 passos para verificar antes de partilhar.",
       "Sala 4: começa por parar e não partilhar impulsivamente. Depois verifica a fonte.",
       "Sala 4: ordem — Parar → Verificar fonte → Comparar fontes → Só então partilhar."],
      ["Sala 5: liga cada sinal de alerta ao problema que indica.",
       "Sala 5: distingue URL suspeito, ausência de autor, linguagem emocional e data antiga.",
       "Sala 5: URL suspeito→domínio falso, sem autor→irresponsável, emocional→manipulação."],
      ["Sala 6: encontra os 3 sinais de alerta na mensagem de WhatsApp.",
       "Sala 6: urgência, pedido de partilha em massa e ausência de fonte são sinais clássicos.",
       "Sala 6: corretas: urgência ('partilha já'), sem fonte identificável, linguagem emocional."],
      ["Sala 7: o que deves fazer quando recebes um vídeo que parece falso?",
       "Sala 7: deepfakes são difíceis de detetar. A atitude certa é verificar antes de reagir.",
       "Sala 7: resposta B — não partilhar e procurar o vídeo em fontes oficiais para verificar se é deepfake."],
      ["Sala 8: escolhe exatamente 3 boas práticas contra Fake News.",
       "Sala 8: verificar fonte, usar facto-checkers e não partilhar sem confirmar são as essenciais.",
       "Sala 8: corretas: verificar fonte, consultar sites de facto-checking e não partilhar na dúvida."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: <b>2 e 4</b> (fotos podem ser deepfakes; fact-checking é ferramenta essencial); código <b>224</b>. Erradas: 1 (fotos podem ser manipuladas), 3 (título não chega para verificar).<br>
<b>Porta 2</b> — Anagrama: <b>DESINFORMACAO</b> (13 letras, sem acentos).<br>
<b>Porta 3</b> — Clickbait: título <b>B</b> (maiúsculas, emojis excessivos, linguagem alarmante sem fonte).<br>
<b>Porta 4</b> — Ordem: Parar → Verificar quem publicou → Comparar com outras fontes → Só partilhar com certeza.<br>
<b>Porta 5</b> — Ligações: Urgência extrema↔manipulação, Sem fonte/autor↔informação inventada, Erros ortográficos↔não revisto, Emojis/maiúsculas↔clickbait.<br>
<b>Porta 6</b> — 3 sinais corretos: <b>1</b> (urgência extrema), <b>3</b> (sem fonte/data/autor), <b>5</b> (afirmação chocante impossível de verificar). Errados: 2 (estar em WhatsApp não é sinal) e 4 (emojis de limão não são sinal).<br>
<b>Porta 7</b> — Resposta: <b>B</b> (não partilhar, procurar em fontes oficiais e verificar se é deepfake).<br>
<b>Porta 8</b> — Corretas: <b>1, 3, 5</b> (verificar a fonte, comparar com outros sites confiáveis, falar com adulto quando há dúvidas).`,
    doors:[
      {id:1,icon:"🧩",title:"Sala 1 · Código da Verdade",topic:"Verdadeiro/Falso + código",points:15},
      {id:2,icon:"🔤",title:"Sala 2 · Palavra Chave",topic:"Anagrama",points:15},
      {id:3,icon:"⚠️",title:"Sala 3 · Título Suspeito",topic:"Identifica o clickbait",points:10},
      {id:4,icon:"📋",title:"Sala 4 · Passos Certos",topic:"Ordena antes de partilhar",points:15},
      {id:5,icon:"🔗",title:"Sala 5 · Liga os Sinais",topic:"Liga sinal ao problema",points:15},
      {id:6,icon:"📱",title:"Sala 6 · WhatsApp Falso",topic:"Identifica 3 sinais de alerta",points:15},
      {id:7,icon:"🎥",title:"Sala 7 · Deepfake!",topic:"Decisão correta face a vídeo falso",points:10},
      {id:8,icon:"🛡️",title:"Sala 8 · Escudo da Verdade",topic:"Escolhe 3 boas práticas",points:15},
    ],
    renderDoor(idx,CE,addTry,completeDoor,S,setFeedback,playSound){ er_fakenewsRoom(idx,CE,addTry,completeDoor,S,setFeedback,playSound); }
  },
};

/* ═══════════════════ AUDIO ═══════════════════ */
let erIsMuted=false;
function erPlaySound(s){
  if(erIsMuted) return;
  const ctx=_getCtx(); if(!ctx) return;
  if(s==='correct') _chime([[523,0.08],[784,0.12]],80);
  else if(s==='wrong') _beep(220,0.18,'sawtooth',0.13);
  else if(s==='door') _chime([[392,0.07],[494,0.07],[587,0.1]],60);
  else if(s==='victory') _chime([[523,0.08],[659,0.08],[784,0.08],[1047,0.18,'sine',0.22]],85);
}
document.getElementById("er-btn-mute").addEventListener("click",function(){ erIsMuted=!erIsMuted; this.textContent=erIsMuted?T("soundOff"):T("soundOn"); });

/* ═══════════════════ UTILS ═══════════════════ */
function erNormalize(s){ return (s||"").trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""); }

/* ═══════════════════ GAME STATE ═══════════════════ */
let erCurrentRoom=null;
let erState={};
let erTimerInterval=null;

function initERState(room){
  const n=room.doors.length;
  return {
    unlockedIndex:0, currentIndex:null, robotDoorIndex:0,
    score:0, completed:Array(n).fill(false),
    triesTotal:0, triesPerDoor:Array(n).fill(0),
    hintsUsed:0,
    timeTotalSec: (room.noTimer||window.vbErNoTimer) ? 0 : 15*60,
    timeLeftSec:  (room.noTimer||window.vbErNoTimer) ? 0 : 15*60,
    timeUp:false, timerRunning:false,
    teacherOpen:false
  };
}

/* ═══════════════════ PROGRESS STORAGE ═══════════════════ */
function er_loadRoomProgress(roomId){ try{ return JSON.parse(localStorage.getItem("vb_er_"+roomId)||"null"); }catch(e){ return null; } }
function er_saveRoomProgress(roomId,data){ try{ localStorage.setItem("vb_er_"+roomId,JSON.stringify(data)); }catch(e){} }
function er_getStoredProgress(roomId){ try{ return JSON.parse(localStorage.getItem("vb_er_"+roomId)||"null"); }catch(e){ return null; } }

/* ═══════════════════ HUB ═══════════════════ */
function erShowHub(){
  document.getElementById("er-hub-screen").classList.add("active");
  document.getElementById("er-game-screen").style.display="none";
  document.getElementById("er-hub-screen").style.display="block";
  if(erTimerInterval){ clearInterval(erTimerInterval); erTimerInterval=null; }
  er_buildRoomsGrid();
}
function erShowGame(roomId){
  document.getElementById("er-hub-screen").style.display="none";
  document.getElementById("er-game-screen").style.display="block";
  // Check for resumable progress
  const saved=er_loadRoomProgress(roomId);
  const room=ROOMS[roomId];
  const resumable=saved&&saved.completed&&saved.completed.some(Boolean)&&!saved.completed.every(Boolean)&&!saved.timeUp;
  if(resumable){
    const done=saved.completed.filter(Boolean).length;
    const total=room.doors.length;
    const label=room.noTimer?"salas":"portas";
    const overlay=document.createElement("div");
    overlay.style.cssText="position:fixed;inset:0;background:rgba(15,23,42,0.55);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(5px);";
    overlay.innerHTML=`
      <div style="background:#fff;border-radius:20px;padding:26px 30px;text-align:center;max-width:320px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.3);font-family:'Nunito Sans',sans-serif;">
        <div style="font-size:2rem;margin-bottom:8px;">🔄</div>
        <div style="font-weight:900;font-size:1.05rem;color:#1e1b4b;font-family:'Nunito',sans-serif;margin-bottom:6px;">Progresso guardado!</div>
        <div style="font-size:.84rem;color:#64748b;margin-bottom:18px;">Tens <b>${done}/${total} ${label}</b> abertas nesta sala.<br>Queres continuar ou recomeçar?</div>
        <div style="display:flex;gap:8px;">
          <button id="er-resume-yes" style="flex:1;padding:10px;background:linear-gradient(135deg,#6366f1,#0891b2);color:#fff;border:none;border-radius:999px;font-weight:800;font-size:.9rem;cursor:pointer;font-family:'Nunito',sans-serif;">▶️ Continuar</button>
          <button id="er-resume-no" style="flex:1;padding:10px;background:#f1f5f9;color:#475569;border:1px solid #cbd5e1;border-radius:999px;font-weight:700;font-size:.9rem;cursor:pointer;font-family:'Nunito',sans-serif;">🔁 Recomeçar</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector("#er-resume-yes").onclick=()=>{ overlay.remove(); er_startRoom(roomId,true); };
    overlay.querySelector("#er-resume-no").onclick=()=>{ overlay.remove(); er_startRoom(roomId,false); };
  } else {
    er_startRoom(roomId);
  }
}

function er_buildRoomsGrid(){
  const container=document.getElementById("er-rooms-grid");
  container.innerHTML="";
  const groups=[
    {key:"security", label:"🔒 Segurança na Internet", color:"#6366f1", rooms:[]},
    {key:"ambiente", label:"🌍 Missões Ambientais",    color:"#10b981", rooms:[]}
  ];
  Object.values(ROOMS).forEach(room=>{
    const g=groups.find(g=>g.key===room.group)||groups[0];
    g.rooms.push(room);
  });
  groups.forEach(group=>{
    if(!group.rooms.length) return;
    // Section wrapper
    const section=document.createElement("div");
    section.style.cssText="margin-bottom:18px;";
    // Group label
    const lbl=document.createElement("div");
    lbl.className=`er-group-label ${group.key}`;
    lbl.textContent=group.label;
    section.appendChild(lbl);
    // Cards subgrid
    const grid=document.createElement("div");
    grid.style.cssText="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px;";
    group.rooms.forEach(room=>{
      const prog=er_getStoredProgress(room.id);
      const done=prog?prog.completed.filter(Boolean).length:0;
      const total=room.doors.length;
      const pct=Math.round((done/total)*100);
      const div=document.createElement("div");
      div.className=`er-room-card ${room.cssClass}`;
      div.innerHTML=`
        <div class="er-room-icon-big">${room.icon}</div>
        <div class="er-room-title">${room.title}</div>
        <div class="er-room-desc">${room.desc}</div>
        <div class="er-chips" style="justify-content:center;">${room.chips.map(c=>`<span class="er-chip">${c}</span>`).join("")}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:.71rem;color:var(--muted);margin-top:4px;width:100%;">
          <span>${done}/${total} ${room.noTimer?"salas":"portas"}${(room.noTimer||window.vbErNoTimer)?"":"  · ⏱️ 15 min"}</span>
          <span style="font-weight:700;">${pct}%</span>
        </div>
        <div class="er-prog-bar" style="width:100%;"><div class="er-prog-fill" style="width:${pct}%"></div></div>`;
      div.addEventListener("click",()=>erShowGame(room.id));
      grid.appendChild(div);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

/* ═══════════════════ START ROOM ═══════════════════ */
function er_startRoom(roomId, keepProgress=false){
  if(erTimerInterval){clearInterval(erTimerInterval);erTimerInterval=null;}
  erCurrentRoom=ROOMS[roomId];
  const r=erCurrentRoom;

  // apply room colour
  const cssVars={"ims":"var(--room-ims)","agua":"var(--room-agua)","ar":"var(--room-ar)","malware":"var(--room-malware)","fakenews":"var(--room-fakenews)"};
  const cssVarsSoft={"ims":"var(--room-ims-soft)","agua":"var(--room-agua-soft)","ar":"var(--room-ar-soft)","malware":"var(--room-malware-soft)","fakenews":"var(--room-fakenews-soft)"};
  document.documentElement.style.setProperty("--rc",cssVars[roomId]);
  document.documentElement.style.setProperty("--rc-soft",cssVarsSoft[roomId]);

  // init state
  if(keepProgress){
    const p=er_loadRoomProgress(roomId);
    if(p){ erState=p; erState.timeUp=false; erState.timerRunning=false; }
    else{ erState=initERState(r); }
  } else {
    erState=initERState(r);
  }

  // build topbar
  const tb=document.getElementById("er-topbar");
  tb.className=`game-topbar ${r.cssClass}`;
  tb.innerHTML=`
    <div style="display:flex;align-items:center;gap:8px;">
      <span class="er-room-label">${r.icon} ${r.title}</span>
      <span style="font-size:.78rem;color:var(--muted);">${r.missionTitle}</span>
    </div>
    <div class="er-kpi-row">
      <div class="er-kpi">⭐ Pontos: <strong id="er-kpi-score">0</strong></div>
      <div class="er-kpi">🔓 Portas: <strong id="er-kpi-doors">0/${r.doors.length}</strong></div>
      <div class="er-kpi">🔁 Tentativas: <strong id="er-kpi-tries">0</strong></div>
      ${(!r.noTimer&&!window.vbErNoTimer)?`<div class="er-kpi er-timer-ring" id="er-timer-ring-wrap" style="position:relative;display:flex;align-items:center;justify-content:center;">
        <svg class="er-timer-svg" width="40" height="40" viewBox="0 0 40 40" style="transform:rotate(-90deg);">
          <circle class="er-timer-track" cx="20" cy="20" r="16"/>
          <circle class="er-timer-fill" id="er-timer-fill" cx="20" cy="20" r="16"
            stroke-dasharray="100.5" stroke-dashoffset="0"/>
        </svg>
        <span class="er-timer-text" id="er-kpi-time" style="position:absolute;font-size:.7rem;">10:00</span>
      </div>`:""}
    </div>`;

  // robot in speech bubble
  document.getElementById("er-speech-robot").innerHTML=VANBERTO_POPUP_SVG();
  document.getElementById("er-logo-robot").innerHTML=VANBERTO_POPUP_SVG();
  document.getElementById("er-hub-robot").innerHTML=VANBERTO_POPUP_SVG();
  // reset panels
  document.getElementById("er-mission-title").textContent=T("chooseMission");
  document.getElementById("er-mission-topic").textContent=(r.noTimer||window.vbErNoTimer)?T("erNoTimer"):T("erTimerDesc");
  document.getElementById("er-mission-speech").innerHTML=r.robotIntro;
  document.getElementById("er-mission-content").innerHTML=`<div class="er-mini">Clica numa porta para ver o desafio.</div>`;
  erSetFeedback("info","Selecciona a primeira porta desbloqueada para começar!");
  document.getElementById("er-hint-area").innerHTML=er_renderHintBtn(0);
  document.getElementById("er-teacher-area").innerHTML="";

  er_updateKPIs();
  er_renderDoorsSidebar();

  if(!r.noTimer&&!window.vbErNoTimer) er_startTimer();

  // auto-select door 0
  er_selectDoor(0);
}

/* ═══════════════════ TIMER ═══════════════════ */
function er_startTimer(){
  if(erTimerInterval) clearInterval(erTimerInterval);
  // Preserve original total (600s) so the ring shows correctly even on resume
  if(!erState._timerTotalFixed){
    erState.timeTotalSec = (erCurrentRoom && !erCurrentRoom.noTimer && !window.vbErNoTimer) ? 15*60 : 0;
    erState._timerTotalFixed = true;
  }
  erTimerInterval=setInterval(()=>{
    if(erState.timeUp) return;
    erState.timeLeftSec--;
    er_updateTimerUI();
    if(erState.timeLeftSec<=0){
      erState.overtime=true;
      clearInterval(erTimerInterval);
      er_saveRoomProgress(erCurrentRoom.id,erState);
      const sp=document.getElementById("er-mission-speech");
      if(sp) sp.textContent="⏱️ O tempo do desafio acabou, mas podes continuar com calma!";
    }
  },1000);
}
function er_stopTimer(){ if(erTimerInterval){clearInterval(erTimerInterval);erTimerInterval=null;} }
function er_formatTime(s){ const m=Math.floor(s/60),sec=s%60; return m+":"+(sec<10?"0":"")+sec; }
function er_computeTimeBonus(){ return Math.floor(erState.timeLeftSec/10); }
function er_updateTimerUI(){
  const el=document.getElementById("er-kpi-time"); if(!el) return;
  el.textContent=er_formatTime(erState.timeLeftSec);
  const total=erState.timeTotalSec||600;
  const pct=Math.max(0,erState.timeLeftSec/total);
  const circumference=100.5; // 2*pi*16
  const fill=document.getElementById("er-timer-fill");
  if(fill){
    fill.style.strokeDasharray=circumference;
    fill.style.strokeDashoffset=(circumference*(1-pct)).toFixed(2);
    if(erState.timeLeftSec<=30){ fill.style.stroke="#dc2626"; el.className="er-timer-text warn"; }
    else if(erState.timeLeftSec<=60){ fill.style.stroke="#f59e0b"; el.className="er-timer-text warn"; }
    else{ fill.style.stroke="var(--er-rc,#6366f1)"; el.className="er-timer-text"; }
  }
}

/* ═══════════════════ KPIs ═══════════════════ */
function er_updateKPIs(){
  const sc=document.getElementById("er-kpi-score"); if(sc) sc.textContent=erState.score;
  const dr=document.getElementById("er-kpi-doors"); if(dr) dr.textContent=erState.completed.filter(Boolean).length+"/"+erCurrentRoom.doors.length;
  const tr=document.getElementById("er-kpi-tries"); if(tr) tr.textContent=erState.triesTotal;
  const pf=document.getElementById("er-progress-fill");
  if(pf){ const pct=(erState.completed.filter(Boolean).length/erCurrentRoom.doors.length)*100; pf.style.width=pct+"%"; }
  er_updateTimerUI();
}
function erAddTry(idx){ erState.triesTotal++; erState.triesPerDoor[idx]++; er_updateKPIs(); }
function erSetFeedback(kind,text){
  const el=document.getElementById("er-feedback"); if(!el) return;
  el.className="feedback-strip "+(kind||"info");
  el.textContent=text;
  // VanBerto shake on wrong answer
  if(kind==="err"){
    const sr=document.getElementById("er-speech-robot");
    if(sr){
      sr.classList.remove("er-dance","er-vb-shake");
      void sr.offsetWidth;
      sr.classList.add("er-vb-shake");
      sr.addEventListener("animationend",()=>sr.classList.remove("er-vb-shake"),{once:true});
    }
  }
}

/* ═══════════════════ DOORS SIDEBAR ═══════════════════ */
function er_renderDoorsSidebar(){
  const sb=document.getElementById("er-doors-sidebar"); if(!sb) return;
  const label=erCurrentRoom.noTimer?"Salas":"Portas";
  sb.innerHTML=`<div class="er-sidebar-title">${label}</div>`;
  erCurrentRoom.doors.forEach((d,i)=>{
    const isLocked=(i>erState.unlockedIndex)&&!erState.completed[i];
    const isDone=erState.completed[i];
    const isActive=i===erState.robotDoorIndex;
    const btn=document.createElement("button");
    btn.className="door-btn"+(isActive?" active":"")+(isDone?" done":"")+(isLocked?" locked":"");
    const statusEmoji=isDone?"✅":isLocked?"🔒":"▶️";
    btn.innerHTML=`
      <div class="er-dicon">${d.icon}</div>
      <div class="er-door-num">${label} ${i+1}</div>
      <div style="font-size:.55rem;color:${isDone?"#10b981":isLocked?"var(--muted)":"var(--er-rc,#6366f1)"};font-weight:700;">${isDone?"✅ Ok":isLocked?"🔒":"★ "+d.points+"pts"}</div>
      ${isActive?`<div style="position:absolute;top:4px;right:4px;font-size:.7rem;">📍</div>`:""}`;
    if(!isLocked||isDone) btn.addEventListener("click",()=>er_selectDoor(i));
    sb.appendChild(btn);
  });
}

/* ═══════════════════ SELECT DOOR ═══════════════════ */
function er_renderHintBtn(doorIdx){
  const hints=erCurrentRoom&&erCurrentRoom.hints;
  const hint=hints&&hints[doorIdx];
  if(!hint) return "";
  // Support both string (legacy) and array (progressive 3-level)
  const levels=Array.isArray(hint)?hint:[hint,hint,hint];
  const btn=document.createElement("button");
  btn.className="er-hint-btn";
  btn.textContent="💡 Ver pista (nível 1)";
  let shownLevel=0;
  const box=document.createElement("div");
  box.className="er-hint-box";
  btn.onclick=function(){
    const tries=erState&&erState.triesPerDoor?erState.triesPerDoor[doorIdx]||0:0;
    // Progressive: level 1 always, level 2 after 1 try, level 3 after 3 tries
    const maxLevel=tries>=3?2:tries>=1?1:0;
    if(!box.classList.contains("visible")){
      // Show current level
      box.textContent=levels[Math.min(shownLevel,maxLevel)];
      box.classList.add("visible");
      if(shownLevel<maxLevel){
        btn.textContent=`🔍 Pista mais específica (nível ${shownLevel+2})`;
      } else if(shownLevel>=levels.length-1){
        btn.textContent="🙈 Esconder pista";
      } else {
        btn.textContent="🙈 Esconder pista";
      }
    } else if(shownLevel<maxLevel){
      // Reveal next level
      shownLevel++;
      box.textContent=levels[Math.min(shownLevel,maxLevel)];
      if(shownLevel<maxLevel){
        btn.textContent=`🔍 Pista mais específica (nível ${shownLevel+2})`;
      } else {
        btn.textContent="🙈 Esconder pista";
      }
    } else {
      // Hide
      box.classList.remove("visible");
      shownLevel=0;
      const nextAvail=tries>=3?2:tries>=1?1:0;
      btn.textContent=nextAvail>0?`💡 Ver pista (nível 1)`:"💡 Ver pista";
    }
  };
  const wrap=document.createElement("div"); wrap.appendChild(btn); wrap.appendChild(box);
  return wrap.outerHTML;
}
function er_selectDoor(i){
  if(erState.timeUp) return;
  const isLocked=(i>erState.unlockedIndex)&&!erState.completed[i];
  if(isLocked) return;
  erState.currentIndex=i; erState.robotDoorIndex=i;
  const d=erCurrentRoom.doors[i];
  document.getElementById("er-mission-title").textContent=d.title+" "+d.icon;
  document.getElementById("er-mission-topic").textContent=d.topic+" · +"+d.points+" ⭐ · Tentativas: "+erState.triesPerDoor[i];
  document.getElementById("er-mission-speech").textContent=(erCurrentRoom.noTimer?T("erRoomWord"):T("erDoorWord"))+" "+(i+1)+": "+T("erLetsGo");
  document.getElementById("er-hint-area").innerHTML=er_renderHintBtn(0);
  erSetFeedback("info","");
  er_renderDoorsSidebar();
  const CE=document.getElementById("er-mission-content");
  erCurrentRoom.renderDoor(i,CE,erAddTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  erPlaySound("door");
}
function er_moveRobot(delta){
  if(erState.timeUp) return;
  let maxR=0;
  for(let i=0;i<erCurrentRoom.doors.length;i++) if(i<=erState.unlockedIndex||erState.completed[i]) maxR=i;
  let t=erState.robotDoorIndex+delta;
  if(t<0) t=0; if(t>maxR) t=maxR;
  er_selectDoor(t);
}

/* ═══════════════════ COMPLETE DOOR ═══════════════════ */
function erCompleteDoor(i){
  if(erState.completed[i]) return;
  erState.completed[i]=true;
  erState.score+=erCurrentRoom.doors[i].points;
  if(i===erState.unlockedIndex&&i<erCurrentRoom.doors.length-1) erState.unlockedIndex++;
  er_updateKPIs(); er_renderDoorsSidebar();
  erPlaySound("correct");

  // Flash the door button with burst animation
  const allBtns=document.querySelectorAll("#er-doors-sidebar .door-btn");
  const btn=allBtns[i];
  if(btn){ btn.classList.add("just-done"); setTimeout(()=>btn.classList.remove("just-done"),450); }

  // VanBerto dance
  const sr=document.getElementById("er-speech-robot");
  if(sr){
    sr.classList.remove("er-dance","er-vb-shake");
    void sr.offsetWidth;
    sr.classList.add("er-dance");
    sr.addEventListener("animationend",()=>sr.classList.remove("er-dance"),{once:true});
  }

  // Mini confetti burst in the mission panel
  _erMiniConfetti();

  er_saveRoomProgress(erCurrentRoom.id,erState);
  if(erState.completed.every(Boolean)){
    const bonus=0; /* sem pontos por velocidade: pensar primeiro */
    erState.score+=bonus;
    er_updateKPIs();
    er_stopTimer();
    setTimeout(()=>er_showFinalPopup(bonus),700);
  }
}

// Mini confetti inside mission panel on door complete
function _erMiniConfetti(){
  const panel=document.getElementById("er-mission-content"); if(!panel) return;
  const cols=["#6366f1","#22d3ee","#f59e0b","#10b981","#f43f5e","#a78bfa","#fbbf24"];
  for(let i=0;i<18;i++){
    const d=document.createElement("div");
    d.style.cssText=`position:absolute;width:${5+Math.random()*6}px;height:${5+Math.random()*6}px;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      border-radius:${Math.random()>.5?'50%':'2px'};
      left:${10+Math.random()*80}%;top:${Math.random()*30}%;
      animation:confettiFall .9s ${Math.random()*.4}s ease forwards;
      pointer-events:none;z-index:10;`;
    panel.style.position="relative";
    panel.appendChild(d);
    setTimeout(()=>d.remove(),1400);
  }
}

/* ═══════════════════ FINAL POPUP ═══════════════════ */
function er_showFinalPopup(bonus=0){
  const pct=Math.round((erState.score/(erCurrentRoom.doors.reduce((a,d)=>a+d.points,0)+(bonus||0)))*100);
  const stars=pct>=90?"⭐⭐⭐":pct>=65?"⭐⭐":"⭐";
  const emoji=pct>=90?"🏆":pct>=65?"🎉":"😊";
  document.getElementById("er-final-emoji").textContent=emoji;
  document.getElementById("er-final-title").textContent=T("erMissionComplete")+" "+stars;
  document.getElementById("er-final-text").textContent=erCurrentRoom.finalMessage+((!erCurrentRoom.noTimer&&!window.vbErNoTimer&&!erState.overtime)?"  ⚡ Medalha de velocidade!":"");
  // Pedagogical summary
  const summaryEl=document.getElementById("er-final-summary");
  if(summaryEl){
    if(erCurrentRoom.pedagogicalSummary){
      summaryEl.innerHTML=`<div style="background:linear-gradient(135deg,rgba(99,102,241,0.07),rgba(34,211,238,0.06));border:1.5px solid rgba(99,102,241,0.2);border-radius:12px;padding:12px 15px;font-size:.8rem;color:#1e293b;text-align:left;line-height:1.6;margin:10px 0 4px;font-weight:600;">${erCurrentRoom.pedagogicalSummary}</div>`;
    } else { summaryEl.innerHTML=""; }
  }
  document.getElementById("er-final-kpis").innerHTML=`
    <div class="er-kpi-card"><div class="er-kpi-val">${erState.score}</div><div class="er-kpi-lbl">⭐ Pontos totais</div></div>
    <div class="er-kpi-card"><div class="er-kpi-val">${erState.completed.filter(Boolean).length}/${erCurrentRoom.doors.length}</div><div class="er-kpi-lbl">🔓 Portas abertas</div></div>
    <div class="er-kpi-card"><div class="er-kpi-val">${erState.triesTotal}</div><div class="er-kpi-lbl">🔁 Tentativas</div></div>
    <div class="er-kpi-card"><div class="er-kpi-val">${(erCurrentRoom.noTimer||window.vbErNoTimer)?"—":er_formatTime(erState.timeLeftSec)}</div><div class="er-kpi-lbl">⏱️ Tempo restante</div></div>`;
  erSpawnConfetti();
  erPlaySound("victory");
  document.getElementById("er-popup-final").classList.add("visible");
}
function erSpawnConfetti(){
  const w=document.getElementById("er-confetti-wrap"); if(!w) return;
  w.innerHTML="";
  const cols=["#6366f1","#22d3ee","#f59e0b","#10b981","#f43f5e","#a78bfa"];
  for(let i=0;i<36;i++){
    const d=document.createElement("div"); d.className="conf-piece";
    d.style.left=(Math.random()*100)+"%"; d.style.top=(Math.random()*20)+"%";
    d.style.background=cols[Math.floor(Math.random()*cols.length)];
    d.style.animationDelay=(Math.random()*.8)+"s";
    d.style.width=(5+Math.random()*8)+"px"; d.style.height=(5+Math.random()*8)+"px";
    d.style.borderRadius=Math.random()>.5?"50%":"3px";
    w.appendChild(d);
  }
}

/* ═══════════════════ CONTROLS ═══════════════════ */
document.getElementById("er-btn-prev").addEventListener("click",()=>er_moveRobot(-1));
document.getElementById("er-btn-next").addEventListener("click",()=>er_moveRobot(1));
document.getElementById("er-btn-hub").addEventListener("click",()=>erShowHub());
document.getElementById("er-btn-restart").addEventListener("click",()=>{ if(erCurrentRoom) er_startRoom(erCurrentRoom.id); });
document.getElementById("er-btn-hint").addEventListener("click",()=>{
  if(!erCurrentRoom||erState.timeUp) return;
  const idx=erState.currentIndex??0;
  const hintsArr=erCurrentRoom.hints[idx];
  const levels=Array.isArray(hintsArr)?hintsArr:[hintsArr];
  const tries=erState.triesPerDoor[idx]||0;
  const maxLevel=tries>=3?2:tries>=1?1:0;
  erState.hintsUsed++;
  const levelIdx=Math.min(erState.hintsUsed-1,maxLevel,levels.length-1);
  const levelLabel=levelIdx===0?"geral":levelIdx===1?"específica":"resposta";
  const ha=document.getElementById("er-hint-area");
  ha.innerHTML=`<div class="er-hint-panel">💡 <span><b>Pista ${levelIdx+1} (${levelLabel}):</b> ${levels[levelIdx]||"Lê bem o enunciado e pensa com calma."}</span></div>`;
});
document.getElementById("er-btn-teacher").addEventListener("click",()=>{
  if(!erCurrentRoom) return;
  // Check if already unlocked this session
  const unlocked=sessionStorage.getItem("vb_teacher_pin")==="ok";
  if(unlocked){
    erState.teacherOpen=!erState.teacherOpen;
    const ta=document.getElementById("er-teacher-area");
    ta.innerHTML=erState.teacherOpen?`<div class="er-teacher-box">${erCurrentRoom.teacherNotes}</div>`:"";
    document.getElementById("er-btn-teacher").textContent=erState.teacherOpen?"🔓 Fechar notas":"🔓 Notas professora";
    return;
  }
  // Show PIN dialog
  const overlay=document.createElement("div");
  overlay.style.cssText="position:fixed;inset:0;background:rgba(15,23,42,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);";
  overlay.innerHTML=`
    <div style="background:#fff;border-radius:18px;padding:28px 32px;text-align:center;max-width:300px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,0.3);font-family:'Nunito Sans',sans-serif;">
      <div style="font-size:2rem;margin-bottom:8px;">🔐</div>
      <div style="font-weight:900;font-size:1.05rem;color:#1e1b4b;font-family:'Nunito',sans-serif;margin-bottom:4px;">Área da Professora</div>
      <div style="font-size:.82rem;color:#64748b;margin-bottom:16px;">Introduz o código de acesso</div>
      <input id="pin-input" type="password" inputmode="numeric" maxlength="4"
        style="width:100%;padding:10px;border-radius:10px;border:2px solid #c7d2fe;font-size:1.4rem;text-align:center;letter-spacing:.4em;outline:none;font-family:'Nunito',sans-serif;font-weight:900;color:#1e1b4b;"
        placeholder="••••" autocomplete="off"/>
      <div id="pin-msg" style="min-height:20px;font-size:.78rem;color:#dc2626;margin-top:6px;"></div>
      <div style="display:flex;gap:8px;margin-top:14px;">
        <button id="pin-ok" style="flex:1;padding:10px;background:linear-gradient(135deg,#6366f1,#0891b2);color:#fff;border:none;border-radius:999px;font-weight:800;font-size:.9rem;cursor:pointer;font-family:'Nunito',sans-serif;">Entrar</button>
        <button id="pin-cancel" style="flex:1;padding:10px;background:#f1f5f9;color:#475569;border:1px solid #cbd5e1;border-radius:999px;font-weight:700;font-size:.9rem;cursor:pointer;font-family:'Nunito',sans-serif;">Cancelar</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const pinInput=overlay.querySelector("#pin-input");
  setTimeout(()=>pinInput.focus(),50);
  const tryPin=()=>{
    const val=pinInput.value.trim();
    if(val==="7576"){
      sessionStorage.setItem("vb_teacher_pin","ok");
      overlay.remove();
      erState.teacherOpen=true;
      const ta=document.getElementById("er-teacher-area");
      ta.innerHTML=`<div class="er-teacher-box">${erCurrentRoom.teacherNotes}</div>`;
      document.getElementById("er-btn-teacher").textContent="🔓 Notas professora";
    } else {
      overlay.querySelector("#pin-msg").textContent="❌ Código incorreto. Tenta de novo.";
      pinInput.value="";pinInput.focus();
    }
  };
  overlay.querySelector("#pin-ok").onclick=tryPin;
  overlay.querySelector("#pin-cancel").onclick=()=>overlay.remove();
  pinInput.addEventListener("keydown",e=>{ if(e.key==="Enter") tryPin(); });
  overlay.addEventListener("click",e=>{ if(e.target===overlay) overlay.remove(); });
});
document.getElementById("er-btn-final-restart").addEventListener("click",()=>{ document.getElementById("er-popup-final").classList.remove("visible"); if(erCurrentRoom) er_startRoom(erCurrentRoom.id); });
document.getElementById("er-btn-final-hub").addEventListener("click",()=>{ document.getElementById("er-popup-final").classList.remove("visible"); erShowHub(); });
document.getElementById("er-btn-timeup-restart").addEventListener("click",()=>{ document.getElementById("er-popup-timeup").classList.remove("visible"); if(erCurrentRoom) er_startRoom(erCurrentRoom.id); });
document.getElementById("er-btn-timeup-hub").addEventListener("click",()=>{ document.getElementById("er-popup-timeup").classList.remove("visible"); erShowHub(); });

/* ═══════════════════ PUZZLE ENGINES ═══════════════════ */

/* ── Helper: lock all interactive elements inside a puzzle after success ── */
function erLockPuzzle(container){
  if(!container) return;
  container.querySelectorAll("input,select,textarea").forEach(el=>{ el.disabled=true; });
  container.querySelectorAll("button.btn").forEach(el=>{ el.classList.add("answered"); });
  container.querySelectorAll(".er-choice").forEach(el=>{ el.classList.add("answered"); });
  container.querySelectorAll(".er-mc-option").forEach(el=>{ el.classList.add("answered"); });
}

/* ── Multiple Choice (Malware / FakeNews) ── */
function er_mcRoom(data,idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  CE.innerHTML=`
    <div class="er-mini">${data.speech}</div>
    <div style="font-weight:700;font-size:.9rem;margin-bottom:10px;">${data.question}</div>
    <div id="er-mc-answers"></div>
    <div id="er-mc-msg"></div>`;
  const AA=document.getElementById("er-mc-answers");
  const letters=["A","B","C","D"];
  let answered=false;
  data.answers.forEach((a,ai)=>{
    const btn=document.createElement("div");
    btn.className="er-mc-option"; btn.tabIndex=0;
    btn.innerHTML=`<div class="er-mc-badge">${letters[ai]}</div><div>${a.text}</div>`;
    btn.addEventListener("click",()=>{
      if(answered) return;
      erAddTry(idx);
      if(a.correct){
        answered=true;
        btn.classList.add("correct");
        // Lock all options so nothing stays highlighted
        AA.querySelectorAll(".er-mc-option").forEach(b=>b.classList.add("answered"));
        erSetFeedback("ok","✅ "+a.fb);
        const msg=document.getElementById("er-mc-msg");
        if(msg) msg.innerHTML=`<div class="er-msgbox ok"><b>✅ Correcto!</b> ${a.fb} +${erCurrentRoom.doors[idx].points} ⭐</div>`;
        setTimeout(()=>erCompleteDoor(idx),500);
      } else {
        btn.classList.add("wrong","answered");
        erSetFeedback("err","❌ "+a.fb);
        erPlaySound("wrong");
      }
    });
    btn.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")btn.click();});
    AA.appendChild(btn);
  });
}

/* ── IMS Room puzzles ── */
function er_orderDoor(doorN,instr,steps,correctOrder,D,addTry,erCompleteDoor,setFeedback,playSound,CE){
  const i=doorN-1; let order=[...steps.keys()];
  for(let j=order.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[order[j],order[k]]=[order[k],order[j]];}
  const render=()=>{
    let h=`<div class="er-mini"><b>📋 Ordena os passos:</b> ${instr}<br><span style="color:var(--muted);font-size:.78rem;">Usa ▲ ▼ para mover cada passo para a posição correta.</span></div><div style="display:flex;flex-direction:column;gap:5px;margin:8px 0;">`;
    order.forEach((si,pos)=>{
      h+=`<div class="er-choice" style="display:flex;align-items:center;gap:8px;"><span style="font-size:.8rem;font-weight:900;color:var(--accent);min-width:18px;">${pos+1}.</span><span style="flex:1;font-size:.8rem;">${steps[si]}</span><div style="display:flex;gap:2px;flex-shrink:0;">`;
      if(pos>0) h+=`<button onclick="erMoveStep(${pos},-1)" title="Mover para cima" style="border:none;background:rgba(99,102,241,.12);border-radius:5px;padding:3px 8px;cursor:pointer;font-size:.85rem;touch-action:manipulation;">▲</button>`;
      if(pos<order.length-1) h+=`<button onclick="erMoveStep(${pos},1)" title="Mover para baixo" style="border:none;background:rgba(99,102,241,.12);border-radius:5px;padding:3px 8px;cursor:pointer;font-size:.85rem;touch-action:manipulation;">▼</button>`;
      h+=`</div></div>`;
    });
    h+=`</div><button class="btn sm" onclick="erCheckOrder()">✅ Confirmar ordem</button><div id="order-msg"></div>`;
    CE.innerHTML=h;
  };
  window.erMoveStep=(pos,dir)=>{const ni=pos+dir;if(ni<0||ni>=order.length)return;[order[pos],order[ni]]=[order[ni],order[pos]];render();};
  window.erCheckOrder=()=>{
    erAddTry(i);
    if(order.every((v,j)=>v===correctOrder[j])){
      document.getElementById("order-msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Ordem correta!</b> +${D[i].points} ⭐</div>`;
      erLockPuzzle(CE);erSetFeedback("ok","Porta "+doorN+" concluída.");erCompleteDoor(i);
    }else{document.getElementById("order-msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ordem incorreta.</b> Pensa na sequência lógica e tenta de novo.</div>`;erPlaySound("wrong");}
  };
  render();
}
function er_matchDoor(doorN,instr,pairs,D,addTry,erCompleteDoor,setFeedback,playSound,CE){
  const i=doorN-1;
  const concepts=pairs.map(p=>p[0]);
  const correctDefs=pairs.map(p=>p[1]);

  // Shuffle pool
  let poolDefs=[...correctDefs];
  for(let j=poolDefs.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[poolDefs[j],poolDefs[k]]=[poolDefs[k],poolDefs[j]];}

  // State: slots[conceptIdx] = def text placed there, or null
  let slots=Array(concepts.length).fill(null);

  // ── Render ──
  const render=()=>{
    const unplaced=poolDefs.filter(d=>!slots.includes(d));
    const allPlaced=slots.every(s=>s!==null);
    CE.innerHTML=`
      <div class="er-mini"><b>🔗 Liga os conceitos:</b> ${instr}<br>
        <span style="color:var(--muted);font-size:.78rem;">🖱️ Arrasta cada definição para o conceito correto. No telemóvel: pressiona e arrasta.</span>
      </div>
      <div id="er-match-pool" style="display:flex;flex-wrap:wrap;gap:6px;min-height:46px;
        background:rgba(238,242,255,0.5);border:2px dashed rgba(99,102,241,.3);border-radius:10px;
        padding:8px;margin-bottom:10px;transition:background .15s;">
        ${unplaced.length===0
          ? '<span style="font-size:.78rem;color:var(--muted);padding:4px 6px;font-style:italic;">Todas ligadas — confirma em baixo!</span>'
          : unplaced.map(def=>`
            <div class="er-chip-drag" draggable="true" data-def="${encodeURIComponent(def)}"
              style="background:#fff;border:2px solid rgba(99,102,241,.35);border-radius:8px;
              padding:7px 11px;font-size:.8rem;font-weight:700;cursor:grab;user-select:none;
              touch-action:none;box-shadow:0 2px 6px rgba(99,102,241,.1);transition:transform .1s,box-shadow .1s;">
              ${def}
            </div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:10px;">
        ${concepts.map((con,ci)=>`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;align-items:stretch;">
            <div style="font-weight:800;font-size:.82rem;padding:9px 12px;
              background:rgba(238,242,255,.8);border-radius:8px;border:1.5px solid rgba(199,210,254,.7);
              display:flex;align-items:center;">${con}</div>
            <div class="er-match-slot" data-slot="${ci}"
              style="min-height:42px;border:2px dashed rgba(99,102,241,.28);border-radius:8px;
              padding:7px 10px;font-size:.79rem;display:flex;align-items:center;gap:6px;
              transition:background .15s,border-color .15s;
              ${slots[ci]
                ? 'background:rgba(34,211,238,.1);border-color:rgba(34,211,238,.5);border-style:solid;font-weight:700;color:#0f172a;'
                : 'background:rgba(248,250,255,.7);color:var(--muted);'}">
              ${slots[ci]
                ? `<span style="flex:1;">${slots[ci]}</span>
                   <button onclick="erRemoveSlot(${ci})" title="Devolver ao grupo"
                     style="background:none;border:none;cursor:pointer;font-size:1rem;opacity:.45;padding:0;line-height:1;flex-shrink:0;">✕</button>`
                : '<span style="font-style:italic;font-size:.74rem;opacity:.6;">Arrasta aqui…</span>'}
            </div>
          </div>`).join('')}
      </div>
      <div class="er-row">
        <button class="btn sm" id="er-match-confirm"
          ${!allPlaced?'disabled style="opacity:.35;cursor:not-allowed;"':''}>
          ✅ Confirmar ligações
        </button>
      </div>
      <div id="match-msg"></div>`;

    wireDrag();

    // Confirm button
    const confirmBtn=CE.querySelector('#er-match-confirm');
    if(confirmBtn&&!confirmBtn.disabled){
      confirmBtn.addEventListener('click',()=>{
        erAddTry(i);
        const ok=pairs.every((p,ci)=>slots[ci]===p[1]);
        if(ok){
          CE.querySelector('#match-msg').innerHTML=`<div class="er-msgbox ok"><b>✅ Perfeito!</b> Todas as ligações estão corretas! +${D[i].points} ⭐</div>`;
          erLockPuzzle(CE);
          CE.querySelectorAll('.er-chip-drag,.er-match-slot button').forEach(el=>{el.style.pointerEvents='none';});
          erSetFeedback("ok","Porta "+doorN+" concluída.");erCompleteDoor(i);
        } else {
          CE.querySelector('#match-msg').innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não está tudo certo.</b> Verifica as ligações e tenta outra vez.</div>`;
          erPlaySound("wrong");
        }
      });
    }
  };

  // Remove a placed chip back to pool
  window.erRemoveSlot=(ci)=>{slots[ci]=null;render();};

  // ── Drag & Drop wiring ──
  function wireDrag(){
    let dragDef=null; // text being dragged
    let ghost=null;   // floating element for touch

    // ── Desktop HTML5 drag ──
    CE.querySelectorAll('.er-chip-drag').forEach(chip=>{
      chip.addEventListener('dragstart',e=>{
        dragDef=decodeURIComponent(chip.dataset.def);
        chip.style.opacity='.4';
        e.dataTransfer.effectAllowed='move';
      });
      chip.addEventListener('dragend',()=>{chip.style.opacity='1';dragDef=null;});
    });

    CE.querySelectorAll('.er-match-slot').forEach(slot=>{
      slot.addEventListener('dragover',e=>{e.preventDefault();slot.style.background='rgba(99,102,241,.12)';slot.style.borderColor='#6366f1';slot.style.borderStyle='solid';});
      slot.addEventListener('dragleave',()=>{styleSlot(slot);});
      slot.addEventListener('drop',e=>{
        e.preventDefault();
        if(!dragDef) return;
        const ci=parseInt(slot.dataset.slot);
        // If slot already has something, return it to pool (it'll show in pool on render)
        slots[ci]=dragDef;
        dragDef=null;
        render();
      });
    });

    // Also allow dropping back onto pool
    const pool=CE.querySelector('#er-match-pool');
    if(pool){
      pool.addEventListener('dragover',e=>{e.preventDefault();pool.style.background='rgba(99,102,241,.08)';});
      pool.addEventListener('dragleave',()=>{pool.style.background='rgba(238,242,255,0.5)';});
      pool.addEventListener('drop',e=>{
        e.preventDefault();
        pool.style.background='rgba(238,242,255,0.5)';
        // dragDef is from pool → pool, ignore
        dragDef=null;render();
      });
    }

    function styleSlot(slot){
      const ci=parseInt(slot.dataset.slot);
      if(slots[ci]){
        slot.style.background='rgba(34,211,238,.1)';slot.style.borderColor='rgba(34,211,238,.5)';slot.style.borderStyle='solid';
      } else {
        slot.style.background='rgba(248,250,255,.7)';slot.style.borderColor='rgba(99,102,241,.28)';slot.style.borderStyle='dashed';
      }
    }

    // ── Mobile Touch drag ──
    CE.querySelectorAll('.er-chip-drag').forEach(chip=>{
      chip.addEventListener('touchstart',e=>{
        e.preventDefault();
        const def=decodeURIComponent(chip.dataset.def);
        chip.style.opacity='.35';

        // Create ghost
        ghost=chip.cloneNode(true);
        ghost.style.cssText=`position:fixed;z-index:9999;pointer-events:none;opacity:.85;
          transform:scale(1.06);box-shadow:0 8px 24px rgba(99,102,241,.35);
          background:#fff;border:2px solid #6366f1;border-radius:8px;
          padding:7px 11px;font-size:.8rem;font-weight:700;white-space:nowrap;`;
        const touch=e.touches[0];
        ghost.style.left=(touch.clientX-chip.offsetWidth/2)+'px';
        ghost.style.top=(touch.clientY-30)+'px';
        document.body.appendChild(ghost);

        chip.addEventListener('touchmove',onMove,{passive:false});
        chip.addEventListener('touchend',onEnd,{once:true});

        function onMove(ev){
          ev.preventDefault();
          const t=ev.touches[0];
          ghost.style.left=(t.clientX-chip.offsetWidth/2)+'px';
          ghost.style.top=(t.clientY-30)+'px';
          // Highlight slot under finger
          ghost.style.display='none';
          const el=document.elementFromPoint(t.clientX,t.clientY);
          ghost.style.display='';
          CE.querySelectorAll('.er-match-slot').forEach(s=>{
            const ci=parseInt(s.dataset.slot);
            if(s===el||s.contains(el)){s.style.background='rgba(99,102,241,.15)';s.style.borderColor='#6366f1';s.style.borderStyle='solid';}
            else styleSlot(s);
          });
        }

        function onEnd(ev){
          chip.style.opacity='1';
          if(ghost){ghost.remove();ghost=null;}
          chip.removeEventListener('touchmove',onMove);
          const t=ev.changedTouches[0];
          ghost={style:{display:''}};ghost=null;
          // Find target slot
          const tmpGhost=document.createElement('div');
          tmpGhost.style.cssText='position:fixed;left:'+t.clientX+'px;top:'+t.clientY+'px;width:1px;height:1px;z-index:-1;';
          document.body.appendChild(tmpGhost);
          const el=document.elementFromPoint(t.clientX,t.clientY);
          tmpGhost.remove();
          const slot=el?.closest('.er-match-slot');
          if(slot){
            const ci=parseInt(slot.dataset.slot);
            slots[ci]=def;
          }
          render();
        }
      },{passive:false});
    });

    // Also allow dragging FROM slots back to pool (desktop)
    // handled by ✕ button; for touch, long-press or ✕ button
  }

  render();
}
function er_imsRoom(idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  const D=erCurrentRoom.doors;
  // EN notice banner when game is in English
  if(typeof currentLang!=="undefined"&&currentLang==="en"){
    const nb=CE.querySelector(".er-en-notice");
    if(!nb){const n=document.createElement("div");n.className="er-en-notice";n.style.cssText="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:7px 11px;font-size:.74rem;color:#78350f;font-weight:600;margin-bottom:8px;";n.textContent="⚠️ The puzzle content below is in Portuguese — this is intentional for language learning. The hints are in Portuguese too.";CE.prepend(n);}
  }
  // EN language notice — puzzles are in Portuguese as language-learning context
  if(idx===0){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as afirmações <u>verdadeiras</u>. Depois escreve o <b>código de 3 dígitos</b>: (nº verdadeiras)(nº de cada verdadeira, em ordem).</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d1_q1"/> <div><b>1.</b> Os meus dados pessoais (morada, escola, nº de telefone) pertencem-me e não devo partilhá-los com desconhecidos online.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q2"/> <div><b>2.</b> Posso usar a mesma palavra-passe em todos os sites porque é mais fácil de lembrar.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q3"/> <div><b>3.</b> Se alguém online me pedir uma foto pessoal, devo enviar — afinal é só uma imagem.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q4"/> <div><b>4.</b> Se receber uma mensagem estranha de um amigo a pedir dinheiro, devo confirmar por telefone antes de responder.</div></label>
      </div>
      <div class="er-field"><label class="er-lbl-small" for="d1_code">Código <span style="color:var(--muted);font-weight:400">(nº verdadeiras)(cada verdadeira)</span></label>
        <div class="er-row"><input id="d1_code" inputmode="numeric" placeholder="Ex: 214" style="max-width:120px;"/><button class="btn sm" id="d1_check">Abrir porta</button></div>
        <div id="d1_msg"></div></div>`;
    document.getElementById("d1_check").addEventListener("click",()=>{
      erAddTry(0);
      const q1=document.getElementById("d1_q1").checked,q2=document.getElementById("d1_q2").checked,q3=document.getElementById("d1_q3").checked,q4=document.getElementById("d1_q4").checked;
      const code=erNormalize(document.getElementById("d1_code").value);
      if(!(q1&&!q2&&!q3&&q4)){document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Só as frases verdadeiras devem estar marcadas — lê cada uma com atenção.</div>`;erSetFeedback("err","❌ Há uma frase mal marcada.");erPlaySound("wrong");return;}
      if(code!=="214"){
  const digits=code.replace(/\D/g,"");
  let cfb="Código: (nº verdadeiras)(cada verdadeira).";
  if(digits.length!==3) cfb=`O código tem ${digits.length} dígito${digits.length!==1?"s":""} — deve ter 3.`;
  else if(digits[0]!=="2") cfb="Há 2 verdadeiras (frases 1 e 4) → código: (2)(1.ª=1)(2.ª=4) = 214.";
  document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Código errado.</b> ${cfb}</div>`;erSetFeedback("err","❌ Código não está certo.");erPlaySound("wrong");return;}
      document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> Porta aberta! +${D[0].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 1 concluída.");erCompleteDoor(0);
    });
  } else if(idx===1){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as acções <u>corretas</u> face a ciberbullying. Cuidado — há opções que parecem certas mas não são!</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d2_1"/> <div><b>1.</b> Ignorar completamente e não fazer nada — "não é problema meu"</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_2"/> <div><b>2.</b> Apoiar a vítima em privado e mostrar que não está sozinha</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_3"/> <div><b>3.</b> Guardar prints/capturas de ecrã das mensagens como prova</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_4"/> <div><b>4.</b> Comentar publicamente que o agressor está errado (sem insultar)</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_5"/> <div><b>5.</b> Bloquear e denunciar a conta do agressor na plataforma</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_6"/> <div><b>6.</b> Avisar um adulto ou professor de confiança sobre a situação</div></label>
      </div>
      <div class="er-mini" style="color:var(--err);margin-top:4px;">⚠️ Opção 4 parece correta mas pode escalar o conflito — na dúvida, fala em privado ou com um adulto.</div>
      <div class="er-row"><button class="btn sm" id="d2_check">Confirmar</button></div><div id="d2_msg"></div>`;
    document.getElementById("d2_check").addEventListener("click",()=>{
      erAddTry(1);
      const c=[1,2,3,4,5,6].map(i=>document.getElementById("d2_"+i).checked);
      // Correct: 2,3,5,6 (apoiar, provas, bloquear, avisar adulto) — NOT 1 (ignorar) NOT 4 (comentar público)
      const ok=!c[0]&&c[1]&&c[2]&&!c[3]&&c[4]&&c[5];
      if(!ok){document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Atenção à opção 4 — comentar publicamente pode escalar o conflito. E ignorar nunca é a solução.</div>`;erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");return;}
      document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> Apoiar em privado, guardar provas, bloquear e avisar um adulto. +${D[1].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 2 concluída.");erCompleteDoor(1);
    });
  } else if(idx===2){
    // Harder: 5-step order with subtle wrong options mixed in (no obviously bad steps)
    er_orderDoor(3,"Ordena os 5 passos corretos quando testemunhas ciberbullying contra um colega.",
      ["Parar e não reagir impulsivamente — respirar fundo",
       "Apoiar a vítima em privado — ela não está sozinha",
       "Guardar provas (capturas de ecrã com data/hora visível)",
       "Bloquear e denunciar a conta na plataforma",
       "Avisar um adulto/professor de confiança com as provas"],
      [0,1,2,3,4],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===3){
    er_anagramaDoor(4,"I C A O C B E R N D A","CIBERCONDUTA","como nos comportamos no mundo digital — a nossa postura, palavras e ações online",CE,addTry,erCompleteDoor,D,setFeedback,playSound);
  } else if(idx===4){
    er_mcRoom({
      speech:"<b>Porta 5 — Password Forte</b><br>Analisa bem cada opção antes de decidir!",
      question:"O teu email foi comprometido. Qual destas novas passwords é realmente segura?",
      answers:[
        {text:"A · Portugal2024 — fácil de lembrar e começa com maiúscula", correct:false, fb:"❌ Palavras do dicionário + ano são fáceis de adivinhar por ataques de força bruta."},
        {text:"B · 12345678! — tem um símbolo, não pode estar mal", correct:false, fb:"❌ Sequências numéricas são as primeiras a ser testadas, mesmo com símbolo no fim."},
        {text:"C · Xk#9!mPq3@Lr — aleatória, longa e sem palavras reais", correct:true,  fb:"✅ Sem palavras de dicionário, com símbolos, maiúsculas e minúsculas misturadas. A mais segura!"},
        {text:"D · pedro1234! — nome próprio + números + símbolo", correct:false, fb:"❌ Nome próprio + sequência de números é previsível. Dados pessoais nunca devem aparecer nas passwords."}
      ]
    },4,CE,addTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  } else if(idx===5){
    er_mcRoom({
      speech:"<b>Porta 6 — Decisão Difícil</b><br>Lê o cenário com atenção — há respostas parecidas mas só uma é completamente certa.",
      question:"Recebes um email do 'Banco de Portugal' a dizer que a tua conta vai ser bloqueada em 24h. O email tem um link para 'confirmar os teus dados'. O que fazes?",
      answers:[
        {text:"A · Clico no link, é urgente e não quero perder o acesso", correct:false, fb:"❌ Urgência falsa é a principal técnica de phishing. Nunca cliques sem verificar."},
        {text:"B · Reencaminho para os meus pais e explico o que recebi", correct:false, fb:"Quase certo — mas reencaminhar pode espalhar o link. O melhor é mostrar sem clicar."},
        {text:"C · Apago o email, vou diretamente ao site do banco (sem usar o link) e verifico se há algum problema", correct:true,  fb:"✅ Perfeito! Nunca uses links de emails suspeitos. Vai sempre diretamente ao site oficial."},
        {text:"D · Respondo ao email a pedir mais informações antes de decidir", correct:false, fb:"❌ Responder confirma que o email existe e é lido — podes receber mais ataques."}
      ]
    },5,CE,addTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  } else if(idx===6){
    er_anagramaDoor(7,"I D A D E N I T E D I G T A L","IDENTIDADE DIGITAL","a tua presença e reputação permanente na internet — tudo o que publicas, comentas e partilhas online fica registado",CE,addTry,erCompleteDoor,D,setFeedback,playSound,true);
  } else if(idx===7){
    er_checkboxes3Door(8,"Escolhe <b>exactamente 3</b> regras de cidadania digital.",
      ["Tratar os outros com respeito online","Partilhar palavras-passe com amigos","Não partilhar dados pessoais (morada, nº, escola)","Responder com insultos para 'ganhar' discussões","Pedir ajuda a um adulto/professor quando algo corre mal","Partilhar boatos sem confirmar porque é 'engraçado'"],
      [0,2,4],D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  }
}

/* ── ÁGUA Room puzzles ── */
function er_aguaRoom(idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  const D=erCurrentRoom.doors;
  // EN notice banner when game is in English
  if(typeof currentLang!=="undefined"&&currentLang==="en"){
    const nb=CE.querySelector(".er-en-notice");
    if(!nb){const n=document.createElement("div");n.className="er-en-notice";n.style.cssText="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:7px 11px;font-size:.74rem;color:#78350f;font-weight:600;margin-bottom:8px;";n.textContent="⚠️ The puzzle content below is in Portuguese — this is intentional for language learning. The hints are in Portuguese too.";CE.prepend(n);}
  }
  if(idx===0){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as afirmações <u>verdadeiras</u>. Depois escreve o <b>código</b>: (nº verdadeiras)(nº de cada verdadeira, em ordem).</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d1_q1"/> <div><b>1.</b> Apenas 3% da água da Terra é doce — e grande parte está em glaciares inacessíveis.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q2"/> <div><b>2.</b> Uma torneira a pingar não representa grande desperdício — são apenas algumas gotas.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q3"/> <div><b>3.</b> Uma máquina de lavar a roupa a funcionar sempre com carga completa poupa mais água do que lavagens a meias.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q4"/> <div><b>4.</b> Um duche de 5 minutos usa menos água do que um banho de banheira completa.</div></label>
      </div>
      <div class="er-field"><label class="er-lbl-small" for="d1_code">Código <span style="color:var(--muted);font-weight:400">(nº verdadeiras)(cada verdadeira)</span></label>
        <div class="er-row"><input id="d1_code" inputmode="numeric" placeholder="Ex: 3134" style="max-width:120px;"/><button class="btn sm" id="d1_check">Abrir porta</button></div>
        <div id="d1_msg"></div></div>`;
    document.getElementById("d1_check").addEventListener("click",()=>{
      erAddTry(0);
      const q1=document.getElementById("d1_q1").checked,q2=document.getElementById("d1_q2").checked,q3=document.getElementById("d1_q3").checked,q4=document.getElementById("d1_q4").checked;
      const code=erNormalize(document.getElementById("d1_code").value);
      if(!(q1&&!q2&&q3&&q4)){document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Lê cada frase — 3 são verdadeiras. Cuidado com os mitos!</div>`;erSetFeedback("err","❌ Há uma frase mal marcada.");erPlaySound("wrong");return;}
      if(code!=="3134"){document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Código errado.</b> 3 verdadeiras (frases 1, 3 e 4) → código é (nº verdadeiras)(1.ª)(2.ª)(3.ª).</div>`;erSetFeedback("err","❌ Código não está certo.");erPlaySound("wrong");return;}
      document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> +${D[0].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 1 concluída.");erCompleteDoor(0);
    });
  } else if(idx===1){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as acções que <u>realmente</u> poupam água. Cuidado — algumas parecem poupar mas não tanto quanto pensas!</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d2_1"/> <div><b>1.</b> Fechar a torneira enquanto escovo os dentes (poupa ~6L por sessão)</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_2"/> <div><b>2.</b> Tomar banho de banheira em vez de duche — a banheira parece maior mas demoramos menos</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_3"/> <div><b>3.</b> Regar o jardim de manhã cedo ou ao fim do dia (menos evaporação)</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_4"/> <div><b>4.</b> Usar a máquina de lavar a louça sempre com carga completa</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_5"/> <div><b>5.</b> Deixar a torneira aberta enquanto ensaboamos as mãos — "não demora nada"</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_6"/> <div><b>6.</b> Reutilizar a água de cozer vegetais para regar plantas</div></label>
      </div>
      <div class="er-row"><button class="btn sm" id="d2_check">Confirmar</button></div><div id="d2_msg"></div>`;
    document.getElementById("d2_check").addEventListener("click",()=>{
      erAddTry(1);
      const c=[1,2,3,4,5,6].map(i=>document.getElementById("d2_"+i).checked);
      // Correct: 1,3,4,6. Wrong: 2 (banheira usa 150L vs duche 40L), 5 (deixar aberta)
      const ok=c[0]&&!c[1]&&c[2]&&c[3]&&!c[4]&&c[5];
      if(!ok){document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Atenção: a banheira usa ~150L vs duche de 5min = ~50L! E a torneira aberta enquanto ensaboamos desperdiça ~8L.</div>`;erPlaySound("wrong");return;}
      document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> +${D[1].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 2 concluída.");erCompleteDoor(1);
    });
  } else if(idx===2){
    er_orderDoor(3,"Ordena as 4 fases do ciclo da água pela ordem correta.<br><span style='font-weight:400;color:var(--muted);'>Dica: a água evapora → forma nuvens → cai → entra no solo.</span>",
      ["Evaporação — a água dos oceanos e rios transforma-se em vapor",
       "Condensação — o vapor sobe e forma nuvens",
       "Precipitação — a água cai em chuva, neve ou granizo",
       "Infiltração — a água penetra no solo e alimenta os lençóis freáticos"],
      [0,1,2,3],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===3){
    er_anagramaDoor(4,"P R E C I P I T A C A O","PRECIPITACAO","uma das fases do ciclo da água — quando a água cai do céu (chuva, neve, granizo)",CE,addTry,erCompleteDoor,D,setFeedback,playSound);
  } else if(idx===4){
    er_mcRoom({
      speech:"<b>Porta 5 — Cálculo do Consumo</b><br>Duche = 8 L/min · Banheira = 120 L · Lava-loiças = 12 L/ciclo. Faz as contas!",
      question:"A turma quer calcular o consumo semanal de água de uma família de 4 pessoas. Qual hábito semanal gasta menos?",
      answers:[
        {text:"A · Cada pessoa toma um duche de 10 min por dia (4×10×8L×7 dias)", correct:false, fb:"❌ 4×10×8×7 = 2.240 L/semana. Demasiado!"},
        {text:"B · Cada pessoa toma um banho de banheira completa por dia (4×120L×7 dias)", correct:false, fb:"❌ 4×120×7 = 3.360 L/semana. O mais dispendioso!"},
        {text:"C · Cada pessoa toma um duche de 4 min por dia + lava-loiças 1x/dia (4×4×8×7 + 12×7)", correct:true,  fb:"✅ 896L + 84L = 980 L/semana. A opção mais eficiente!"},
        {text:"D · Lava-loiças a funcionar 3x por dia (12×3×7 dias)", correct:false, fb:"❌ 12×21 = 252L. Mas ignora a higiene pessoal! Incompleto."}
      ]
    },4,CE,addTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  } else if(idx===5){
    er_radioDoor(6,"Vês uma torneira a pingar muito na casa de banho da escola. O que deves fazer?",
      ["A. Ignorar, porque 'não é comigo'.","B. Avisar um adulto/professor e fechar a torneira (se for seguro).","C. Deixar a água correr para 'não fazer barulho'."],
      "B",D,6,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===6){
    er_anagramaDoor(7,"O T A V A L P   A U G A","AGUA POTAVEL","água tratada e segura para consumo humano — o que bebemos do cano em casa",CE,addTry,erCompleteDoor,D,setFeedback,playSound,true);
  } else if(idx===7){
    er_livreDoor(8,"escreve 3 boas práticas para poupar água.","Ex: fechar torneira, duche curto, reparar fugas",D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  }
}

/* ── AR Room puzzles ── */
function er_arRoom(idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  const D=erCurrentRoom.doors;
  // EN notice banner when game is in English
  if(typeof currentLang!=="undefined"&&currentLang==="en"){
    const nb=CE.querySelector(".er-en-notice");
    if(!nb){const n=document.createElement("div");n.className="er-en-notice";n.style.cssText="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:7px 11px;font-size:.74rem;color:#78350f;font-weight:600;margin-bottom:8px;";n.textContent="⚠️ The puzzle content below is in Portuguese — this is intentional for language learning. The hints are in Portuguese too.";CE.prepend(n);}
  }
  if(idx===0){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as afirmações <u>verdadeiras</u> sobre qualidade do ar. Código: (nº verdadeiras)(nº 1.ª verdadeira)(nº 2.ª verdadeira).</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d1_q1"/> <div><b>1.</b> Ventilar uma sala de aula durante 10 minutos reduz o CO₂ acumulado e melhora a concentração.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q2"/> <div><b>2.</b> Os carros elétricos não produzem qualquer impacto ambiental — são 100% limpos.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q3"/> <div><b>3.</b> Uma viagem de bicicleta de 5 km em vez de carro poupa cerca de 1 kg de CO₂.</div></label>
        <label class="er-choice"><input type="checkbox" id="d1_q4"/> <div><b>4.</b> O ozono na estratosfera é prejudicial — devemos eliminar toda a camada de ozono.</div></label>
      </div>
      <div class="er-field"><label class="er-lbl-small" for="d1_code">Código</label>
        <div class="er-row"><input id="d1_code" inputmode="numeric" placeholder="Ex: 213" style="max-width:120px;"/><button class="btn sm" id="d1_check">Abrir porta</button></div>
        <div id="d1_msg"></div></div>`;
    document.getElementById("d1_check").addEventListener("click",()=>{
      erAddTry(0);
      const q1=document.getElementById("d1_q1").checked,q2=document.getElementById("d1_q2").checked,q3=document.getElementById("d1_q3").checked,q4=document.getElementById("d1_q4").checked;
      const code=erNormalize(document.getElementById("d1_code").value);
      if(!(q1&&!q2&&q3&&!q4)){document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Cuidado — nem todos os factos populares são verdadeiros!</div>`;erPlaySound("wrong");return;}
      if(code!=="213"){document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Código errado.</b> 2 verdadeiras: a 1.ª e a 3.ª.</div>`;erPlaySound("wrong");return;}
      document.getElementById("d1_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> +${D[0].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 1 concluída.");erCompleteDoor(0);
    });
  } else if(idx===1){
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as acções que <u>realmente</u> melhoram a qualidade do ar. Cuidado — algumas parecem ajudar mas têm impacto contrário!</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="d2_1"/> <div><b>1.</b> Usar carro elétrico em vez de gasolina — emissões zero de escapamento</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_2"/> <div><b>2.</b> Ventilar a sala de aula 10 minutos por dia para renovar o ar interior</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_3"/> <div><b>3.</b> Usar velas perfumadas em casa para mascarar o ar poluído</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_4"/> <div><b>4.</b> Preferir transportes públicos ao carro individual</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_5"/> <div><b>5.</b> Abrir a janela durante hora de ponta (8h-9h) para arejar — o trânsito já acabou</div></label>
        <label class="er-choice"><input type="checkbox" id="d2_6"/> <div><b>6.</b> Plantar árvores e manter plantas em espaços urbanos</div></label>
      </div>
      <div class="er-row"><button class="btn sm" id="d2_check">Confirmar</button></div><div id="d2_msg"></div>`;
    document.getElementById("d2_check").addEventListener("click",()=>{
      erAddTry(1);
      const c=[1,2,3,4,5,6].map(i=>document.getElementById("d2_"+i).checked);
      // Correct: 1,2,4,6. Wrong: 3 (velas produzem partículas finas), 5 (hora de ponta = mais poluição)
      const ok=c[0]&&c[1]&&!c[2]&&c[3]&&!c[4]&&c[5];
      if(!ok){document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b></div>`;erPlaySound("wrong");return;}
      document.getElementById("d2_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> +${D[1].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 2 concluída.");erCompleteDoor(1);
    });
  } else if(idx===2){
    er_mcRoom({
      speech:"<b>Porta 3 — Fontes de Poluição</b><br>Nem toda a poluição do ar vem de onde pensamos!",
      question:"Qual destas situações contribui MAIS para a poluição do ar interior de uma sala de aula?",
      answers:[
        {text:"A · Ter plantas dentro da sala — libertam CO₂ de noite", correct:false, fb:"❌ As plantas absorvem CO₂ durante o dia e libertam pouco de noite. No balanço, melhoram a qualidade do ar."},
        {text:"B · Muitas pessoas na sala sem ventilação — acumulação de CO₂ e humidade", correct:true, fb:"✅ Correto! Cada pessoa expira CO₂. Sem renovação do ar, os níveis sobem e afetam a concentração e saúde."},
        {text:"C · A luz do sol a entrar pelas janelas — aquece e 'queima' o ar", correct:false, fb:"❌ A luz solar não polui o ar interior. Pelo contrário, a luz UV pode ajudar a eliminar alguns microrganismos."},
        {text:"D · Usar o quadro negro — o pó de giz sobe e respira-se", correct:false, fb:"❌ O pó de giz pode irritar em excesso, mas o maior problema é mesmo a falta de ventilação com muitas pessoas."}
      ]
    },2,CE,addTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  } else if(idx===3){
    er_anagramaDoor(4,"O A U I P L C A O","POLUICAO","a contaminação do ar por substâncias nocivas como gases, partículas e fumo — o maior inimigo da qualidade do ar",CE,addTry,erCompleteDoor,D,setFeedback,playSound);
  } else if(idx===4){
    er_mcRoom({
      speech:"<b>Porta 5 — Emissões de CO₂</b><br>Carro = 120g CO₂/km · Autocarro = 68g/km por passageiro · Comboio = 14g/km.",
      question:"O Pedro percorre 15 km por dia, 5 dias por semana (ida+volta). Qual transporte emite menos CO₂ numa semana?",
      answers:[
        {text:"A · Carro todos os dias  (15×2×5 = 150 km × 120g)", correct:false, fb:"❌ 150×120g = 18.000g = 18kg CO₂! Enorme impacto ambiental."},
        {text:"B · Autocarro todos os dias  (150 km × 68g)", correct:false, fb:"❌ 150×68g = 10.200g = 10,2kg. Melhor que o carro, mas não o mínimo."},
        {text:"C · Comboio todos os dias  (150 km × 14g)", correct:true,  fb:"✅ 150×14g = 2.100g = 2,1kg! O comboio emite ~88% menos que o carro."},
        {text:"D · Carro partilhado com 2 colegas  (18.000g ÷ 3)", correct:false, fb:"❌ 6.000g = 6kg. Melhor que sozinho, mas ainda 3× mais que o comboio."}
      ]
    },4,CE,addTry,erCompleteDoor,erState,erSetFeedback,erPlaySound);
  } else if(idx===5){
    er_radioDoor(6,"A sala está com ar 'pesado' e cheira mal. O que deves fazer?",
      ["A. Fechar todas as janelas para o cheiro ficar preso.","B. Abrir janelas alguns minutos e avisar um adulto.","C. Sprays fortes sem avisar ninguém."],
      "B",D,6,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===6){
    er_anagramaDoor(7,"I R A   O P M I L","AR LIMPO","o que queremos respirar todos os dias — ar sem poluição",CE,addTry,erCompleteDoor,D,setFeedback,playSound,true);
  } else if(idx===7){
    er_livreDoor(8,"escreve 3 boas práticas para proteger o ar.","Ex: ir a pé, plantar árvores, poupar energia",D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  }
}

/* ── HELPER: Anagram door ── */
function er_anagramaDoor(doorN,scrambled,answer,hint,CE,addTry,erCompleteDoor,D,setFeedback,playSound,isPhrase=false){
  const i=doorN-1;
  function shuffleStr(str){
    const letters=str.replace(/\s+/g,"").split("");
    for(let j=letters.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[letters[j],letters[k]]=[letters[k],letters[j]];}
    const result=letters.join("");
    return result===answer.replace(/\s+/g,"")?shuffleStr(str):result;
  }
  let displayLetters;
  if(isPhrase){
    const allLetters=answer.replace(/\s+/g,"").split("");
    for(let j=allLetters.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[allLetters[j],allLetters[k]]=[allLetters[k],allLetters[j]];}
    displayLetters=allLetters.join(" ");
  } else {
    displayLetters=shuffleStr(answer).split("").join(" ");
  }
  const wordCount=answer.trim().split(/\s+/).length;
  const letterCount=answer.replace(/\s+/g,"").length;
  const sizeHint=isPhrase
    ? `${wordCount} palavra${wordCount!==1?"s":""} · ${letterCount} letras no total`
    : `${letterCount} letra${letterCount!==1?"s":""}`;
  CE.innerHTML=`
    <div class="er-mini"><b>🔤 Anagrama:</b> as letras estão baralhadas. Descobre ${isPhrase?"a expressão":"a palavra"} certa e escreve sem acentos.</div>
    <div class="er-msgbox warn" style="font-size:1.15rem;letter-spacing:.18em;font-weight:900;text-align:center;padding:14px 10px;"><b>${displayLetters}</b></div>
    <div class="er-hint-panel" style="background:linear-gradient(135deg,#eff6ff,#f5f3ff);border:1.5px solid #93c5fd;border-radius:10px;padding:9px 13px;font-size:.8rem;color:#1e40af;display:flex;gap:8px;align-items:flex-start;margin:4px 0 8px;">
      <span style="font-size:1rem;flex-shrink:0;">💡</span>
      <div><b>Pista:</b> ${hint}<br><span style="font-size:.73rem;opacity:.75;">${sizeHint}</span></div>
    </div>
    <div class="er-field"><label class="er-lbl-small" for="d_word">${isPhrase?"Expressão secreta (sem acentos)":"Palavra secreta (sem acentos)"}</label>
      <div class="er-row"><input id="d_word" type="text" placeholder="Escreve aqui…" autocomplete="off" autocorrect="off" spellcheck="false"/><button class="btn sm" id="d_check">Desbloquear</button></div>
      <div id="d_msg"></div></div>`;
  document.getElementById("d_check").addEventListener("click",()=>{
    erAddTry(i);
    const w=erNormalize(document.getElementById("d_word").value).replace(/\s+/g," ").trim();
    if(w!==answer){
      const typed=w.replace(/\s/g,""); const ans=answer.replace(/\s/g,"");
      const tries=erState&&erState.triesPerDoor?erState.triesPerDoor[i]||0:0;
      let feedback="Relê as letras com atenção.";
      if(tries>=2 && typed.length!==ans.length) feedback=`Tens ${typed.length} letra${typed.length!==1?"s":""} — a resposta tem ${ans.length}.`;
      else if(tries>=2) { const wrong=[...ans].filter((c,j)=>typed[j]!==c).length; feedback=`${wrong} letra${wrong!==1?"s":""} na posição errada.`; }
      document.getElementById("d_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> ${feedback}</div>`;
      erSetFeedback("err","❌ Não está certo.");erPlaySound("wrong");return;
    }
    document.getElementById("d_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ ${answer}!</b> Porta aberta! +${D[i].points} ⭐</div>`;
    const inp=document.getElementById("d_word"); if(inp) inp.disabled=true;
    document.getElementById("d_check").classList.add("answered");
    erLockPuzzle(CE);erSetFeedback("ok",`✔ Porta ${doorN} concluída.`);erCompleteDoor(i);
  });
  document.getElementById("d_word").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("d_check").click();});
}

/* ── HELPER: Radio door ── */
function er_radioDoor(doorN,question,options,correct,D,dIdx,addTry,erCompleteDoor,setFeedback,playSound,CE){
  const i=dIdx-1;
  const name="r"+doorN;
  CE.innerHTML=`<div class="er-mini"><b>Situação:</b> ${question}</div>
    <div class="er-field">${options.map(opt=>`<label class="er-choice"><input type="radio" name="${name}" value="${opt[0]}"/> <div>${opt}</div></label>`).join("")}</div>
    <div class="er-row"><button class="btn sm" id="rad_check">Confirmar</button></div><div id="rad_msg"></div>`;
  document.getElementById("rad_check").addEventListener("click",()=>{
    erAddTry(i);
    const picked=(document.querySelector(`input[name="${name}"]:checked`)?.value)||"";
    if(!picked){document.getElementById("rad_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Falta escolher.</b></div>`;erPlaySound("wrong");return;}
    if(picked===correct){
      document.getElementById("rad_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> +${D[i].points} ⭐</div>`;
      // Lock inputs and button
      CE.querySelectorAll("input[type=radio]").forEach(r=>{r.disabled=true;});
      CE.querySelectorAll(".er-choice").forEach(l=>l.classList.add("answered"));
      document.getElementById("rad_check").classList.add("answered");
      erLockPuzzle(CE);erSetFeedback("ok",`✔ Porta ${doorN} concluída.`);erCompleteDoor(i);
    }
    else{document.getElementById("rad_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Pensa na opção mais responsável.</div>`;erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");}
  });
}

/* ── HELPER: Checkboxes exactly-N door ── */
function er_checkboxes3Door(doorN,instruction,items,correctIdxs,D,addTry,erCompleteDoor,setFeedback,playSound,CE){
  const i=doorN-1;
  CE.innerHTML=`<div class="er-mini"><b>Desafio final:</b> ${instruction}</div>
    <div class="er-field">${items.map((it,ii)=>`<label class="er-choice"><input type="checkbox" id="cb${ii}"/> <div><b>${ii+1}.</b> ${it}</div></label>`).join("")}</div>
    <div class="er-row"><button class="btn sm" id="cb_check">Concluir</button></div><div id="cb_msg"></div>`;
  document.getElementById("cb_check").addEventListener("click",()=>{
    erAddTry(i);
    const picked=items.map((_,ii)=>document.getElementById("cb"+ii).checked);
    const ok=picked.every((_,ii)=>picked[ii]===correctIdxs.includes(ii));
    if(!ok){document.getElementById("cb_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Escolhe exactamente 3 regras certas.</div>`;erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");return;}
    document.getElementById("cb_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Concluído!</b> +${D[i].points} ⭐</div>`;
    // Lock inputs and button
    CE.querySelectorAll("input[type=checkbox]").forEach(c=>{c.disabled=true;});
    CE.querySelectorAll(".er-choice").forEach(l=>l.classList.add("answered"));
    document.getElementById("cb_check").classList.add("answered");
    erLockPuzzle(CE);erSetFeedback("ok",`✔ Porta ${doorN} concluída.`);erCompleteDoor(i);
  });
}

/* ── HELPER: Resposta livre ── */
function er_livreDoor(doorN,instr,placeholder,D,addTry,erCompleteDoor,setFeedback,playSound,CE){
  const i=doorN-1;
  CE.innerHTML=`<div class="er-mini"><b>💬 Desafio final:</b> ${instr}<br><span style="color:var(--muted);font-size:.78rem;">Escreve cada prática numa linha ou separadas por vírgula. Mínimo 3 palavras cada.</span></div>
    <div class="er-field"><label class="er-lbl-small" for="livre_in">As tuas 3 boas práticas</label>
      <textarea id="livre_in" rows="4" placeholder="${placeholder}" style="width:100%;padding:8px 12px;border-radius:10px;border:1.5px solid rgba(199,210,254,0.7);font-family:'Nunito Sans',sans-serif;font-size:.82rem;resize:vertical;outline:none;color:#0f172a;background:#fff;"></textarea>
      <div class="er-row" style="margin-top:5px;"><button class="btn sm" id="livre_check">✅ Concluir</button></div>
      <div id="livre_msg"></div></div>`;
  document.getElementById("livre_check").addEventListener("click",()=>{
    erAddTry(i);
    const raw=(document.getElementById("livre_in").value||"");
    const items=raw.split(/[\n,;]/).map(s=>s.trim()).filter(s=>s.length>=4);
    if(items.length<3){
      const found=items.length;
      document.getElementById("livre_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Só ${found} prática${found!==1?"s":""} válida${found!==1?"s":""}.</b> Escreve pelo menos 3 práticas concretas, com no mínimo 4 caracteres cada.</div>`;
      erPlaySound("wrong");return;
    }
    document.getElementById("livre_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Muito bem!</b> Registaste ${items.length} boas práticas. +${D[i].points} ⭐</div>`;
    const el=document.getElementById("livre_in"); if(el) el.disabled=true;
    document.getElementById("livre_check").classList.add("answered");
    erLockPuzzle(CE);erSetFeedback("ok",`✔ Porta ${doorN} concluída.`);erCompleteDoor(i);
  });
}

/* ── MALWARE Room puzzles ── */
function er_malwareRoom(idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  const D=erCurrentRoom.doors;
  // EN notice banner when game is in English
  if(typeof currentLang!=="undefined"&&currentLang==="en"){
    const nb=CE.querySelector(".er-en-notice");
    if(!nb){const n=document.createElement("div");n.className="er-en-notice";n.style.cssText="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:7px 11px;font-size:.74rem;color:#78350f;font-weight:600;margin-bottom:8px;";n.textContent="⚠️ The puzzle content below is in Portuguese — this is intentional for language learning. The hints are in Portuguese too.";CE.prepend(n);}
  }
  if(idx===0){
    // Anagram: RANSOMWARE
    er_anagramaDoor(1,"R A N S O M W A R E","RANSOMWARE","tipo de malware que bloqueia os teus ficheiros e exige pagamento (resgate) para os devolver — nunca é seguro pagar! (palavra em inglês)",CE,addTry,erCompleteDoor,D,setFeedback,playSound);
  } else if(idx===1){
    // Checkboxes: como age um vírus
    er_checkboxes3Door(2,"Selecciona as 3 afirmações <b>verdadeiras</b> sobre vírus informáticos.",
      ["Infecta ficheiros e programas legítimos",
       "Só se espalha por pen drives, nunca pela internet",
       "Multiplica-se ao ser executado",
       "É inofensivo se o antivírus estiver desligado",
       "Precisa de um ficheiro hospedeiro para se propagar",
       "Apaga-se sozinho após 24 horas"],
      [0,2,4],D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===2){
    // Order: steps of a worm
    er_orderDoor(3,"Ordena os passos de como um Worm se espalha pela rede.",
      ["Entra no sistema através de uma vulnerabilidade",
       "Copia-se para a memória sem precisar de ficheiro",
       "Propaga-se automaticamente para outros computadores da rede",
       "Causa danos: rouba dados, abranda o sistema ou abre portas traseiras"],
      [0,1,2,3],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===3){
    // Anagram: JANORT → TROJAN
    er_anagramaDoor(4,"E G N H E I N E R I S O C A","ENGENHARIA SOCIAL","a técnica que explora a psicologia humana (confiança, medo, urgência) para obter acesso — sem precisar de código",CE,addTry,erCompleteDoor,D,setFeedback,playSound,true);
  } else if(idx===4){
    // Match: malware type to definition
    er_matchDoor(5,"Liga cada tipo de malware à sua descrição.",
      [["Spyware","Espia o que fazes no computador sem seres notado"],
       ["Keylogger","Regista todas as teclas que escreves (passwords, mensagens)"],
       ["Adware","Mostra anúncios indesejados e faz lucro para o atacante"],
       ["Rootkit","Esconde-se fundo no sistema e dá acesso ao atacante"]],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===5){
    // Text input: RESGATE (translation of ransom)
    CE.innerHTML=`<div class="er-mini"><b>🔐 Código do Cofre:</b><br>O nome <i>ransomware</i> vem da palavra inglesa <b>ransom</b>.<br>Qual é a tradução de <b>ransom</b> para português?<br><span style="color:var(--muted);font-size:.85rem;">Dica: é o que os criminosos pedem para devolver os teus ficheiros.</span></div>
      <div class="er-field"><label class="er-lbl-small" for="s6_in">Resposta</label>
        <div class="er-row"><input id="s6_in" type="text" placeholder="Escreve aqui…" style="max-width:180px;"/><button class="btn sm" id="s6_check">Confirmar</button></div>
        <div id="s6_msg"></div></div>`;
    document.getElementById("s6_check").addEventListener("click",()=>{
      erAddTry(5);
      const v=erNormalize(document.getElementById("s6_in").value);
      if(v==="RESGATE"){
        document.getElementById("s6_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo! RESGATE!</b> O ransomware bloqueia os teus ficheiros e exige pagamento. Nunca é seguro pagar! +${D[5].points} ⭐</div>`;
        erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 6 concluída.");erCompleteDoor(5);
      } else {
        document.getElementById("s6_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Pensa: quando um sequestrador captura alguém, o que é que pede para o libertar?</div>`;
        erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");
      }
    });
    document.getElementById("s6_in").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("s6_check").click();});
  } else if(idx===6){
    // Identify phishing signals in a fake email
    CE.innerHTML=`<div class="er-mini"><b>🎣 Email Suspeito:</b> Encontraste este email. Marca os <b>4 sinais de phishing</b>.</div>
      <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:10px;margin:8px 0;font-size:.82rem;line-height:1.7;">
        <b>De:</b> suporte@banco-seguro-pt.xyz<br>
        <b>Assunto:</b> ⚠️ URGENTE: A sua conta será bloqueada em 24h!<br>
        <b>Mensagem:</b> Caro cliente, detectamos actividade supeita na sua conta. Clique <u>aqui</u> para confirmar os seus daods pessoais imediatamente ou a conta será cancelada.
      </div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="ph1"/> <div><b>1.</b> O domínio do email é suspeito (.xyz em vez de .pt)</div></label>
        <label class="er-choice"><input type="checkbox" id="ph2"/> <div><b>2.</b> O email tem um logótipo colorido</div></label>
        <label class="er-choice"><input type="checkbox" id="ph3"/> <div><b>3.</b> Cria urgência ("24h", "URGENTE", "imediatamente")</div></label>
        <label class="er-choice"><input type="checkbox" id="ph4"/> <div><b>4.</b> O email foi recebido de manhã</div></label>
        <label class="er-choice"><input type="checkbox" id="ph5"/> <div><b>5.</b> Tem erros ortográficos ("supeita", "daods")</div></label>
        <label class="er-choice"><input type="checkbox" id="ph6"/> <div><b>6.</b> Pede para clicar num link e dar dados pessoais</div></label>
      </div>
      <div class="er-row"><button class="btn sm" id="ph_check">Confirmar</button></div><div id="ph_msg"></div>`;
    document.getElementById("ph_check").addEventListener("click",()=>{
      erAddTry(6);
      const c=[document.getElementById("ph1").checked,document.getElementById("ph2").checked,
               document.getElementById("ph3").checked,document.getElementById("ph4").checked,
               document.getElementById("ph5").checked,document.getElementById("ph6").checked];
      if(c[0]&&!c[1]&&c[2]&&!c[3]&&c[4]&&c[5]){
        document.getElementById("ph_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Excelente detetive!</b> Domínio falso + urgência + erros + pedido de dados = phishing! +${D[6].points} ⭐</div>`;
        erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 7 concluída.");erCompleteDoor(6);
      } else {
        document.getElementById("ph_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Lê o email com atenção — há 4 sinais claros de phishing.</div>`;
        erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");
      }
    });
  } else if(idx===7){
    er_checkboxes3Door(8,"Escolhe <b>exactamente 3</b> boas práticas para te proteger do malware.",
      ["Instalar e manter um antivírus actualizado",
       "Descarregar software de qualquer site sem verificar",
       "Não clicar em links suspeitos de emails ou mensagens",
       "Partilhar a password do computador com colegas",
       "Fazer backups regulares dos ficheiros importantes",
       "Desligar as actualizações automáticas do sistema"],
      [0,2,4],D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  }
}

/* ── FAKE NEWS Room puzzles ── */
function er_fakenewsRoom(idx,CE,addTry,erCompleteDoor,S,setFeedback,playSound){
  const D=erCurrentRoom.doors;
  // EN notice banner when game is in English
  if(typeof currentLang!=="undefined"&&currentLang==="en"){
    const nb=CE.querySelector(".er-en-notice");
    if(!nb){const n=document.createElement("div");n.className="er-en-notice";n.style.cssText="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:7px 11px;font-size:.74rem;color:#78350f;font-weight:600;margin-bottom:8px;";n.textContent="⚠️ The puzzle content below is in Portuguese — this is intentional for language learning. The hints are in Portuguese too.";CE.prepend(n);}
  }
  if(idx===0){
    // True/False + code (like IMS room 1)
    CE.innerHTML=`<div class="er-mini"><b>Instruções:</b> marca as afirmações <u>verdadeiras</u>. Cuidado — algumas afirmações parecem certas mas são mitos! Código: (nº verdadeiras)(cada verdadeira).</div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="fn1_q1"/> <div><b>1.</b> Uma notícia com foto realista é sempre verdadeira — fotos não mentem.</div></label>
        <label class="er-choice"><input type="checkbox" id="fn1_q2"/> <div><b>2.</b> A desinformação pode ser espalhada mesmo por pessoas bem-intencionadas que não verificaram a fonte.</div></label>
        <label class="er-choice"><input type="checkbox" id="fn1_q3"/> <div><b>3.</b> Ler apenas o título de uma notícia antes de partilhar é suficiente para saber se é verdadeira.</div></label>
        <label class="er-choice"><input type="checkbox" id="fn1_q4"/> <div><b>4.</b> O facto-checking (verificação de factos) por organizações independentes é uma das melhores ferramentas contra desinformação.</div></label>
      </div>
      <div class="er-field"><label class="er-lbl-small" for="fn1_code">Código <span style="color:var(--muted);font-weight:400">(nº verdadeiras)(cada verdadeira)</span></label>
        <div class="er-row"><input id="fn1_code" inputmode="numeric" placeholder="Ex: 224" style="max-width:120px;"/><button class="btn sm" id="fn1_check">Abrir sala</button></div>
        <div id="fn1_msg"></div></div>`;
    document.getElementById("fn1_check").addEventListener("click",()=>{
      erAddTry(0);
      const q1=document.getElementById("fn1_q1").checked,q2=document.getElementById("fn1_q2").checked,q3=document.getElementById("fn1_q3").checked,q4=document.getElementById("fn1_q4").checked;
      const code=erNormalize(document.getElementById("fn1_code").value);
      // True: q2 and q4 (NOT q1 - photos can be fake; NOT q3 - title not enough)
      if(!(!q1&&q2&&!q3&&q4)){document.getElementById("fn1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Cuidado com os mitos: fotos podem ser manipuladas (deepfakes), e o título não chega para verificar uma notícia.</div>`;erSetFeedback("err","❌ Há uma frase mal marcada.");erPlaySound("wrong");return;}
      if(code!=="224"){document.getElementById("fn1_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Código errado.</b> 2 verdadeiras: qual o número da 1.ª e da 2.ª?</div>`;erSetFeedback("err","❌ Código incorreto.");erPlaySound("wrong");return;}
      document.getElementById("fn1_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Certo!</b> Porta aberta! +${D[0].points} ⭐</div>`;erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 1 concluída.");erCompleteDoor(0);
    });
  } else if(idx===1){
    // Anagram: DESINFORMACAO
    er_anagramaDoor(2,"D E S I N F O R M A C A O","DESINFORMACAO","informação falsa criada intencionalmente para enganar — combina DES + INFORMAÇÃO",CE,addTry,erCompleteDoor,D,setFeedback,playSound);
  } else if(idx===2){
    // Identify clickbait title
    CE.innerHTML=`<div class="er-mini"><b>🔍 Qual destes títulos é <u>clickbait</u>?</b><br><span style="color:var(--muted);font-size:.82rem;">Clickbait usa linguagem exagerada, misteriosa ou alarmante para te fazer clicar.</span></div>
      <div class="er-field">
        <label class="er-choice"><input type="radio" name="cb_title" value="A"/> <div><b>A.</b> "Investigadores portugueses estudam novo tratamento para diabetes"</div></label>
        <label class="er-choice"><input type="radio" name="cb_title" value="B"/> <div><b>B.</b> "NINGUÉM QUER QUE SAIBAS ISTO!! O segredo que está a CHOCAR o mundo inteiro 😱😱"</div></label>
        <label class="er-choice"><input type="radio" name="cb_title" value="C"/> <div><b>C.</b> "Escola de Lisboa organiza feira do ambiente este sábado"</div></label>
        <label class="er-choice"><input type="radio" name="cb_title" value="D"/> <div><b>D.</b> "Câmara Municipal aprova novo parque urbano no centro da cidade"</div></label>
      </div>
      <div class="er-row"><button class="btn sm" id="cbt_check">Confirmar</button></div><div id="cbt_msg"></div>`;
    document.getElementById("cbt_check").addEventListener("click",()=>{
      erAddTry(2);
      const pick=(document.querySelector('input[name="cb_title"]:checked')?.value)||"";
      if(!pick){document.getElementById("cbt_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Escolhe um título.</b></div>`;erPlaySound("wrong");return;}
      if(pick==="B"){
        document.getElementById("cbt_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Correto!</b> Maiúsculas, emojis excessivos, "ninguém quer que saibas" — todos sinais de clickbait! +${D[2].points} ⭐</div>`;
        erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 3 concluída.");erCompleteDoor(2);
      } else {
        document.getElementById("cbt_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Não é esse.</b> Procura o que usa linguagem exagerada, alarme e emojis em excesso.</div>`;
        erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");
      }
    });
  } else if(idx===3){
    // Order: steps before sharing news
    er_orderDoor(4,"Ordena os passos <b>correctos</b> antes de partilhar uma notícia.",
      ["Parar — não partilhar de imediato mesmo que pareça urgente",
       "Verificar quem publicou e se o site é reconhecido e credível",
       "Comparar com outras fontes confiáveis (jornais, sites oficiais)",
       "Só partilhar se tiveres a certeza de que é verdade"],
      [0,1,2,3],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===4){
    // Match: signal to problem
    er_matchDoor(5,"Liga cada sinal ao problema que representa numa notícia.",
      [["Urgência extrema","Tenta manipular-te para agires sem pensar"],
       ["Sem fonte ou autor","A informação pode ter sido inventada"],
       ["Erros ortográficos","Conteúdo não foi revisto por profissionais"],
       ["Emojis e maiúsculas em excesso","Clickbait — feito para chamar atenção, não para informar"]],
      D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===5){
    // Identify 3 alert signals in a fake WhatsApp message
    CE.innerHTML=`<div class="er-mini"><b>📱 Mensagem de WhatsApp suspeita:</b><br>Marca os <b>3 sinais de alerta</b> nesta mensagem.</div>
      <div style="background:#dcf8c6;border:1px solid #a8d5a2;border-radius:12px;padding:12px;margin:8px 0;font-size:.83rem;line-height:1.7;max-width:320px;">
        📢 <b>ATENÇÃO URGENTE!!!</b><br>
        Cientistas descobriram que beber água com limão às 6h da manhã CURA qualquer doença!! Partilha já com todos os teus contactos antes que apaguem esta mensagem!! 🍋🍋🍋<br>
        <i>(Sem fonte, sem data, sem assinatura)</i>
      </div>
      <div class="er-field">
        <label class="er-choice"><input type="checkbox" id="wa1"/> <div><b>1.</b> Usa linguagem de urgência extrema ("ATENÇÃO URGENTE", "Partilha já")</div></label>
        <label class="er-choice"><input type="checkbox" id="wa2"/> <div><b>2.</b> A mensagem foi recebida num grupo de WhatsApp</div></label>
        <label class="er-choice"><input type="checkbox" id="wa3"/> <div><b>3.</b> Não indica fonte, autor, data ou estudo científico</div></label>
        <label class="er-choice"><input type="checkbox" id="wa4"/> <div><b>4.</b> Tem emojis de limão</div></label>
        <label class="er-choice"><input type="checkbox" id="wa5"/> <div><b>5.</b> Faz uma afirmação chocante e impossível de verificar</div></label>
      </div>
      <div class="er-row"><button class="btn sm" id="wa_check">Confirmar</button></div><div id="wa_msg"></div>`;
    document.getElementById("wa_check").addEventListener("click",()=>{
      erAddTry(5);
      const c=[document.getElementById("wa1").checked,document.getElementById("wa2").checked,
               document.getElementById("wa3").checked,document.getElementById("wa4").checked,
               document.getElementById("wa5").checked];
      if(c[0]&&!c[1]&&c[2]&&!c[3]&&c[4]){
        document.getElementById("wa_msg").innerHTML=`<div class="er-msgbox ok"><b>✅ Perfeito detetive!</b> Urgência + sem fonte + afirmação impossível = desinformação clássica! +${D[5].points} ⭐</div>`;
        erLockPuzzle(CE);erSetFeedback("ok","✔ Porta 6 concluída.");erCompleteDoor(5);
      } else {
        document.getElementById("wa_msg").innerHTML=`<div class="er-msgbox err"><b>❌ Ainda não.</b> Procura os 3 sinais que provam que a mensagem não é de confiança.</div>`;
        erSetFeedback("err","❌ Tenta outra vez.");erPlaySound("wrong");
      }
    });
  } else if(idx===6){
    // Deepfake decision
    er_radioDoor(7,"Vês um vídeo no TikTok em que uma figura conhecida diz algo muito chocante e improvável. O que é mais inteligente fazer?",
      ["A. Acreditar logo — 'vídeo não mente' e partilhar com os amigos.",
       "B. Não partilhar, procurar o vídeo em fontes oficiais e verificar se é um deepfake.",
       "C. Criar um meme com o vídeo e pôr nas redes — já toda a gente está a falar disso.",
       "D. Ignorar completamente — qualquer coisa na internet é sempre mentira."],
      "B",D,7,addTry,erCompleteDoor,setFeedback,playSound,CE);
  } else if(idx===7){
    er_checkboxes3Door(8,"Escolhe <b>exactamente 3</b> boas práticas para combater Fake News.",
      ["Verificar sempre a fonte antes de acreditar ou partilhar",
       "Partilhar tudo o que pareça importante, mesmo sem confirmar",
       "Comparar a notícia com outros sites e meios confiáveis",
       "Acreditar em tudo o que tiver muitos likes e partilhas",
       "Falar com um adulto ou professor quando tens dúvidas sobre uma notícia",
       "Ignorar todas as notícias — é mais seguro assim"],
      [0,2,4],D,addTry,erCompleteDoor,setFeedback,playSound,CE);
  }
}

/* ═══════════════════ INIT ═══════════════════ */
// inject robot
["er-logo-robot","er-hub-robot","er-speech-robot"].forEach(id=>{const el=document.getElementById(id);if(el) el.innerHTML=VANBERTO_POPUP_SVG();});

/* wire up escaperooms card */
function erOpen(){
  document.getElementById("er-overlay").classList.add("visible");
  ["er-logo-robot","er-hub-robot","er-speech-robot"].forEach(function(id){
    var el=document.getElementById(id);
    if(el&&!el.innerHTML.trim()) el.innerHTML=VANBERTO_POPUP_SVG();
  });
  er_buildRoomsGrid();
  erShowHub();
}
function erClose(){
  document.getElementById("er-overlay").classList.remove("visible");
  if(erTimerInterval){clearInterval(erTimerInterval);erTimerInterval=null;}
}
window.vbER={open:erOpen,game:erShowGame,rooms:ROOMS,progress:er_getStoredProgress};
document.getElementById("er-btn-back").addEventListener("click",erClose);
document.getElementById("er-btn-universe").addEventListener("click",function(){ erClose(); showScreen("universe-screen"); });
document.querySelectorAll('.universe-card').forEach(function(card){
  if(card.getAttribute("data-universe")==="escaperooms"){
    card.addEventListener("click",function(e){
      e.stopImmediatePropagation();
      erOpen();
    });
  }
});

})(); // end Escape Rooms module

// Apply language after everything is initialized
applyLangToDOM();
if(typeof applyQxStatic==="function") applyQxStatic();

/* ════════════════════════════════════════════════════════════
   MELHORIAS INSPIRADAS NO DIA DA CRIANÇA
   Programador Web Sénior + Professora — sem bugs, sem erros
════════════════════════════════════════════════════════════ */
(function vbEnhancements(){

  /* ── 1. HELPER: ler o nome do aluno guardado ── */
  window._getStudentName = function(){
    try{ return (localStorage.getItem(STUDENT_NAME_KEY)||'').trim(); }catch(e){ return ''; }
  };

  /* ── 2. SAUDAÇÃO DO ALUNO no header (inspirada no playerNameHUD do Dia da Criança) ── */
  function _updateStudentGreeting(){
    const name=_getStudentName();
    const el=document.getElementById('vb-student-greeting');
    const nm=document.getElementById('vb-student-name-display');
    if(!el||!nm) return;
    if(name){ nm.textContent=name; el.classList.add('show'); }
    else { el.classList.remove('show'); }
  }
  _updateStudentGreeting();

  // Atualizar saudação quando o aluno escreve o nome no perfil
  const nameInput=document.getElementById('student-name-input');
  if(nameInput){
    nameInput.addEventListener('input',()=>{
      try{ localStorage.setItem(STUDENT_NAME_KEY,nameInput.value); }catch(e){}
      _updateStudentGreeting();
    });
    // Preencher o input com o nome guardado
    try{ nameInput.value=localStorage.getItem(STUDENT_NAME_KEY)||''; }catch(e){}
  }

  /* ── 3. OVERLAYS HTML dinâmicos — criados AQUI para MutationObserver os encontrar ── */

  // Overlay Pausa Professor
  const tOverlay=document.createElement('div');
  tOverlay.id='vb-teacher-overlay';
  tOverlay.innerHTML=`<div id="vb-teacher-box">
    <div class="vb-t-icon">⏸️</div>
    <h2>${currentLang==='en'?'Game Paused':'Jogo em Pausa'}</h2>
    <p>${currentLang==='en'?'The teacher paused the game.<br>Wait for instructions.':'A professora pausou o jogo.<br>Aguarda instruções para continuar.'}</p>
    <button id="vb-teacher-resume">${currentLang==='en'?'▶️ Continue':'▶️ Continuar a jogar'}</button>
  </div>`;
  document.body.appendChild(tOverlay);

  // Overlay "Sabias que…?" — entre níveis (inspirado em showHistory do Dia da Criança)
  const dOverlay=document.createElement('div');
  dOverlay.id='vb-didactic-overlay';
  dOverlay.innerHTML=`
    <div id="vb-didactic-box">
      <div id="vb-didactic-header">
        <span class="vb-d-icon">💡</span>
        <h3 id="vb-didactic-title">Sabias que…?</h3>
      </div>
      <div id="vb-didactic-body">
        <div id="vb-didactic-text"></div>
        <div id="vb-didactic-tip"></div>
      </div>
      <div id="vb-didactic-footer">
        <span id="vb-didactic-counter"></span>
        <button id="vb-didactic-ok">Continuar ▶️</button>
      </div>
    </div>`;
  document.body.appendChild(dOverlay);

  // Banner de retorno ao separador (discreto em baixo)
  const tabBanner=document.createElement('div');
  tabBanner.id='vb-tab-return-banner';
  tabBanner.textContent='🎮 Bem-vindo de volta!';
  document.body.appendChild(tabBanner);

  /* ── 4. pausedByTeacher — bloqueia o jogo (como no Dia da Criança) ── */
  let pausedByTeacher=false;

  function _applyPauseState(){
    const btn=document.getElementById('btn-teacher-pause');
    if(pausedByTeacher){
      tOverlay.classList.add('active');
      if(runningQueue) runningQueue=false; // para sequência
      if(btn){ btn.textContent=currentLang==='en'?'▶️ Resume':'▶️ Continuar'; btn.classList.add('paused'); }
    } else {
      tOverlay.classList.remove('active');
      if(btn){ btn.textContent=currentLang==='en'?'⏸️ Pause':'⏸️ Pausa'; btn.classList.remove('paused'); }
    }
  }

  function toggleTeacherPause(){
    pausedByTeacher=!pausedByTeacher;
    _applyPauseState();
  }

  const tBtn=document.getElementById('btn-teacher-pause');
  if(tBtn) tBtn.addEventListener('click',toggleTeacherPause);
  document.getElementById('vb-teacher-resume').addEventListener('click',toggleTeacherPause);
  tOverlay.addEventListener('click',(e)=>{ if(e.target===tOverlay) toggleTeacherPause(); });
  // Tecla P — igual ao Dia da Criança
  document.addEventListener('keydown',(e)=>{
    if((e.key==='p'||e.key==='P')&&!e.target.matches('input,textarea,select'))
      toggleTeacherPause();
  });

  /* ── 5. MutationObserver para overlay-open — criado DEPOIS dos overlays existirem ── */
  function _updateOverlayOpen(){
    const open=
      (document.getElementById('popup-complete')?.classList.contains('visible'))||
      (document.getElementById('popup-escape-quiz')?.classList.contains('visible'))||
      tOverlay.classList.contains('active')||
      dOverlay.classList.contains('active');
    document.body.classList.toggle('overlay-open',!!open);
  }
  const _obs=new MutationObserver(_updateOverlayOpen);
  ['popup-complete','popup-escape-quiz'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) _obs.observe(el,{attributes:true,attributeFilter:['class']});
  });
  _obs.observe(tOverlay,{attributes:true,attributeFilter:['class']});
  _obs.observe(dOverlay,{attributes:true,attributeFilter:['class']});
  _updateOverlayOpen();

  /* ── 6. "SABIAS QUE…?" — conteúdo didático entre níveis (como HISTORY do Dia da Criança) ──
     Pool de factos pedagógicos organizados por universo.
     Exibidos APÓS completar um nível, antes do próximo (via popup-next).
  ── */
  const DIDACTIC_FACTS = {
    ciberseg: [
      {title:"🔑 Palavras-passe fortes",text:"Uma palavra-passe forte deve ter pelo menos 12 caracteres, com letras maiúsculas, minúsculas, números e símbolos. Nunca uses a mesma palavra-passe em sítios diferentes — se um site for atacado, todas as tuas contas ficam em risco!"},
      {title:"🎣 O que é o Phishing?",text:"Phishing é uma técnica usada por criminosos para enganar pessoas e roubar dados. Enviam emails falsos a imitar bancos, redes sociais ou serviços. Regra de ouro: nunca cliques em links suspeitos e verifica sempre o endereço do remetente!"},
      {title:"🛡️ A tua privacidade importa",text:"Os teus dados pessoais — nome, morada, escola, número de telefone — são teus e deves protegê-los. Na internet, não partilhes esta informação com desconhecidos. Uma vez publicado, é muito difícil apagar!"},
      {title:"📱 Redes sociais com segurança",text:"Define o teu perfil como privado para que só os teus amigos vejam o que publicas. Não aceites pedidos de amizade de desconhecidos e pensa duas vezes antes de publicar qualquer coisa — a tua reputação digital é importante!"},
      {title:"🔒 Autenticação em dois fatores",text:"A autenticação em dois fatores (2FA) adiciona uma camada extra de segurança às tuas contas. Mesmo que alguém descubra a tua password, não consegue entrar sem o segundo fator (normalmente um código enviado para o teu telemóvel)."},
      {title:"🌐 HTTPS — ligação segura",text:"Quando vês um cadeado 🔒 e 'https://' no endereço de um site, significa que a ligação está encriptada. Nunca introduzas dados pessoais ou bancários em sites sem HTTPS — os teus dados poderiam ser interceptados!"},
    ],
    agua: [
      {title:"💧 Cada gota conta",text:"Uma torneira a pingar desperdiça até 5 500 litros de água por ano — mais do que uma pessoa bebe! Fechar bem as torneiras e reparar fugas são dos gestos mais simples e importantes que podemos fazer pelo planeta."},
      {title:"🌊 Ciclo da água",text:"A água evapora dos oceanos, forma nuvens, cai como chuva e filtra-se no solo para alimentar nascentes e rios. Este ciclo hidrológico mantém toda a vida na Terra. Poluir as nascentes ou desperdiçar água quebra este equilíbrio precioso."},
      {title:"🚿 Duche vs Banheira",text:"Um duche de 5 minutos usa cerca de 50 litros de água. Uma banheira cheia usa 150 litros! Escolher o duche em vez da banheira poupa até 100 litros por vez — numa família de 4 pessoas, são 400 litros poupados por dia."},
      {title:"♻️ Água potável no mundo",text:"Apenas 3% da água da Terra é doce, e grande parte está congelada nas calotes polares. Em Portugal temos sorte de ter água potável nas torneiras, mas 785 milhões de pessoas no mundo não têm acesso a água limpa. Poupar é um ato de solidariedade global!"},
    ],
    ar: [
      {title:"🌿 Árvores urbanas",text:"As árvores nas cidades são verdadeiras máquinas de ar limpo: absorvem CO₂, libertam oxigénio e podem reduzir a temperatura local até 5°C. Uma única árvore adulta pode absorver cerca de 22 kg de CO₂ por ano!"},
      {title:"🚲 Mobilidade sustentável",text:"Uma viagem de bicicleta de 5 km em vez de carro poupa cerca de 1 kg de CO₂. Se toda a gente em Portugal substituísse uma viagem de carro por semana por bicicleta ou a pé, a redução de emissões seria enorme — e a saúde melhorava!"},
      {title:"🏫 Ar interior nas escolas",text:"O CO₂ que respiramos acumula-se em espaços fechados. Ventilar uma sala de aula durante 10 minutos por dia reduz significativamente o CO₂ e melhora a concentração e o desempenho dos alunos. Abre as janelas!"},
      {title:"⚡ Energias renováveis",text:"Portugal é um dos líderes europeus em energias renováveis — a energia eólica já produz mais de 25% da nossa eletricidade! O sol e o vento são fontes de energia inesgotáveis que não poluem o ar."},
    ],
    ambiente: [
      {title:"♻️ A regra dos 3R",text:"Reduzir, Reutilizar e Reciclar são os três pilares do consumo responsável. A ordem importa: primeiro tenta Reduzir (compra menos), depois Reutilizar (usa mais tempo), e só depois Reciclar. Prevenir é sempre melhor do que remediar!"},
      {title:"🌳 Florestas tropicais",text:"As florestas tropicais albergam mais de 50% de todas as espécies vivas do planeta, apesar de cobrirem apenas 6% da sua superfície. São o 'pulmão da Terra' — absorvem enormes quantidades de CO₂. Cada árvore derrubada afeta todo o ecossistema."},
      {title:"🐠 Oceanos em perigo",text:"Mais de 8 milhões de toneladas de plástico entram nos oceanos por ano. Um saco de plástico pode demorar 500 anos a decompor-se. O plástico fragmenta-se em microplásticos que entram na cadeia alimentar — e chegam ao nosso prato!"},
      {title:"☀️ Energia solar em Portugal",text:"Portugal tem uma das maiores percentagens de sol na Europa — mais de 2 500 horas por ano! Um painel solar pode produzir eletricidade suficiente para uma família durante décadas, sem poluição e com custos a baixar todos os anos."},
    ],
    escape: [
      {title:"🔒 Segurança online — regras de ouro",text:"Nunca partilhes a tua password com ninguém, mesmo com amigos. Usa passwords diferentes em cada site. Ativa a autenticação em dois fatores sempre que possível. E quando tiveres dúvidas, fala sempre com um adulto de confiança!"},
      {title:"🎣 Reconhecer mensagens falsas",text:"Se receberes uma mensagem urgente a pedir dados, dinheiro ou a clicar num link — PARA e pensa! As mensagens de phishing usam urgência e medo para te fazer agir sem pensar. Verifica sempre a fonte antes de fazer qualquer coisa."},
      {title:"🛡️ Ficheiros suspeitos",text:"Nunca abras ficheiros enviados por desconhecidos ou que não estavas à espera de receber, mesmo que o remetente pareça ser alguém que conheces. Os vírus escondem-se muitas vezes em anexos de email ou ficheiros descarregados de sites não oficiais."},
    ],
    ciberseguras: [
      {title:"🦠 O que é o malware?",text:"Malware é qualquer software criado para danificar sistemas, roubar dados ou dar acesso não autorizado. Inclui vírus, trojans, ransomware e spyware. A melhor defesa é manter o antivírus atualizado e nunca clicar em links suspeitos!"},
      {title:"🔥 Firewalls",text:"Uma firewall é como uma parede de proteção entre o teu computador e o resto da internet. Analisa todo o tráfego de rede e bloqueia acessos suspeitos. Mantê-la ativa é essencial para proteger os teus dados!"},
      {title:"💾 Backups — cópias de segurança",text:"A regra 3-2-1: guarda 3 cópias dos teus dados, em 2 formatos diferentes, com 1 cópia fora de casa (na nuvem, por exemplo). Se o ransomware encriptar os teus ficheiros, tens sempre uma cópia segura!"},
    ],
  };

  // Pool para anti-repetição global (como usedQuizByTheme no Dia da Criança)
  const _usedFactsByUniverse={};

  function _pickDidacticFact(){
    const uid=currentUniverseId||'ciberseg';
    const pool=DIDACTIC_FACTS[uid]||DIDACTIC_FACTS.ciberseg;
    if(!_usedFactsByUniverse[uid]) _usedFactsByUniverse[uid]=new Set();
    const used=_usedFactsByUniverse[uid];
    if(used.size>=pool.length) used.clear(); // esgotou — reiniciar
    const available=pool.map((_,i)=>i).filter(i=>!used.has(i));
    const pick=available[Math.floor(Math.random()*available.length)];
    used.add(pick);
    return pool[pick];
  }

  // Mostrar "Sabias que…?" — chamado pelo popup-next (inspirado em showHistory)
  function showDidacticFact(onDone){
    if(!currentTheme||!currentUniverseId){ onDone&&onDone(); return; }
    const fact=_pickDidacticFact();
    const tip=getTipForTheme(currentThemeKey||'');
    const sName=_getStudentName();

    const titleEl=document.getElementById('vb-didactic-title');
    const textEl=document.getElementById('vb-didactic-text');
    const tipEl2=document.getElementById('vb-didactic-tip');
    const counterEl=document.getElementById('vb-didactic-counter');
    const okBtn=document.getElementById('vb-didactic-ok');

    if(titleEl) titleEl.textContent=sName?`${fact.title} — Boa, ${sName}!`:fact.title;
    if(textEl) textEl.textContent=fact.text;
    if(tipEl2 && tip){
      tipEl2.style.display='block';
      tipEl2.textContent=tip;
    } else if(tipEl2){
      tipEl2.style.display='none';
    }
    if(counterEl){
      const uid=currentUniverseId||'ciberseg';
      const pool=DIDACTIC_FACTS[uid]||[];
      const used=(_usedFactsByUniverse[uid]||new Set()).size;
      counterEl.textContent=currentLang==='en'?`Fact ${used} of ${pool.length}`:`Facto ${used} de ${pool.length}`;
    }

    // Adaptar cor do header ao universo atual
    const header=document.getElementById('vb-didactic-header');
    if(header){
      const uc=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-color').trim()||'#6366f1';
      const ud=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-dark').trim()||'#3730a3';
      if(uc&&ud) header.style.background=`linear-gradient(135deg,${uc},${ud})`;
    }

    // Botão OK
    if(okBtn){
      // Remover listener anterior
      const newOk=okBtn.cloneNode(true);
      okBtn.parentNode.replaceChild(newOk,okBtn);
      newOk.addEventListener('click',()=>{
        dOverlay.classList.remove('active');
        onDone&&onDone();
      });
    }

    dOverlay.classList.add('active');
  }

  /* ── 7. Interceptar popup-next para mostrar "Sabias que…?" antes de avançar ── */
  const _origPNBtn=document.getElementById('popup-next');
  if(_origPNBtn){
    // Remover listeners originais e recriar com interceptação
    const newPNBtn=_origPNBtn.cloneNode(true);
    _origPNBtn.parentNode.replaceChild(newPNBtn,_origPNBtn);

    newPNBtn.addEventListener('click',()=>{
      // Esconder popup de vitória
      const p=document.getElementById('popup-complete');
      if(p) p.classList.remove('visible');
      const lvls=levelsFor(currentCycleKey,currentTheme);
      const isLastLevel=!currentTheme||!lvls||currentLevelIndex>=lvls.length-1;

      // Verificar se é último nível (para fanfarra)
      const playFanfare=isLastLevel;

      // "Sabias que…?" antes de avançar (como showHistory no Dia da Criança)
      showDidacticFact(()=>{
        if(playFanfare) SFX.finalWin();
        // Executar navegação original
        if(!currentTheme||!lvls||isLastLevel){
          // Código do popup-next original para tema/ciclo completo
          const allCycleThemes=GAME_DATA&&GAME_DATA[currentCycleKey]?Object.entries(GAME_DATA[currentCycleKey].themes):[];
          const allThemesDone=allCycleThemes.length>0&&allCycleThemes.every(([tk,theme])=>{
            const st=themeStats(currentCycleKey,tk);
            return st.done>=(theme._designedCount||st.total);
          });
          const summary=THEME_SUMMARIES[currentThemeKey];
          const uc=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-color').trim()||'#6366f1';
          const ur=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-rgb').trim()||'99,102,241';
          const ud=getComputedStyle(document.documentElement).getPropertyValue('--u-pop-dark').trim()||'#3730a3';
          const sb=document.createElement("div");
          sb.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:14px;background:rgba(1,2,14,.88);backdrop-filter:blur(12px);animation:fadeIn .22s ease;";
          const cardStyle=`background:linear-gradient(155deg,rgba(8,10,28,.99),rgba(4,6,18,.99));border:1.5px solid rgba(${ur},.35);border-radius:26px;padding:30px 28px;max-width:440px;width:100%;box-shadow:0 0 60px rgba(${ur},.12),0 28px 70px rgba(0,0,0,.8);text-align:center;position:relative;animation:popIn .32s cubic-bezier(.34,1.56,.64,1) both;`;
          const glowLine=`<div style="position:absolute;top:0;left:12%;right:12%;height:1px;background:linear-gradient(90deg,transparent,rgba(${ur},.65),transparent);border-radius:99px;"></div>`;
          const btnPrimary=(id,txt)=>`<button id="${id}" style="background:linear-gradient(135deg,${ud},${uc});color:#fff;border:none;border-radius:999px;padding:11px 26px;font-size:.95rem;font-weight:800;cursor:pointer;font-family:Nunito,sans-serif;box-shadow:0 4px 20px rgba(${ur},.4);">${txt}</button>`;
          const btnSecondary=(id,txt)=>`<button id="${id}" style="background:rgba(255,255,255,.05);color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:10px 22px;font-size:.88rem;font-weight:700;cursor:pointer;font-family:Nunito,sans-serif;">${txt}</button>`;
          if(allThemesDone){
            const cycleOrder=["1c","2c","3c","sec"];
            const u=ALL_UNIVERSES[currentUniverseId];
            const curIdx=cycleOrder.indexOf(currentCycleKey);
            const nextCk=cycleOrder.slice(curIdx+1).find(ck=>u&&u.hasCycles&&u.hasCycles.includes(ck));
            const cycleEmojis={"1c":"🌱","2c":"🚀","3c":"🔬","sec":"🎓"};
            const _cl=ck=>T('cycle'+ck.charAt(0).toUpperCase()+ck.slice(1))||ck;
            const curLabel=_cl(currentCycleKey);
            const nextLabel=nextCk?_cl(nextCk):null;
            const summaryBlock=summary?`<p style="margin:10px 0 16px;font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.65;background:rgba(${ur},.07);border:1px solid rgba(${ur},.15);border-radius:12px;padding:10px 14px;">${summary}</p>`:'<div style="margin-bottom:16px;"></div>';
            sb.innerHTML=`<div style="${cardStyle}">${glowLine}<div style="font-size:2.8rem;margin-bottom:6px;">🏆</div><h3 style="margin:0 0 5px;font-size:1.3rem;color:${uc};font-family:Nunito,sans-serif;font-weight:900;text-shadow:0 0 22px rgba(${ur},.5);">${T('cycleComplete')}</h3><p style="margin:0 0 4px;font-size:.86rem;color:rgba(255,255,255,.5);">${T('cycleCompleteMsg',{cycle:curLabel})}</p>${summaryBlock}<div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;">${nextLabel?btnPrimary('_sb_next_cycle',(cycleEmojis[nextCk]||'➡️')+' '+T('nextCycleBtn',{cycle:nextLabel})):''}${btnSecondary('_sb_themes',T('viewThemesBtn'))}</div></div>`;
            document.body.appendChild(sb);
            const _bnc=document.getElementById("_sb_next_cycle");
            if(_bnc)_bnc.onclick=()=>{ sb.remove(); showThemesFor(nextCk); setFeedback("🚀 "+T("welcomeCycle",{cycle:nextLabel}),"ok"); };
            document.getElementById("_sb_themes").onclick=()=>{ sb.remove(); showThemesFor(currentCycleKey); setFeedback(T("cycleCompleteMsg2"),"ok"); };
          } else if(summary){
            sb.innerHTML=`<div style="${cardStyle}">${glowLine}<div style="font-size:2.4rem;margin-bottom:8px;">🎓</div><h3 style="margin:0 0 8px;font-size:1.2rem;color:${uc};font-family:Nunito,sans-serif;font-weight:900;">${T('themeComplete')}</h3><p style="margin:0 0 16px;font-size:.88rem;color:rgba(255,255,255,.6);line-height:1.65;background:rgba(${ur},.07);border:1px solid rgba(${ur},.15);border-radius:12px;padding:10px 14px;">${summary}</p>${btnPrimary('_sb_ok',T('continueBtn'))}</div>`;
            document.body.appendChild(sb);
            document.getElementById("_sb_ok").onclick=()=>{ sb.remove(); showThemesFor(currentCycleKey); setFeedback(T("themeCompleteMsg"),"ok"); };
          } else {
            setFeedback(T("themeCompleteMsg"),"ok");
            showThemesFor(currentCycleKey);
          }
          sb&&sb.addEventListener("click",e=>{ if(e.target===sb){ sb.remove(); showThemesFor(currentCycleKey); } });
        } else {
          // Próximo nível
          _transitionLevel(()=>{ loadLevel(currentLevelIndex+1); setFeedback("➡️ "+T("nextLevelMsg"),"ok"); });
        }
      });
    });
  }

  /* ── 8. PAUSA AUTOMÁTICA ao mudar de separador (como visibilitychange no Dia da Criança) ── */
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      if(runningQueue) runningQueue=false;
    } else {
      // Só mostrar banner se há nível ativo e não há overlays abertos
      if(levelState&&currentTheme&&!pausedByTeacher){
        const anyOpen=
          document.getElementById('popup-complete')?.classList.contains('visible')||
          document.getElementById('popup-escape-quiz')?.classList.contains('visible');
        if(!anyOpen){
          const b=document.getElementById('vb-tab-return-banner');
          if(b){
            b.textContent=currentLang==='en'?'🎮 Welcome back!':'🎮 Bem-vindo de volta!';
            b.classList.add('show');
            setTimeout(()=>b.classList.remove('show'),2500);
          }
        }
      }
    }
  });

  /* ── 9. AUTO-SAVE a cada 30s + ao sair (como saveGame do Dia da Criança) ── */
  setInterval(()=>{
    try{
      if(currentCycleKey&&currentThemeKey&&currentUniverseId){
        const p=loadProgress(currentCycleKey,currentThemeKey);
        saveProgress(currentCycleKey,currentThemeKey,p);
      }
    }catch(e){}
  },30000);

  window.addEventListener('beforeunload',()=>{
    try{
      if(currentCycleKey&&currentThemeKey&&currentUniverseId){
        const p=loadProgress(currentCycleKey,currentThemeKey);
        saveProgress(currentCycleKey,currentThemeKey,p);
      }
    }catch(e){}
  });

  /* ── 10. Atualizar saudação quando o idioma muda ── */
  // O applyLangToDOM já corre — apenas garantir que o greeting não perde o nome
  const _origSetLang=window.setLang;
  if(typeof _origSetLang==='function'){
    window.setLang=function(l){
      _origSetLang(l);
      _updateStudentGreeting();
      // Atualizar texto do botão de pausa
      const btn=document.getElementById('btn-teacher-pause');
      if(btn&&!pausedByTeacher) btn.textContent=l==='en'?'⏸️ Pause':'⏸️ Pausa';
    };
  }

})(); // fim vbEnhancements


/* ── MASCOTE FLUTUANTE (a única fora do tabuleiro) ── */
(function(){
  const MSG={
    pt:["Olá! Vamos jogar? 🎮","Escolhe uma aventura! 🗺️","Aprende a programar! 🚀","Pensa antes de agir! 🧠","Já espreitaste o tutorial? ❓","Boa sorte! 🌟","Força! 💪","Conto contigo! 🤩"],
    en:["Hi! Shall we play? 🎮","Pick an adventure! 🗺️","Learn to code! 🚀","Think before you act! 🧠","Have you seen the tutorial? ❓","Good luck! 🌟","Go for it! 💪","I'm counting on you! 🤩"]
  };
  const cv=document.getElementById("fixed-robot-cv"), bub=document.getElementById("fixedRobotBubble"), wrap=document.getElementById("fixed-robot-wrap");
  if(!cv||!bub||!wrap) return;
  const ctx=cv.getContext("2d");
  let busy=false, idx=0, t=null;
  const frame=(b,st,up)=>{ if(ctx) drawVanBerto(ctx,b,st,up); };
  frame(false,-1,false);
  const blink=()=>{ if(busy||!ctx) return; frame(true,-1,false); setTimeout(()=>{ if(!busy) frame(false,-1,false); },180); };
  const walk=()=>{ if(busy||!ctx) return; busy=true; let i=0; const iv=setInterval(()=>{ frame(false,i%2===0?0:1,false); if(++i>=6){ clearInterval(iv); frame(false,-1,false); busy=false; } },170); };
  const jump=()=>{ if(busy||!ctx) return; busy=true; cv.classList.remove("bounce"); void cv.offsetWidth; cv.classList.add("bounce"); frame("happy",-1,true); setTimeout(()=>{ frame(false,-1,false); busy=false; },700); };
  const msgs=()=>MSG[(typeof currentLang!=="undefined"&&currentLang==="en")?"en":"pt"];
  function show(m){ clearTimeout(t); bub.textContent=m; bub.classList.add("show"); jump(); t=setTimeout(()=>bub.classList.remove("show"),3200); }
  // cala-se quando está escondida, há um popup aberto ou o separador não está visível
  const blocked=()=>wrap.classList.contains("vb-hidden")||document.visibilityState==="hidden"||document.body.classList.contains("overlay-open")||!!document.querySelector("#popup-complete.visible,#popup-escape-quiz.visible");
  setTimeout(()=>{ if(!blocked()) show(msgs()[idx]); },1500);
  setInterval(()=>{ if(blocked()) return; idx=(idx+1)%msgs().length; show(msgs()[idx]); },18000);
  setInterval(()=>{ if(busy||blocked()) return; Math.random()<0.5?blink():walk(); },3600);
  const say=()=>{ const m=msgs(); show(m[Math.floor(Math.random()*m.length)]); };
  cv.addEventListener("click",say);
  cv.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); say(); } });
})();

/* ponte para o head.js (o jogo corre dentro de um fecho, por isso expõe só o necessário) */
window.vbApp={get cycle(){return currentCycleKey;},get moves(){return moveCount;},get er(){return window.vbER;},
  get resume(){return {
    info:function(){try{const raw=localStorage.getItem('vb_last_v1_'+currentUniverseId);if(!raw)return null;const s=JSON.parse(raw);
      const cy=GAME_DATA[s.ck],th=cy&&cy.themes[s.tk];if(!th)return null;const p=loadProgress(s.ck,s.tk)||{};
      return {ck:s.ck,tk:s.tk,cycle:cy.name,theme:th.name,emoji:th.emoji||'',level:(p.currentLevelIndex||0)+1,total:levelsFor(s.ck,th).length};}catch(e){return null;}},
    go:function(ck,tk){pickTheme(ck,tk);}};}};
document.dispatchEvent(new Event('vb-app-ready'));
}); // end DOMContentLoaded

