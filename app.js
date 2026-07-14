/* ============================================================
   Lingo — LÓGICA DO APP
   ------------------------------------------------------------
   O conteúdo (palavras) NÃO está aqui — está em /dados/.
   Este arquivo cuida das telas, do áudio, do carregamento
   sob demanda e da revisão espaçada.
   ============================================================ */

window.Lingo = window.Lingo || { _conteudo: {} };
Lingo._conteudo = Lingo._conteudo || {};

const IDIOMAS  = Lingo.IDIOMAS;
const PERFIS   = Lingo.PERFIS;
const CATALOGO = Lingo.CATALOGO;
const NIVEIS   = Lingo.NIVEIS;
const SRS      = Lingo.SRS;

/* ============================================================
   CARREGAMENTO SOB DEMANDA
   ============================================================ */
Lingo.registrar = function (idioma, categoria, palavras) {
  Lingo._conteudo[idioma] = Lingo._conteudo[idioma] || {};
  Lingo._conteudo[idioma][categoria] = palavras;
};

Lingo.carregarCategoria = function (idioma, categoria, aoTerminar, aoFalhar) {
  if (Lingo._conteudo[idioma] && Lingo._conteudo[idioma][categoria]) {
    aoTerminar(Lingo._conteudo[idioma][categoria]);
    return;
  }
  const item = (CATALOGO[idioma] || []).find(c => c.cat === categoria);
  if (!item) { if (aoFalhar) aoFalhar(); return; }
  const script = document.createElement("script");
  script.src = item.arquivo;
  script.onload = () => {
    const dados = Lingo._conteudo[idioma] && Lingo._conteudo[idioma][categoria];
    if (dados) aoTerminar(dados); else if (aoFalhar) aoFalhar();
  };
  script.onerror = () => { if (aoFalhar) aoFalhar(); };
  document.body.appendChild(script);
};

/* ============================================================
   Elementos fixos + estado
   ============================================================ */
const app = document.getElementById("app");
const btnVoltar = document.getElementById("btnVoltar");
const perfilAtualEl = document.getElementById("perfilAtual");
document.getElementById("ano").textContent = new Date().getFullYear();

let estado = { tela: "perfis", perfil: null, idioma: null, categoria: null, nivel: "A1" };

/* ---------- Falar em voz alta ---------- */
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

/* ---------- Utilidades ---------- */
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}
function nivelDescricao(id) {
  const n = NIVEIS.find(x => x.id === id);
  return n ? n.desc : "";
}

/* ---------- Progresso de "tema concluído" ---------- */
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
    el.onclick = () => { estado.perfil = PERFIS.find(p => p.id === el.dataset.perfil); telaIdiomas(); };
  });
}

/* Tela 2: escolher o idioma (mostra quantas revisões estão pendentes) */
function telaIdiomas() {
  estado.tela = "idiomas";
  btnVoltar.hidden = false;
  perfilAtualEl.textContent = estado.perfil.emoji;
  app.innerHTML = `
    <h2 class="titulo-tela">Olá, ${estado.perfil.nome}! 👋</h2>
    <p class="subtitulo">Qual idioma vamos praticar?</p>
    <div class="grade">
      ${estado.perfil.idiomas.map(id => {
        const dev = SRS.contarDevidos(estado.perfil.id, id);
        return `
        <div class="cartao-opcao" data-idioma="${id}">
          <span class="emoji">${IDIOMAS[id].bandeira}</span>
          <div class="nome">${IDIOMAS[id].nome}</div>
          ${dev > 0 ? `<div class="info">🔁 ${dev} para revisar</div>` : `<div class="info">&nbsp;</div>`}
        </div>`;
      }).join("")}
    </div>
  `;
  app.querySelectorAll("[data-idioma]").forEach(el => {
    el.onclick = () => { estado.idioma = el.dataset.idioma; estado.nivel = "A1"; telaCategorias(); };
  });
}

