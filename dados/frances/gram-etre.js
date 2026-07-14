// Francês → Gramática: Verbo Être (ser/estar) no presente (A1)
Lingo.registrarGramatica("frances", "Verbo Être", {
  explicacao: `
    <p><strong>Être</strong> quer dizer <strong>ser</strong> e <strong>estar</strong> —
    os dois no mesmo verbo. É o verbo mais usado do francês.</p>

    <table class="tabela-gramatica">
      <tr><th>Pessoa</th><th>Francês</th><th>Português</th></tr>
      <tr><td>je</td><td><strong>suis</strong></td><td>eu sou / estou</td></tr>
      <tr><td>tu</td><td><strong>es</strong></td><td>tu és / estás</td></tr>
      <tr><td>il / elle</td><td><strong>est</strong></td><td>ele/ela é / está</td></tr>
      <tr><td>nous</td><td><strong>sommes</strong></td><td>nós somos / estamos</td></tr>
      <tr><td>vous</td><td><strong>êtes</strong></td><td>vocês são / estão</td></tr>
      <tr><td>ils / elles</td><td><strong>sont</strong></td><td>eles/elas são / estão</td></tr>
    </table>

    <p>💡 <strong>es</strong> (tu) e <strong>est</strong> (ele/ela) se escrevem diferente
    mas soam quase igual — o "t" final não se pronuncia.</p>
    <p>💡 <strong>vous</strong> serve para "vocês" e também para "você" formal,
    com pessoas que você não conhece.</p>
    <p>💡 Antes de vogal, <em>je</em> vira <strong>j'</strong>: <em>je suis</em> mas <em>j'ai</em>.</p>
  `,
  exercicios: [
    { pt: "Eu sou brasileira",       frase: "Je ___ brésilienne",   resposta: "suis",   opcoes: ["suis", "es", "est"] },
    { pt: "Você é meu amigo",        frase: "Tu ___ mon ami",       resposta: "es",     opcoes: ["suis", "es", "est"] },
    { pt: "Ele é alto",              frase: "Il ___ grand",         resposta: "est",    opcoes: ["es", "est", "sont"] },
    { pt: "Nós estamos em casa",     frase: "Nous ___ à la maison", resposta: "sommes", opcoes: ["sommes", "êtes", "sont"] },
    { pt: "Vocês são estudantes",    frase: "Vous ___ étudiants",   resposta: "êtes",   opcoes: ["sommes", "êtes", "sont"] },
    { pt: "Elas estão felizes",      frase: "Elles ___ heureuses",  resposta: "sont",   opcoes: ["est", "sont", "êtes"] },
    { pt: "Marie é minha irmã",      frase: "Marie ___ ma sœur",    resposta: "est",    opcoes: ["es", "est", "sont"] },
    { pt: "Paul e eu estamos prontos", frase: "Paul et moi ___ prêts", resposta: "sommes", opcoes: ["sommes", "sont", "êtes"] },
  ],
});
