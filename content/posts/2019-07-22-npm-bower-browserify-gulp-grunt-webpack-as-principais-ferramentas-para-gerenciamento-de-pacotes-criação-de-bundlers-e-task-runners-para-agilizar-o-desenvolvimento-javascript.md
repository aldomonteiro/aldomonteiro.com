---
language: pt
template: post
title: >-
  As principais ferramentas para gerenciamento de pacotes, criação de bundlers e
  task runners para agilizar o desenvolvimento JavaScript.
slug: /post/package-managers-bundlers-task-runners
draft: false
date: 2019-07-22T21:24:50.452Z
description: >-
  NPM, Yarn, Bower, Browserify, Gulp, Grunt, Webpack? 


  Existem tantas bibliotecas para usar em projetos JavaScript que não são
  exatamente para a aplicação que você vai construir (e sim para o ambiente de
  desenvolvimento) que não é difícil ficar perdido quando você vê um projeto em
  execução. Por isso, vou falar aqui para que servem essas ferramentas e aonde
  você deve utilizá-las.
category: javascript
tags:
  - javascript
  - node
  - npm
  - bower
  - browserify
  - gulp
  - grunt
  - webpack
---
Ainda bem que há almas caridosas que constroem bibliotecas que já vem com tudo empacotado pra você começar a programar a lógica do seu negócio. Tome por exemplo o excelente [Create React App](https://github.com/facebook/create-react-app) do Facebook. 

É um acelerador que empacota boa parte das bibliotecas do título desse artigo e te entrega 1 único script para você usar. Olha as dependências de um projeto criado utilizando esse acelerador:

```json
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
```

Lindo né? Mas tem muita coisa escondida aí. Se você puxar pra fora (ejetar!) as dependências escondidas nesse `react-scripts`, você verá quantas dependências estão encapsuladas. Tá aí:

```json
"dependencies": {
    "@babel/core": "7.4.3",
    "@svgr/webpack": "4.1.0",
    "@typescript-eslint/eslint-plugin": "1.6.0",
    "@typescript-eslint/parser": "1.6.0",
    "babel-eslint": "10.0.1",
    "babel-jest": "^24.8.0",
    "babel-loader": "8.0.5",
    "babel-plugin-named-asset-import": "^0.3.2",
    "babel-preset-react-app": "^9.0.0",
    "camelcase": "^5.2.0",
    "case-sensitive-paths-webpack-plugin": "2.2.0",
    "css-loader": "2.1.1",
    "dotenv": "6.2.0",
    "dotenv-expand": "4.2.0",
    "eslint": "^5.16.0",
    "eslint-config-react-app": "^4.0.1",
    "eslint-loader": "2.1.2",
    "eslint-plugin-flowtype": "2.50.1",
    "eslint-plugin-import": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.2.1",
    "eslint-plugin-react": "7.12.4",
    "eslint-plugin-react-hooks": "^1.5.0",
    "file-loader": "3.0.1",
    "fs-extra": "7.0.1",
    "html-webpack-plugin": "4.0.0-beta.5",
    "identity-obj-proxy": "3.0.0",
    "is-wsl": "^1.1.0",
    "jest": "24.7.1",
    "jest-environment-jsdom-fourteen": "0.1.0",
    "jest-resolve": "24.7.1",
    "jest-watch-typeahead": "0.3.0",
    "mini-css-extract-plugin": "0.5.0",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "pnp-webpack-plugin": "1.2.1",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "postcss-normalize": "7.0.1",
    "postcss-preset-env": "6.6.0",
    "postcss-safe-parser": "4.0.1",
    "react": "^16.8.6",
    "react-app-polyfill": "^1.0.1",
    "react-dev-utils": "^9.0.1",
    "react-dom": "^16.8.6",
    "resolve": "1.10.0",
    "sass-loader": "7.1.0",
    "semver": "6.0.0",
    "style-loader": "0.23.1",
    "terser-webpack-plugin": "1.2.3",
    "ts-pnp": "1.1.2",
    "url-loader": "1.1.2",
    "webpack": "4.29.6",
    "webpack-dev-server": "3.2.1",
    "webpack-manifest-plugin": "2.0.4",
    "workbox-webpack-plugin": "4.2.0"
  },
```

E como nem todo projeto pode usar um acelerador como esse, você vai se deparar com projetos **entupidos** de dependências e você precisa entender para que servem os mais populares dessa lista enorme.

Então vamos começar falando desde os gerenciadores de pacotes para que você não se assuste quando ver alguém usando um comando `bower install` ao invés do clássico `npm install`.

## Package Managers

Os *package managers* (ou gerenciadores de pacotes) simplificam a instalação e atualização das dependências do projeto, que são bibliotecas como jQuery, Bootstrap, entre outras. Ou seja, tudo o que é usado em seu projeto e não foi escrito por você.

Ao invés de navegar pelos sites das bibliotecas, baixar e descompactar os arquivos e copiá-los para os projetos, você apenas executa alguns comandos no terminal.

São eles:

- **npm** significa *N*ode *P*ackage *M*anager ( Gerenciador de pacotes Node.JS) e ajuda você a gerenciar todas as bibliotecas das quais o seu software depende. As bibliotecas são listados no arquivo `package.json` e executar `npm install` na linha de comando baixa todos os seus pacotes e os deixa prontos para serem usados. Usado tanto para bibliotecas front-end quanto back-end (Há também o Yarn, que faz a mesma coisa que o **npm**).

- **Bower**: para gerenciamento de pacotes front-end, o conceito é o mesmo que o NPM. Todas as suas bibliotecas são armazenadas em um arquivo chamado `bower.json` e possui o comando `bower install` na linha de comando.

A maior diferença entre o Bower e o NPM é que o NPM faz uma árvore de dependência aninhada enquanto o Bower requer uma árvore de dependência plana como abaixo:

- **npm**
```
project root
[node_modules] // default directory for dependencies
 -> dependency A
 -> dependency B
    [node_modules]
    -> dependency A

 -> dependency C
    [node_modules]
    -> dependency B
      [node_modules]
       -> dependency A 
    -> dependency D
``

- **Bower**

```
project root
[bower_components] // default directory for dependencies
 -> dependency A
 -> dependency B // needs A
 -> dependency C // needs B and D
 -> dependency D
```

##Webpack e Browserify

Webpack e Browserify são muito parecidos. Eles processam o seu código para ser usado em um ambiente alvo (o browser, normalmente, ou o Node, no backend). O resultado desse processamento são um ou mais pacotes (ou *bundles*), que são *scripts* montados para serem executados no ambiente alvo.

Por exemplo, vamos dizer que você escreveu um código ES6 dividido em módulos e quer rodá-lo no browser. Se esses módulos foram feitos para o Node, o browser não vai conseguir entendê-los pois eles apenas existem no ambiente Node. 

Módulos ES6 também não funcionam em browsers mais antigos, como o IE11. Além disso, você pode ter usado algumas funcionalidades experimentais do Javascript (ESNext) que os browsers ainda não implementaram ainda, então, rodar esses códigos não vai dar certo. Aí que entram as ferramentas como Webpack e Browserify para resolver esses problemas, traduzindo esses códigos para uma sintaxe que o browser é capaz de executar. Nesse processo, eles também aplicam diversas otimizações nesses *bundles* de código.

No entanto, Webpack e Browserify são diferentes em vários pontos: Webpack oferece várias ferramentas por padrão (por exemplo, partição de código), enquanto Browserify requer alguns plugins adicionais. Todavia, ambos levam a resultados muito parecidos. A escolha normalmente vem da experiência com uma ou outra solução e preferência pessoal do desenvolvedor.

## Webpack Dev Server

O Webpack Dev Server oferece uma solução semelhante ao Browsersync - um servidor de desenvolvimento que permite ver em execução as alterações feitas no código. 

Ou seja, o servidor de desenvolvimento atualiza automaticamente o navegador quando identifica alterações de código ou até mesmo propaga o código alterado para o navegador sem *refresh* utilizando uma funcionalidade chamada *hot module replacement*, algo como substituir um módulo por outro durante a execução do programa.

## Task runners

*Task runners* e ferramentas de *build* são, basicamente, ferramentas de linha de comando. Por que precisamos usá-los? Em uma palavra: automação. Quanto menos trabalho você tem para executar tarefas repetitivas como minificação, compilação, testes unitários e *linting* mais produtivo você será.

As ferramentas mais usadas:

- **Grunt**: Você pode criar automação para o seu ambiente de desenvolvimento para pré-processar códigos ou criar scripts de *build* com um arquivo de configuração.

Cada tarefa no Grunt é uma matriz de diferentes configurações de plugins, que são executados um após o outro, de uma forma estritamente independente e sequencial.

```json
grunt.initConfig({
  clean: {
    src: ['build/app.js', 'build/vendor.js']
  },

  copy: {
    files: [{
      src: 'build/app.js',
      dest: 'build/dist/app.js'
    }]
  }

  concat: {
    'build/app.js': ['build/vendors.js', 'build/app.js']
  }

  // ... other task configurations ...

});

grunt.registerTask('build', ['clean', 'bower', 'browserify', 'concat', 'copy']);
```

- **Gulp**: Faz automação como o Grunt, mas, em vez de configurações, você pode escrever JavaScript com fluxos como se fosse uma aplicação Node.

Este é um exemplo de declaração de tarefa do Gulp:

```js
//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

//declare the task
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
```

## Conclusão

Pesquisando um pouco, podemos encontrar várias outras bibliotecas semelhantes a essas, mas, para esse artigo não ficar muito grande, vamos ficar por aqui, até porque, o que programador gosta mesmo é de construir coisas e essas bibliotecas só servem para você não ficar perdendo tempo com o ambiente e ganhar tempo para construir as coisas que precisam ser construídas.


