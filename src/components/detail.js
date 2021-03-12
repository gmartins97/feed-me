import React, { useState, useEffect } from "react"
import Slider from "react-slick";

import * as styles from "../styles/detail.module.scss"

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

    const carousel = ({ items }) => {
        const settingsMain = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        };

        const settingsThumbs = {
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            centerMode: true,
            swipeToSlide: false,
            focusOnSelect: true,
            centerPadding: '10px'
        };

        return (
            <div className="App">
                <div>
                    <Slider
                        {...settingsMain}
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}>

                        {items.map((item) =>
                        <div>
                            <div key={item.key}>
                                <img className="slick-slide-image" src={item.image} alt="highlight" />
                            </div>

                            <div>
                                <div className={styles.meal}>
                                    <div>
                                        <div className={styles.mealTitle}>{item.name}</div>
                                    </div>
                                    <div>
                                        <div className={styles.mealPrice}>{item.price}</div>
                                    </div>
                                </div>
                                {/*<div>
                                    <div className={styles.mealDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>*/}
                            </div>
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
                                <img className="slick-slide-image" src={item.image} alt="carousel" />
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