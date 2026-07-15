/* ============================================================
   Lingo — CATÁLOGO
   ------------------------------------------------------------
   Este arquivo é LEVE e sempre carregado ao abrir o app.
   Ele só LISTA o que existe (idiomas, perfis, níveis e temas) —
   NÃO contém as palavras nem os exercícios. Esses ficam em
   arquivos separados dentro de /dados/<idioma>/ e são
   carregados só quando o tema é aberto.

   Cada tema tem um "tipo":
     • vocabulario → lista de palavras (cartões, fala, ditado...)
     • gramatica   → explicação + exercícios de completar lacuna

   Para ADICIONAR um tema novo:
   1. crie o arquivo (ex.: dados/ingles/viagem.js)
   2. adicione uma linha aqui apontando para ele, com o
      "nivel" (A1..C2) e o "tipo".
   ============================================================ */

window.Lingo = window.Lingo || { _conteudo: {} };

/* Idiomas disponíveis. "code" é usado para falar em voz alta. */
Lingo.IDIOMAS = {
  ingles:   { nome: "Inglês",   bandeira: "🇬🇧", code: "en-US" },
  italiano: { nome: "Italiano", bandeira: "🇮🇹", code: "it-IT" },
  frances:  { nome: "Francês",  bandeira: "🇫🇷", code: "fr-FR" },
  espanhol: { nome: "Espanhol", bandeira: "🇪🇸", code: "es-ES" },
};

/* Perfis da família: cada pessoa vê só os seus idiomas. */
Lingo.PERFIS = [
  { id: "mae",  nome: "Mãe",        emoji: "👩", idiomas: ["ingles", "italiano"] },
  { id: "irma", nome: "Minha irmã", emoji: "👧", idiomas: ["frances", "espanhol"] },
  { id: "eu",   nome: "Eu",         emoji: "🙋", idiomas: ["italiano", "frances"] },
];

/* Níveis do Quadro Europeu (CEFR), do iniciante ao proficiente. */
Lingo.NIVEIS = [
  { id: "A1", desc: "Iniciante — primeiras palavras e frases" },
  { id: "A2", desc: "Básico — situações simples do dia a dia" },
  { id: "B1", desc: "Intermediário — já se vira sozinho" },
  { id: "B2", desc: "Intermediário alto — conversa com fluência" },
  { id: "C1", desc: "Avançado — usa o idioma com naturalidade" },
  { id: "C2", desc: "Proficiente — praticamente como nativo" },
];

