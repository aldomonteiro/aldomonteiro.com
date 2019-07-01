'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`{
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}) {
        group(field: frontmatter___language) {
          totalCount
          fieldValue
        }
      }
    }  
  `);

  const languages = result.data.allMarkdownRemark.group;
  const { postsPerPage } = siteConfig;

  let grandTotal = 0;
  languages.map((language) => {
    grandTotal += language.totalCount;

    const numPages = Math.ceil(language.totalCount / postsPerPage);

    for (let i = 0; i < numPages; i += 1) {
      const langslug = language.fieldValue;
      createPage({
        path: i === 0 ? langslug : `${langslug}/page/${i}`,
        component: path.resolve('./src/templates/index-template.js'),
        context: {
          language: langslug,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? langslug : `${langslug}/page/${i - 1}`,
          nextPagePath: `/${langslug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      });
    }
  });

  /**
   * Page for all posts all languages
   */
  const numPages = Math.ceil(grandTotal / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `page/${i}`,
      component: path.resolve('./src/templates/index-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `page/${i - 1}`,
        nextPagePath: `page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }

};
