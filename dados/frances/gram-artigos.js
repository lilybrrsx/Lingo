// Francês → Gramática: Artigos (A1)
Lingo.registrarGramatica("frances", "Artigos", {
  explicacao: `
    <p>O francês tem artigos <strong>definidos</strong> (o/a/os/as) e
    <strong>indefinidos</strong> (um/uma/uns), e eles mudam com o gênero da palavra.</p>

    <table class="tabela-gramatica">
      <tr><th></th><th>Masculino</th><th>Feminino</th><th>Plural</th></tr>
      <tr>
        <td><strong>Definido</strong><br><em>(o, a, os, as)</em></td>
        <td><strong>le</strong> livre</td>
        <td><strong>la</strong> maison</td>
        <td><strong>les</strong> livres<br><strong>les</strong> maisons</td>
      </tr>
      <tr>
        <td><strong>Indefinido</strong><br><em>(um, uma, uns)</em></td>
        <td><strong>un</strong> chat</td>
        <td><strong>une</strong> voiture</td>
        <td><strong>des</strong> chats</td>
      </tr>
    </table>

    <p><strong>A regra do apóstrofo:</strong> antes de vogal (ou h mudo),
    <em>le</em> e <em>la</em> viram <strong>l'</strong>:</p>
    <ul>
      <li><em>le ami</em> ❌ → <strong>l'</strong>ami ✅</li>
      <li><em>la eau</em> ❌ → <strong>l'</strong>eau ✅</li>
    </ul>

    <p>⚠️ <strong>Cuidado:</strong> o gênero em francês nem sempre é igual ao português!
    <em>une voiture</em> (feminino) = "um carro" (masculino em português).</p>
  `,
  exercicios: [
    { pt: "O livro está na mesa",   frase: "___ livre est sur la table", resposta: "Le",  opcoes: ["Le", "La", "Les"] },
    { pt: "A casa é grande",        frase: "___ maison est grande",      resposta: "La",  opcoes: ["Le", "La", "Les"] },
    { pt: "O amigo da Marie",       frase: "___ ami de Marie",           resposta: "L'",  opcoes: ["Le", "L'", "La"] },
    { pt: "A água está fria",       frase: "___ eau est froide",         resposta: "L'",  opcoes: ["La", "L'", "Les"] },
    { pt: "As crianças brincam",    frase: "___ enfants jouent",         resposta: "Les", opcoes: ["Le", "La", "Les"] },
    { pt: "Eu tenho um gato",       frase: "J'ai ___ chat",              resposta: "un",  opcoes: ["un", "une", "des"] },
    { pt: "É um carro",             frase: "C'est ___ voiture",          resposta: "une", opcoes: ["un", "une", "des"] },
    { pt: "As meninas estão aqui",  frase: "___ filles sont ici",        resposta: "Les", opcoes: ["Le", "La", "Les"] },
  ],
});
