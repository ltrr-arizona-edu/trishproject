const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const peoplemd = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/people/"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const activitiesmd = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/activities/"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

   const backgroundmd = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/background/"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const publicationmd = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/publications/"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

 const contactmd = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/contact/"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  peoplemd.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/person.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  activitiesmd.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/activity.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  backgroundmd.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/background.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  publicationmd.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/publication.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  contactmd.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/contact.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}