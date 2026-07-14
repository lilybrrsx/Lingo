// Espanhol → Gramática: Verbo Ser no presente (A1)
Lingo.registrarGramatica("espanhol", "Verbo Ser", {
  explicacao: `
    <p>O espanhol tem <strong>ser</strong> e <strong>estar</strong> separados,
    igualzinho ao português — e usados quase da mesma forma. Vamos começar por
    <strong>ser</strong> (característica permanente).</p>

    <table class="tabela-gramatica">
      <tr><th>Pessoa</th><th>Espanhol</th><th>Português</th></tr>
      <tr><td>yo</td><td><strong>soy</strong></td><td>eu sou</td></tr>
      <tr><td>tú</td><td><strong>eres</strong></td><td>tu és</td></tr>
      <tr><td>él / ella</td><td><strong>es</strong></td><td>ele/ela é</td></tr>
      <tr><td>nosotros</td><td><strong>somos</strong></td><td>nós somos</td></tr>
      <tr><td>vosotros</td><td><strong>sois</strong></td><td>vós sois <em>(só na Espanha)</em></td></tr>
      <tr><td>ellos / ellas</td><td><strong>son</strong></td><td>eles/elas são</td></tr>
    </table>

    <p>💡 Repare como é parecido com o português: <em>somos</em> é idêntico,
    <em>son</em> ≈ "são", <em>es</em> ≈ "é".</p>
    <p>💡 <strong>vosotros</strong> só se usa na Espanha. Na América Latina
    dizem <em>ustedes son</em>.</p>
    <p>⚠️ <strong>eres</strong> é a pegadinha — não existe nada parecido em português.</p>
  `,
  exercicios: [
    { pt: "Eu sou brasileira",       frase: "Yo ___ brasileña",        resposta: "soy",   opcoes: ["soy", "eres", "es"] },
    { pt: "Você é meu amigo",        frase: "Tú ___ mi amigo",         resposta: "eres",  opcoes: ["soy", "eres", "es"] },
    { pt: "Ele é alto",              frase: "Él ___ alto",             resposta: "es",    opcoes: ["eres", "es", "son"] },
    { pt: "Nós somos estudantes",    frase: "Nosotros ___ estudiantes", resposta: "somos", opcoes: ["somos", "sois", "son"] },
    { pt: "Eles são amigos",         frase: "Ellos ___ amigos",        resposta: "son",   opcoes: ["es", "son", "somos"] },
    { pt: "Ela é minha irmã",        frase: "Ella ___ mi hermana",     resposta: "es",    opcoes: ["eres", "es", "son"] },
    { pt: "Maria é feliz",           frase: "María ___ feliz",         resposta: "es",    opcoes: ["es", "soy", "eres"] },
    { pt: "Pedro e eu somos irmãos", frase: "Pedro y yo ___ hermanos", resposta: "somos", opcoes: ["somos", "son", "sois"] },
  ],
});
