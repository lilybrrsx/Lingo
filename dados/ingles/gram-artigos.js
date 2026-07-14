// Inglês → Gramática: Artigos a / an / the (A1)
Lingo.registrarGramatica("ingles", "Artigos", {
  explicacao: `
    <p>O inglês tem só <strong>três</strong> artigos — bem mais simples que o português,
    porque <strong>não têm gênero</strong> (não existe masculino/feminino).</p>

    <table class="tabela-gramatica">
      <tr><th>Artigo</th><th>Quando usar</th><th>Exemplo</th></tr>
      <tr><td><strong>a</strong></td><td>um/uma, antes de som de consoante</td><td><strong>a</strong> book, <strong>a</strong> car</td></tr>
      <tr><td><strong>an</strong></td><td>um/uma, antes de som de vogal</td><td><strong>an</strong> apple, <strong>an</strong> hour</td></tr>
      <tr><td><strong>the</strong></td><td>o/a/os/as — algo específico</td><td><strong>the</strong> sun, <strong>the</strong> books</td></tr>
    </table>

    <p><strong>A regra do a/an é pelo SOM, não pela letra:</strong></p>
    <ul>
      <li><em>an <strong>h</strong>our</em> — o "h" é mudo, o som é de vogal → <strong>an</strong></li>
      <li><em>a <strong>u</strong>niversity</em> — soa "iuniversity", som de "i" → <strong>a</strong></li>
    </ul>

    <p>💡 <strong>the</strong> serve para singular e plural, masculino e feminino.
    Uma palavra só para "o, a, os, as".</p>
  `,
  exercicios: [
    { pt: "Eu tenho um livro",          frase: "I have ___ book",       resposta: "a",   opcoes: ["a", "an", "the"] },
    { pt: "Ela come uma maçã",          frase: "She eats ___ apple",    resposta: "an",  opcoes: ["a", "an", "the"] },
    { pt: "O sol é quente",             frase: "___ sun is hot",        resposta: "The", opcoes: ["A", "An", "The"] },
    { pt: "Ele é médico",               frase: "He is ___ doctor",      resposta: "a",   opcoes: ["a", "an", "the"] },
    { pt: "Eu preciso de um guarda-chuva", frase: "I need ___ umbrella", resposta: "an", opcoes: ["a", "an", "the"] },
    { pt: "O carro é vermelho",         frase: "___ car is red",        resposta: "The", opcoes: ["A", "An", "The"] },
    { pt: "É uma laranja",              frase: "It is ___ orange",      resposta: "an",  opcoes: ["a", "an", "the"] },
    { pt: "Nós temos um cachorro",      frase: "We have ___ dog",       resposta: "a",   opcoes: ["a", "an", "the"] },
  ],
});
