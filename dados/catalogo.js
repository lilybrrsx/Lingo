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
    { cat: "Saudações",   tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 10, arquivo: "dados/ingles/saudacoes.js" },
    { cat: "Números",     tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/ingles/numeros.js" },
    { cat: "Família",     tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/ingles/familia.js" },
    { cat: "Comida",      tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/ingles/comida.js" },
    { cat: "Verbos",      tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/ingles/verbos.js" },
    { cat: "Artigos",     tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/ingles/gram-artigos.js" },
    { cat: "Verbo To Be", tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/ingles/gram-tobe.js" },
  ],
  italiano: [
    { cat: "Saudações",    tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 10, arquivo: "dados/italiano/saudacoes.js" },
    { cat: "Números",      tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/italiano/numeros.js" },
    { cat: "Família",      tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/italiano/familia.js" },
    { cat: "Comida",       tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/italiano/comida.js" },
    { cat: "Verbos",       tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/italiano/verbos.js" },
    { cat: "Artigos",      tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/italiano/gram-artigos.js" },
    { cat: "Verbo Essere", tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/italiano/gram-essere.js" },
  ],
  frances: [
    { cat: "Saudações",   tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 10, arquivo: "dados/frances/saudacoes.js" },
    { cat: "Números",     tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/frances/numeros.js" },
    { cat: "Família",     tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/frances/familia.js" },
    { cat: "Comida",      tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/frances/comida.js" },
    { cat: "Verbos",      tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/frances/verbos.js" },
    { cat: "Artigos",     tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/frances/gram-artigos.js" },
    { cat: "Verbo Être",  tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/frances/gram-etre.js" },
  ],
  espanhol: [
    { cat: "Saudações", tipo: "vocabulario", nivel: "A1", emoji: "👋", qtd: 10, arquivo: "dados/espanhol/saudacoes.js" },
    { cat: "Números",   tipo: "vocabulario", nivel: "A1", emoji: "🔢", qtd: 10, arquivo: "dados/espanhol/numeros.js" },
    { cat: "Família",   tipo: "vocabulario", nivel: "A1", emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/espanhol/familia.js" },
    { cat: "Comida",    tipo: "vocabulario", nivel: "A1", emoji: "🍎", qtd: 10, arquivo: "dados/espanhol/comida.js" },
    { cat: "Verbos",    tipo: "vocabulario", nivel: "A1", emoji: "🏃", qtd: 10, arquivo: "dados/espanhol/verbos.js" },
    { cat: "Artigos",   tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/espanhol/gram-artigos.js" },
    { cat: "Verbo Ser", tipo: "gramatica",   nivel: "A1", emoji: "📐", qtd: 8,  arquivo: "dados/espanhol/gram-ser.js" },
  ],
};
