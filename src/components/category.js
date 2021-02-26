import React from "react"

/*import { Card } from 'react-bootstrap'*/

const Category = (props) => {

    const renderCard = (props) => {
        return (
            /*<Card key={props.index}>
                <Card.Img variant="top" src={props.card.image} />
                <Card.ImgOverlay>
                    <Card.Title>{props.card.title}</Card.Title>
                </Card.ImgOverlay>
            </Card>*/

            <div className="card" key={props.index}>
                <div className="card__image">
                    <img src={props.card.image} alt="" />
                    <div className="card__overlay card__overlay--indigo">
                        <div className="card__overlay-content">
                            <a href="#0" className="card__title">{props.card.title}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        renderCard(props)
    )
}

export default Category
