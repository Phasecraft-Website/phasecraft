const path = require('path');

const linkResolver = require(`./src/helpers/linkResolver`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
            type
          }
        }
      }
    }
  `);
  const posts = await graphql(`
      {
        allPrismicNewsPost {
          edges {
            node {
              uid
            }
          }
        }
      }
  `);
  const insights = await graphql(`
      {
        allPrismicInsight {
          edges {
            node {
              uid
            }
          }
        }
      }
  `);

  // Templates
  const pageTemplate = path.resolve('src/templates/page.jsx');
  const postTemplate = path.resolve('src/templates/NewsPost/index.jsx');
  const insightTemplate = path.resolve('src/templates/Insight/index.jsx');

  // Pages
  const pagesList = pages.data.allPrismicPage.edges;
  const postsList = posts.data.allPrismicNewsPost.edges;
  const insightList = insights.data.allPrismicInsight.edges;

  pagesList.forEach(edge => {
    createPage({
      path: linkResolver()(edge.node),
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  postsList.forEach(edge => {
    createPage({
      path: `/news/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      }
    });
  });

  insightList.forEach(edge => {
    createPage({
      path: `/insight/${edge.node.uid}`,
      component: insightTemplate,
      context: {
        uid: edge.node.uid,
      }
    });
  });
};

/* Allow us to use something like: import { X } from 'directory' instead of '../../folder/directory' */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
