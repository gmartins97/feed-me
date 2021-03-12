import React from "react"

import Base from "../components/base"
import NavBar from "../components/navbar"
import Address from "../components/address"

import * as styles from "../styles/index.module.scss"

const Index = () => {
  return (
    <>

      {/* Place base */}
      <Base></Base>

      {/* Place navbar */}
      <NavBar></NavBar>

      {/* Place address */}
      <Address></Address>

      <div className={styles.estupido}></div>

    </>
  )
}

export default Index
