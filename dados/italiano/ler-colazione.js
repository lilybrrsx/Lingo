// Italiano → Leitura A1: o café da manhã
// Reaproveita o vocabulário de Comida, Família e Verbos.
Lingo.registrarLeitura("italiano", "A colazione", {
  texto: `La mattina bevo un caffè con latte.
Mangio pane e formaggio.
Mia sorella beve il tè e mangia una mela.
Mio padre mangia solo pane.
Mangiamo insieme in cucina.`,
  traducao: `De manhã bebo um café com leite.
Como pão e queijo.
Minha irmã bebe chá e come uma maçã.
Meu pai come só pão.
Comemos juntos na cozinha.`,
  perguntas: [
    { pergunta: "O que a pessoa bebe de manhã?", opcoes: ["Caffè con latte", "Il tè", "L'acqua"], resposta: "Caffè con latte" },
    { pergunta: "O que a irmã come?",            opcoes: ["Una mela", "Il formaggio", "La carne"], resposta: "Una mela" },
    { pergunta: "O que o pai come?",             opcoes: ["Solo pane", "Il formaggio", "Una mela"], resposta: "Solo pane" },
    { pergunta: "Onde eles comem?",              opcoes: ["In cucina", "In camera", "In giardino"], resposta: "In cucina" },
  ],
});
