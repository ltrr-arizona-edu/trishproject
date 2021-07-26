import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types"

import Banner from "./banner"
import Footer from "./footer"

const LandingPage = ({ children }) => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/dam_and_trees.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)

  return <>
    <Banner />
    <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} />
    <div>
      <main>{children}</main>
      <Footer copyrightDate={(new Date().getFullYear()).toString()} />
    </div>
  </>;
}

LandingPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPage
