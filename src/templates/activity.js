import React from "react"
import { graphql } from "gatsby"
import InteriorPage from "../components/interiorpage"
import Seo from "../components/seo"

export default function Activity({ data }) {
  const entry = data.markdownRemark
  return (
    <InteriorPage>
      <Seo title={entry.frontmatter.title} description={entry.excerpt} />
      <div>
        <h1>{entry.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: entry.html }} />
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
      }
      excerpt
    }
  }
`