import React from "react"

import InteriorPage from "../components/interiorpage"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <InteriorPage>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, you just hit a route that doesn&#39;t exist.</p>
  </InteriorPage>
)

export default NotFoundPage
