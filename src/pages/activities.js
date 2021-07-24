import React from "react"
import InteriorPage from "../components/interiorpage"
import ActivitiesAll from "../components/activities_all"
import Seo from "../components/seo"

const ActivitiesPage = () => (
  <InteriorPage>
    <Seo title="Activities" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Activities</h1>
          <ActivitiesAll />
        </div>
      </div>
    </div>
  </InteriorPage>
)

export default ActivitiesPage
