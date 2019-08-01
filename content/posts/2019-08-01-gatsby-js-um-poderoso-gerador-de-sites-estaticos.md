---
language: pt
template: post
title: 'Gatsby.JS - Um poderoso gerador de sites estáticos'
slug: /react-gatsbyjs
draft: true
date: 2019-08-01T17:55:09.597Z
description: >-
  Você está pensando em usar o Gatsby.js como gerador de site estático para o seu site ou aplicativo da web? 
  Saiba mais sobre todos os benefícios de usar o Gatsby.Js com o React ...
category: react
tags:
  - react
  - gatsby
---
Não muito tempo atrás, muitos argumentavam contra *frameworks* como React, Angular ou Vue para o seu site pessoal. Desde então, ferramentas construídas sobre esses frameworks - como o [Gatsby.js](https://www.gatsbyjs.org/) para o React.js - surgiram para tornar o desenvolvimento de sites estáticos mais simples. 

Começo com o benefício mais óbvio: **O Gatsby.js é construído sobre o React.js**. Como desenvolvedor intermediário do React, você ficará imediatamente confortável com ele. Você estrutura suas páginas como componentes, implementa um repertório de componentes de interface do usuário, estiliza seus componentes com módulos CSS ou componentes estilizados e atualiza o estado tranquilamente. Mas também como desenvolvedor não-React - vindo de outro framework de escolha - você não terá dificuldade em entender como as coisas funcionam se você se sentir confortável com JavaScript.

> Nota: Eu não recomendo aprender React.js enquanto aprende Gatsby.js. Este último vem com muitas coisas no topo que você deve aprender separadamente. Aprender os dois frameworks em um único passo irá confundir as linhas entre React e Gatsby. Sem mencionar o sistema de plug-in, o GraphQL e as partes relacionadas ao Node.js. Obtenha um bom entendimento sobre o React.js primeiro antes de aprender o Gatsby.js.

O Gatsby vem como uma estrutura completa para criar sites estáticos. O React, por outro lado, precisará de várias bibliotecas adicionais para que você consiga criar uma aplicação web com funcionalidades básicas.

Por exemplo, o Gatsby já vem com uma roteador de URLs embutido implementado, liberando você de precisar escolher um ou outro e implementá-lo no seu site. Desta forma, você não precisa se preocupar com isso, como em um aplicativo simples do React. A implementação do [roteamento do Gatsby](https://www.gatsbyjs.org/docs/routing/) é diferente do React. Há dois modos para criar rotas: rotas estáticas e dinâmicas.

* Rotas Estáticas: Todo componente na pasta *src/pages* se torna automaticamente uma rota.
* Rotas dinâmicas: A API `createPage` permite que você crie rotas dinâmicas.

A maioria de suas rotas será estática, portanto, será preciso apenas implementar um componente para cada uma delas. E para acessar essa rota você só precisa usar o componente [Gatsby Link](https://www.gatsbyjs.org/docs/gatsby-link/). Isso é apenas o começo para o roteamento em Gatsby. Sob o capô, o Gatsby aplica melhorias para você. Por exemplo, ele capta rotas que estão indo a lugar nenhum, [pré-carrega outras páginas de rotas com links para essas páginas](https://www.gatsbyjs.org/docs/gatsby-link/), e impede uma atualização do navegador ao navegar de uma página para outra. **Basicamente, o Gatsby Routing vem com todas as melhorias que você esperaria que um aplicativo tivesse por padrão.**

## Gatsby.js Plugins

Os plugins do Gatsby possibilitam a introdução de recursos pré-definidos em um nível refinado para o seu projeto. Uma coleção de plugins também é chamada de *Gatsby Theme*. Plugins vêm com sua configuração padrão, mas também podem ser substituídos por `options` do seu lado. Se você deseja ter análises (por exemplo, Google Analytics) ou rastreamento de erros (por exemplo, Sentry) para o seu site, é possível acrescentar um plug-in e algumas linhas de código:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.GATSBY_SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
  ...
};
```

Desde o início, o Gatsby.js apresentou-se com um sistema de plugins bem estruturado. Uma API limpa e, portanto, uma ótima taxa de adoção leva de um plugin para outro. Hoje em dia, há um [enorme ecossistema de plugins do Gatsby.js]("https://www.gatsbyjs.org/plugins/) para você escolher no seu site Gatsby.js. Muitos dos benefícios a seguir (imagens, descontos, integrações de terceiros) do uso do Gatsby.js estão ligados ao seu poderoso ecossistema de plug-ins.

## Como GraphQL é utilizado no Gatsby.js

GraphQL é comumente visto como uma alternativa ao REST. No entanto, enquanto o REST é usado principalmente para comunicação cliente-servidor via HTTP, o GraphQL é apenas uma linguagem de consulta, independentemente do protocolo de comunicação e representação de dados. Essencialmente GraphQL pode ser usado em qualquer lugar onde um cliente solicita dados. O [Gatsby faz uso dessas características do GraphQL](https://www.gatsbyjs.org/docs/querying-with-graphql/) para consultar todos os seus arquivos internos (por exemplo, arquivos markdown) e externos (por exemplo, APIs de terceiros de integrações) de dados. O GraphQL é a interface entre o Gatsby e todas as suas fontes de dados.

```js
import React from 'react';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```

> Nota: O GraphQL é outro aspecto que torna difícil aprender o Gatsby.js como um iniciante. Como o React, ele vem com seu próprio ecossistema, melhores práticas e bibliotecas. No entanto, no Gatsby.js, você está usando apenas o GraphQL da perspectiva do cliente, portanto, quando começar a pensar nas fontes de dados do Gatsby como um gráfico, é bom usá-lo. No entanto, eu recomendo que você aprenda GraphQL à parte para obter uma melhor compreensão do mesmo.

Depois de iniciar seu aplicativo Gatsby.js, você pode abrir o GraphiQL, um cliente GraphQL exploratório que vem com o Gatsby, para percorrer todos os seus dados agregados pelo Gatsby. Será possível ver imagens e *markdowns* via GraphQL, mas também acessar a APIs de terceiros que vêm com o sistema de plugins do Gatsby (veja integrações).

Afinal, leva algum tempo para se ajustar a essa nova mentalidade de usar o GraphQL para todas as suas fontes de dados - **essencialmente tendo todos os seus dados disponíveis apenas com uma consulta do GraphQL** - mas uma vez que você se acostuma, torna-se um prazer trabalhar com ele.

## Usando imagens no Gatsby.js

O desempenho do seu site influencia sua pontuação de SEO e o UX do seu site. Se você estiver exibindo imagens maiores em suas postagens de blog ou em suas páginas de destino, não conseguirá otimizações de desempenho para elas. Antes de começar a usar o Gatsby.js, tive de implementar recursos como [lazy loading](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/) ou [source sets para imagens responsivas](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Uma vez implementado, tudo funcionou muito bem, mas sempre achei que esse detalhe de implementação não deveria estar em minhas mãos. Todos os outros sites precisam desses recursos, então por que não há uma abstração sem esforço para isso? O Gatsby resolve esse problema perfeitamente para você com [Plugins de Imagem](https://www.gatsbyjs.org/packages/gatsby-image/).

```js
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img sizes={data.file.childImageSharp.sizes} />
  </div>
);

export const query = graphql`
  query {
    file(relativePath: { eq: 'blog/react-gatsby-js.jpeg' }) {
      childImageSharp {
        sizes(maxWidth: 900) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
```

*Lazy Loading* e *source sets* de imagens responsivas são coisas do passado. Tudo é aplicado sob o capô para você. Além disso, o conhecido *Blur Effect* entra em ação para as pessoas que visitam o seu site, tornando o carregamento lento de imagens um problema para o UX. E isso arranha apenas a superfície do Gatsby Image, que lida com vários formatos de imagem e oferece uma API rica. **Não se preocupe mais com recursos de imagem comumente usados, porque o Gatsby cuida deles.**

## Integrações do Gatsby

As integrações do Gatsby.js estão ligadas ao sistema de plugins do Gatsby, porque elas são instaladas e configuradas como plugins. No entanto, muitas das integrações mais poderosas só fazem sentido quando são acopladas ao GraphQL para obter dados de uma API de terceiros.

Por exemplo, existem vários sistemas de gerenciamento de conteúdo concorrentes (CMS) que podem ser usados no Gatsby.js. Nesse tipo de *headless* CMS, os não-desenvolvedores podem organizar o conteúdo enquanto os desenvolvedores lidam com a implementação sob o capô no Gatsby.js longe do CMS. Afinal, o site do Gatsby.js consulta apenas a API do CMS para obter os dados necessários.

```js
// Gatsby plugin exemplo para uma API de CMS

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  ...
};

// example GraphQL query

query {
  contentFromCMS {
    edges {
      node {
        id
        name
        url
        imgSrcOne
        imgSrcTwo
      }
    }
  }
}
```

O código anterior mostra tudo o que é necessário para se conectar à API do Contenful. Inicialmente, você precisa instalar e configurar o plug-in do Gatsby com suas credenciais. Em seguida, você pode começar a consultar seus conjuntos de dados com o GraphQL, que são gerenciados pelo Contentful. Qualquer um que não seja desenvolvedor pode assumir a partir daqui para fornecer mais dados no CMS, enquanto os desenvolvedores garantem que tudo seja exibido corretamente no código-fonte ou no *markdown*.

O CMS Headless é apenas um dos conjuntos de integrações de terceiros da Gatsby. Você já viu antes como ela se integra perfeitamente a APIs de rastreamento, como o Google Analytics ou o Sentry. Também estão disponíveis ferramentas de teste A / B, como Segment. Outro tipo de integrações vem em forma de implantações (por exemplo, Netlify). Aqui você pode encontrar [todas as integrações do Gatsby](https://www.gatsbyjs.com/integrations/). Use-os para abstrair a dor que todo site sofre.

## A próxima geração do Markdown: MDX

Quase todo gerador de site estático vem com suporte para *markdown*. Caso contrário, não seria possível criar posts e páginas de destino de forma eficaz. O Gatsby usa seus plugins para disponibilizar *markdowns* em seu site. Com o GraphQL à sua disposição, você pode consultar qualquer arquivo *markdown* para renderizar todo o conteúdo em seus componentes do React.

```js
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      title
      description
      dateLong: date(formatString: "MMMM DD, YYYY")
      dateShort: date(formatString: "YYYY-MM-DD")
      banner {
        childImageSharp {
          sizes(maxWidth: 900) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      keywords
      hashtags
      author
    }
  }
}
```

Exceto para a consulta dinâmica do GraphQL, isso parece muito semelhante ao que outros geradores de sites estáticos estão fornecendo para você. No entanto, o Gatsby eleva este nível para mais alto, graças a possibilidade de [integrar perfeitamente](https://www.gatsbyjs.org/packages/gatsby-mdx/) com [MDX](https://mdxjs.com/) que permite usar o JSX (por exemplo, React Components) em seus arquivos markdown. **O MDX traz o markdown para o próximo nível** e é incrível ver como esse novo ecossistema floresce no Gatsby.js.

```js
---
path: "/blog/meu-primeiro-post"
date: "2019-08-01"
title: "Meu Primeiro Post"
---

# Meu primeiro post

Meu post aonde eu possu usar cabeçalhos e imagens do markdown.

![minha imagem alt text](./images/primeiro-blog.jpg)

e também JSX (por exemplo, React Components):

<YouTube videoId="YDLErVsbSRI" />

Além disso, posso passar informações de fora para esse
arquivo markdown para usá-los como adereços para os meus componentes React específicos:

<TableOfContents {...props} />

É assim que eu posso criar um índice automaticamente.
```

Basicamente, os arquivos de marcação podem coexistir ao lado de seu código-fonte em seu projeto Gatsby.js, mas também podem ser extraídos durante o tempo de criação a partir da integração via CMS *headless* por meio de sua API. Cabe a você onde você coloca seu conteúdo. Também imagens renderizadas em markdown vêm com todos os benefícios do Gatsby Image.

## Gatsby Themes & Conteúdo específico do site

Basicamente, os [Gatsby Themes](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) formam um conjunto de plugins do Gatsby sendo representados como um plugin. Você também pode combinar vários Gatsby Themes. Dessa forma, é possível publicar Gatsby Themes com o foco em determinados tópicos (por exemplo, Analytics, MDX), que podem ser transformados em sua configuração do Gatsby com todos os plug-ins restantes.

```js
module.exports = {
  plugins: [
    // your themes
    {
      resolve: "my-gatsby-analytics-theme",
      options: {},
    },
    // other plugins
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  ...
};
```

No entanto, e quanto a compartilhar a estrutura, o estilo e o comportamento de um site inteiro do Gatsby com outra pessoa, de modo que apenas o conteúdo seja diferente? Basicamente, como um tema Wordpress ou Hugo funcionaria. Efetivamente, você pode colocar todo o conteúdo específico do site em uma pasta separada, enquanto toda a estrutura, estilo e comportamento do site permanece em outro lugar.

Afinal, o sistema de plugins, os temas e a distribuição de conteúdo do Gatsby possibilitam a construção de um site do Gatsby que é usado por mais de uma parte. Se você seguir um passo adiante, poderá extrair todo o conteúdo para um CMS. Ele se alinha **[perfeitamente com o princípio DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)** se você quiser servir mais de um site estático complexo com o Gatsby.

## O Gatsby integra-se no JAMstack

O Gatsby integra-se perfeitamente ao JAMstack, onde o desenvolvimento de sites se torna indolor devido à natureza *plug and play* das tecnologias relacionadas a essa pilha de tecnologias. Por exemplo, em um JAMstack você pode usar o Netlify para servir seu site e o Contentful como CMS baseado em API para fornecer seu conteúdo. Se a autenticação for necessária, basta conectar outra API que lide com ela. 

>*Uma moderna arquitetura de desenvolvimento web baseada em JavaScript do lado do cliente, APIs reutilizáveis ​​e Markup pré-construído.* Mathias Biilmann, CEO e co-fundador da Netlify.

Basicamente, você não está mais executando uma arquitetura cliente-servidor com um banco de dados, mas apenas seu aplicativo do lado do cliente que é controlado pela API. Como o Gatsby.js oferece a base perfeita para integração com terceiros por causa de seu sistema de plug-in e GraphQL, **acredito que o Gatsby.js se tornará um dos blocos de construção mais cruciais no futuro do JAMstack.**

## "It's blazing fast ..."

O mantra mais importante do Gatsby.js: *"[it] helps developers build blazing fast websites and apps"*. A afirmação vale para a construção do site, até mesmo muitos dados são obtidos de APIs de terceiros, muita lógica é inserida em seu arquivo *gatsby-node.js* e muitas páginas diferentes são criadas.

A declaração também vale para o desempenho percebido dos usuários que visitam seu site. A utiliação de *lazy loading* para imagens, o pré-carregamento de páginas e os conjuntos de fontes de imagens responsivas melhoram tremendamente a UX. Se você estiver [realizando uma auditoria do Google Lighthouse](https://www.gatsbyjs.org/docs/audit-with-lighthouse/) com os padrões do Gatsby.js, [não será uma surpresa que sua pontuação esteja acima da média](https://twitter.com/dan_abramov/status/1085265495283171328).

## Gatsby PWA e Service Workers

Nunca foi tão fácil criar um Aplicativo Web Progressivo [PWA](https://developers.google.com/web/progressive-web-apps/). Mais um aspecto a considerar para melhorar o seu Índice de Auditoria do Site. Basicamente, você só precisa de 2 plugins ([esse](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/) e [esse](https:/www.gatsbyjs.org/packages/gatsby-plugin-manifest/) no Gatsby.js para que funcione:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Gatsby Website`,
        short_name: `My Gatsby Website`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
```

Enquanto o plugin Gatsby anterior fornece ao seu aplicativo um manifesto para torná-lo instalável na tela inicial de um usuário, o plug-in mais recente instala um *service worker* para que seu aplicativo seja executado off-line. É tudo o que é necessário para tornar seu aplicativo um PWA de uma perspectiva técnica. **E Gatsby torna isso muito fácil.**

Se você cria um site, tudo depende de você. Especialmente o prestador de serviços pode ser complicado com seus detalhes de implementação e melhores práticas em mudança. Eu mesmo o implementei para o meu site - isso foi feito em algumas horas - mas, se eu examinasse um ano depois, precisaria entendê-lo novamente e verificar se há coisas novas a considerar. No final, eu não quero me preocupar com isso e ficaria feliz em ter Gatsby com seus padrões.

No entanto, [se o *service worker* parar de funcionar](https://twitter.com/kentcdodds/status/1053338165363142656), isso causa uma pane no seu site. Acontece quando uma versão antiga do seu site é armazenada em cache e você não tem controle para fornecer aos usuários um novo site, exceto para que eles excluam manualmente seus *service workers* nas ferramentas do desenvolvedor do navegador. Portanto, devo dizer que não usei o plugin *service worker* do Gatsby ainda. Eu gostaria que houvesse mais de um padrão de configuração para servir a diferentes propósitos:

* 1) configuração mínima do *service worker* sem armazenamento em cache; só para agradar o Google Lighthouse
* 2) configuração do *service worker* padrão

Então eu escolheria o "pseudo" *service worker* e ficaria feliz sem um cache ansioso.

## Gatsby SEO

A implementação do SEO no Gatsby não é muito diferente de qualquer outro gerador de site estático. Você precisa conhecer dados estruturados e *metatags* para melhorar o SEO de seu site por padrão - independentemente do seu conteúdo, que vem com suas próprias otimizações de palavras-chave, etc.

**Dados estruturados:** Espalhe-os em todos os lugares nos componentes do React, onde isso faz sentido. Por exemplo, se você mostrar o autor do seu blog em algum lugar da página, existem dados estruturados para ele. Se você exibir uma data em algum lugar, haverá dados estruturados para ela. Ou, se você exibir elementos HTML para navegação, haverá dados estruturados para ele.

**Meta Tags:** Normalmente você tem um componente React que cuida de todos os aspectos de SEO para as metatags. Se um usuário visitar uma página em seu site, esses componentes receberão informações sobre o título, a descrição e as palavras-chave da página. Mas há mais como imagens de visualização para o Twitter e o Facebook. Tudo relacionado a SEO e mídias sociais pode acabar nesse componente.

## A comunidade Gatsby

**A comunidade Gatsby.js expande os limites dos geradores de sites estáticos.** Eles trabalham fortemente com suas integrações, otimização de desempenho e MDX para *markdown*. Se você abrir uma *issue* no GitHub, sempre se encontrará cercado por pessoas úteis. Tive boas experiências reportando problemas no Github do Gatsby e consegui, em todas as ocasiões, que meus problemas fossem resolvidos ou endereçados.

## Concluindo..

Enquanto o Gatsby.js fornece uma estrutura completa com todos os padrões esperados (roteamento, manipulação de imagens, sistema de plug-in), você ainda usa o React.js sob o capô para criar páginas e componentes de interface do usuário. Ele mescla uma abstração com um mundo concreto perfeitamente em uma solução para sites estáticos. Muitos outros sites estáticos estão muito atrás das inovações que o Gatsby.js traz sobre a mesa - a mais importante é seu funcionamento ser orientado a API. E isso só vai melhorar com uma comunidade em desenvolvimento, um ecossistema de plugins e temas.

Se você encontrar alguma outra coisa sobre o Gatsby.js que você goste, por favor, mande um e-mail para mim. Caso contrário, espero que este post seja uma ótima referência para pessoas que estejam considerando o Gatsby.js. Se você quiser receber uma notificação se eu fizer um curso sobre desenvolvimento estático de sites com o Gatsby.js, inscreva-se na minha newsleter :-) Isso pode acontecer no futuro, porque eu quero compartilhar todas as coisas que aprendi em detalhes de implementação.

*Traduzido e adaptado do [blog do Robin Wieruch](https://www.robinwieruch.de/react-gatsby-js/)*