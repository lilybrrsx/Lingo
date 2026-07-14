/* ============================================================
   Lingo — LÓGICA DO APP
   ------------------------------------------------------------
   O conteúdo (palavras) NÃO está aqui — está em /dados/.
   Este arquivo cuida das telas, do áudio e de carregar cada
   tema só quando ele é aberto.
   ============================================================ */

window.Lingo = window.Lingo || { _conteudo: {} };
Lingo._conteudo = Lingo._conteudo || {};

/* Atalhos para o que veio do catálogo */
const IDIOMAS  = Lingo.IDIOMAS;
const PERFIS   = Lingo.PERFIS;
const CATALOGO = Lingo.CATALOGO;

/* ============================================================
   CARREGAMENTO SOB DEMANDA
   ------------------------------------------------------------
   Cada arquivo de tema (ex.: dados/ingles/comida.js) chama
   Lingo.registrar(...) quando é carregado, guardando as
   palavras na memória. Assim só baixamos o tema aberto.
   ============================================================ */
Lingo.registrar = function (idioma, categoria, palavras) {
  Lingo._conteudo[idioma] = Lingo._conteudo[idioma] || {};
  Lingo._conteudo[idioma][categoria] = palavras;
};

Lingo.carregarCategoria = function (idioma, categoria, aoTerminar, aoFalhar) {
  // Já está na memória? Devolve na hora.
  if (Lingo._conteudo[idioma] && Lingo._conteudo[idioma][categoria]) {
    aoTerminar(Lingo._conteudo[idioma][categoria]);
    return;
  }
  // Descobre o arquivo pelo catálogo.
  const item = (CATALOGO[idioma] || []).find(c => c.cat === categoria);
  if (!item) { if (aoFalhar) aoFalhar(); return; }
  // Injeta o script; quando terminar, os dados já estarão registrados.
  const script = document.createElement("script");
  script.src = item.arquivo;
  script.onload = () => {
    const dados = Lingo._conteudo[idioma] && Lingo._conteudo[idioma][categoria];
    if (dados) aoTerminar(dados);
    else if (aoFalhar) aoFalhar();
  };
  script.onerror = () => { if (aoFalhar) aoFalhar(); };
  document.body.appendChild(script);
};

/* ============================================================
   Elementos fixos da página
   ============================================================ */
const app = document.getElementById("app");
const btnVoltar = document.getElementById("btnVoltar");
const perfilAtualEl = document.getElementById("perfilAtual");
document.getElementById("ano").textContent = new Date().getFullYear();

let estado = { tela: "perfis", perfil: null, idioma: null, categoria: null };

/* ---------- Falar em voz alta (Text-to-Speech) ---------- */
function falar(texto, codigoIdioma) {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta áudio. Tente o Google Chrome.");
    return;
  }
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = codigoIdioma;
  fala.rate = 0.9;
  const vozes = window.speechSynthesis.getVoices();
  const vozIdeal = vozes.find(v => v.lang && v.lang.startsWith(codigoIdioma.slice(0, 2)));
  if (vozIdeal) fala.voice = vozIdeal;
  window.speechSynthesis.speak(fala);
}

/* ---------- Embaralhar uma lista ---------- */
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/* ---------- Progresso salvo no navegador ---------- */
function salvarConcluido() {
  if (!estado.perfil || !estado.idioma || !estado.categoria) return;
  localStorage.setItem(`lingo_${estado.perfil.id}_${estado.idioma}_${estado.categoria}`, "concluido");
}
function foiConcluido(perfilId, idioma, categoria) {
  return localStorage.getItem(`lingo_${perfilId}_${idioma}_${categoria}`) === "concluido";
}

/* ============================================================
   TELAS
   ============================================================ */

/* Tela 1: escolher o perfil */
function telaPerfis() {
  estado.tela = "perfis";
  btnVoltar.hidden = true;
  perfilAtualEl.textContent = "";
  app.innerHTML = `
    <h2 class="titulo-tela">Quem vai estudar hoje?</h2>
    <p class="subtitulo">Escolha seu perfil</p>
    <div class="grade">
      ${PERFIS.map(p => `
        <div class="cartao-opcao" data-perfil="${p.id}">
          <span class="emoji">${p.emoji}</span>
          <div class="nome">${p.nome}</div>
          <div class="info">${p.idiomas.map(i => IDIOMAS[i].bandeira).join(" ")}</div>
        </div>
      `).join("")}
    </div>
  `;
  app.querySelectorAll("[data-perfil]").forEach(el => {
    el.onclick = () => {
      estado.perfil = PERFIS.find(p => p.id === el.dataset.perfil);
      telaIdiomas();
    };
  });
}

