---
language: pt
template: post
title: 'Conhecendo uma alternativa ao React-Router: o Reach Router'
slug: /react-reach-router-tutorial
draft: true
date: 2019-08-01T17:55:09.597Z
description: >-
  Nesse rápido tutorial vou te apresentar uma alternativa mais fácil de usar do
  que o React-Router para navegação entre componentes: o Reach-Router.
category: react
tags:
  - react
  - router
  - reach-router
  - react-router
---
Nesse tutorial de 5 minutos vou mostrar como usar o [REACH Router] (https://Reach.Tech/router/), uma alternativa ao tradicional e onipresente [React router] (/REACT-router/).

## Instalação

Dentro do seu projeto, ele pode ser instalado via `npm` da seguinte forma:

```sh
npm install @reach/router
```

> Se a sintaxe '@' é nova para você, saiba que é um recurso do NPM para permitir criar um pacote com escopo, ou seja, um *namespace*.

Em seguida, importe-o em seu projeto.

```js
import {router} from '@reach/router';
```

## Uso básico

Utilize esse biblioteca no arquivo de nível mais alto em um projeto React: o `index.js` (em uma instalação [Create-React-app] (/REACT-Create-React-app/)), envolvendo todos os componentes que serão criados no projeto:

```JSX
ReactDOM. Render (
  <Router>
    <Form path="/"/>
    <PrivateArea path =  "/private-area"/>
  </Router>,
  document.getElementById('root')
)
```

O atributo `path` adicionado aos componentes define a URL para acessá-los. Nesse exemplo, ao acessar a URL `localhost:3000/private-area/` do seu projeto vai mostrar o component `<PrivateArea/>`

O caminho '/' é a rota de índice e aparece quando você não define um URL/caminho ao lado do domínio do aplicativo. A  *Home Page*, em outras palavras.

## A rota *default*

Quando um usuário visita uma URL que não corresponda a nenhuma rota, por padrão, o REACH router redireciona para a rota '/'. Você pode adicionar uma rota *default* alternativa para tratar estes casos e exibir uma mensagem de "Página não encontrada" em vez disso.

```JSX
<Router>
  <Form path =  "/"/>
  <PrivateArea path =  "/private-area"/>
  <NotFound default/>
</Router>
```

## Alterar a rota programaticamente

Use a função `navigate para alterar programaticamente a rota em seu aplicativo:

```js
import { navigate } from '@reach/router'
```

```js
navigate ('/Private-Area ')
```

## Link para rotas no JSX

Use o componente `Link` para vincular suas rotas usando o JSX:

```js
import { Link } from '@reach/router'
```

``JSX
<Link to="/">Home</Link>
<Link to="/private-area">Área Restrita</Link>
```

## Parâmetros de URL

Adicione parâmetros usando a sintaxe `:param`:

```JSX
<Router>
  <User path="users/:userId"/>
</Router>
```

E, dentro deste componente de usuário hipotético, podemos obter o `userId` como um parâmetro (*props*):

```js
const User = ({userId}) = > (
  <p>User {userId}</p>
)
```

## Rotas aninhadas

Agora que você já sabe como definir rotas diretas no seu arquivo `index.js` desta forma:

```JSX
<Router>
  <Form path="/" />
  <PrivateArea path="/private-area"/>
</Router>
```

Você pode definir rotas aninhadas:

```JSX
<Router>
  <Form path="/"/>
  <PrivateArea path="/private-area" >
    <User path=":userId"/>
  </PrivateArea>
</Router>
```

Desta forma, é possível acessar o componente `User` com o parâmetro `123` através do link `/private-area/123`.

Você também pode optar por permitir que um componente defina suas próprias rotas dentro dela. Você usa o coringa '/* ' após a rota:

```JSX
<Router>
  <Form path ="/"/>
  <PrivateArea path ="/private-area/* "/>
</Router>
```

Em seguida, dentro do componente você pode importar o `router` novamente, e definir seu próprio conjunto de sub-rotas:

```JSX
component PrivateArea
<Router>
  <User path ="/:userId"/>
</router>
```

Qualquer rota usando '/private-area/qualquer-coisa' será tratada pelo componente de usuário e a parte após a rota será enviada como seu parâmetro ' userId '.

Para exibir algo na rota /private-area` agora você também precisa adicionar um manipulador `/` no componente `PrivateArea`:

```JSX
component PrivateArea
<Router>
  <User path="/:userId "/>
  <PrivateAreaDashboard path="/"/>
</Router>
```
