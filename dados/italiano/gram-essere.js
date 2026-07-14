// Italiano → Gramática: Verbo Essere (ser/estar) no presente (A1)
Lingo.registrarGramatica("italiano", "Verbo Essere", {
  explicacao: `
    <p><strong>Essere</strong> quer dizer <strong>ser</strong> e <strong>estar</strong> —
    os dois no mesmo verbo. É o verbo mais usado do italiano.</p>

    <table class="tabela-gramatica">
      <tr><th>Pessoa</th><th>Italiano</th><th>Português</th></tr>
      <tr><td>io</td><td><strong>sono</strong></td><td>eu sou / estou</td></tr>
      <tr><td>tu</td><td><strong>sei</strong></td><td>tu és / estás</td></tr>
      <tr><td>lui / lei</td><td><strong>è</strong></td><td>ele/ela é / está</td></tr>
      <tr><td>noi</td><td><strong>siamo</strong></td><td>nós somos / estamos</td></tr>
      <tr><td>voi</td><td><strong>siete</strong></td><td>vocês são / estão</td></tr>
      <tr><td>loro</td><td><strong>sono</strong></td><td>eles são / estão</td></tr>
    </table>

    <p>💡 Repare: <strong>sono</strong> serve para <em>io</em> e para <em>loro</em> —
    quem diz a diferença é o contexto.</p>
    <p>💡 O <strong>è</strong> (com acento) é o verbo. Sem acento, <em>e</em> quer dizer "e".</p>
  `,
  exercicios: [
    { pt: "Eu sou italiano",          frase: "Io ___ italiano",        resposta: "sono",  opcoes: ["sono", "sei", "è"] },
    { pt: "Você é simpático",         frase: "Tu ___ simpatico",       resposta: "sei",   opcoes: ["sono", "sei", "siete"] },
    { pt: "Ela é minha irmã",         frase: "Lei ___ mia sorella",    resposta: "è",     opcoes: ["è", "sei", "siamo"] },
    { pt: "Nós estamos em casa",      frase: "Noi ___ a casa",         resposta: "siamo", opcoes: ["siamo", "siete", "sono"] },
    { pt: "Vocês são estudantes",     frase: "Voi ___ studenti",       resposta: "siete", opcoes: ["siamo", "siete", "sono"] },
    { pt: "Eles são amigos",          frase: "Loro ___ amici",         resposta: "sono",  opcoes: ["sono", "siete", "è"] },
    { pt: "Maria está feliz",         frase: "Maria ___ felice",       resposta: "è",     opcoes: ["è", "sono", "sei"] },
    { pt: "Eu e Marco estamos prontos", frase: "Io e Marco ___ pronti", resposta: "siamo", opcoes: ["siamo", "sono", "siete"] },
  ],
});
