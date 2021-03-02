import React from "react"
import { Navbar, Image } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../styles/navbar.module.scss"

import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top">
            <AniLink cover to="/" direction="up" bg="#292b2c"><Image className={styles.navbar} src={logo} rounded/></AniLink>
        </Navbar>
    )
}

export default NavBar