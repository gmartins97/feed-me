import * as React from "react"

import * as styles from "../styles/address.module.scss"
// import Flags from "./flags"

const Address = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.address}><a className={styles.link} href="https://goo.gl/maps/6JtFgNty2eDUpgnv7">Rua de Miguel Bombarda 589, 4050-383 Porto</a> | Seg-Dom 10:00-22:00</h1>

            {/*https://stackoverflow.com/a/47273110*/}
            {/* <Flags/> */}
        </div>
    )
}

export default Address