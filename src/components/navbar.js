import React from "react"
import { Link } from "gatsby"

import styles from "../styles/navbar.module.scss"

import logo from "../images/logo.png"

const NavBar = () => {
    return (
        /*<Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top">
            <Nav className={styles.logo}>
                <Nav.Link href="#menu" className={styles.link}>Menu</Nav.Link>

                <Navbar.Brand>
                    <img className={styles.logo} src={logo} alt="Logo"/>
                </Navbar.Brand>
                
                <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
        </Navbar>*/

        // <div className={`"fixed-bottom" ${styles.carousel}`}>  
 
        <div className={styles.container}>
            <Link to="/menu"><h1 className={`${styles.navbarLink} ${styles.navbarRow}`}>Menu</h1></Link>
            <Link to="/"><div className={styles.navbarRow}><img className={styles.navbarLogo} src={logo} alt="Logo"/></div></Link>
            <Link to="/contacts"><h1 className={`${styles.navbarLink} ${styles.navbarRow}`}>Contacts</h1></Link>
        </div>

    )
}

export default NavBar