/* Tela 3: níveis + temas (lê só o CATÁLOGO) + botão de revisão */
function telaCategorias() {
  estado.tela = "categorias";
  btnVoltar.hidden = false;
  const temas = CATALOGO[estado.idioma] || [];
  const niveisComConteudo = new Set(temas.map(t => t.nivel));
  const dev = SRS.contarDevidos(estado.perfil.id, estado.idioma);
  const temasNivel = temas.filter(t => t.nivel === estado.nivel);

  app.innerHTML = `
    <h2 class="titulo-tela">${IDIOMAS[estado.idioma].bandeira} ${IDIOMAS[estado.idioma].nome}</h2>
    ${dev > 0
      ? `<button class="btn-revisar" id="btnRevisar">🔁 Revisar agora (${dev})</button>`
      : `<p class="subtitulo">✅ Nenhuma revisão pendente. Estude um tema abaixo!</p>`}
    <div class="filtro-niveis">
      ${NIVEIS.map(n => `
        <button class="btn-nivel ${estado.nivel === n.id ? "ativo" : ""} ${niveisComConteudo.has(n.id) ? "" : "vazio"}" data-nivel="${n.id}">${n.id}</button>
      `).join("")}
    </div>
    <p class="subtitulo"><strong>${estado.nivel}</strong> — ${nivelDescricao(estado.nivel)}</p>
    <div class="grade">
      ${temasNivel.length ? temasNivel.map(t => {
        const feito = foiConcluido(estado.perfil.id, estado.idioma, t.cat);
        return `
        <div class="cartao-opcao" data-cat="${t.cat}">
          <span class="emoji">${feito ? "✅" : t.emoji}</span>
          <div class="nome">${t.cat}</div>
          <div class="info">${t.qtd} palavras</div>
        </div>`;
      }).join("") : `<p class="subtitulo" style="grid-column:1/-1">🚧 Conteúdo do nível ${estado.nivel} em breve.</p>`}
    </div>
  `;

  const bRev = document.getElementById("btnRevisar");
  if (bRev) bRev.onclick = telaRevisao;
  app.querySelectorAll("[data-nivel]").forEach(el => {
    el.onclick = () => { estado.nivel = el.dataset.nivel; telaCategorias(); };
  });
  app.querySelectorAll("[data-cat]").forEach(el => {
    el.onclick = () => { estado.categoria = el.dataset.cat; telaModos(); };
  });
}

/* Tela 3b: como praticar este tema (uma habilidade por cartão).
   É aqui que as próximas habilidades vão entrar: ditado, ler, escrever. */
function telaModos() {
  estado.tela = "modos";
  btnVoltar.hidden = false;
  const t = (CATALOGO[estado.idioma] || []).find(x => x.cat === estado.categoria);
  app.innerHTML = `
    <h2 class="titulo-tela">${t ? t.emoji : "📚"} ${estado.categoria}</h2>
    <p class="subtitulo">Como você quer praticar?</p>
    <div class="grade">
      <div class="cartao-opcao" data-modo="cartoes">
        <span class="emoji">📚</span>
        <div class="nome">Cartões</div>
        <div class="info">Aprender as palavras</div>
      </div>
      <div class="cartao-opcao" data-modo="falar">
        <span class="emoji">🗣️</span>
        <div class="nome">Falar</div>
        <div class="info">Praticar a pronúncia</div>
      </div>
      <div class="cartao-opcao" data-modo="quiz">
        <span class="emoji">🧠</span>
        <div class="nome">Quiz</div>
        <div class="info">Testar o que sabe</div>
      </div>
    </div>
  `;
  app.querySelectorAll("[data-modo]").forEach(el => {
    el.onclick = () => {
      const m = el.dataset.modo;
      if (m === "cartoes") telaEstudo();
      else if (m === "falar") telaFala();
      else telaQuiz();
    };
  });
}

/* ---------- Carregando / erro ---------- */
function mostrarCarregando() {
  app.innerHTML = `<p class="subtitulo" style="text-align:center;padding:40px 0">⏳ Carregando "${estado.categoria}"...</p>`;
}
function mostrarErroCarregar() {
  app.innerHTML = `
    <p class="subtitulo" style="text-align:center;padding:30px 0">😕 Não consegui carregar este tema.</p>
    <button class="btn btn-primario" onclick="telaCategorias()">Voltar aos temas</button>`;
}

/* Tela 4: estudar com cartões (e alimentar a revisão espaçada) */
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
      document.getElementById("btnRever").onclick = () => proximo("errei");
      document.getElementById("btnSabia").onclick = () => proximo("bom");
    }
  }

  function proximo(qualidade) {
    // alimenta a revisão espaçada com a resposta desta palavra
    SRS.responder(estado.perfil.id, estado.idioma, estado.categoria, palavras[indice], qualidade);
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
      <p class="subtitulo">Você terminou o tema "${estado.categoria}". As palavras entraram na sua revisão. 🔁</p>
      <button class="btn btn-primario btn-microfone" id="btnFalarAgora">Praticar falando 🗣️</button>
      <button class="btn btn-primario" id="btnQuiz">Fazer o quiz deste tema 🧠</button>
      <button class="btn btn-primario" id="btnDeNovo" style="background:var(--verde)">Estudar de novo 🔁</button>
      <button class="btn btn-primario" id="btnOutro" style="background:var(--amarelo)">Escolher outro tema</button>
    </div>
  `;
  document.getElementById("btnFalarAgora").onclick = telaFala;
  document.getElementById("btnQuiz").onclick = telaQuiz;
  document.getElementById("btnDeNovo").onclick = telaEstudo;
  document.getElementById("btnOutro").onclick = telaCategorias;
}

/* ============================================================
   FALAR — a pessoa fala no microfone e o app confere
   ============================================================ */
function telaFala() {
  estado.tela = "fala";
  btnVoltar.hidden = false;
  mostrarCarregando();
  Lingo.carregarCategoria(estado.idioma, estado.categoria, iniciarFala, mostrarErroCarregar);
}

/* Aviso quando o microfone não pode funcionar */
function telaFalaIndisponivel(motivo) {
  estado.tela = "fala";
  const texto = motivo === "sem-suporte"
    ? `Seu navegador não tem reconhecimento de voz. Use o <strong>Google Chrome</strong> para praticar a fala.`
    : `O microfone só funciona em conexão segura (<strong>https</strong>).<br><br>
       Como você abriu o arquivo direto do computador, o navegador bloqueia o microfone.
       Publique o app no GitHub Pages e abra pelo link <strong>https://</strong> — aí a fala funciona. 😊`;
  app.innerHTML = `
    <div class="aviso">🎤 <strong>Prática de fala indisponível aqui</strong><br><br>${texto}</div>
    <button class="btn btn-primario" id="btnVoltarModos">Voltar</button>
  `;
  document.getElementById("btnVoltarModos").onclick = telaModos;
}

