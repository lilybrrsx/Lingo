/* ============================================================
   Lingo — COMPARAÇÃO DE TEXTO
   ------------------------------------------------------------
   Ferramentas para comparar o que a pessoa escreveu (ou falou)
   com a resposta certa, com uma tolerância justa.
   Usado pelo ditado, pela escrita e pelo reconhecimento de fala.
   ============================================================ */

window.Lingo = window.Lingo || {};

Lingo.Texto = (function () {

  /* Deixa o texto "cru" para comparar: sem acento, sem pontuação,
     tudo minúsculo. Assim "Buongiorno!" == "buongiorno". */
  function normalizar(t) {
    return (t || "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* Distância de Levenshtein: quantas letras diferem entre dois textos. */
  function distancia(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let anterior = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const atual = [i];
      for (let j = 1; j <= n; j++) {
        atual[j] = Math.min(
          anterior[j] + 1,
          atual[j - 1] + 1,
          anterior[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
      anterior = atual;
    }
    return anterior[n];
  }

  /* 1 = igualzinho, 0 = totalmente diferente. */
  function similaridade(a, b) {
    const x = normalizar(a), y = normalizar(b);
    if (!x && !y) return 1;
    const maior = Math.max(x.length, y.length);
    if (!maior) return 0;
    return 1 - distancia(x, y) / maior;
  }

  /* Avalia o que foi ESCRITO contra a resposta certa.
     Na escrita o acento importa — mas em vez de reprovar,
     a gente aceita e ensina o acento correto. */
  function avaliarEscrita(esperado, digitado) {
    const e = (esperado || "").trim();
    const d = (digitado || "").trim();
    const exato = e.toLowerCase() === d.toLowerCase();
    const igualSemAcento = normalizar(e) === normalizar(d);
    const nota = similaridade(e, d);
    return {
      acertou: exato || igualSemAcento,
      acentoErrado: !exato && igualSemAcento,
      quase: !igualSemAcento && nota >= 0.7,
      nota: nota,
      correta: e,
    };
  }

  return { normalizar, distancia, similaridade, avaliarEscrita };
})();
