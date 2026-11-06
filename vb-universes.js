/* dados do jogo — gerado a partir do app.js */
window.VB_ALL_UNIVERSES = {

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
/* dados do jogo — gerado a partir do app.js */
window.VB_THEME_TIPS = {
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
