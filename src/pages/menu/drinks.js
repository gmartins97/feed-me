import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Helmet } from "react-helmet"
import { Container } from 'react-bootstrap'

import Base from "../../components/base"
import NavBar from "../../components/navbar"
import Address from "../../components/address"
import Detail from "../../components/new-detail"

import salads from "../../images/salads.jpg"
import meat from "../../images/meat.jpg"

import * as styles from "../../styles/new-detail.module.scss"

const Drinks = () => {

    const items = [
        { "key": 1, "image": salads, "name": "Salada", "price": "10€", "description": "Alface, Cebola, Tomate" },
        { "key": 2, "image": meat, "name": "Posta", "price": "30€", "description": "Chicha da boa" }
    ];

    const header = () => {
        return (
            <div>
                <div className={styles.header}>
                    <div className={styles.back}>
                        <AniLink cover to="/menu" direction="right" bg="#292b2c" className={styles.link} duration={0.75}><ArrowBackIosIcon></ArrowBackIosIcon></AniLink>
                    </div>
                    <div className={styles.title}>
                        <h1>Bebidas</h1>
                    </div>
                </div>

                <hr className={styles.horizontalLine} />
            </div>
        )
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bebidas</title>
            </Helmet>

            {/* Place base */}
            <Base></Base>

            {/* Place navbar */}
            <NavBar></NavBar>

            {/* Place address */}
            <Address></Address>

            <Container className={styles.detail}>
                {/* Place header */}
                {header()}

                {/* Place detail */}
                <Detail items={items}></Detail>
            </Container>
        </div>
    )
}

export default Drinks
