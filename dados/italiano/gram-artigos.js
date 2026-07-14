// Italiano → Gramática: Artigos definidos (A1)
Lingo.registrarGramatica("italiano", "Artigos", {
  explicacao: `
    <p>Em italiano o artigo ("o/a/os/as") muda conforme o <strong>som</strong> da
    palavra que vem depois. Por isso existem mais formas que em português.</p>

    <table class="tabela-gramatica">
      <tr><th></th><th>Singular</th><th>Plural</th></tr>
      <tr>
        <td><strong>Masculino</strong></td>
        <td><strong>il</strong> libro<br><strong>lo</strong> studente<br><strong>l'</strong>amico</td>
        <td><strong>i</strong> libri<br><strong>gli</strong> studenti<br><strong>gli</strong> amici</td>
      </tr>
      <tr>
        <td><strong>Feminino</strong></td>
        <td><strong>la</strong> casa<br><strong>l'</strong>acqua</td>
        <td><strong>le</strong> case</td>
      </tr>
    </table>

    <p><strong>A regra na prática:</strong></p>
    <ul>
      <li><strong>il</strong> — masculino comum: <em>il libro, il cane</em></li>
      <li><strong>lo</strong> — masculino antes de <em>s+consoante, z, gn, ps</em>: <em>lo studente, lo zaino</em></li>
      <li><strong>l'</strong> — antes de vogal (masc. ou fem.): <em>l'amico, l'acqua</em></li>
      <li><strong>la</strong> — feminino comum: <em>la casa</em></li>
      <li>No plural: <strong>i</strong> / <strong>gli</strong> (masc.) e <strong>le</strong> (fem.)</li>
    </ul>
  `,
  exercicios: [
    { pt: "O livro está na mesa",     frase: "___ libro è sul tavolo",   resposta: "Il",  opcoes: ["Il", "La", "Lo"] },
    { pt: "A casa é grande",          frase: "___ casa è grande",        resposta: "La",  opcoes: ["Il", "La", "Le"] },
    { pt: "O estudante é italiano",   frase: "___ studente è italiano",  resposta: "Lo",  opcoes: ["Il", "Lo", "La"] },
    { pt: "O amigo do Marco",         frase: "___ amico di Marco",       resposta: "L'",  opcoes: ["Il", "L'", "Lo"] },
    { pt: "A água está fria",         frase: "___ acqua è fredda",       resposta: "L'",  opcoes: ["La", "L'", "Le"] },
    { pt: "Os livros são novos",      frase: "___ libri sono nuovi",     resposta: "I",   opcoes: ["I", "Gli", "Le"] },
    { pt: "Os estudantes estão aqui", frase: "___ studenti sono qui",    resposta: "Gli", opcoes: ["I", "Gli", "Le"] },
    { pt: "As casas são bonitas",     frase: "___ case sono belle",      resposta: "Le",  opcoes: ["I", "Gli", "Le"] },
  ],
});
