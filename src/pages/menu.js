import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from 'react-bootstrap'
import { useScrollRestoration } from "gatsby"

import Base from "../components/base"
import NavBar from "../components/navbar"
import Address from "../components/address"
import Category from "../components/category"

import entrees from "../images/entrees.jpg"
import salads from "../images/salads.jpg"
import meat from "../images/meat.jpg"
import fish from "../images/fish.jpg"
import desserts from "../images/desserts.jpg"
import drinks from "../images/drinks.jpg"

import * as styles from "../styles/menu.module.scss"

const Menu = () => {

    const scrollRestoration = useScrollRestoration(`teste`)

    const cards = [
        { "image": entrees, "title": "Entradas", "page": "entrees" },
        { "image": salads, "title": "Saladas", "page": "salads" },
        { "image": meat, "title": "Carne", "page": "meat" },
        { "image": fish, "title": "Peixe", "page": "fish" },
        { "image": desserts, "title": "Sobremesas", "page": "desserts" },
        { "image": drinks, "title": "Bebidas", "page": "drinks" }
    ];

    const header = () => {       
        return (
            <div>
                <h1 className={styles.title}>Menu</h1>
                <hr className={styles.horizontalLine} />
            </div>
        )
    }

    const transformCardsIntoGrid = (cards) => {
        let numberOfColumns = 3;

        return (
            cards.reduce(function (rows, key, index) {
                return ((index % numberOfColumns === 0) ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
            }, [])
        )
    }

    const menu = () => {
        let cellIndex = 0;

        return (
            <div>
                {transformCardsIntoGrid(cards).map((row, rowIndex) => {
                    return (
                        <Row xs={1} md={3} key={rowIndex}>
                            {row.map(column => {
                                cellIndex++;

                                return (
                                    <Col className={styles.cellMargin} key={cellIndex}>
                                        <AniLink cover to={column.page} direction="left" bg="#292b2c" duration={0.75}><Category card={column} index={cellIndex} {...scrollRestoration}></Category></AniLink>
                                    </Col>
                                )
                            })}
                        </Row>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Menu</title>
            </Helmet>

            {/* Place base */}
            <Base></Base>

            {/* Place navbar */}
            <NavBar></NavBar>

            {/* Place address */}
            <Address></Address>

            <Container className={styles.container}>
                {/* Place header */}
                {header()}

                {/* Place categories */}
                {menu()}
            </Container>
        </div>
    )
}

export default Menu
