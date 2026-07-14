// Inglês → Leitura A1: o café da manhã
// Reaproveita o vocabulário de Comida, Família e Verbos.
Lingo.registrarLeitura("ingles", "Breakfast", {
  texto: `In the morning I drink coffee with milk.
I eat bread with cheese.
My brother drinks water and eats an apple.
My mother only drinks coffee.
We eat together in the kitchen.`,
  traducao: `De manhã eu bebo café com leite.
Como pão com queijo.
Meu irmão bebe água e come uma maçã.
Minha mãe só bebe café.
Nós comemos juntos na cozinha.`,
  perguntas: [
    { pergunta: "O que ela bebe de manhã?", opcoes: ["Coffee with milk", "Water", "Tea"],       resposta: "Coffee with milk" },
    { pergunta: "O que o irmão come?",      opcoes: ["An apple", "Bread", "Cheese"],            resposta: "An apple" },
    { pergunta: "O que a mãe faz?",         opcoes: ["Only drinks coffee", "Eats bread", "Drinks water"], resposta: "Only drinks coffee" },
    { pergunta: "Onde eles comem?",         opcoes: ["In the kitchen", "In the garden", "In the car"], resposta: "In the kitchen" },
  ],
});
