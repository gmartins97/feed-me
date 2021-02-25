import React from "react"
import NavBar from "../components/navbar"
import Category from "../components/category"

import { Container, Row, Col } from 'react-bootstrap'
import entrees from "../images/entradas770x500.png"

const Categories = () => {

    const cards = [
        { "image": entrees, "title": "Entrees" },
        { "image": entrees, "title": "Salads" },
        { "image": entrees, "title": "Meat" },
        { "image": entrees, "title": "Fish" },
        { "image": entrees, "title": "Drinks" },
        { "image": entrees, "title": "Deserts" }
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
            <Container>
                {transformCardsIntoGrid(cards).map((row, rowIndex) => {
                    return (
                        <Row xs={1} md={2} key={rowIndex}>
                            {row.map(column => {
                                cellIndex++;

                                return (
                                    <Col key={cellIndex}><Category card={column} index={cellIndex}></Category></Col>
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

        {/* Place navbar */}
        <NavBar></NavBar>

        {/* Place categories */}
        {renderGrid()}

        </>
    )
}

export default Categories
