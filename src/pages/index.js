import React from "react"
import { Image } from 'react-bootstrap';

import NavBar from "../components/navbar"
import SEO from "../components/seo"
import logo from "../images/logo.png"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
    <>
      <SEO></SEO>

      {/* Place navbar */}
      <NavBar></NavBar>

      {/* Place image */}
      <Image src={logo}

         style={{
          "display": `flex`,
          "justify-content": `center`,
          "align-items": `center`
        }}

      fluid />
    </>
)

export default IndexPage
