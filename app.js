/* ============================================================
   Lingo — App de idiomas para a família
   ------------------------------------------------------------
   Este arquivo controla tudo: as telas, o áudio e o conteúdo.
   Você pode ADICIONAR palavras editando a seção CONTEUDO abaixo.
   ============================================================ */

/* ---------- 1. Idiomas disponíveis ----------
   O "code" é usado pelo navegador para falar em voz alta. */
const IDIOMAS = {
  ingles:   { nome: "Inglês",   bandeira: "🇬🇧", code: "en-US" },
  italiano: { nome: "Italiano", bandeira: "🇮🇹", code: "it-IT" },
  frances:  { nome: "Francês",  bandeira: "🇫🇷", code: "fr-FR" },
  espanhol: { nome: "Espanhol", bandeira: "🇪🇸", code: "es-ES" },
};

/* ---------- 2. Perfis da família ----------
   Cada pessoa vê só os idiomas que quer aprender. */
const PERFIS = [
  { id: "mae",  nome: "Mãe",         emoji: "👩", idiomas: ["ingles", "italiano"] },
  { id: "irma", nome: "Minha irmã",  emoji: "👧", idiomas: ["frances", "espanhol"] },
  { id: "eu",   nome: "Eu",          emoji: "🙋", idiomas: ["italiano", "frances"] },
];

/* ---------- 3. Conteúdo (vocabulário) ----------
   Estrutura: CONTEUDO[idioma][categoria] = lista de { pt, tr }
   pt = palavra em português   |   tr = tradução no idioma */
