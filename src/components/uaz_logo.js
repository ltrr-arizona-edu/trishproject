import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UazLogo = () => {
  const uazlogo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/uaz_ltrr_logo_white.png" }) {
        childImageSharp {
          fixed(width: 348) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

return <Img fixed={uazlogo.placeholderImage.childImageSharp.fixed}
    alt="LTRR, University of Arizona"
  />
}

export default UazLogo
