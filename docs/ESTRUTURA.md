# Hora do Código · guia para quem mantém o projeto

## Como o projeto está organizado

| Ficheiro | O que faz |
|---|---|
| `index.html`, `styles.css`, `head.js` | Menu principal e universos (Segurança na Internet, Ambiente, etc.) |
| `app.js` | Toda a lógica dos universos principais (≈6 700 linhas, ver «Porque é que o app.js não está dividido») |
| `professora.html` | Página da professora: soluções de referência e limiares de estrelas |
| `sw.js` | Cache offline. **Sempre que mudares um ficheiro, aumenta o número de versão (`vanbertos-vNN`).** |
| `blocos/fabrica.html`, `natal.html`, `casa-cao.html` | Os três jogos de **Missões de Robótica** (Fábrica de Carros, Fábrica do Pai Natal, Cão Robô) |
| `blocos/vb-jogo.css` | Estilos comuns aos três jogos (o que é só de um jogo fica no `<style>` desse jogo) |
| `blocos/vb-core.js` | `VB.stars` (regra das estrelas), `VB.build`, conversão para Python |
| `blocos/vb-editor.js` | Editor de blocos (Blockly) partilhado |
| `blocos/vb-gfx.js` | Texturas, sombras e ambiente 3D partilhados |
| `blocos/vb-solucoes.js` | Soluções de referência (`VB_SOL`), comparação no fim da missão (`VB.compare`) e cartão «Novo conceito» (`VB.intro`) |
| `blocos/vb-extras.js` | Modo teclado, anúncios para leitores de ecrã e ligação do cartão de conceito |
| `tests/` | Testes automáticos (ver abaixo) |

## Regra das estrelas (igual em todo o lado)

3★ até ao ótimo · 2★ até ótimo + 25 % (mínimo +1) · 1★ acima. Está em `VB.stars` (`vb-core.js`) e em `computeStars` (`app.js`); o teste garante que as duas dão sempre o mesmo resultado. As falhas e as pistas **não** tiram estrelas.

## Como acrescentar ou alterar uma missão de robótica

1. No jogo (`blocos/<jogo>.html`), edita a lista de missões do ciclo (`CY[...].lv`).
2. Atualiza o número ótimo de blocos na tabela `OPT` desse jogo.
3. Acrescenta a solução em Python em `blocos/vb-solucoes.js` (`VB_SOL`), **na mesma posição**.
4. Atualiza o texto e os limiares em `professora.html`.
5. Corre os testes (abaixo). Se o teste disser «N blocos mas OPT=M», um dos dois está errado.
6. Aumenta a versão em `sw.js`.

> Não acrescentes missões **no início** de um ciclo: o progresso dos alunos é guardado por posição (`ciclo-missão`) e ficaria trocado.

## Testes

```bash
node tests/run-tests.js          # rápido, só precisa de Node
python3 tests/verify-missoes.py  # corre a solução de cada missão no motor real (precisa de Playwright)
python3 tests/e2e-jogos.py       # cartões de conceito e jogar só com o teclado
```

`pip install playwright && playwright install chromium` para os dois últimos.

## Porque é que o `app.js` não está dividido

O ficheiro inteiro está dentro de uma única função (`document.addEventListener("DOMContentLoaded", () => { ... })`) e as suas secções partilham centenas de variáveis locais. Cortá-lo em vários ficheiros faria cada pedaço deixar de ver as variáveis dos outros. A divisão a sério exige converter para módulos ES (`import`/`export`) e testar universo a universo; deve ser feita como um trabalho à parte, nunca por corte automático.
Para te orientares, as secções estão assinaladas com cabeçalhos `/* ===== NOME ===== */`: pesquisa por exemplo `BFS SOLVER`, `LEVEL COMPLETE`, `CERTIFICADO` ou `ESCAPE ROOMS MODULE`.

## Gráficos 3D (Fábrica de Carros e Pai Natal)

- O chão tem reflexo real (a cena é desenhada duas vezes). O «Modo leve» desliga-o e é ativado sozinho em computadores lentos.
- A câmara aproxima-se do carro/brinquedo durante a montagem (`camZoom`). Os braços e duendes da frente escondem-se nessa altura para não taparem.
- O cão 3D do «Cão Robô» tem uma opção «🐶 Cão 3D» para voltar à ilustração.
