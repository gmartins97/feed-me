import React from "react"
import { Image } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../styles/navbar.module.scss"

import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <AniLink cover to="/en" direction="up" bg="#292b2c"><Image className={styles.logo} src={logo} rounded/></AniLink>
        </div>
    )
}

export default NavBar