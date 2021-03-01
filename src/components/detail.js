import React from "react"
import Slider from "react-slick";
import { Image } from 'react-bootstrap'

import "../styles/global.scss"
import styles from "../styles/detail.module.scss"

const Detail = (props) => {

    const highlight = (props) => {
        console.log(props.items[0]);

        return (
            <div className={styles.meal}>
                <Image className={styles.mealImage} src={props.items[0].image} />
                <div>
                    <div>
                        <div className={styles.mealTitle}>{props.items[0].name}</div>
                    </div>
                    <div>
                        <div className={styles.mealPrice}>{props.items[0].price}</div>
                    </div>
                </div>
            </div>
        )
    }

    const carousel = (props) => {
        console.log(props);

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className="fixed-bottom">
                <Slider {...settings}>
                    {props.items.map(item => {
                        return (
                            <div>
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