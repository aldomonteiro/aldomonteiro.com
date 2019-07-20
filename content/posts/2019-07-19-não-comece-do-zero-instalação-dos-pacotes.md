---
language: pt
template: post
title: '[Não comece do zero] Instalação dos pacotes e configuração dos ambientes'
slug: nao-comece-do-zero-instalacao
draft: false
date: 2019-07-19T14:24:31.660Z
description: >-
  Essa é o primeiro post da série Não comece do Zero, aonde vou criar um sistema
  web de gestão para uma pequena empresa com ferramentas e frameworks que
  agilizam o desenvolvimento.
category: Não Comece do Zero
tags:
  - javascript node react fullstack
---
Nesse post vou instalar os pacotes básicos para executar o backend e deixar uma aplicação mínima funcionando.

## Configurando o backend

Para executar os passos desse tutorial é preciso ter instalado o Node, versão 10 ou superior, e o npm.

Node.js na versão 10 utiliza as especificações do ES6 (ou ES2015), mas não te deixa importar e exportar módulos com os comandos `import/export`. Para resolver esse problema e poder utilizar a mesma sintaxe tanto no *backend* quanto no *frontend*, vou utilizar o [esm](https://github.com/standard-things/esm) no backend.

Vamos utilizar o yarn para inicializar o projeto, package.json e adicionar o `esm`:

```
yarn create esm
```
Algumas perguntas serão feitas, pode pressionar <Enter> para todas as elas e aceitar os valores padrão.

Esse comando vai criar alguns arquivos para nós, entre eles o `package.json`, `index.js` e `main.js`. O arquivo `package.json` lista todas as dependências do projeto e os outros 2 são criados pelo módulo `esm`.

Outro módulo essencial para usar em desenvolvimento é o [nodemon](https://nodemon.io/). O nodemon é o módulo que executa o programa e o reinicia automaticamente quando há alguma modificação. Execute esse comando:

```
yarn add nodemon --dev
```

`nodemon` somente deve ser utilizado em desenvolvimento, por isso utilizamos a opção `--dev`.

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

E alterar o arquivo `package.json` e incluir o script de inicialização (abaixo da tag `author` e acima da tag `license`:

```json
  "author": "Aldo Monteiro"  
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
  "license": "MIT"
```

Agora, com o yarn, podemos executar:

````
yarn dev
````

Ele vai executar o script `nodemon src/main.js` que criamos no `package.json`. Se tudo deu certo, você pode visitar o endereço `localhost:3000` no seu browser que você verá a mensagem *Olá Mundo, e não comece do zero!*.





