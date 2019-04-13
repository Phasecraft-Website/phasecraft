const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  // Templates
  const pageTemplate = path.resolve("src/templates/page.jsx");

  // Pages
  const pagesList = pages.data.allPrismicPage.edges;

  pagesList.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};

/* Allow us to use something like: import { X } from 'directory' instead of '../../folder/directory' */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
