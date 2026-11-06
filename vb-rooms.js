/* dados do jogo — gerado a partir do app.js */
window.VB_ROOMS = {

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
       "Porta 5: a resposta certa é a aleatória: Xk#9!mPq3@Lr. Aleatória, longa, sem padrão previsível."],
      ["Porta 6: lê o cenário com atenção — há 4 opções muito parecidas.",
       "Porta 6: nunca cliques em links de emails urgentes. Urgência é técnica de phishing.",
       "Porta 6: a resposta certa é a que vai diretamente ao site oficial do banco, sem usar o link."],
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
<b>Porta 5</b> — Resposta: <b>Xk#9!mPq3@Lr</b> (aleatória, longa, sem palavras reais). Erradas: Portugal2024 (palavra+ano fácil de adivinhar), 12345678! (sequência numérica), pedro1234! (nome próprio+números previsível).<br>
<b>Porta 6</b> — Resposta: <b>ir ao site oficial</b> (apagar o email e ir diretamente ao site oficial do banco sem usar o link). A urgência falsa é a técnica central do phishing — nunca clicar em links de emails suspeitos.<br>
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
    pedagogicalSummary:"💧 Cada gota conta! Uma torneira a pingar desperdiça +5 500 litros por ano. Um duche de 5 minutos usa 40L — a banheira usa 120L. Pequenas ações quotidianas podem salvar milhares de litros e proteger o futuro do planeta.",
    hints:[
      ["Porta 1: 4 frases — 3 são verdadeiras. Cuidado com mitos sobre desperdício!",
       "Porta 1: a frase 2 é mito — uma torneira a pingar desperdiça ~5500 litros/ano.",
       "Porta 1: verdadeiras 1, 3 e 4. Código = (3)(1)(3)(4) = 3134."],
      ["Porta 2: 6 opções — algumas parecem poupar água mas não tanto quanto pensas.",
       "Porta 2: a banheira usa ~120L. Um duche de 5 min usa ~40L. Qual poupa mais?",
       "Porta 2: corretas 1, 3, 4, 6. Erradas: 2 (banheira) e 5 (torneira aberta ao ensaboar)."],
      ["Porta 3: o ciclo da água tem 4 fases — em que ordem acontecem?",
       "Porta 3: começa pela evaporação (sol aquece a água) e termina com infiltração (solo).",
       "Porta 3: Evaporação → Condensação → Precipitação → Infiltração."],
      ["Porta 4: são 12 letras sobre uma fase do ciclo da água — quando a água cai do céu.",
       "Porta 4: pensa na chuva, neve ou granizo — todas são formas desta fase.",
       "Porta 4: a palavra é PRECIPITACAO."],
      ["Porta 5: calcula com atenção — duche × litros × pessoas × dias.",
       "Porta 5: duche de 4 min × 8L/min = 32L/pessoa/dia. Faz as contas para 4 pessoas, 7 dias.",
       "Porta 5: a opção certa é o duche de 4 min — 4×4×8×7 + 12×7 = 896+84 = 980L/semana. A mais eficiente!"],
      ["Porta 6: quando há fuga de água, qual é a prioridade?",
       "Porta 6: avisar sempre um adulto — e fechar a torneira se for seguro fazê-lo.",
       "Porta 6: a resposta certa é avisar adulto/professor e fechar a torneira."],
      ["Porta 7: 2 palavras (sem acento) sobre água que podemos consumir.",
       "Porta 7: 4+7 letras — o adjetivo descreve a água segura para beber.",
       "Porta 7: a expressão é AGUA POTAVEL."],
      ["Porta 8: escreve pelo menos 3 práticas diferentes de poupança de água.",
       "Porta 8: pensa em: torneira, duche, máquina, rega, fuga...",
       "Porta 8: ex. fechar torneira ao escovar dentes, duche curto, regar ao fim do dia."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: 1, 3 e 4; código <b>3134</b>. (Frase 2 é mito: torneira a pingar desperdiça ~5500L/ano.)<br>
<b>Porta 2</b> — Corretas: 1, 3, 4, 6. Erradas: 2 (banheira usa ~120L vs duche 5min=40L), 5 (torneira aberta ao ensaboar desperdiça ~8L).<br>
<b>Porta 3</b> — Ordem: Evaporação → Condensação → Precipitação → Infiltração.<br>
<b>Porta 4</b> — Anagrama: <b>PRECIPITACAO</b>.<br>
<b>Porta 5</b> — Resposta: duche de 4 min (duche 4min×4pessoas×7dias + lava-loiças 1x/dia = ~980L/semana, o mais eficiente).<br>
<b>Porta 6</b> — Resposta: avisar adulto e fechar a torneira se for seguro.<br>
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
       "Porta 3: a resposta certa é: muitas pessoas sem ventilação é a maior fonte de CO₂ interior."],
      ["Porta 4: 8 letras sobre a contaminação do ar por substâncias nocivas — gases, fumo, partículas.",
       "Porta 4: é o efeito de gases de escape, fábricas e queimadas no ar que respiramos.",
       "Porta 4: a palavra é POLUICAO."],
      ["Porta 5: usa a fórmula — distância × 2 × 5 dias × emissão por km.",
       "Porta 5: 15km×2×5 = 150km/semana. Multiplica pelo fator de cada transporte.",
       "Porta 5: Comboio: 150×14g = 2100g = 2,1kg CO₂. O mais eficiente!"],
      ["Porta 6: a sala tem CO₂ elevado. Qual é a solução mais eficaz e segura?",
       "Porta 6: abrir janelas renova o ar. Avisar um adulto é sempre a atitude certa.",
       "Porta 6: a resposta certa é abrir janelas para ventilar e avisar um adulto/professor."],
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
<b>Porta 3</b> — Resposta: <b>muitas pessoas sem ventilação</b> (muitas pessoas sem ventilação — acumulação de CO₂ e humidade).<br>
<b>Porta 4</b> — Anagrama: <b>POLUICAO</b> (8 letras, sem acento).<br>
<b>Porta 5</b> — Resposta: comboio (15×2×5×14g = 2.100g = 2,1kg CO₂/semana).<br>
<b>Porta 6</b> — Resposta: abrir janelas + avisar adulto.<br>
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
       "Sala 3: o clickbait é o título exagerado, misterioso, sem fonte, apela à emoção."],
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
       "Sala 7: a resposta certa é não partilhar e procurar o vídeo em fontes oficiais para verificar se é deepfake."],
      ["Sala 8: escolhe exatamente 3 boas práticas contra Fake News.",
       "Sala 8: verificar fonte, usar facto-checkers e não partilhar sem confirmar são as essenciais.",
       "Sala 8: corretas: verificar fonte, consultar sites de facto-checking e não partilhar na dúvida."]
    ],
    teacherNotes:`<h4>📋 Notas para a Professora</h4>
<b>Porta 1</b> — Verdadeiras: <b>2 e 4</b> (fotos podem ser deepfakes; fact-checking é ferramenta essencial); código <b>224</b>. Erradas: 1 (fotos podem ser manipuladas), 3 (título não chega para verificar).<br>
<b>Porta 2</b> — Anagrama: <b>DESINFORMACAO</b> (13 letras, sem acentos).<br>
<b>Porta 3</b> — Clickbait: o título <b>alarmista</b> (maiúsculas, emojis excessivos, linguagem alarmante sem fonte).<br>
<b>Porta 4</b> — Ordem: Parar → Verificar quem publicou → Comparar com outras fontes → Só partilhar com certeza.<br>
<b>Porta 5</b> — Ligações: Urgência extrema↔manipulação, Sem fonte/autor↔informação inventada, Erros ortográficos↔não revisto, Emojis/maiúsculas↔clickbait.<br>
<b>Porta 6</b> — 3 sinais corretos: <b>1</b> (urgência extrema), <b>3</b> (sem fonte/data/autor), <b>5</b> (afirmação chocante impossível de verificar). Errados: 2 (estar em WhatsApp não é sinal) e 4 (emojis de limão não são sinal).<br>
<b>Porta 7</b> — Resposta: <b>não partilhar</b> (e procurar em fontes oficiais e verificar se é deepfake).<br>
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
