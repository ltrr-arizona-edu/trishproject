import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const WebtoolLink = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "images/unh_web_tool.png"}) {
    childImageSharp {
      gatsbyImageData(width: 214, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <div className="card mx-auto mt-2" style={{width: `12rem` }}>
      <GatsbyImage
        image={data.placeholderImage.childImageSharp.gatsbyImageData}
        className="card-img-top"
        alt="Icon: web tool screenshot" />
      <div className="card-body">
        <h5 className="card-title">Data Exploration and Mapping</h5>
        <p className="card-text">The University of New Hampshire hosts the project's open-access online tool.</p>
        <a href="https://trish.sr.unh.edu/maps/" className="btn btn-red">Start</a>
      </div>
    </div>
  );

}

export default WebtoolLink