const CONTEUDO = {
  ingles: {
    "Saudações": [
      { pt: "Olá", tr: "Hello" }, { pt: "Bom dia", tr: "Good morning" },
      { pt: "Boa noite", tr: "Good night" }, { pt: "Obrigado", tr: "Thank you" },
      { pt: "Por favor", tr: "Please" }, { pt: "De nada", tr: "You're welcome" },
      { pt: "Sim", tr: "Yes" }, { pt: "Não", tr: "No" },
      { pt: "Desculpe", tr: "Sorry" }, { pt: "Até logo", tr: "See you later" },
    ],
    "Números": [
      { pt: "Um", tr: "One" }, { pt: "Dois", tr: "Two" }, { pt: "Três", tr: "Three" },
      { pt: "Quatro", tr: "Four" }, { pt: "Cinco", tr: "Five" }, { pt: "Seis", tr: "Six" },
      { pt: "Sete", tr: "Seven" }, { pt: "Oito", tr: "Eight" }, { pt: "Nove", tr: "Nine" },
      { pt: "Dez", tr: "Ten" },
    ],
    "Família": [
      { pt: "Mãe", tr: "Mother" }, { pt: "Pai", tr: "Father" }, { pt: "Irmã", tr: "Sister" },
      { pt: "Irmão", tr: "Brother" }, { pt: "Filho", tr: "Son" }, { pt: "Filha", tr: "Daughter" },
      { pt: "Avó", tr: "Grandmother" }, { pt: "Avô", tr: "Grandfather" },
      { pt: "Família", tr: "Family" }, { pt: "Amigo", tr: "Friend" },
    ],
    "Comida": [
      { pt: "Água", tr: "Water" }, { pt: "Pão", tr: "Bread" }, { pt: "Leite", tr: "Milk" },
      { pt: "Café", tr: "Coffee" }, { pt: "Maçã", tr: "Apple" }, { pt: "Queijo", tr: "Cheese" },
      { pt: "Carne", tr: "Meat" }, { pt: "Peixe", tr: "Fish" }, { pt: "Arroz", tr: "Rice" },
      { pt: "Vinho", tr: "Wine" },
    ],
    "Verbos": [
      { pt: "Ser/Estar", tr: "To be" }, { pt: "Ter", tr: "To have" }, { pt: "Fazer", tr: "To do" },
      { pt: "Ir", tr: "To go" }, { pt: "Comer", tr: "To eat" }, { pt: "Beber", tr: "To drink" },
      { pt: "Falar", tr: "To speak" }, { pt: "Querer", tr: "To want" },
      { pt: "Poder", tr: "Can" }, { pt: "Ver", tr: "To see" },
    ],
  },

  italiano: {
    "Saudações": [
      { pt: "Olá", tr: "Ciao" }, { pt: "Bom dia", tr: "Buongiorno" },
      { pt: "Boa noite", tr: "Buonanotte" }, { pt: "Obrigado", tr: "Grazie" },
      { pt: "Por favor", tr: "Per favore" }, { pt: "De nada", tr: "Prego" },
      { pt: "Sim", tr: "Sì" }, { pt: "Não", tr: "No" },
      { pt: "Desculpe", tr: "Scusa" }, { pt: "Até logo", tr: "A dopo" },
    ],
    "Números": [
      { pt: "Um", tr: "Uno" }, { pt: "Dois", tr: "Due" }, { pt: "Três", tr: "Tre" },
      { pt: "Quatro", tr: "Quattro" }, { pt: "Cinco", tr: "Cinque" }, { pt: "Seis", tr: "Sei" },
      { pt: "Sete", tr: "Sette" }, { pt: "Oito", tr: "Otto" }, { pt: "Nove", tr: "Nove" },
      { pt: "Dez", tr: "Dieci" },
    ],
    "Família": [
      { pt: "Mãe", tr: "Madre" }, { pt: "Pai", tr: "Padre" }, { pt: "Irmã", tr: "Sorella" },
      { pt: "Irmão", tr: "Fratello" }, { pt: "Filho", tr: "Figlio" }, { pt: "Filha", tr: "Figlia" },
      { pt: "Avó", tr: "Nonna" }, { pt: "Avô", tr: "Nonno" },
      { pt: "Família", tr: "Famiglia" }, { pt: "Amigo", tr: "Amico" },
    ],
    "Comida": [
      { pt: "Água", tr: "Acqua" }, { pt: "Pão", tr: "Pane" }, { pt: "Leite", tr: "Latte" },
      { pt: "Café", tr: "Caffè" }, { pt: "Maçã", tr: "Mela" }, { pt: "Queijo", tr: "Formaggio" },
      { pt: "Carne", tr: "Carne" }, { pt: "Peixe", tr: "Pesce" }, { pt: "Arroz", tr: "Riso" },
      { pt: "Vinho", tr: "Vino" },
    ],
    "Verbos": [
      { pt: "Ser/Estar", tr: "Essere" }, { pt: "Ter", tr: "Avere" }, { pt: "Fazer", tr: "Fare" },
      { pt: "Ir", tr: "Andare" }, { pt: "Comer", tr: "Mangiare" }, { pt: "Beber", tr: "Bere" },
      { pt: "Falar", tr: "Parlare" }, { pt: "Querer", tr: "Volere" },
      { pt: "Poder", tr: "Potere" }, { pt: "Ver", tr: "Vedere" },
    ],
  },

  frances: {
    "Saudações": [
      { pt: "Olá", tr: "Salut" }, { pt: "Bom dia", tr: "Bonjour" },
      { pt: "Boa noite", tr: "Bonne nuit" }, { pt: "Obrigado", tr: "Merci" },
      { pt: "Por favor", tr: "S'il vous plaît" }, { pt: "De nada", tr: "De rien" },
      { pt: "Sim", tr: "Oui" }, { pt: "Não", tr: "Non" },
      { pt: "Desculpe", tr: "Pardon" }, { pt: "Até logo", tr: "À plus tard" },
    ],
    "Números": [
      { pt: "Um", tr: "Un" }, { pt: "Dois", tr: "Deux" }, { pt: "Três", tr: "Trois" },
      { pt: "Quatro", tr: "Quatre" }, { pt: "Cinco", tr: "Cinq" }, { pt: "Seis", tr: "Six" },
      { pt: "Sete", tr: "Sept" }, { pt: "Oito", tr: "Huit" }, { pt: "Nove", tr: "Neuf" },
      { pt: "Dez", tr: "Dix" },
    ],
    "Família": [
      { pt: "Mãe", tr: "Mère" }, { pt: "Pai", tr: "Père" }, { pt: "Irmã", tr: "Sœur" },
      { pt: "Irmão", tr: "Frère" }, { pt: "Filho", tr: "Fils" }, { pt: "Filha", tr: "Fille" },
      { pt: "Avó", tr: "Grand-mère" }, { pt: "Avô", tr: "Grand-père" },
      { pt: "Família", tr: "Famille" }, { pt: "Amigo", tr: "Ami" },
    ],
    "Comida": [
      { pt: "Água", tr: "Eau" }, { pt: "Pão", tr: "Pain" }, { pt: "Leite", tr: "Lait" },
      { pt: "Café", tr: "Café" }, { pt: "Maçã", tr: "Pomme" }, { pt: "Queijo", tr: "Fromage" },
      { pt: "Carne", tr: "Viande" }, { pt: "Peixe", tr: "Poisson" }, { pt: "Arroz", tr: "Riz" },
      { pt: "Vinho", tr: "Vin" },
    ],
    "Verbos": [
      { pt: "Ser/Estar", tr: "Être" }, { pt: "Ter", tr: "Avoir" }, { pt: "Fazer", tr: "Faire" },
      { pt: "Ir", tr: "Aller" }, { pt: "Comer", tr: "Manger" }, { pt: "Beber", tr: "Boire" },
      { pt: "Falar", tr: "Parler" }, { pt: "Querer", tr: "Vouloir" },
      { pt: "Poder", tr: "Pouvoir" }, { pt: "Ver", tr: "Voir" },
    ],
  },

  espanhol: {
    "Saudações": [
      { pt: "Olá", tr: "Hola" }, { pt: "Bom dia", tr: "Buenos días" },
      { pt: "Boa noite", tr: "Buenas noches" }, { pt: "Obrigado", tr: "Gracias" },
      { pt: "Por favor", tr: "Por favor" }, { pt: "De nada", tr: "De nada" },
      { pt: "Sim", tr: "Sí" }, { pt: "Não", tr: "No" },
      { pt: "Desculpe", tr: "Perdón" }, { pt: "Até logo", tr: "Hasta luego" },
    ],
    "Números": [
      { pt: "Um", tr: "Uno" }, { pt: "Dois", tr: "Dos" }, { pt: "Três", tr: "Tres" },
      { pt: "Quatro", tr: "Cuatro" }, { pt: "Cinco", tr: "Cinco" }, { pt: "Seis", tr: "Seis" },
      { pt: "Sete", tr: "Siete" }, { pt: "Oito", tr: "Ocho" }, { pt: "Nove", tr: "Nueve" },
      { pt: "Dez", tr: "Diez" },
    ],
    "Família": [
      { pt: "Mãe", tr: "Madre" }, { pt: "Pai", tr: "Padre" }, { pt: "Irmã", tr: "Hermana" },
      { pt: "Irmão", tr: "Hermano" }, { pt: "Filho", tr: "Hijo" }, { pt: "Filha", tr: "Hija" },
      { pt: "Avó", tr: "Abuela" }, { pt: "Avô", tr: "Abuelo" },
      { pt: "Família", tr: "Familia" }, { pt: "Amigo", tr: "Amigo" },
    ],
    "Comida": [
      { pt: "Água", tr: "Agua" }, { pt: "Pão", tr: "Pan" }, { pt: "Leite", tr: "Leche" },
      { pt: "Café", tr: "Café" }, { pt: "Maçã", tr: "Manzana" }, { pt: "Queijo", tr: "Queso" },
      { pt: "Carne", tr: "Carne" }, { pt: "Peixe", tr: "Pescado" }, { pt: "Arroz", tr: "Arroz" },
      { pt: "Vinho", tr: "Vino" },
    ],
    "Verbos": [
      { pt: "Ser/Estar", tr: "Ser" }, { pt: "Ter", tr: "Tener" }, { pt: "Fazer", tr: "Hacer" },
      { pt: "Ir", tr: "Ir" }, { pt: "Comer", tr: "Comer" }, { pt: "Beber", tr: "Beber" },
      { pt: "Falar", tr: "Hablar" }, { pt: "Querer", tr: "Querer" },
      { pt: "Poder", tr: "Poder" }, { pt: "Ver", tr: "Ver" },
    ],
  },
};

