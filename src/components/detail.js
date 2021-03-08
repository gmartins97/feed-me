import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import { Row, Col, Image } from 'react-bootstrap'

import Category from "../components/category"

import styles from "../styles/detail.module.scss"
import "../styles/global.scss"

const Detail = ({ items }) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

    });

    const highlight = ({ items }) => {
        return (
            <Row>
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

    const carousel = ({ items }) => {
        const settingsMain = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        };

        const settingsThumbs = {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            swipeToSlide: false,
            focusOnSelect: true,
            centerPadding: '10px'
        };

        return (
            <div className="App">
                <div className="slider-wrapper">
                    <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}>

                        {items.map((item) =>
                            <div className="slick-slide" key={item.key}>
                                <h2 className="slick-slide-title">{item.title}</h2>
                                <img className="slick-slide-image" src={item.image} />
                                <label className="slick-slide-label">{item.name}</label>
                            </div>
                        )}
                    </Slider>
                    
                    <div className="thumbnail-slider-wrap">
                        <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider => (setSlider2(slider))}>

                        {items.map((item) =>
                            <div className="slick-slide" key={item.key}>
                                <img className="slick-slide-image" src={item.image} alt="" />
                            </div>

                        )}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {carousel({ items })}
        </>
    )
}

export default Detail