Lingo.CATALOGO = {
  ingles: [
    { cat: "Saudações",   tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 11, arquivo: "dados/ingles/saudacoes.js" },
    { cat: "Números",     tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/ingles/numeros.js" },
    { cat: "Família",     tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/ingles/familia.js" },
    { cat: "Comida",      tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/ingles/comida.js" },
    { cat: "Verbos",      tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/ingles/verbos.js" },
    { cat: "Perguntas",   tipo: "vocabulario", nivel: "A1", emoji: "❓", qtd: 8,  arquivo: "dados/ingles/perguntas.js" },
    { cat: "Adjetivos",   tipo: "vocabulario", nivel: "A1", emoji: "✨", qtd: 10, arquivo: "dados/ingles/adjetivos.js" },
    { cat: "Cores",       tipo: "vocabulario", nivel: "A1", emoji: "🎨", qtd: 10, arquivo: "dados/ingles/cores.js" },
    { cat: "Dias",        tipo: "vocabulario", nivel: "A1", emoji: "📅", qtd: 10, arquivo: "dados/ingles/dias.js" },
    { cat: "Casa",        tipo: "vocabulario", nivel: "A1", emoji: "🏠", qtd: 10, arquivo: "dados/ingles/casa.js" },
    { cat: "Advérbios",   tipo: "vocabulario", nivel: "A1", emoji: "⚡", qtd: 10, arquivo: "dados/ingles/adverbios.js" },
    { cat: "Corpo",       tipo: "vocabulario", nivel: "A1", emoji: "🫀", qtd: 10, arquivo: "dados/ingles/corpo.js" },
    { cat: "Números 11+", tipo: "vocabulario", nivel: "A1", emoji: "💯", qtd: 11, arquivo: "dados/ingles/numeros2.js" },
    { cat: "Tempo",       tipo: "vocabulario", nivel: "A1", emoji: "🌦️", qtd: 10, arquivo: "dados/ingles/tempo.js" },
    { cat: "Roupas",      tipo: "vocabulario", nivel: "A1", emoji: "👕", qtd: 10, arquivo: "dados/ingles/roupas.js" },
    { cat: "Verbos 2",    tipo: "vocabulario", nivel: "A1", emoji: "🎬", qtd: 10, arquivo: "dados/ingles/verbos2.js" },
    { cat: "Sentimentos", tipo: "vocabulario", nivel: "A1", emoji: "😊", qtd: 10, arquivo: "dados/ingles/sentimentos.js" },
    { cat: "Animais",     tipo: "vocabulario", nivel: "A1", emoji: "🐶", qtd: 10, arquivo: "dados/ingles/animais.js" },
    { cat: "Lugares",     tipo: "vocabulario", nivel: "A1", emoji: "🏙️", qtd: 10, arquivo: "dados/ingles/lugares.js" },
    { cat: "Profissões",  tipo: "vocabulario", nivel: "A1", emoji: "💼", qtd: 10, arquivo: "dados/ingles/profissoes.js" },
    { cat: "Artigos",     tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/ingles/gram-artigos.js" },
    { cat: "Verbo To Be", tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/ingles/gram-tobe.js" },
    { cat: "My family",   tipo: "leitura",     nivel: "A1", emoji: "📖", qtd: 5,  arquivo: "dados/ingles/ler-apresentacao.js" },
    { cat: "Breakfast",   tipo: "leitura",     nivel: "A1", emoji: "📖", qtd: 4,  arquivo: "dados/ingles/ler-breakfast.js" },
  ],
  italiano: [
    { cat: "Saudações",    tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 11, arquivo: "dados/italiano/saudacoes.js" },
    { cat: "Números",      tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/italiano/numeros.js" },
    { cat: "Família",      tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/italiano/familia.js" },
    { cat: "Comida",       tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/italiano/comida.js" },
    { cat: "Verbos",       tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/italiano/verbos.js" },
    { cat: "Perguntas",    tipo: "vocabulario", nivel: "A1", emoji: "❓", qtd: 8,  arquivo: "dados/italiano/perguntas.js" },
    { cat: "Adjetivos",    tipo: "vocabulario", nivel: "A1", emoji: "✨", qtd: 10, arquivo: "dados/italiano/adjetivos.js" },
    { cat: "Cores",        tipo: "vocabulario", nivel: "A1", emoji: "🎨", qtd: 10, arquivo: "dados/italiano/cores.js" },
    { cat: "Dias",         tipo: "vocabulario", nivel: "A1", emoji: "📅", qtd: 10, arquivo: "dados/italiano/dias.js" },
    { cat: "Casa",         tipo: "vocabulario", nivel: "A1", emoji: "🏠", qtd: 10, arquivo: "dados/italiano/casa.js" },
    { cat: "Advérbios",    tipo: "vocabulario", nivel: "A1", emoji: "⚡", qtd: 10, arquivo: "dados/italiano/adverbios.js" },
    { cat: "Corpo",        tipo: "vocabulario", nivel: "A1", emoji: "🫀", qtd: 10, arquivo: "dados/italiano/corpo.js" },
    { cat: "Números 11+",  tipo: "vocabulario", nivel: "A1", emoji: "💯", qtd: 11, arquivo: "dados/italiano/numeros2.js" },
    { cat: "Tempo",        tipo: "vocabulario", nivel: "A1", emoji: "🌦️", qtd: 10, arquivo: "dados/italiano/tempo.js" },
    { cat: "Roupas",       tipo: "vocabulario", nivel: "A1", emoji: "👕", qtd: 10, arquivo: "dados/italiano/roupas.js" },
    { cat: "Verbos 2",     tipo: "vocabulario", nivel: "A1", emoji: "🎬", qtd: 10, arquivo: "dados/italiano/verbos2.js" },
    { cat: "Sentimentos",  tipo: "vocabulario", nivel: "A1", emoji: "😊", qtd: 10, arquivo: "dados/italiano/sentimentos.js" },
    { cat: "Animais",      tipo: "vocabulario", nivel: "A1", emoji: "🐶", qtd: 10, arquivo: "dados/italiano/animais.js" },
    { cat: "Lugares",      tipo: "vocabulario", nivel: "A1", emoji: "🏙️", qtd: 10, arquivo: "dados/italiano/lugares.js" },
    { cat: "Profissões",   tipo: "vocabulario", nivel: "A1", emoji: "💼", qtd: 10, arquivo: "dados/italiano/profissoes.js" },
    { cat: "Artigos",      tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/italiano/gram-artigos.js" },
    { cat: "Verbo Essere", tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/italiano/gram-essere.js" },
    { cat: "Mi presento",  tipo: "leitura",     nivel: "A1", emoji: "📖", qtd: 5,  arquivo: "dados/italiano/ler-apresentacao.js" },
    { cat: "A colazione",  tipo: "leitura",     nivel: "A1", emoji: "📖", qtd: 4,  arquivo: "dados/italiano/ler-colazione.js" },
  ],
  frances: [
    { cat: "Saudações",   tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 11, arquivo: "dados/frances/saudacoes.js" },
    { cat: "Números",     tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/frances/numeros.js" },
    { cat: "Família",     tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/frances/familia.js" },
    { cat: "Comida",      tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/frances/comida.js" },
    { cat: "Verbos",      tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/frances/verbos.js" },
    { cat: "Perguntas",   tipo: "vocabulario", nivel: "A1", emoji: "❓", qtd: 8,  arquivo: "dados/frances/perguntas.js" },
    { cat: "Adjetivos",   tipo: "vocabulario", nivel: "A1", emoji: "✨", qtd: 10, arquivo: "dados/frances/adjetivos.js" },
    { cat: "Cores",       tipo: "vocabulario", nivel: "A1", emoji: "🎨", qtd: 10, arquivo: "dados/frances/cores.js" },
    { cat: "Dias",        tipo: "vocabulario", nivel: "A1", emoji: "📅", qtd: 10, arquivo: "dados/frances/dias.js" },
    { cat: "Casa",        tipo: "vocabulario", nivel: "A1", emoji: "🏠", qtd: 10, arquivo: "dados/frances/casa.js" },
    { cat: "Advérbios",   tipo: "vocabulario", nivel: "A1", emoji: "⚡", qtd: 10, arquivo: "dados/frances/adverbios.js" },
    { cat: "Corpo",       tipo: "vocabulario", nivel: "A1", emoji: "🫀", qtd: 10, arquivo: "dados/frances/corpo.js" },
    { cat: "Números 11+", tipo: "vocabulario", nivel: "A1", emoji: "💯", qtd: 11, arquivo: "dados/frances/numeros2.js" },
    { cat: "Tempo",       tipo: "vocabulario", nivel: "A1", emoji: "🌦️", qtd: 10, arquivo: "dados/frances/tempo.js" },
    { cat: "Roupas",      tipo: "vocabulario", nivel: "A1", emoji: "👕", qtd: 10, arquivo: "dados/frances/roupas.js" },
    { cat: "Verbos 2",    tipo: "vocabulario", nivel: "A1", emoji: "🎬", qtd: 10, arquivo: "dados/frances/verbos2.js" },
    { cat: "Sentimentos", tipo: "vocabulario", nivel: "A1", emoji: "😊", qtd: 10, arquivo: "dados/frances/sentimentos.js" },
    { cat: "Animais",     tipo: "vocabulario", nivel: "A1", emoji: "🐶", qtd: 10, arquivo: "dados/frances/animais.js" },
    { cat: "Lugares",     tipo: "vocabulario", nivel: "A1", emoji: "🏙️", qtd: 10, arquivo: "dados/frances/lugares.js" },
    { cat: "Profissões",  tipo: "vocabulario", nivel: "A1", emoji: "💼", qtd: 10, arquivo: "dados/frances/profissoes.js" },
    { cat: "Artigos",           tipo: "gramatica", nivel: "A1", emoji: "📐", qtd: 8, arquivo: "dados/frances/gram-artigos.js" },
    { cat: "Verbo Être",        tipo: "gramatica", nivel: "A1", emoji: "📐", qtd: 8, arquivo: "dados/frances/gram-etre.js" },
    { cat: "Je me présente",    tipo: "leitura",   nivel: "A1", emoji: "📖", qtd: 5, arquivo: "dados/frances/ler-apresentacao.js" },
    { cat: "Le petit déjeuner", tipo: "leitura",   nivel: "A1", emoji: "📖", qtd: 4, arquivo: "dados/frances/ler-petitdejeuner.js" },
  ],
  espanhol: [
    { cat: "Saudações", tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 10, arquivo: "dados/espanhol/saudacoes.js" },
    { cat: "Números",   tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/espanhol/numeros.js" },
    { cat: "Família",   tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/espanhol/familia.js" },
    { cat: "Comida",    tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/espanhol/comida.js" },
    { cat: "Verbos",    tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 11, arquivo: "dados/espanhol/verbos.js" },
    { cat: "Perguntas", tipo: "vocabulario", nivel: "A1", emoji: "❓", qtd: 8,  arquivo: "dados/espanhol/perguntas.js" },
    { cat: "Adjetivos", tipo: "vocabulario", nivel: "A1", emoji: "✨", qtd: 10, arquivo: "dados/espanhol/adjetivos.js" },
    { cat: "Cores",     tipo: "vocabulario", nivel: "A1", emoji: "🎨", qtd: 10, arquivo: "dados/espanhol/cores.js" },
    { cat: "Dias",      tipo: "vocabulario", nivel: "A1", emoji: "📅", qtd: 10, arquivo: "dados/espanhol/dias.js" },
    { cat: "Casa",        tipo: "vocabulario", nivel: "A1", emoji: "🏠", qtd: 10, arquivo: "dados/espanhol/casa.js" },
    { cat: "Advérbios",   tipo: "vocabulario", nivel: "A1", emoji: "⚡", qtd: 10, arquivo: "dados/espanhol/adverbios.js" },
    { cat: "Corpo",       tipo: "vocabulario", nivel: "A1", emoji: "🫀", qtd: 10, arquivo: "dados/espanhol/corpo.js" },
    { cat: "Números 11+", tipo: "vocabulario", nivel: "A1", emoji: "💯", qtd: 11, arquivo: "dados/espanhol/numeros2.js" },
    { cat: "Tempo",       tipo: "vocabulario", nivel: "A1", emoji: "🌦️", qtd: 10, arquivo: "dados/espanhol/tempo.js" },
    { cat: "Roupas",      tipo: "vocabulario", nivel: "A1", emoji: "👕", qtd: 10, arquivo: "dados/espanhol/roupas.js" },
    { cat: "Verbos 2",    tipo: "vocabulario", nivel: "A1", emoji: "🎬", qtd: 10, arquivo: "dados/espanhol/verbos2.js" },
    { cat: "Sentimentos", tipo: "vocabulario", nivel: "A1", emoji: "😊", qtd: 10, arquivo: "dados/espanhol/sentimentos.js" },
    { cat: "Animais",     tipo: "vocabulario", nivel: "A1", emoji: "🐶", qtd: 10, arquivo: "dados/espanhol/animais.js" },
    { cat: "Lugares",     tipo: "vocabulario", nivel: "A1", emoji: "🏙️", qtd: 10, arquivo: "dados/espanhol/lugares.js" },
    { cat: "Profissões",  tipo: "vocabulario", nivel: "A1", emoji: "💼", qtd: 10, arquivo: "dados/espanhol/profissoes.js" },
    { cat: "Artigos",     tipo: "gramatica", nivel: "A1", emoji: "📐", qtd: 8, arquivo: "dados/espanhol/gram-artigos.js" },
    { cat: "Verbo Ser",   tipo: "gramatica", nivel: "A1", emoji: "📐", qtd: 8, arquivo: "dados/espanhol/gram-ser.js" },
    { cat: "Me presento", tipo: "leitura",   nivel: "A1", emoji: "📖", qtd: 5, arquivo: "dados/espanhol/ler-apresentacao.js" },
    { cat: "El desayuno", tipo: "leitura",   nivel: "A1", emoji: "📖", qtd: 4, arquivo: "dados/espanhol/ler-desayuno.js" },
  ],
};
