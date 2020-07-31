import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Everyone() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/people/"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              affiliation
              name
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Everyone involved in the Project</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <h2>{node.frontmatter.name}</h2>
          <p>({node.frontmatter.affiliation})</p>
        </div>
      ))}
    </div>
  )
}
