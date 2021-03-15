import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Address from "../components/address"
import Base from "../components/base"
import NavBar from "../components/navbar"

import * as styles from "../styles/index.module.scss"

const Index = () => {
  return (
    <div>
        {/* Place base */}
        <Base></Base>

        {/* Place navbar */}
        <NavBar></NavBar>

        {/* Place address */}
        <Address></Address>

      <div>
        <div className={styles.background}></div>

        <div>
          <h1 className={styles.text}>Estamos de volta!</h1>
        </div>
        
        <div>
          <AniLink cover to="/menu" direction="down" bg="#292b2c"><div className={styles.button}>Menu</div></AniLink>          
        </div>
      </div>      
    </div>
  )
}

export default Index
