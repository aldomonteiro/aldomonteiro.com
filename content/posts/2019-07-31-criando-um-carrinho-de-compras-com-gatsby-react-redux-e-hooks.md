---
language: pt
template: post
title: 'Criando um carrinho de compras com Gatsby, React, Redux e Hooks'
slug: /shoppingcart-react-redux-hooks
draft: true
date: 2019-07-31T18:46:51.000Z
description: >-
  Nesse artigo vou mostrar como criar um carrinho de compras utilizando React e
  Redux Hooks, a funcionalidade do Redux que utiliza hooks a partir da versão
  7.1.
category: React
tags:
  - gatsby
  - react
  - redux
  - react-redux
  - hooks
---
React introduziu na versão 16.8 os [hooks](https://pt-br.reactjs.org/docs/hooks-intro.html):

> Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

A partir da versão 7.1 o React-Redux oferece um conjunto de *Hook APIs* como uma alternativa ao component HOC (*High Order Component*) `connect()` existente. Essas APIs permitem que você utilize as ações de armazenamento e envio do Redux, sem precisar envolver seus componentes no `connect ()`.

Vamos utilizar Gatsby para criar páginas estáticas baseadas no React e ter um site pronto sem precisar configurar outros pacotes, como Babel, Webpack e React Router (todos esses já são configurados por padrão no Gatsby).

## Instalando os pacotes

Para executar esse tutorial é necessário ter instalado o (Node)[https://nodejs.org/en/download/] e o npm.

O primeiro passo é instalar a interface de linha de comando do gatsby:

```sh
npm install -g gatsby-cli
```

Agora você pode executar operações através do comando `gatsby`. Vamos criar um novo site a partir de um *starter* padrão do Gatsby:

```sh
gatsby new shopping-cart
```

Esse comando vai criar a pasta `shopping-cart` e instalar todos os pacotes utilizados.

Se tudo deu certo, você pode acessar a pasta e executar o site recém criado:

```sh
cd shopping-cart; gatsby develop
```




