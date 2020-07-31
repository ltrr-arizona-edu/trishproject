import React from "react"
import PropTypes from "prop-types"

import Banner from "./banner"
import Footer from "./footer"

const InteriorPage = ({ children }) => {
  return (
    <>
      <Banner />
      <div>
        <main>{children}</main>
        <Footer copyrightDate={(new Date().getFullYear()).toString()} />
      </div>
    </>
  )
}

InteriorPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default InteriorPage
