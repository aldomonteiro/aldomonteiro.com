---
language: pt
template: post
title: Qual é o melhor gerenciador de pacotes para o Node em 2019? Yarn ou NPM?
slug: /yarn-ou-npm
draft: false
date: 2019-07-20T16:23:10.924Z
description: >-
  O gerenciador de pacotes padrão do Node.js é o npm e foi o único disponível
  desde seu lançamento em 2011 até 2016, quando um gerenciador de pacotes
  concorrente foi lançado: Yarn. Yarn foi criado pelo Facebook e foi projetado
  para resolver algumas das deficiências do npm naquela época.
category: node
tags:
  - node
  - npm
  - yarn
---
## Principais deficiências do NPM

O NPM tinha duas grandes deficiências. A primeira delas foi a falta de um arquivo de trava. Um arquivo de trava contém todas as informações sobre a versão exata de cada dependência.

Considerando que os pacotes atualizam para novas versões o tempo todo, há um grande risco de o seu código quebrar se não for compatível com as versões mais recentes de certas dependências. É por isso que é importante "travar" dependências para uma única versão. Isso não podia ser feito com npm.

O Yarn resolveu esse problema gerando um arquivo `yarn.lock`, que armazena exatamente qual versão de qual dependência foi instalada.

A segunda grande deficiência do `npm foi ser não-determinístico, ou seja, é provável que sua pasta node_modules seja diferente da pasta node_modules do seu colega ou até mesmo seja diferente entre os diferentes servidores de teste e produção.

O `Yarn` é um gerenciador de pacotes determinísticos, o que significa que todos os computadores com um determinado arquivo `package.json` terão exatamente as mesmas dependências instaladas em sua pasta `node_modules. Isso ajuda a evitar cenários em que o código funcionaria em seu computador, mas não em um computador diferente.

O Yarn resolveu essas duas principais deficiências do npm, além de ser mais rápido e com comandos mais simples (com muitos emojis 😎) fez com que muitos desenvolvedores mudassem do npm para o Yarn.

## O npm não ficou para trás

No entanto, a equipe de desenvolvedores do npm não ficou parada e reagiu com o lançamento do npm versão 5 em meados de 2017. Instalar dependências com o npm ficou significativamente mais rápido, e finalmente incluíram arquivos de trava, ou *lockfiles* (`package-lock.json).

No momento em que escrevo, o npm está na versão 6.10 e parece ter se aproximado do conjunto de recursos do Yarn. A equipe npm está trabalhando bastante em segurança, com a aquisição do [Lift Security e da Node Security Platform](https://blog.npmjs.org/post/172793182214/npm-acquires-lift-security-and-node-security) e com o comando `npm-audit`, que analisa recursivamente sua árvore de dependência para identificar o que é inseguro.

## Veridito final

Para quem está começando a programar com Node.js, recomendo utilizar o npm, pois é o pacote padrão instalado junto com o Node.js e não faz sentido instalar uma ferramenta a mais que não trará grandes vantagens para pequenos projetos.

No entanto, se você está trabalhando com projetos maiores, vale a pena dar uma chance para o Yarn, pelos seguintes motivos:
- Rapidez: Confira [aqui](https://github.com/appleboy/npm-vs-yarn) e [aqui](https://www.ryadel.com/en/yarn-vs-npm-pnpm-2019/) alguns testes rodando npm instal vs yarn install que mostram que Yarn ainda é mais rápido que o npm. Isso porque o Yarn faz quase tudo simultaneamente para maximizar a utilização de recursos. 
- Confiabilidade: O Yarn usa um formato lockfile detalhado, mas conciso e um algoritmo determinístico para operações de instalação, garantindo que qualquer instalação que funcione em um sistema funcionará exatamente da mesma maneira em outro sistema. 
- Segurança: O Yarn usa *checksums* para verificar a integridade de cada pacote instalado antes de seu código ser executado.


