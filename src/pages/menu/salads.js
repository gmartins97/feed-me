import React from "react"
import { Container } from 'react-bootstrap'

import Base from "../../components/base"
import NavBar from "../../components/navbar"
import Address from "../../components/address"
import Detail from "../../components/detail"

import * as styles from "../../styles/detail.module.scss"

import salads from "../../images/salads.jpg"
import entrees from "../../images/entrees.jpg"
import meat from "../../images/meat.jpg"

const Salads = () => {

    const items = [
        { "key": 1, "image": salads, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 2, "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 3, "image": meat, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 4, "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 5, "image": salads, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 6, "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 7, "image": salads, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 8, "image": entrees, "name": "Sandes de pernil com queijo", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
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

            {/* Place address */}
            <Address></Address>

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
