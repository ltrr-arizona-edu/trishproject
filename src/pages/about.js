import React from "react"
import InteriorPage from "../components/interiorpage"
import BackgroundAll from "../components/background_all"
import SEO from "../components/seo"

export default function () {
  return (
    <InteriorPage>
      <SEO title="About" />
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
}
