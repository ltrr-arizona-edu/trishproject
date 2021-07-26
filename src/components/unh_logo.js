import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const UnhLogo = () => {
  const unhlogo = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/unh_eos_logo_blue.png"}) {
    childImageSharp {
      gatsbyImageData(width: 327, layout: FIXED)
    }
  }
}
`)

return (
  <GatsbyImage
    image={unhlogo.placeholderImage.childImageSharp.gatsbyImageData}
    alt="EOS, University of New Hampshire" />
);
}

export default UnhLogo