/* ============================================================
   A partir daqui é a "máquina" do app. Você não precisa mexer.
   ============================================================ */

const app = document.getElementById("app");
const btnVoltar = document.getElementById("btnVoltar");
const perfilAtualEl = document.getElementById("perfilAtual");
document.getElementById("ano").textContent = new Date().getFullYear();

// Guarda em que tela estamos, para o botão "Voltar" funcionar.
let estado = { tela: "perfis", perfil: null, idioma: null, categoria: null };

/* ---------- Falar em voz alta (Text-to-Speech) ---------- */
function falar(texto, codigoIdioma) {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta áudio. Tente o Google Chrome.");
    return;
  }
  window.speechSynthesis.cancel(); // para qualquer fala anterior
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = codigoIdioma;
  fala.rate = 0.9; // um pouco mais devagar, ajuda a aprender
  // Tenta escolher uma voz do idioma certo, se existir no aparelho
  const vozes = window.speechSynthesis.getVoices();
  const vozIdeal = vozes.find(v => v.lang && v.lang.startsWith(codigoIdioma.slice(0, 2)));
  if (vozIdeal) fala.voice = vozIdeal;
  window.speechSynthesis.speak(fala);
}

/* ---------- Embaralhar uma lista (para o quiz e cartões) ---------- */
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/* ---------- Progresso salvo no navegador ---------- */
function chaveProgresso() {
  return `lingo_${estado.perfil?.id}_${estado.idioma}_${estado.categoria}`;
}
function salvarConcluido() {
  if (!estado.perfil || !estado.idioma || !estado.categoria) return;
  localStorage.setItem(chaveProgresso(), "concluido");
}
function foiConcluido(perfilId, idioma, categoria) {
  return localStorage.getItem(`lingo_${perfilId}_${idioma}_${categoria}`) === "concluido";
}

