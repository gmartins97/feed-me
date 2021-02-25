import React from "react"

import { Card } from 'react-bootstrap'

const Category = (props) => {

    const renderCard = (props) => {
        return (
            <Card key={props.index}>
                <Card.Img variant="top" src={props.card.image} />
                <Card.ImgOverlay>
                    <Card.Title>{props.card.title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        )
    }

    return (
        renderCard(props)
    )
}

export default Category
