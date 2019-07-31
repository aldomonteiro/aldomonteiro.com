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

A partir da versão 7.1 o React-Redux oferece um conjunto de _Hook APIs_ como uma alternativa ao component HOC (_High Order Component_) `connect()` existente. Essas APIs permitem que você utilize as ações de armazenamento e envio do Redux, sem precisar envolver seus componentes no `connect ()`.

Vamos utilizar Gatsby para criar páginas estáticas baseadas no React e ter um site pronto sem precisar configurar outros pacotes, como Babel, Webpack e React Router (todos esses já são configurados por padrão no Gatsby).

## Instalando os pacotes

Para executar esse tutorial é necessário ter instalado o (Node)\[https://nodejs.org/en/download/] e o npm.

O primeiro passo é instalar a interface de linha de comando do gatsby:

```sh
npm install -g gatsby-cli
```

Agora você pode executar operações através do comando `gatsby`. Vamos criar um novo site a partir de um _starter_ padrão do Gatsby:

```sh
gatsby new shopping-cart
```

Esse comando vai criar a pasta `shopping-cart` e instalar todos os pacotes utilizados.

Se tudo deu certo, você pode acessar a pasta e executar o site recém criado:

```sh
cd shopping-cart; gatsby develop
```

Acessando o endereço `localhost:8000` você verá a página inicial do Gatsby em execução:

![](/media/screen-shot-2019-07-31-at-16.56.34.png)

Agora podemos instalar os pacotes Redux e React-Redux:

```sh
npm i redux react-redux
```

E, para agilizar o *design* do aplicação vamos utilizar o pacote [React-Bootstrap](https://react-bootstrap.github.io/):

```sh
npm i react-bootstrap
```

Vamos utilizar a extensão para Chrome ou Firefox Redux DevTools. [Clique aqui] para ver as instruções de instalação e adicioná-la ao seu navegador.

## Configurando o Redux

Nesse passo, podemos configurar o Redux para armazenar o estado das operações que criaremos. Utilizando o seu ID, crie um novo arquivo dentro da pasta `src` do seu projeto chamado `configureStore.js`. O conteúdo desse arquivo pode ser o seguinte:

```jsx
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore () {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
```

Aqui criamos a `store` a partir da função `createStore` do `redux` e um `rootReducer` que vamos criar logo em seguida. Além disso, estamos configurando a extensão do Chrome Redux DevTools que mostrará os dados armazenados no `store` no seu browser.



