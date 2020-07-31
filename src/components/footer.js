import PropTypes from "prop-types"
import React from "react"
import UazLogo from "../components/uaz_logo"
import UnhLogo from "../components/unh_logo"

const Footer = ({ copyrightDate }) => {
return <footer className="mt-2">
    <div className="d-sm-flex justify-content-around">
      <div>
        <UnhLogo/>
      </div>
      <div>
        © {copyrightDate}
      </div>
      <div>
        <UazLogo />
      </div>
    </div>
  </footer>
}

Footer.propTypes = {
  copyrightDate: PropTypes.string,
}

Footer.defaultProps = {
  copyrightDate: ``,
}

export default Footer
