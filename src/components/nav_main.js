import { Link } from "gatsby"
import React from "react"

const NavMain = () => (
  <header>
    <div className="container">
      <nav className="nav">
        <Link className="nav-link" activeClassName="active" to="/">Home</Link>
        <Link className="nav-link" activeClassName="active" to="/about/">About</Link>
        <Link className="nav-link" activeClassName="active" to="/activities/">Activities</Link>
        <Link className="nav-link" activeClassName="active" to="/team/">Team</Link>
        <Link className="nav-link" activeClassName="active" to="/publications_and_refs/">Publications</Link>
        <Link className="nav-link" activeClassName="active" to="/contact_and_collaboration/">Contact</Link>
      </nav>
    </div>
  </header>
)

export default NavMain
