import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function ActivitiesAll() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/activities/"}}}, sort: {fields: frontmatter___weight}) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>
            {node.excerpt}{" "}
            <Link to={node.fields.slug}>More</Link>
          </p>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </div>
  )
}
