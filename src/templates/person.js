import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import InteriorPage from "../components/interiorpage"
import Seo from "../components/seo"

export default function Person({ data }) {
  const entry = data.markdownRemark
  return (
    <InteriorPage>
      <Seo title={entry.frontmatter.name} description={entry.excerpt} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>{entry.frontmatter.name}</h1>
            <h2>({entry.frontmatter.affiliation})</h2>
            <Img fixed={entry.frontmatter.portrait.childImageSharp.fixed} />
            <div dangerouslySetInnerHTML={{ __html: entry.html }} />
          </div>
        </div>
      </div>
    </InteriorPage>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        affiliation
        portrait {
          childImageSharp {
            fixed(width: 188) {
              ...GatsbyImageSharpFixed
            }
          }
        }    
      }
      excerpt
    }
  }
`