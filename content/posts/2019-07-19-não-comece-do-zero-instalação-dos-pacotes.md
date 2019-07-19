---
language: pt
template: post
title: '[Não comece do zero] Instalação dos pacotes'
slug: nao-comece-do-zero-instalacao
draft: true
date: 2019-07-19T14:24:31.660Z
description: >-
  Essa é o primeiro post da série Não comece do Zero, aonde vou criar um sistema
  web de gestão para uma pequena empresa com ferramentas e frameworks que
  agilizam o desenvolvimento.
category: Não Comece do Zero
tags:
  - javascript node react fullstack
---
Nesse post vou instalar os pacotes necessários para fazer o frontend e o backend e deixar uma aplicação mínima funcionando.

Vou criar um catálogo de produtos com as operações básicas atualização (**CRUD** - *create, update and delete*).

## Instalando o backend

Para poder utilizar a mesma sintaxe tanto no *backend* quanto no *frontend*, vou instalar os pacotes do *Babel* no backend. Babel tem algumas bibliotecas que *transpilam* o código JavaScript ES6 para o Javascript.

Vamos utilizar o yarn para inicializar o projeto:

```
yarn init
```

Esse comando vai criar o arquivo `package.json` do projeto. Esse arquivo é o arquivo que controla todas as dependências e respectivas versões do seu projeto.

Algumas perguntas serão feitas, pode pressionar <Enter> para todas as elas e aceitar os valores padrão.