/* ============================================================
   TELAS
   ============================================================ */

/* Tela 1: escolher o perfil (quem vai estudar) */
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

/* Tela 3: escolher a categoria (tema) */
function telaCategorias() {
  estado.tela = "categorias";
  btnVoltar.hidden = false;
  const categorias = Object.keys(CONTEUDO[estado.idioma]);
  app.innerHTML = `
    <h2 class="titulo-tela">${IDIOMAS[estado.idioma].bandeira} ${IDIOMAS[estado.idioma].nome}</h2>
    <p class="subtitulo">Escolha um tema para estudar</p>
    <div class="grade">
      ${categorias.map(cat => {
        const feito = foiConcluido(estado.perfil.id, estado.idioma, cat);
        return `
        <div class="cartao-opcao" data-cat="${cat}">
          <span class="emoji">${feito ? "✅" : "📚"}</span>
          <div class="nome">${cat}</div>
          <div class="info">${CONTEUDO[estado.idioma][cat].length} palavras</div>
        </div>`;
      }).join("")}
    </div>
  `;
  app.querySelectorAll("[data-cat]").forEach(el => {
    el.onclick = () => { estado.categoria = el.dataset.cat; telaEstudo(); };
  });
}

/* Tela 4: estudar com cartões (flashcards) */
function telaEstudo() {
  estado.tela = "estudo";
  btnVoltar.hidden = false;
  const palavras = embaralhar(CONTEUDO[estado.idioma][estado.categoria]);
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
        </div>
      ` : ""}
    `;

    document.getElementById("cartao").onclick = (e) => {
      if (e.target.id === "btnAudio") return; // não vira o cartão ao clicar no som
      if (!revelado) { revelado = true; desenhar(); falar(atual.tr, code); }
    };
    if (revelado) {
      document.getElementById("btnAudio").onclick = () => falar(atual.tr, code);
      document.getElementById("btnRever").onclick = () => proximo();
      document.getElementById("btnSabia").onclick = () => proximo();
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

/* Tela 5: parabéns + oferecer quiz */
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

/* Tela 6: quiz de múltipla escolha */
function telaQuiz() {
  estado.tela = "quiz";
  btnVoltar.hidden = false;
  const todas = CONTEUDO[estado.idioma][estado.categoria];
  const perguntas = embaralhar(todas);
  const code = IDIOMAS[estado.idioma].code;
  let indice = 0;
  let acertos = 0;

  function desenhar() {
    const atual = perguntas[indice];
    // monta 4 opções: a certa + 3 erradas aleatórias
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
  else if (["estudo", "fim"].includes(estado.tela)) telaCategorias();
  else if (["quiz", "resultado"].includes(estado.tela)) telaCategorias();
  else telaPerfis();
};

/* Algumas vezes as vozes demoram a carregar; isto ajuda. */
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

/* ---------- Começa o app ---------- */
telaPerfis();
