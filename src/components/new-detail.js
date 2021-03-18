import React from "react"
import Slider from "react-slick"
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from "../styles/new-detail.module.scss"
import "../styles/new-detail.global.scss"

const Detail = ({ items }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Container className={styles.wrapper}>
            <Slider {...settings}>
                {items.map((item) =>
                    <div key={item.key} className={styles.item}>
                        <img className={styles.image} src={item.image} alt="detail" />
                        
                        <div className={styles.cardDescription}>
                            <Row>
                                <Col xs={8}>
                                    <h2 className={styles.name}>
                                        {item.name}
                                    </h2>
                                </Col>
                                <Col>
                                    <h2 className={styles.price}>
                                        {item.price}
                                    </h2>
                                </Col>
                            </Row>

                            <div>
                                <h4 className={styles.description}>
                                    {item.description}
                                </h4>    
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </Container>

    );
}

export default Detail
