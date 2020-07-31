import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function BackgroundAll() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/background/"}}}, sort: {fields: frontmatter___weight}) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              primaryimage {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
                base
              }    
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.primaryimage) {
          return (
            <div key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <Img
                fluid={node.frontmatter.primaryimage.childImageSharp.fluid}
                alt={node.frontmatter.primaryimage.base}
              />
            </div>
          )}
        return (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        )
      })}
    </div>
  )
}
