import React from "react"
import { graphql } from "gatsby"
import InteriorPage from "../components/interiorpage"
import Seo from "../components/seo"

export default function Background({ data }) {
  const entry = data.markdownRemark
  return (
    <InteriorPage>
      <Seo title={entry.frontmatter.title} description={entry.excerpt} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{entry.frontmatter.title}</h1>
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
        title
        weight
      }
      excerpt
    }
  }
`