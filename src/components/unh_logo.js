import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UnhLogo = () => {
  const unhlogo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/unh_eos_logo_blue.png" }) {
        childImageSharp {
          fixed(width: 327) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

return <Img fixed={unhlogo.placeholderImage.childImageSharp.fixed}
    alt="EOS, University of New Hampshire"
  />
}

export default UnhLogo
