import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const LogoWithText = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/trish_banner.png"}) {
    childImageSharp {
      gatsbyImageData(width: 551, layout: FIXED)
    }
  }
}
`)

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      alt="TRISH: Tree-Ring Integrated System for Hydrology" />
  );
}

export default LogoWithText
