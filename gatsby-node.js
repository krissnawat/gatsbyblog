const path = require('path');
const _ = require("lodash");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              tags
              templateKey
              path
              date
              title
              description
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    
      // Create Blog Pages
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.tsx`),
        context: {} // additional data can be passed via context
      });

      // Create Tag Pages
      const tagSet = new Set()
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag);
        });
      }
      const tagList = Array.from(tagSet);
      tagList.forEach(tag => {
        createPage({
          path: `/tag/${_.kebabCase(tag.toLowerCase())}/`,
          component: path.resolve("src/templates/tag.tsx"),
          context: {
            tag
          }
        });
      });

    });
  });
};
