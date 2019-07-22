---
language: pt
template: post
title: >-
  NPM, Bower, Browserify, Gulp, Grunt, Webpack.. As principais ferramentas para
  gerenciamento de pacotes, criação de bundlers e task runners para agilizar o
  desenvolvimento JavaScript.
slug: /post/package-managers-bundlers-task-runners
draft: false
date: 2019-07-22T21:24:50.452Z
description: >-
  NPM? Bower? Browserify? Gulp? Grunt? Webpack? 


  Existem diversas ferramentas utilizadas em projetos JavaScript para
  gerenciamento de pacotes, criação de *bundlers* e execução de tarefas
  repetitivasae. Com tantas opções, não é difícil ficar perdido quando você vê
  um projeto em execução. Para isso, vou falar aqui de algumas ferramentas
  bastante utilizadas para agilizar o processo de desenvolvimento.
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
## Gerenciadores de pacotes

Os gerenciadores de pacotes simplificam a instalação e atualização das dependências do projeto, que são bibliotecas como: jQuery, Bootstrap, etc - tudo o que é usado em seu site e não é escrito por você.

Navegar por todos os sites da biblioteca, baixar e descompactar os arquivos, copiar arquivos para os projetos - tudo isso é substituído por alguns comandos no terminal.

- NPM significa *N*ode *P*ackage *M*anager ( Gerenciador de pacotes Node.JS) e ajuda você a gerenciar todas as bibliotecas das quais o seu software depende. As bibliotecas são listados no arquivo `package.json` e executar o `npm install` na linha de comando baixa todos os seus pacotes e os deixa prontos para serem usados. Usado tanto para bibliotecas front-end quanto back-end.

- Bower: para gerenciamento de pacotes front-end, o conceito é o mesmo que o NPM. Todas as suas bibliotecas são armazenadas em um arquivo chamado `bower.json` possui o comando o `bower install` na linha de comando.

A maior diferença entre o Bower e o NPM é que o NPM faz uma árvore de dependência aninhada enquanto o Bower requer uma árvore de dependência plana como abaixo:

- NPM
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

- Bower

``
project root
[bower_components] // default directory for dependencies
 -> dependency A
 -> dependency B // needs A
 -> dependency C // needs B and D
 -> dependency D
``

##Webpack e Browserify

Webpack e Browserify fazem basicamente o mesmo trabalho: processar o seu código para ser usado em um ambiente alvo (normalmente no browser, no entanto, você pode mirar outros ambientes como o Node). O resultado desse processamento são um ou mais pacotes (ou *bundles*) - *scripts* montados para serem executados no ambiente alvo.

Por exemplo, vamos dizer que você escreveu um código ES6 dividido em módulos e quer poder rodá-lo no browser. Se esses módulos foram feitos para o Node, o browser não vai conseguir entender pois eles apenas existem no ambiente Node. Módulos ES6 também não funcionam em browsers mais antigos, como o IE11. Além disso, você pode ter usado algumas funcionalidades experimentais do Javascript (ESNext) que os browsers ainda não implementaram ainda, então, rodar esses códigos não vai dar certo. Aí que entram as ferramentas como Webpack e Browserify para resolver esses problemas, traduzindo esses códigos para uma sintaxe que o browser é capaz de executar. Nesse processo, eles também aplicam diversas otimizações nesses *bundles* de código.

No entanto, Webpack e Browserify são diferentes em vários pontos: Webpack oferece várias ferramentas por padrão (por exemplo, partição de código), enquanto Browserify requer alguns plugins adicionais. Todavia, ambos levam a resultados muito parecidos. Pode até ser considerado um caso de preferência pessoal. 

## Webpack Dev Server

O Webpack Dev Server oferece uma solução semelhante ao Browsersync - um servidor de desenvolvimento que permite ver em execução as alterações em desenvolvimento. Ou seja, o servidor de desenvolvimento atualiza automaticamente o navegador quando identifica alterações de código ou até mesmo propagando código alterado para o navegador sem *refresh* utilizando a funcionalidade *hot module replacement*.

## Task runners

*Task runners* e ferramentas de *build* são, basicamente, ferramentas de linha de comando. Por que precisamos usá-los? Em uma palavra: automação. Quanto menos trabalho você tem para executar tarefas repetitivas como minificação, compilação, testes unitários e *linting* mais produtivo você será.

- Grunt: Você pode criar automação para o seu ambiente de desenvolvimento para pré-processar códigos ou criar scripts de *build* com um arquivo de configuração.

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

- Gulp: Faz automação como o Grunt, mas em vez de configurações, você pode escrever JavaScript com fluxos como se fosse uma aplicação Node.

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

