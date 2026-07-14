/* ============================================================
   Lingo — CATÁLOGO
   ------------------------------------------------------------
   Este arquivo é LEVE e sempre carregado ao abrir o app.
   Ele só LISTA o que existe (idiomas, perfis e temas) — NÃO
   contém as palavras. As palavras ficam em arquivos separados
   dentro de /dados/<idioma>/ e são carregadas só quando o
   tema é aberto (isso mantém o app leve e rápido).

   Para ADICIONAR um tema novo:
   1. crie o arquivo com as palavras (ex.: dados/ingles/viagem.js)
   2. adicione uma linha aqui no CATALOGO apontando para ele.
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

/* Catálogo de temas por idioma.
   Cada item diz: nome do tema, um emoji, quantas palavras tem e
   em qual arquivo elas estão. As palavras NÃO estão aqui. */
Lingo.CATALOGO = {
  ingles: [
    { cat: "Saudações", emoji: "👋", qtd: 10, arquivo: "dados/ingles/saudacoes.js" },
    { cat: "Números",   emoji: "🔢", qtd: 10, arquivo: "dados/ingles/numeros.js" },
    { cat: "Família",   emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/ingles/familia.js" },
    { cat: "Comida",    emoji: "🍎", qtd: 10, arquivo: "dados/ingles/comida.js" },
    { cat: "Verbos",    emoji: "🏃", qtd: 10, arquivo: "dados/ingles/verbos.js" },
  ],
  italiano: [
    { cat: "Saudações", emoji: "👋", qtd: 10, arquivo: "dados/italiano/saudacoes.js" },
    { cat: "Números",   emoji: "🔢", qtd: 10, arquivo: "dados/italiano/numeros.js" },
    { cat: "Família",   emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/italiano/familia.js" },
    { cat: "Comida",    emoji: "🍎", qtd: 10, arquivo: "dados/italiano/comida.js" },
    { cat: "Verbos",    emoji: "🏃", qtd: 10, arquivo: "dados/italiano/verbos.js" },
  ],
  frances: [
    { cat: "Saudações", emoji: "👋", qtd: 10, arquivo: "dados/frances/saudacoes.js" },
    { cat: "Números",   emoji: "🔢", qtd: 10, arquivo: "dados/frances/numeros.js" },
    { cat: "Família",   emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/frances/familia.js" },
    { cat: "Comida",    emoji: "🍎", qtd: 10, arquivo: "dados/frances/comida.js" },
    { cat: "Verbos",    emoji: "🏃", qtd: 10, arquivo: "dados/frances/verbos.js" },
  ],
  espanhol: [
    { cat: "Saudações", emoji: "👋", qtd: 10, arquivo: "dados/espanhol/saudacoes.js" },
    { cat: "Números",   emoji: "🔢", qtd: 10, arquivo: "dados/espanhol/numeros.js" },
    { cat: "Família",   emoji: "👨‍👩‍👧", qtd: 10, arquivo: "dados/espanhol/familia.js" },
    { cat: "Comida",    emoji: "🍎", qtd: 10, arquivo: "dados/espanhol/comida.js" },
    { cat: "Verbos",    emoji: "🏃", qtd: 10, arquivo: "dados/espanhol/verbos.js" },
  ],
};
