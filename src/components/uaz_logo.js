import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const UazLogo = () => {
  const uazlogo = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/uaz_ltrr_logo_white.png"}) {
    childImageSharp {
      gatsbyImageData(width: 348, layout: FIXED)
    }
  }
}
`)

return (
  <GatsbyImage
    image={uazlogo.placeholderImage.childImageSharp.gatsbyImageData}
    alt="LTRR, University of Arizona" />
);
}

export default UazLogo