function iniciarFala(palavrasOriginais) {
  if (!Lingo.Fala.disponivel()) { telaFalaIndisponivel("sem-suporte"); return; }
  if (!Lingo.Fala.contextoSeguro()) { telaFalaIndisponivel("inseguro"); return; }

  const code = IDIOMAS[estado.idioma].code;
  const palavras = embaralhar(palavrasOriginais);
  let indice = 0;
  let fase = "pronto";        // pronto | ouvindo | resultado
  let resultado = null;       // { acertou, quase, ouvido } ou { erroMsg }
  let melhorAcerto = false;   // melhor tentativa desta palavra
  let acertos = 0;

  function desenhar() {
    const atual = palavras[indice];
    const progresso = Math.round((indice / palavras.length) * 100);
    app.innerHTML = `
      <div class="barra-progresso"><div style="width:${progresso}%"></div></div>
      <p class="subtitulo">🗣️ Falar • ${indice + 1} de ${palavras.length}</p>
      <div class="flashcard">
        <div class="dica">${atual.pt}</div>
        <div class="palavra">${atual.tr}</div>
        <button class="btn-audio" id="btnOuvir" title="Ouvir a pronúncia">🔊</button>
        ${fase === "ouvindo" ? `<div class="ouvindo">🔴 Ouvindo... fale agora!</div>` : ""}
        ${fase === "resultado" ? blocoResultado() : ""}
      </div>
      ${blocoBotoes()}
    `;
    document.getElementById("btnOuvir").onclick = () => falar(atual.tr, code);

    if (fase === "pronto") {
      document.getElementById("btnFalar").onclick = comecarAOuvir;
    }
    if (fase === "resultado") {
      document.getElementById("btnTentar").onclick = () => { fase = "pronto"; resultado = null; desenhar(); };
      document.getElementById("btnProxima").onclick = proxima;
    }
  }

  function blocoResultado() {
    if (resultado.erroMsg) return `<div class="fala-erro">😕 ${resultado.erroMsg}</div>`;
    if (resultado.acertou) return `<div class="fala-ok">✅ Perfeito!</div>`;
    if (resultado.quase) return `
      <div class="fala-quase">🤏 Quase!</div>
      <div class="fala-ouvido">Eu ouvi: "${resultado.ouvido}"</div>`;
    return `
      <div class="fala-erro">❌ Não foi dessa vez</div>
      <div class="fala-ouvido">Eu ouvi: "${resultado.ouvido}"</div>`;
  }

  function blocoBotoes() {
    if (fase === "pronto") return `<button class="btn btn-primario btn-microfone" id="btnFalar">🎤 Falar</button>`;
    if (fase === "ouvindo") return `<button class="btn btn-primario" disabled>Ouvindo...</button>`;
    return `
      <div class="acoes">
        <button class="btn btn-rever" id="btnTentar">Tentar de novo</button>
        <button class="btn btn-sabia" id="btnProxima">Próxima →</button>
      </div>`;
  }

  function comecarAOuvir() {
    fase = "ouvindo";
    desenhar();
    const atual = palavras[indice];
    Lingo.Fala.ouvir(code,
      (alternativas) => {
        resultado = Lingo.Fala.avaliar(atual.tr, alternativas);
        if (resultado.acertou) melhorAcerto = true;
        fase = "resultado";
        desenhar();
      },
      (erro) => {
        resultado = { erroMsg: Lingo.Fala.mensagemErro(erro) };
        fase = "resultado";
        desenhar();
      }
    );
  }

  function proxima() {
    // a fala também alimenta a revisão espaçada
    SRS.responder(estado.perfil.id, estado.idioma, estado.categoria, palavras[indice], melhorAcerto ? "bom" : "errei");
    if (melhorAcerto) acertos++;
    indice++;
    fase = "pronto";
    resultado = null;
    melhorAcerto = false;
    if (indice >= palavras.length) telaFalaFim(acertos, palavras.length);
    else desenhar();
  }

  desenhar();
}

