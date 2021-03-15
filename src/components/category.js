import React from "react"

import * as styles from "../styles/category.module.scss"

const Category = ({ card, index }) => {

    const renderCard = ({card, index}) => {
        return (
            <div className={styles.card} key={index}>
                <div className={styles.cardImage}>
                    <img className={styles.cardImageSize} src={card.image} alt="" />
                    <div className={`${styles.cardOverlay} ${styles.cardOverlayGrey}`}>
                        <div className={styles.cardOverlayContent}>
                            <h1 className={styles.cardTitle}>{card.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        renderCard({ card, index })
    )
}

export default Category
