import * as React from "react"

import styles from "../styles/address.module.scss"
import Flags from "./flags"

const Address = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.address}>500 Terry Francois Street San Francisco, CA 94158 | Daily 10AM-10PM</h1>
            {/*https://stackoverflow.com/a/47273110*/}
            <Flags/>
        </div>
    )
}

export default Address