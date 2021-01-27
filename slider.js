import React, { Component } from 'react'
import "../css/carousel.css/";
import Slider from "./Swiper";
import { Card, Carding, CardText, CardBody, CardTitle} from 'reactstrap';

export default function GalleryComponent() {
    const settings = {
        effect: "overflow",
        centeredSlides: true,
        slidesPerView : 4,
        autoplay: true,
        CoverflowEffect: {
            rotate: 0,
            stretch: 60,
            depth: 50,
            modifier: 0,
            slideShadows: true
        },
        loop: true
    };
        return (
            <div>
                <div className="gallery">
                    <h1>Card Layout</h1>
                    <Slider settings={settings}>
                        <div classNmae="">
                        <cardImg className="card-image" top src={img1} alt="card 1"/>
                        </div>
                    </Slider> 
                    </div>
            </div>
        )
    }
