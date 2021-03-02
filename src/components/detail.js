import React from "react"
import Slider from "react-slick";
import { Row, Col, Image } from 'react-bootstrap'

import Category from "../components/category"

import styles from "../styles/detail.module.scss"

const Detail = (props) => {

    const highlight = ({items}) => {
        return (
            <Row xs={1}>
                <Col className={styles.cellMargin}>
                    <Category card={items[0]}></Category>
                </Col>
            </Row>

            /*<div className={styles.meal}>
                <Image className={styles.mealImage} src={items[0].image} />
                <div>
                    <div>
                        <div className={styles.mealTitle}>{items[0].name}</div>
                    </div>
                    <div>
                        <div className={styles.mealPrice}>{items[0].price}</div>
                    </div>
                </div>
            </div>*/
        )
    }

    const carousel = (props) => {
        var settings = {
            className: "center",
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div className={`${styles.carousel} "fixed-bottom"`}>
                <Slider {...settings}>
                    {props.items.map(item => {
                        return (
                            <div className={styles.card} key={item.key}>
                                <Image src={item.image} fluid />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }

    return (
        <>

            {highlight(props)}
            {carousel(props)}

        </>
    )
}

export default Detail