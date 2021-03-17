import React from "react"
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap'

import "../styles/new-detail.global.scss"

const Detail = ({ items }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="aux container">
            <Slider {...settings}>
            {items.map((item) =>
                <div key={item.key} className="item">
                    <div className="image">
                        <img className="image2" src={item.image} alt="" />
                    </div>
                    <div className="detail margin">
                        <Row>
                            <Col xs={8}>
                                <h2 className="name">
                                    {item.name}
                                </h2>
                            </Col>
                            <Col>
                                <h2 className="price">
                                    {item.price}
                                </h2>
                            </Col>
                        </Row>

                        <div>
                            <h4 className="description">
                                {item.description}
                            </h4>    
                        </div>
                    </div>
                </div>
            )}
            </Slider>
        </div>
    );
}

export default Detail
