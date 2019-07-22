---
language: pt
template: post
title: Como utilizar os comandos import e export no Node.js sem precisar utilizar Babel
slug: /utilizar-import-export-node-sem-babel
draft: false
date: 2019-07-19T14:24:31.660Z
description: >-
  O Node.js utiliza a especificação ES6 do JavaScript que *ainda* não incorporou
  algumas funcionalidades já utilizadas por bibliotecas como o React, tais como
  a capacidade de fazer import e export de módulos. Nesse post, vou te mostrar
  como incorporar essa característica sem precisar utilizar um transpiler como o
  Babel.
category: Node
tags:
  - javascript
  - node
  - react
  - fullstack
---
O Node.js utiliza a versão ECMAScript conhecida como ES6 (ou ES2015) como padrão. No entanto, alguns browsers já estão utilizando versões mais recentes do ECMAScript e funcionalidades ainda não incorporadas à versão estável da especificação.

É o caso dos comandos `import` e `export`. Para quem está acostumado com *frameworks* JavaScript como React.JS, Angular ou Vue, pode sentir falta do `import` e ter que usar o `require` parece ser um passo pra trás.

Por isso, vou utilizar neste tutorial uma alternativa leve e performática para trazer essa funcionalidade para o Node.js, sem precisar fazer todas as configurações que o Babel requer.

Ao final, vamos instalar [Express.Js](https://www.expressjs.com) para responder a uma requisição do browser e testar o funcionamento básico do serviço criado.

## Configurando o backend

Para executar os passos desse tutorial é preciso ter instalado o Node, versão 10 ou superior, e o npm.

Node.js na versão 10 utiliza as especificações do ES6 (ou ES2015), mas não te deixa importar e exportar módulos com os comandos `import/export`. Para resolver esse problema e poder utilizar a mesma sintaxe tanto no *backend* quanto no *frontend*, vou utilizar o [esm](https://github.com/standard-things/esm) no backend.

Vamos utilizar o yarn para inicializar o projeto, package.json e adicionar o `esm`:

```
yarn create esm
```

Esse comando vai fazer algumas perguntas para criar os arquivos iniciais. Pressione <Enter> para todas as elas e aceitar os valores padrão.

Esse comando vai criar alguns arquivos para nós, entre eles o `package.json`, `index.js` e `main.js`. O arquivo `package.json` lista todas as dependências do projeto e os outros 2 são criados pelo módulo `esm`.

Vamos criar um diretório `src` para separar os arquivos JavaScript dos arquivos de configuração, execute esses comandos:

```sh
mkdir src; mv main.js src/; mv index.js src/
```

Um módulo essencial para usar em desenvolvimento é o [nodemon](https://nodemon.io/). O nodemon executa o sistema e o reinicia automaticamente quando há alguma modificação. Para instalá-lo execute:

```
yarn add nodemon --dev
```

Ele somente deve ser utilizado em desenvolvimento, por isso utilizamos a opção `--dev`.

Agora, para utilizar o `nodemon`, altere o arquivo `package.json` e inclua o script de inicialização (entre as tag `author` e `license`:

```json
  "author": "Aldo Monteiro"  
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
  "license": "MIT"
```

### Instalando Express.JS

Para realizar a comunicação entre frontend e backend o pacote que vamos utilizar é o [express](https://expressjs.com). Primeiramente vamos adicioná-lo ao projeto:

```
yarn add express
```

Dentro do arquivo `main.js` vamos colocar o código de teste abaixo para verificar se o `express` está funcionando:

```js
import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Olá Mundo! E Não Comece do Zero!'))

app.listen(port, () => console.log(`APP listening on port ${port}!`));
```

Agora, com o yarn, podemos executar:

````
yarn dev
````

Ele vai executar o script `nodemon src/main.js` que criamos no `package.json`. Se tudo deu certo, você pode visitar o endereço `localhost:3000` no seu browser que você verá a mensagem *Olá Mundo, e não comece do zero!*.

