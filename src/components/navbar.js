import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Image } from 'react-bootstrap';

import logo from "../images/logo.png";

import * as styles from "../styles/navbar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <AniLink cover to="/" direction="up" bg="#292b2c" duration={0.5}><Image className={styles.logo} src={logo} rounded/></AniLink>
        </div>
    )
}

export default NavBar