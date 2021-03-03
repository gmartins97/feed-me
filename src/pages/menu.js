import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Base from "../components/base"
import NavBar from "../components/navbar"
import Address from "../components/address"
import Category from "../components/category"

import styles from "../styles/menu.module.scss"

import entrees from "../images/entrees.jpg"
import salads from "../images/salads.jpg"
import meat from "../images/meat.jpg"
import fish from "../images/fish.jpg"
import desserts from "../images/desserts.jpg"
import drinks from "../images/drinks.jpg"

const Menu = () => {

    const cards = [
        { "image": entrees, "title": "Entrees", "page": "entrees" },
        { "image": salads, "title": "Salads", "page": "salads" },
        { "image": meat, "title": "Meat", "page": "meat" },
        { "image": fish, "title": "Fish", "page": "fish" },
        { "image": desserts, "title": "Desserts", "page": "desserts" },
        { "image": drinks, "title": "Drinks", "page": "drinks" }
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

    const renderGrid = () => {
        let cellIndex = 0;

        return (
            <Container className={styles.containerMargin} style={{ 'max-width': '100%' }}>
                {transformCardsIntoGrid(cards).map((row, rowIndex) => {
                    return (
                        <Row xs={1} xl={3} key={rowIndex}>
                            {row.map(column => {
                                cellIndex++;

                                return (
                                    <Col className={styles.cellMargin} key={cellIndex}>
                                        <AniLink cover to={column.page} direction="left" bg="#292b2c"><Category card={column} index={cellIndex}></Category></AniLink>
                                    </Col>
                                )
                            })}
                        </Row>
                    )
                })}
            </Container>
        )
    }

    return (
        <div>
            {/* Place base */}
            <Base></Base>

            {/* Place navbar */}
            <NavBar></NavBar>

            {/* Place address */}
            <Address></Address>

            <Container style={{ 'maxWidth': '75%'}}>
                {/* Place header */}
                {header()}

                {/* Place categories */}
                {renderGrid()}
            </Container>
        </div>
    )
}

export default Menu
