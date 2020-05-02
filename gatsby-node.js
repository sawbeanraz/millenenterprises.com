/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { slash } = require('gatsby-core-utils');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      products: allProductsYaml(limit: 100) {
        edges {
          product: node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const productDetailTemplate = path.resolve('src/templates/product-detail.js');

  result.data.products.edges.forEach(({ product }) => {
    createPage({
      path: `/product/${product.id}/`,
      component: slash(productDetailTemplate),
      context: {
        id: product.id,
      },
    });
  });
};
