import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from 'gatsby-image';

export default function Students() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/people/students/"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              affiliation
              name
              portrait {
                childImageSharp {
                  fixed(width: 188) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }    
            }
            excerpt
            id
          }
        }
      }
    }
  `)

  return (
    <div>
      <h2>Students</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.name}</h3>
          <p>({node.frontmatter.affiliation})</p>
          <Image fixed={node.frontmatter.portrait.childImageSharp.fixed} />
          <p>
            {node.excerpt}{" "}
            <Link to={node.fields.slug}>More</Link>
          </p>
        </div>
      ))}
    </div>
  )
}
