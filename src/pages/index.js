import React from "react"
import LandingPage from "../components/landingpage"
import WebtoolLink from "../components/webtool_link"
import ActivitiesHighlighted from "../components/activities_highlighted"
import SEO from "../components/seo"

const IndexPage = () => (
  <LandingPage>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>Project Context</h1>
          <p>
            Arctic Ocean sea ice has been declining for several decades now.
            As the ice retreats, more open water is exposed. This reduces
            the amount of light reflected back from the Arctic and leads to
            further Arctic warming and sea ice loss. This particular
            phenomena contributes to the amplification of warming across
            Arctic regions, which is changing the regular connections
            between river water and atmospheric circulation, and
            consequently the heat and energy flowing into the Arctic Ocean.
          </p>
          <p>
            Modern observations of Arctic river flow, and estimates of
            associated heat budgets, rarely extend back more than several
            decades. These records are too short and discontinues to fully
            quantify the long-term trends in freshwater flow and heat
            budgets. This makes difficult to understand the processes
            underlying those trends.
          </p>
          <p>
            TRISH project is designed to fill that gap by utilizing
            tree-ring records and river gauge data in the Arctic to
            reconstruct and study multi-century fluctuations of water, heat
            and energy flow to the Arctic Ocean.
          </p>
          <p>
            We use a wide array of existing and newly collected tree-ring
            data in Siberia, coupled with a long record of river gauge data,
            to develop and test reconstructions of water flow and heat
            budgets for the Yenisei River, the second largest river of the
            Arctic.
          </p>
          <p>
            Causal attribution of spatial-temporal variations of river
            hydrology requires consideration of changing snowmelt, thawing
            permafrost, and modification of natural flow regimes by dams and
            reservoirs. This consideration is assessed with the New
            Hampshire University Water Balance Model. With the engagement of
            multiple layers of instrumental and modeled data updated to 2020
            (e.g., climatic, hydrologic, anthropogenic, General Circulation
            Model (GCM) outputs) the team is using over 300 tree-ring
            records from Siberia to reconstruct river discharge and water
            temperature for the last 300 years.
          </p>
        </div>
        <div className="col-md-4 bg-cool-gray">
          <WebtoolLink />
          <h2>Highlighted Activities</h2>
          <ActivitiesHighlighted />
        </div>
      </div>
    </div>
  </LandingPage>
)

export default IndexPage
