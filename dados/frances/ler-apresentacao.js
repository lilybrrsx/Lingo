// Francês → Leitura A1: apresentação pessoal
// Usa o vocabulário de Saudações, Família, Números e o verbo Être.
Lingo.registrarLeitura("frances", "Je me présente", {
  texto: `Bonjour! Je m'appelle Julie. Je suis française et j'ai vingt ans.
J'ai un frère. Il s'appelle Louis.
Mon père est médecin et ma mère est professeur.
Ma famille est petite. Nous sommes de Paris.`,
  traducao: `Olá! Meu nome é Julie. Sou francesa e tenho vinte anos.
Tenho um irmão. Ele se chama Louis.
Meu pai é médico e minha mãe é professora.
Minha família é pequena. Nós somos de Paris.`,
  perguntas: [
    { pergunta: "Como ela se chama?",       opcoes: ["Julie", "Louis", "Marie"],              resposta: "Julie" },
    { pergunta: "Quantos anos ela tem?",    opcoes: ["Vingt", "Douze", "Dix"],                resposta: "Vingt" },
    { pergunta: "Quem é Louis?",            opcoes: ["Son frère", "Son père", "Son ami"],     resposta: "Son frère" },
    { pergunta: "O que a mãe dela faz?",    opcoes: ["Professeur", "Médecin", "Étudiante"],   resposta: "Professeur" },
    { pergunta: "De onde é a família dela?", opcoes: ["Paris", "Lyon", "Nice"],               resposta: "Paris" },
  ],
});
