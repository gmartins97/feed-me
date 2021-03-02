import React from "react"

import Base from "../components/base"
import NavBar from "../components/navbar"
import Address from "../components/address"

const Index = () => {
  return (
    <div>
      {/* Place base */}
      <Base></Base>

      {/* Place navbar */}
      <NavBar></NavBar>

      {/* Place address */}
      <Address></Address>
    </div>
  )
}

export default Index
