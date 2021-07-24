import React from "react"
import InteriorPage from "../components/interiorpage"
import BackgroundAll from "../components/background_all"
import Seo from "../components/seo"

const AboutPage = () => (
  <InteriorPage>
    <Seo title="About" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>About</h1>
          <BackgroundAll />
        </div>
      </div>
    </div>
  </InteriorPage>
)

export default AboutPage
