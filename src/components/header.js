// import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

const Header = () => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      style={{
        margin: `auto`,
        padding: `1.45rem 0 0 0`,
        display: `table`
      }}
    >
      <div style={{
        display: `table-cell`,
        "vertical-align": `middle`,
      }}>
        <h1 style={{
          color: `white`,
          textDecoration: `none`,
        }}>
          Menu
        </h1>
      </div>

      <div style={{
        display: `table-cell`,
      }}>
        <img src={logo}
          style={{
            width:200
          }}
        alt="logo">
        </img>
      </div>

      <div style={{
        display: `table-cell`,
        "vertical-align": `middle`,
      }}>
        <h1 style={{
          color: `white`,
          textDecoration: `none`,
        }}>
          Contact
        </h1>
      </div>

    </div>
  </header >
)

/* Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
} */

export default Header
