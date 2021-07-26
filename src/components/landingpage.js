import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types"

import Banner from "./banner"
import Footer from "./footer"

const LandingPage = ({ children }) => {
  return <>
    <Banner />
    <StaticImage
      src="../images/dam_and_trees.jpg"
      alt="Dam and trees"
      layout="fullWidth" />
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
