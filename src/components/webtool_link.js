import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WebtoolLink = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/unh_web_tool.png" }) {
        childImageSharp {
          fluid(maxWidth: 214) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div className="card mx-auto mt-2" style={{width: `12rem` }}>
    <Img className="card-img-top" alt="Icon: web tool screenshot" fluid={data.placeholderImage.childImageSharp.fluid} />
    <div className="card-body">
      <h5 className="card-title">Data Exploration and Mapping</h5>
      <p className="card-text">The Univesity of New Hampshire hosts the project's open-access online tool.</p>
      <a href="https://trish.sr.unh.edu/maps/" className="btn btn-red">Start</a>
    </div>
  </div>

}

export default WebtoolLink
