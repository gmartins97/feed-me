import React from "react"
import { Navbar } from 'react-bootstrap'

import styles from "../styles/address.module.scss"

const Address = () => {
    return (
        <Navbar className="justify-content-center" bg="dark" variant="dark">
            <Navbar.Text className={styles.address}>500 Terry Francois Street San Francisco, CA 94158 | Daily 10AM-10PM</Navbar.Text>
        </Navbar>
    )
}

export default Address