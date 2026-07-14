/* ============================================================
   Lingo — REPETIÇÃO ESPAÇADA (SRS)
   ------------------------------------------------------------
   Mostra cada palavra de novo pouco antes de você esquecer.
   Cada acerto aumenta o intervalo (1 dia → 6 dias → semanas...),
   cada erro reaproxima a palavra. É a mesma ideia do Anki.

   Guarda o progresso no próprio navegador (localStorage),
   separado por PESSOA e IDIOMA. Nada vai para a internet.
   ============================================================ */

window.Lingo = window.Lingo || { _conteudo: {} };

Lingo.SRS = (function () {
  const DIA = 24 * 60 * 60 * 1000; // milissegundos em um dia

  function chave(perfilId, idioma) {
    return `lingo_srs_${perfilId}_${idioma}`;
  }

  function carregar(perfilId, idioma) {
    try {
      return JSON.parse(localStorage.getItem(chave(perfilId, idioma))) || {};
    } catch (e) {
      return {};
    }
  }

  function salvar(perfilId, idioma, dados) {
    localStorage.setItem(chave(perfilId, idioma), JSON.stringify(dados));
  }

  // Identificador único de cada palavra dentro de um idioma.
  function idCard(palavra) {
    return palavra.pt + "|" + palavra.tr;
  }

  /* Registra a resposta do usuário e reagenda a palavra.
     qualidade: "errei" | "bom" | "facil"
     Algoritmo baseado no SM-2 (usado pelo Anki), simplificado. */
  function responder(perfilId, idioma, categoria, palavra, qualidade) {
    const dados = carregar(perfilId, idioma);
    const id = idCard(palavra);
    let c = dados[id] || {
      pt: palavra.pt, tr: palavra.tr, categoria: categoria,
      intervalo: 0, repeticoes: 0, facilidade: 2.5, proxima: 0,
    };
    // mantém os dados de exibição atualizados
    c.pt = palavra.pt; c.tr = palavra.tr; c.categoria = categoria;

    if (qualidade === "errei") {
      c.repeticoes = 0;
      c.intervalo = 1;
      c.facilidade = Math.max(1.3, c.facilidade - 0.2);
    } else {
      if (c.repeticoes === 0) c.intervalo = 1;
      else if (c.repeticoes === 1) c.intervalo = 6;
      else c.intervalo = Math.round(c.intervalo * c.facilidade);
      c.repeticoes += 1;
      if (qualidade === "facil") {
        c.facilidade = Math.min(3.0, c.facilidade + 0.15);
        c.intervalo = Math.round(c.intervalo * 1.3);
      }
    }
    if (c.intervalo < 1) c.intervalo = 1;
    c.proxima = Date.now() + c.intervalo * DIA;
    c.ultima = Date.now();

    dados[id] = c;
    salvar(perfilId, idioma, dados);
    return c;
  }

  /* Palavras que estão "vencidas" (na hora de revisar). */
  function devidos(perfilId, idioma) {
    const dados = carregar(perfilId, idioma);
    const agora = Date.now();
    return Object.values(dados).filter(c => (c.proxima || 0) <= agora);
  }

  function contarDevidos(perfilId, idioma) {
    return devidos(perfilId, idioma).length;
  }

  /* Quantas palavras a pessoa já tem no baralho daquele idioma. */
  function totalCards(perfilId, idioma) {
    return Object.keys(carregar(perfilId, idioma)).length;
  }

  return { responder, devidos, contarDevidos, totalCards };
})();
