import React from "react"
import InteriorPage from "../components/interiorpage"
import PublicationsAll from "../components/publications_all"
import Seo from "../components/seo"

const PublicationsPage = () => (
  <InteriorPage>
    <Seo title="Publications" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Publications and References</h1>
          <PublicationsAll />
        </div>
      </div>
    </div>
  </InteriorPage>
)

export default PublicationsPage
