---
language: pt
template: post
title: >-
  Como utilizar os comandos import e export no Node.js sem precisar utilizar
  Babel
slug: /utilizar-import-export-node-sem-babel
draft: false
date: 2019-07-19T14:24:31.660Z
description: >-
  Nem todas as funcionalidades já utilizadas por bibliotecas como o React estão
  disponíveis no Node, tais como a capacidade de fazer import e export de
  módulos. Nesse post, vou te mostrar como incorporar essa característica sem
  precisar utilizar um transpiler como o Babel.
category: Node
tags:
  - node
  - babel
  - ecmascript
---
O Node.js desde a versão 10 já conta com todas as funcionalidades previstas na especificação ES2018 e a versão com as *últimas atualizações* recomendada para download - 12.6 - já implementa todos os recursos do ES2019.

No entanto, uma funcionalidade muito utilizada por frameworks JS ainda não está disponível no Node: os comandos `import` e `export`. Para quem está acostumado com React, Angular ou Vue, pode sentir falta do `import` e ter que usar o `require` parece ser um passo para trás.

Por isso, vou utilizar neste tutorial uma alternativa leve e performática para trazer essa funcionalidade para o Node, sem precisar transpilar o código utilizando o Babel.

Ao final, vamos instalar [Express.Js](https://www.expressjs.com) para responder a uma requisição do browser e testar o funcionamento básico do serviço criado.

## Configurando o backend

Para executar os passos desse tutorial é preciso ter instalado o Node, versão 10 ou superior, e o npm.

Para habilitar os comandos `import/export` para importar e exportar módulos tal como é feito no React.js por exemplo, e poder utilizar a mesma sintaxe tanto no *backend* quanto no *frontend*, vou utilizar o [esm](https://github.com/standard-things/esm) no backend.

Vamos utilizar o yarn para inicializar o projeto, package.json e adicionar o `esm`:

```
yarn create esm
```

Esse comando vai fazer algumas perguntas para criar os arquivos iniciais. Pressione <Enter> para todas as elas e aceitar os valores padrão.

Alguns arquivos serão criados para nós, entre eles o `package.json`, `index.js` e `main.js`. O arquivo `package.json` lista todas as dependências do projeto e os outros 2 são criados pelo módulo `esm`.

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

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`APP listening on port ${port}!`));
```

Veja que estamos utilizando o comando `import express from 'express'`, comando esse que não seria possível no Node padrão. Teríamos que usar o comando `require`. Mas, para nossa alegria, o `esm` interpreta o comando e executa a importação do módulo corretamente.

Agora, com o yarn, podemos executar:

````
yarn dev
````

Ele vai executar o script `nodemon src/main.js` que criamos no `package.json`. Se tudo deu certo, você pode visitar o endereço `localhost:3000` no seu browser que você verá a mensagem *Hello World!*.

##Conclusão

O Babel já foi uma importante ferramenta para habilitar as especificações mais modernas do JS no Node. No entanto, as versões mais recentes do Node já incorporam por padrão essas especificações e não é mais preciso uma ferramenta que adiciona vários passos ao processo de desenvolvimento, que é o caso do *transpiling* feito pelo Babel.

Uma das poucas funcionalidades não coberta na ES implementada pelo Node e muito utilizada no browser é a capacidade de importar/exportar módulos. O pacote `esm` cobre esse *gap* com a inclusão dos comandos `import/export` sem pesar na performance da aplicação.
