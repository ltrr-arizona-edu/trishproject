import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWithText = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/trish_banner.png" }) {
        childImageSharp {
          fixed(width: 551) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}
    alt="TRISH: Tree-Ring Integrated System for Hydrology"
  />
}

export default LogoWithText
