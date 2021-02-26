import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Base from "../components/base"
import NavBar from "../components/navbar"
import Category from "../components/category"
import styles from "../styles/categories.module.css"
import "../styles/categories.scss"

import entrees from "../images/entrees.jpg"
import salads from "../images/salads.jpg"
import meat from "../images/meat.jpg"
import fish from "../images/fish.jpg"
import desserts from "../images/desserts.jpg"
import drinks from "../images/drinks.jpg"

const Categories = () => {

    const cards = [
        { "image": entrees, "title": "Entrees" },
        { "image": salads, "title": "Salads" },
        { "image": meat, "title": "Meat" },
        { "image": fish, "title": "Fish" },
        { "image": desserts, "title": "Desserts" },
        { "image": drinks, "title": "Drinks" }
    ];

    const transformCardsIntoGrid = (cards) => {
        let numberOfColumns = 2;

        return (
            cards.reduce(function (rows, key, index) {
                return ((index % numberOfColumns === 0) ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
            }, [])
        )
    }

    const renderGrid = () => {
        let cellIndex = 0;

        return (
            /*<Container className={styles.containerMargin}>
                {transformCardsIntoGrid(cards).map((row, rowIndex) => {
                    return (
                        <Row xs={1} xl={2} key={rowIndex}>
                            {row.map(column => {
                                cellIndex++;

                                return (
                                    <Col className={`${styles.cellMargin} ${styles.shadowBox} "shadow-lg"`} key={cellIndex}><Category card={column} index={cellIndex}></Category></Col>
                                )
                            })}
                        </Row>
                    )
                })}
            </Container>*/

            <Container className={styles.containerMargin}>
                {transformCardsIntoGrid(cards).map((row, rowIndex) => {
                    return (
                        <Row xs={1} xl={2} key={rowIndex}>
                            {row.map(column => {
                                cellIndex++;

                                return (
                                    <Col className={styles.cellMargin} key={cellIndex}>
                                        <Category card={column} index={cellIndex}></Category>
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
    <>

        {/* Place base */}
        <Base></Base>

        {/* Place navbar */}
        <NavBar></NavBar>

        {/* Place categories */}
        {renderGrid()}

    </>
)
}

export default Categories