function telaFalaFim(acertos, total) {
  estado.tela = "falaFim";
  const nota = Math.round((acertos / total) * 100);
  const emoji = nota >= 80 ? "🎤" : nota >= 50 ? "👍" : "💪";
  app.innerHTML = `
    <div class="parabens">
      <div class="emoji-grande">${emoji}</div>
      <h2 class="titulo-tela">Você pronunciou ${acertos} de ${total}!</h2>
      <p class="subtitulo">Falar em voz alta é o que mais acelera a fluência. 🗣️</p>
      <button class="btn btn-primario" id="btnDeNovo">Praticar de novo</button>
      <button class="btn btn-primario" id="btnModos" style="background:var(--verde)">Outras práticas</button>
    </div>
  `;
  document.getElementById("btnDeNovo").onclick = telaFala;
  document.getElementById("btnModos").onclick = telaModos;
}

/* Tela 6: revisão espaçada (as palavras "vencidas" de todos os temas) */
function telaRevisao() {
  estado.tela = "revisao";
  btnVoltar.hidden = false;
  const code = IDIOMAS[estado.idioma].code;
  let fila = embaralhar(SRS.devidos(estado.perfil.id, estado.idioma));
  let revisados = 0;
  let revelado = false;

  if (fila.length === 0) { telaRevisaoFim(0); return; }

  function desenhar() {
    if (fila.length === 0) { telaRevisaoFim(revisados); return; }
    const atual = fila[0];
    app.innerHTML = `
      <p class="subtitulo">🔁 Revisão • ${revisados} feitas • ${fila.length} na fila</p>
      <div class="flashcard ${revelado ? "revelado" : ""}" id="cartao">
        <div class="palavra">${atual.pt}</div>
        ${revelado ? `
          <button class="btn-audio" id="btnAudio">🔊</button>
          <div class="traducao">${atual.tr}</div>
          <div class="dica">${atual.categoria || ""}</div>
        ` : `<div class="dica">👆 Toque para ver a resposta</div>`}
      </div>
      ${revelado ? `
        <div class="acoes">
          <button class="btn btn-errei" id="btnErrei">Errei</button>
          <button class="btn btn-bom" id="btnBom">Lembrei</button>
          <button class="btn btn-facil" id="btnFacil">Fácil 😎</button>
        </div>` : ""}
    `;
    document.getElementById("cartao").onclick = (e) => {
      if (e.target.id === "btnAudio") return;
      if (!revelado) { revelado = true; desenhar(); falar(atual.tr, code); }
    };
    if (revelado) {
      document.getElementById("btnAudio").onclick = () => falar(atual.tr, code);
      const responder = (q) => {
        SRS.responder(estado.perfil.id, estado.idioma, atual.categoria, atual, q);
        const card = fila.shift();
        // se errou, mostra de novo no fim da sessão (uma vez)
        if (q === "errei" && !card._reencaixado) { card._reencaixado = true; fila.push(card); }
        revisados++;
        revelado = false;
        desenhar();
      };
      document.getElementById("btnErrei").onclick = () => responder("errei");
      document.getElementById("btnBom").onclick = () => responder("bom");
      document.getElementById("btnFacil").onclick = () => responder("facil");
    }
  }
  desenhar();
}

function telaRevisaoFim(n) {
  estado.tela = "revisaoFim";
  const msg = n === 0
    ? "Nada pendente por agora. Volte mais tarde! 😊"
    : `Você revisou ${n} ${n === 1 ? "palavra" : "palavras"}.`;
  app.innerHTML = `
    <div class="parabens">
      <div class="emoji-grande">🏅</div>
      <h2 class="titulo-tela">Revisão concluída!</h2>
      <p class="subtitulo">${msg}</p>
      <button class="btn btn-primario" id="btnTemas">Voltar aos temas</button>
    </div>
  `;
  document.getElementById("btnTemas").onclick = telaCategorias;
}

/* Tela 7: quiz */
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
        // o quiz também alimenta a revisão espaçada
        SRS.responder(estado.perfil.id, estado.idioma, estado.categoria, atual, acertou ? "bom" : "errei");
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
  else if (estado.tela === "modos") telaCategorias();
  else if (["estudo", "fim", "quiz", "resultado", "fala", "falaFim"].includes(estado.tela)) telaModos();
  else if (["revisao", "revisaoFim"].includes(estado.tela)) telaCategorias();
  else telaPerfis();
};

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

/* ---------- Começa o app ---------- */
telaPerfis();
