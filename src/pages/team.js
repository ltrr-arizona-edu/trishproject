import React from "react"
import InteriorPage from "../components/interiorpage"
import PrincipalInvestigators from "../components/principal_investigators"
import Investigators from "../components/investigators"
import Students from "../components/students"
import Collaborators from "../components/collaborators"
import SEO from "../components/seo"

export default function () {
  return (
    <InteriorPage>
      <SEO title="Team" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Team</h1>
            <PrincipalInvestigators />
            <Investigators />
            <Students />
            <Collaborators />
          </div>
        </div>
      </div>
    </InteriorPage>
  )
}
