import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Container } from 'react-bootstrap'

import Base from "../../components/base"
import NavBar from "../../components/navbar"
import Address from "../../components/address"
import Detail from "../../components/detail"

import salads from "../../images/salads.jpg"
import entrees from "../../images/entrees.jpg"
import meat from "../../images/meat.jpg"

import * as styles from "../../styles/detail.module.scss"

const Drinks = () => {

    const items = [
        { "key": 1, "image": salads, "name": "Salada", "price": "10€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 2, "image": entrees, "name": "Rissóis", "price": "20€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" },
        { "key": 3, "image": meat, "name": "Chicha", "price": "30€", "description": "Pão, Pernil de porco, Queijo da Serra da Estrela" }
    ];

    const header = () => {       
        return (
            <div>
                <div className={styles.header}>
                    <div className={styles.back}>
                        <AniLink cover to="/menu" direction="right" bg="#292b2c" className={styles.link}><ArrowBackIosIcon></ArrowBackIosIcon></AniLink>
                    </div>
                    <div className={styles.title}>
                        <h1>Drinks</h1>
                    </div>
                </div>

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

            <Container className={styles.container}>
                {/* Place header */}
                {header()}

                {/* Place detail */}
                <Detail items={items}></Detail>
            </Container>
            
        </>
    )
}

export default Drinks
