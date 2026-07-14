# Lingo 🌍

App de idiomas feito em família, para chegar à fluência de verdade.

## Idiomas
- 🇬🇧 Inglês
- 🇮🇹 Italiano
- 🇫🇷 Francês
- 🇪🇸 Espanhol

## Como usar
Abra o arquivo `index.html` no navegador (Google Chrome de preferência).
Escolha o perfil, o idioma e um tema. Estude com os cartões (que falam
em voz alta) e teste-se no quiz.

## Como o app é organizado (pensado para crescer)

```
Lingo/
├── index.html          → a página
├── style.css           → o visual (cores, layout)
├── app.js              → a lógica (telas, áudio, carregamento)
└── dados/
    ├── catalogo.js     → LISTA leve de idiomas, perfis e temas
    ├── ingles/
    │   ├── saudacoes.js
    │   ├── numeros.js
    │   └── ...          → cada tema num arquivo, carregado só quando aberto
    ├── italiano/
    ├── frances/
    └── espanhol/
```

**Por que assim?** O app carrega só o `catalogo.js` (leve) ao abrir, e
baixa as palavras de um tema apenas quando você abre aquele tema. Assim o
app continua rápido mesmo com muitos idiomas e temas.

## Como adicionar um tema novo
1. Crie um arquivo em `dados/<idioma>/<nome>.js` seguindo o modelo:
   ```js
   Lingo.registrar("ingles", "Viagem", [
     { pt: "Aeroporto", tr: "Airport" },
     { pt: "Mala", tr: "Suitcase" },
   ]);
   ```
2. Adicione uma linha em `dados/catalogo.js` apontando para o arquivo.

Feito com ❤️ pela família.
