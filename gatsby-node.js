const path = require('path');

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const blogPostTemplate = path.resolve(`src/templates/post.js`);

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 250)
//             html
//             id
//             frontmatter {
//               date
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       console.log(result.errors);
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       console.log(node);
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {}, // additional data can be passed via context
//       });
//     });
//   });
// };

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              headerImage {
                childImageSharp {
                  fluid {
                    sizes
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log('slug', node.fields);
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
  });
};
