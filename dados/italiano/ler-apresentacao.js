// Italiano → Leitura A1: apresentação pessoal
// Usa o vocabulário de Saudações, Família, Números e o verbo Essere.
Lingo.registrarLeitura("italiano", "Mi presento", {
  texto: `Ciao! Mi chiamo Marco. Sono italiano e ho ventidue anni.
Ho una sorella. Lei si chiama Anna.
Mio padre è medico e mia madre è professoressa.
La mia famiglia è piccola. Noi siamo di Roma.`,
  traducao: `Olá! Meu nome é Marco. Sou italiano e tenho vinte e dois anos.
Tenho uma irmã. Ela se chama Anna.
Meu pai é médico e minha mãe é professora.
Minha família é pequena. Nós somos de Roma.`,
  perguntas: [
    { pergunta: "Como se chama o rapaz?",     opcoes: ["Marco", "Anna", "Luca"],                   resposta: "Marco" },
    { pergunta: "Quantos anos ele tem?",      opcoes: ["Ventidue", "Dodici", "Venti"],             resposta: "Ventidue" },
    { pergunta: "Quem é Anna?",               opcoes: ["La sorella", "La madre", "L'amica"],       resposta: "La sorella" },
    { pergunta: "O que faz o pai dele?",      opcoes: ["Medico", "Professore", "Studente"],        resposta: "Medico" },
    { pergunta: "De onde é a família dele?",  opcoes: ["Roma", "Milano", "Napoli"],                resposta: "Roma" },
  ],
});