/* Tela 2: escolher o idioma */
function telaIdiomas() {
  estado.tela = "idiomas";
  btnVoltar.hidden = false;
  perfilAtualEl.textContent = estado.perfil.emoji;
  app.innerHTML = `
    <h2 class="titulo-tela">Olá, ${estado.perfil.nome}! 👋</h2>
    <p class="subtitulo">Qual idioma vamos praticar?</p>
    <div class="grade">
      ${estado.perfil.idiomas.map(id => `
        <div class="cartao-opcao" data-idioma="${id}">
          <span class="emoji">${IDIOMAS[id].bandeira}</span>
          <div class="nome">${IDIOMAS[id].nome}</div>
        </div>
      `).join("")}
    </div>
  `;
  app.querySelectorAll("[data-idioma]").forEach(el => {
    el.onclick = () => { estado.idioma = el.dataset.idioma; telaCategorias(); };
  });
}

/* Tela 3: escolher o tema (lê só o CATÁLOGO, sem baixar palavras) */
function telaCategorias() {
  estado.tela = "categorias";
  btnVoltar.hidden = false;
  const temas = CATALOGO[estado.idioma] || [];
  app.innerHTML = `
    <h2 class="titulo-tela">${IDIOMAS[estado.idioma].bandeira} ${IDIOMAS[estado.idioma].nome}</h2>
    <p class="subtitulo">Escolha um tema para estudar</p>
    <div class="grade">
      ${temas.map(t => {
        const feito = foiConcluido(estado.perfil.id, estado.idioma, t.cat);
        return `
        <div class="cartao-opcao" data-cat="${t.cat}">
          <span class="emoji">${feito ? "✅" : t.emoji}</span>
          <div class="nome">${t.cat}</div>
          <div class="info">${t.qtd} palavras</div>
        </div>`;
      }).join("")}
    </div>
  `;
  app.querySelectorAll("[data-cat]").forEach(el => {
    el.onclick = () => { estado.categoria = el.dataset.cat; telaEstudo(); };
  });
}

/* Mostra "Carregando..." enquanto o tema é baixado */
function mostrarCarregando() {
  app.innerHTML = `<p class="subtitulo" style="text-align:center;padding:40px 0">⏳ Carregando "${estado.categoria}"...</p>`;
}
function mostrarErroCarregar() {
  app.innerHTML = `
    <p class="subtitulo" style="text-align:center;padding:30px 0">
      😕 Não consegui carregar este tema.
    </p>
    <button class="btn btn-primario" onclick="telaCategorias()">Voltar aos temas</button>`;
}

/* Tela 4: estudar com cartões — carrega o tema e então começa */
function telaEstudo() {
  estado.tela = "estudo";
  btnVoltar.hidden = false;
  mostrarCarregando();
  Lingo.carregarCategoria(estado.idioma, estado.categoria, iniciarEstudo, mostrarErroCarregar);
}

function iniciarEstudo(palavrasOriginais) {
  const palavras = embaralhar(palavrasOriginais);
  const code = IDIOMAS[estado.idioma].code;
  let indice = 0;
  let revelado = false;

  function desenhar() {
    const atual = palavras[indice];
    const progresso = Math.round((indice / palavras.length) * 100);
    app.innerHTML = `
      <div class="barra-progresso"><div style="width:${progresso}%"></div></div>
      <p class="subtitulo">${estado.categoria} • ${indice + 1} de ${palavras.length}</p>
      <div class="flashcard ${revelado ? "revelado" : ""}" id="cartao">
        <div class="palavra">${atual.pt}</div>
        ${revelado ? `
          <button class="btn-audio" id="btnAudio">🔊</button>
          <div class="traducao">${atual.tr}</div>
        ` : `<div class="dica">👆 Toque para ver a tradução</div>`}
      </div>
      ${revelado ? `
        <div class="acoes">
          <button class="btn btn-rever" id="btnRever">Preciso rever</button>
          <button class="btn btn-sabia" id="btnSabia">Já sabia! ✔</button>
        </div>` : ""}
    `;
    document.getElementById("cartao").onclick = (e) => {
      if (e.target.id === "btnAudio") return;
      if (!revelado) { revelado = true; desenhar(); falar(atual.tr, code); }
    };
    if (revelado) {
      document.getElementById("btnAudio").onclick = () => falar(atual.tr, code);
      document.getElementById("btnRever").onclick = proximo;
      document.getElementById("btnSabia").onclick = proximo;
    }
  }
  function proximo() {
    indice++;
    revelado = false;
    if (indice >= palavras.length) { salvarConcluido(); telaFim(); }
    else desenhar();
  }
  desenhar();
}

