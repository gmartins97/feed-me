import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Image } from 'react-bootstrap';

import Base from "../components/base";
import NavBar from "../components/navbar";
import Address from "../components/address";

import landing from "../images/landing.png";

import * as styles from "../styles/index.module.scss";

const Index = () => {
  return (
    <div>
      {/* Place base */}
      <Base></Base>

      {/* Place navbar */}
      <NavBar></NavBar>

      {/* Place address */}
      <Address></Address>

      <div className={styles.container}>
        <Image className={styles.landing} src={landing} />

        <div>
          <h1 className={styles.text}>Estamos de volta!</h1>
        </div>

        <div>
          <AniLink cover to="/menu" direction="down" bg="#292b2c" duration={0.5}>
            <div className={styles.button}>Menu</div>
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default Index
