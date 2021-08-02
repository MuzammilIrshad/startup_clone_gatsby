const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;

    //1. Get path to Template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    //2. Get MarkDown Data
    const res = await graphql(`
query  {
  allContentfulStartupPakistan {
    edges {
      node {
        heading
        slug
      }
    }
  }
}
`)
    //3. Create Pages
    res.data.allContentfulStartupPakistan.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/${edge.node.slug}`,
            context: {
                slug: edge.node.heading
            }
        })
    })

}