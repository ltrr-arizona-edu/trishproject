import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function ActivitiesHighlighted() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/activities/"}}, frontmatter: {highlighted: {eq: true}}}, sort: {fields: frontmatter___weight}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p>
            {node.excerpt}{" "}
            <Link to={node.fields.slug}>More</Link>
          </p>
        </div>
      ))}
    </div>
  )
}
