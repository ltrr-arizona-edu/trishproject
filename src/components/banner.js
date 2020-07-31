import { Link } from "gatsby"
import React from "react"
import LogoWithText from "./logowithtext"
import NavMain from "./nav_main"

const Banner = () => (
  <header>
    <div className="background-wrapper bg-blue">
      <div className="container">
        <div className="row">
          <div className="col-12 text-left">
            <Link to="/">
              <LogoWithText />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <NavMain />
  </header>
)

export default Banner
