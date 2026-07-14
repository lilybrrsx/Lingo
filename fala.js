/* ============================================================
   Lingo — RECONHECIMENTO DE FALA
   ------------------------------------------------------------
   Usa o reconhecimento de voz que já vem no navegador
   (grátis, sem serviço pago). A pessoa fala, o app compara
   com o que era esperado e dá a nota.

   ATENÇÃO: o microfone só funciona em conexão segura
   (https:// ou localhost). Abrindo o arquivo direto do PC
   (file://) o navegador bloqueia o microfone.
   ============================================================ */

window.Lingo = window.Lingo || {};

Lingo.Fala = (function () {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  /* O navegador tem reconhecimento de voz? (Chrome tem) */
  function disponivel() { return !!SR; }

  /* Estamos em https/localhost? (necessário para o microfone) */
  function contextoSeguro() { return window.isSecureContext === true; }

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

  /* Compara o que era esperado com o que o navegador ouviu.
     O navegador manda várias alternativas; ficamos com a melhor. */
  function avaliar(esperado, alternativas) {
    let melhor = 0;
    let ouvido = (alternativas && alternativas[0]) || "";
    (alternativas || []).forEach(a => {
      const s = similaridade(esperado, a);
      if (s > melhor) { melhor = s; ouvido = a; }
    });
    return {
      nota: melhor,
      ouvido: ouvido,
      acertou: melhor >= 0.85,
      quase: melhor >= 0.6 && melhor < 0.85,
    };
  }

  /* Mensagens amigáveis para cada erro possível. */
  function mensagemErro(erro) {
    const mapa = {
      "not-allowed": "Preciso da permissão do microfone. Clique no cadeado 🔒 na barra do navegador e permita o microfone.",
      "service-not-allowed": "O navegador bloqueou o microfone. Verifique as permissões do site.",
      "no-speech": "Não ouvi nada. Tente de novo, mais perto do microfone.",
      "audio-capture": "Não encontrei um microfone no aparelho.",
      "network": "O reconhecimento de voz precisa de internet. Verifique sua conexão.",
      "aborted": "A gravação foi interrompida. Tente de novo.",
    };
    return mapa[erro] || "Deu um probleminha ao ouvir. Tente de novo.";
  }

  let rec = null;

  /* Começa a ouvir. Chama aoResultado(listaDeAlternativas) ou aoErro(codigo). */
  function ouvir(codigoIdioma, aoResultado, aoErro) {
    if (!SR) { aoErro("sem-suporte"); return null; }
    try {
      rec = new SR();
      rec.lang = codigoIdioma;
      rec.interimResults = false;
      rec.maxAlternatives = 3;
      rec.continuous = false;
      rec.onresult = (e) => {
        const alternativas = [];
        for (let i = 0; i < e.results[0].length; i++) {
          alternativas.push(e.results[0][i].transcript);
        }
        aoResultado(alternativas);
      };
      rec.onerror = (e) => aoErro(e.error || "erro");
      rec.start();
      return rec;
    } catch (err) {
      aoErro(String(err));
      return null;
    }
  }

  function parar() { try { if (rec) rec.stop(); } catch (e) {} }

  return { disponivel, contextoSeguro, normalizar, similaridade, avaliar, mensagemErro, ouvir, parar };
})();
