// Espanhol → Gramática: Artigos (A1)
Lingo.registrarGramatica("espanhol", "Artigos", {
  explicacao: `
    <p>Boa notícia: os artigos do espanhol funcionam <strong>quase igual</strong>
    ao português. É o idioma mais fácil nesse ponto.</p>

    <table class="tabela-gramatica">
      <tr><th></th><th>Masculino</th><th>Feminino</th></tr>
      <tr>
        <td><strong>Definido</strong><br><em>(o, a, os, as)</em></td>
        <td><strong>el</strong> libro<br><strong>los</strong> libros</td>
        <td><strong>la</strong> casa<br><strong>las</strong> casas</td>
      </tr>
      <tr>
        <td><strong>Indefinido</strong><br><em>(um, uma)</em></td>
        <td><strong>un</strong> perro<br><strong>unos</strong> perros</td>
        <td><strong>una</strong> manzana<br><strong>unas</strong> manzanas</td>
      </tr>
    </table>

    <p><strong>Compare com o português:</strong></p>
    <ul>
      <li>o livro → <strong>el</strong> libro</li>
      <li>a casa → <strong>la</strong> casa</li>
      <li>os livros → <strong>los</strong> libros</li>
      <li>as casas → <strong>las</strong> casas</li>
    </ul>

    <p>⚠️ <strong>A pegadinha:</strong> palavras femininas que começam com "a" tônico
    usam <strong>el</strong> no singular (só por causa do som):
    <em><strong>el</strong> agua</em>, <em><strong>el</strong> águila</em> —
    mas no plural voltam ao normal: <em><strong>las</strong> aguas</em>.</p>
    <p>O mesmo vale para o indefinido: <em><strong>un</strong> agua</em>,
    <em><strong>un</strong> águila</em>. Repare que a palavra continua feminina —
    diz-se <em>el agua <strong>fría</strong></em>, e não "frío".</p>
  `,
  exercicios: [
    { pt: "O livro está na mesa",    frase: "___ libro está en la mesa", resposta: "El",  opcoes: ["El", "La", "Los"] },
    { pt: "A casa é grande",         frase: "___ casa es grande",        resposta: "La",  opcoes: ["El", "La", "Las"] },
    { pt: "Os livros são novos",     frase: "___ libros son nuevos",     resposta: "Los", opcoes: ["Los", "Las", "El"] },
    { pt: "As casas são bonitas",    frase: "___ casas son bonitas",     resposta: "Las", opcoes: ["Los", "Las", "La"] },
    { pt: "Eu tenho um cachorro",    frase: "Tengo ___ perro",           resposta: "un",  opcoes: ["un", "una", "unos"] },
    { pt: "É uma maçã",              frase: "Es ___ manzana",            resposta: "una", opcoes: ["un", "una", "unas"] },
    { pt: "As crianças brincam",     frase: "___ niños juegan",          resposta: "Los", opcoes: ["Los", "Las", "El"] },
    { pt: "A mulher é minha mãe",    frase: "___ mujer es mi madre",     resposta: "La",  opcoes: ["El", "La", "Las"] },
  ],
});
