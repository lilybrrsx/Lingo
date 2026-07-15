// Espanhol → Leitura A1: o café da manhã
// Reaproveita o vocabulário de Comida, Família e Verbos.
// O texto é em 1ª pessoa e não diz o gênero de quem narra — por isso as
// perguntas falam em "a pessoa", nunca "ela".
Lingo.registrarLeitura("espanhol", "El desayuno", {
  texto: `Por la mañana bebo café con leche.
Como pan con queso.
Mi hermano bebe agua y come una manzana.
Mi madre come pan también.
Comemos juntos en la cocina.`,
  traducao: `De manhã bebo café com leite.
Como pão com queijo.
Meu irmão bebe água e come uma maçã.
Minha mãe come pão também.
Comemos juntos na cozinha.`,
  perguntas: [
    { pergunta: "O que a pessoa bebe de manhã?", opcoes: ["Café con leche", "Agua", "Té"],    resposta: "Café con leche" },
    { pergunta: "O que o irmão come?",           opcoes: ["Una manzana", "Queso", "Pescado"], resposta: "Una manzana" },
    { pergunta: "O que a mãe come?",             opcoes: ["Pan", "Una manzana", "Carne"],     resposta: "Pan" },
    { pergunta: "Onde eles comem?",              opcoes: ["En la cocina", "En el jardín", "En el coche"], resposta: "En la cocina" },
  ],
});
