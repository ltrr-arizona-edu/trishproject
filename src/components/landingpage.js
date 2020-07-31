import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import Banner from "./banner"
import Footer from "./footer"

const LandingPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/dam_and_trees.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3712) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Banner />
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div>
        <main>{children}</main>
        <Footer copyrightDate={(new Date().getFullYear()).toString()} />
      </div>
    </>
  )
}

LandingPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPage
