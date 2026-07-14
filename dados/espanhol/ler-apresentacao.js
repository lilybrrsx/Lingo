// Espanhol → Leitura A1: apresentação pessoal
// Usa o vocabulário de Saudações, Família, Números e o verbo Ser.
Lingo.registrarLeitura("espanhol", "Me presento", {
  texto: `¡Hola! Me llamo Lucía. Soy española y tengo veinte años.
Tengo un hermano. Se llama Diego.
Mi padre es médico y mi madre es profesora.
Mi familia es pequeña. Somos de Madrid.`,
  traducao: `Olá! Meu nome é Lucía. Sou espanhola e tenho vinte anos.
Tenho um irmão. Ele se chama Diego.
Meu pai é médico e minha mãe é professora.
Minha família é pequena. Somos de Madri.`,
  perguntas: [
    { pergunta: "Como ela se chama?",        opcoes: ["Lucía", "Diego", "María"],             resposta: "Lucía" },
    { pergunta: "Quantos anos ela tem?",     opcoes: ["Veinte", "Doce", "Diez"],              resposta: "Veinte" },
    { pergunta: "Quem é Diego?",             opcoes: ["Su hermano", "Su padre", "Su amigo"],  resposta: "Su hermano" },
    { pergunta: "O que o pai dela faz?",     opcoes: ["Médico", "Profesor", "Estudiante"],    resposta: "Médico" },
    { pergunta: "De onde é a família dela?", opcoes: ["Madrid", "Barcelona", "Sevilla"],      resposta: "Madrid" },
  ],
});
