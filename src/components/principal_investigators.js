import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function PrincipalInvestigators() {
  const data = useStaticQuery(graphql`{
  allMarkdownRemark(
    filter: {fields: {slug: {regex: "^/people/principal_investigators/"}}}
  ) {
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
              gatsbyImageData(width: 188, layout: FIXED)
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
          <GatsbyImage image={node.frontmatter.portrait.childImageSharp.gatsbyImageData} />
          <p>
            {node.excerpt}{" "}
            <Link to={node.fields.slug}>More</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