/* Tela 5: parabéns */
function telaFim() {
  estado.tela = "fim";
  btnVoltar.hidden = false;
  app.innerHTML = `
    <div class="parabens">
      <div class="emoji-grande">🎉</div>
      <h2 class="titulo-tela">Muito bem, ${estado.perfil.nome}!</h2>
      <p class="subtitulo">Você terminou o tema "${estado.categoria}".</p>
      <button class="btn btn-primario" id="btnQuiz">Fazer o quiz deste tema 🧠</button>
      <button class="btn btn-primario" id="btnDeNovo" style="background:var(--verde)">Estudar de novo 🔁</button>
      <button class="btn btn-primario" id="btnOutro" style="background:var(--amarelo)">Escolher outro tema</button>
    </div>
  `;
  document.getElementById("btnQuiz").onclick = telaQuiz;
  document.getElementById("btnDeNovo").onclick = telaEstudo;
  document.getElementById("btnOutro").onclick = telaCategorias;
}

/* Tela 6: quiz — também carrega o tema antes */
function telaQuiz() {
  estado.tela = "quiz";
  btnVoltar.hidden = false;
  mostrarCarregando();
  Lingo.carregarCategoria(estado.idioma, estado.categoria, iniciarQuiz, mostrarErroCarregar);
}

function iniciarQuiz(todas) {
  const perguntas = embaralhar(todas);
  const code = IDIOMAS[estado.idioma].code;
  let indice = 0;
  let acertos = 0;

  function desenhar() {
    const atual = perguntas[indice];
    const erradas = embaralhar(todas.filter(p => p.tr !== atual.tr)).slice(0, 3);
    const opcoes = embaralhar([atual, ...erradas]);
    const progresso = Math.round((indice / perguntas.length) * 100);
    app.innerHTML = `
      <div class="barra-progresso"><div style="width:${progresso}%"></div></div>
      <p class="subtitulo">Quiz • ${indice + 1} de ${perguntas.length}</p>
      <h2 class="titulo-tela">Como se diz "${atual.pt}"?</h2>
      <div id="opcoes">
        ${opcoes.map(o => `<button class="opcao-quiz" data-tr="${o.tr}">${o.tr}</button>`).join("")}
      </div>
    `;
    app.querySelectorAll(".opcao-quiz").forEach(btn => {
      btn.onclick = () => {
        const acertou = btn.dataset.tr === atual.tr;
        falar(atual.tr, code);
        app.querySelectorAll(".opcao-quiz").forEach(b => {
          b.disabled = true;
          if (b.dataset.tr === atual.tr) b.classList.add("certa");
          else if (b === btn) b.classList.add("errada");
        });
        if (acertou) acertos++;
        setTimeout(() => {
          indice++;
          if (indice >= perguntas.length) telaResultadoQuiz(acertos, perguntas.length);
          else desenhar();
        }, 1100);
      };
    });
  }
  desenhar();
}

/* Tela 7: resultado do quiz */
function telaResultadoQuiz(acertos, total) {
  estado.tela = "resultado";
  const nota = Math.round((acertos / total) * 100);
  const emoji = nota >= 80 ? "🏆" : nota >= 50 ? "👍" : "💪";
  app.innerHTML = `
    <div class="parabens">
      <div class="emoji-grande">${emoji}</div>
      <h2 class="titulo-tela">${acertos} de ${total} certas!</h2>
      <p class="subtitulo">Nota: ${nota}%</p>
      <button class="btn btn-primario" id="btnRefazer">Refazer quiz</button>
      <button class="btn btn-primario" id="btnTemas" style="background:var(--verde)">Escolher outro tema</button>
    </div>
  `;
  document.getElementById("btnRefazer").onclick = telaQuiz;
  document.getElementById("btnTemas").onclick = telaCategorias;
}

/* ---------- Botão "Voltar" ---------- */
btnVoltar.onclick = () => {
  if (estado.tela === "idiomas") telaPerfis();
  else if (estado.tela === "categorias") telaIdiomas();
  else if (["estudo", "fim", "quiz", "resultado"].includes(estado.tela)) telaCategorias();
  else telaPerfis();
};

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

/* ---------- Começa o app ---------- */
telaPerfis();
