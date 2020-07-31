import React from "react"
import InteriorPage from "../components/interiorpage"
import ContactAll from "../components/contact_all"
import SEO from "../components/seo"

export default function () {
  return (
    <InteriorPage>
      <SEO title="Contact" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact and Collaboration</h1>
            <ContactAll />
          </div>
        </div>
      </div>
    </InteriorPage>
  )
}
