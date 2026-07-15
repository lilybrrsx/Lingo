// Francês → Leitura A1: o café da manhã
// Reaproveita o vocabulário de Comida, Família e Verbos.
// O texto é em 1ª pessoa e não diz o gênero de quem narra — por isso as
// perguntas falam em "a pessoa", nunca "ela".
Lingo.registrarLeitura("frances", "Le petit déjeuner", {
  texto: `Le matin je bois un café au lait.
Je mange du pain avec du fromage.
Mon frère boit de l'eau et mange une pomme.
Ma mère mange du pain aussi.
Nous mangeons ensemble dans la cuisine.`,
  traducao: `De manhã eu bebo um café com leite.
Como pão com queijo.
Meu irmão bebe água e come uma maçã.
Minha mãe come pão também.
Nós comemos juntos na cozinha.`,
  perguntas: [
    { pergunta: "O que a pessoa bebe de manhã?", opcoes: ["Un café au lait", "De l'eau", "Du thé"], resposta: "Un café au lait" },
    { pergunta: "O que o irmão come?",           opcoes: ["Une pomme", "Du fromage", "De la viande"], resposta: "Une pomme" },
    { pergunta: "O que a mãe come?",             opcoes: ["Du pain", "Une pomme", "Du poisson"],    resposta: "Du pain" },
    { pergunta: "Onde eles comem?",              opcoes: ["Dans la cuisine", "Dans le jardin", "Dans la voiture"], resposta: "Dans la cuisine" },
  ],
});
