import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="m-auto">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
        </Nav>
        </Navbar>
    )
}

export default navbar