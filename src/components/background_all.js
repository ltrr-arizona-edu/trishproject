import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

export default function BackgroundAll() {
  const data = useStaticQuery(graphql`{
  allMarkdownRemark(
    filter: {fields: {slug: {regex: "^/background/"}}}
    sort: {fields: frontmatter___weight}
  ) {
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
              gatsbyImageData(width: 960, layout: CONSTRAINED)
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
              <GatsbyImage
                image={node.frontmatter.primaryimage.childImageSharp.gatsbyImageData}
                alt={node.frontmatter.primaryimage.base} />
            </div>
          );}
        return (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        )
      })}
    </div>
  );
}
