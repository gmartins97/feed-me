import React from "react"

import styles from "../styles/category.module.scss"

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

            <div className={styles.card} key={props.index}>
                <div className={styles.cardImage}>
                    <img className={styles.cardImageSize} src={props.card.image} alt="" />
                    <div className={`${styles.cardOverlay} ${styles.cardOverlayGrey}`}>
                        <div className={styles.cardOverlayContent}>
                            <h1 className={styles.cardTitle}>{props.card.title}</h1>
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
