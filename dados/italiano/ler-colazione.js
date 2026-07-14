// Italiano → Leitura A1: o café da manhã
// Reaproveita o vocabulário de Comida, Família e Verbos.
Lingo.registrarLeitura("italiano", "A colazione", {
  texto: `La mattina io bevo un caffè con il latte.
Mangio il pane con il formaggio.
Mia sorella beve il tè e mangia una mela.
Mio padre mangia solo il pane.
Noi mangiamo insieme in cucina.`,
  traducao: `De manhã eu bebo um café com leite.
Como pão com queijo.
Minha irmã bebe chá e come uma maçã.
Meu pai come só pão.
Nós comemos juntos na cozinha.`,
  perguntas: [
    { pergunta: "O que ele bebe de manhã?", opcoes: ["Caffè con il latte", "Il tè", "L'acqua"], resposta: "Caffè con il latte" },
    { pergunta: "O que a irmã come?",       opcoes: ["Una mela", "Il formaggio", "La carne"],   resposta: "Una mela" },
    { pergunta: "O que o pai come?",        opcoes: ["Solo il pane", "Il formaggio", "Una mela"], resposta: "Solo il pane" },
    { pergunta: "Onde eles comem?",         opcoes: ["In cucina", "In camera", "In giardino"],  resposta: "In cucina" },
  ],
});
