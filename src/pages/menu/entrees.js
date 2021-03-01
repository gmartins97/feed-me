import React from "react"
import { Container } from 'react-bootstrap'

import Base from "../../components/base"
import NavBar from "../../components/navbar"
import Detail from "../../components/detail"

import styles from "../../styles/detail.module.scss"

import salads from "../../images/salads.jpg"
import entrees from "../../images/entrees.jpg"

const Salads = () => {

    const items = [
        { "image": salads, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "image": salads, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
    ];

    const header = () => {       
        return (
            <div>
                <h1 className={styles.title}>Salads</h1>
                <hr className={styles.horizontalLine} />
            </div>
        )
    }

    return (
        <>

            {/* Place base */}
            <Base></Base>

            {/* Place navbar */}
            <NavBar></NavBar>

            <Container>
                {/* Place header */}
                {header()}

                {/* Place detail */}
                <Detail items={items}></Detail>
            </Container>
        </>
    )
}

export default Salads
