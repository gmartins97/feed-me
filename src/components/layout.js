/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
/* import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby" */

import Header from "./header"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <div style={{
        display: `flex`,
        "flex-flow": `column`,
        height: `100%`,
      }}>

        <Header />

        <div style={{

        }}>
          <iframe title="landing_video" style={{
            border: `none`,
            overflow: `hidden`,
            width: `100%`,
            "flex-grow": 1,
            height: 1000
        }} src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fxaulauraporto%2Fvideos%2F242569473512590%2F&show_text=false&autoplay=true" scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>

      </div>
    </>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout
