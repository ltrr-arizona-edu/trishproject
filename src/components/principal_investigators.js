import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';

export default function PrincipalInvestigators() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "^/people/principal_investigators/"}}}) {
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
      <h2>Principal Investigators</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.name}</h3>
          <p>({node.frontmatter.affiliation})</p>
          <Img fixed={node.frontmatter.portrait.childImageSharp.fixed} />
          <p>
            {node.excerpt}{" "}
            <Link to={node.fields.slug}>More</Link>
          </p>
        </div>
      ))}
    </div>
  )
}
