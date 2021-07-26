import React from "react"
import { StaticImage } from "gatsby-plugin-image";

const WebtoolLink = () => (
  <div className="card mx-auto mt-2" style={{width: `12rem` }}>
    <StaticImage
      src="../images/unh_web_tool.png"
      className="card-img-top"
      alt="Icon: web tool screenshot"
      layout="constrained"
      width={214} />
    <div className="card-body">
      <h5 className="card-title">Data Exploration and Mapping</h5>
      <p className="card-text">The University of New Hampshire hosts the project's open-access online tool.</p>
      <a href="https://trish.sr.unh.edu/maps/" className="btn btn-red">Start</a>
    </div>
  </div>
)

export default WebtoolLink
