import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SliderSection.css';
import slide1 from '../assets/images/slider1.png';

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className="slider-section">
            <div className="fixed-background">
                <img src={slide1} alt="Slide 1" className="slider-image" />
            </div>
            <div className="slider-content">
                <Slider {...settings}>
                    <div className="slider-item">
                        <img src={slide1} alt="Slide 1" className="slider-image" />
                    </div>
                </Slider>
                <div className="overlay">
                    <p className="main-caption">약은 약사에게<br />식품은 식품전문가에게 !</p>
                    <p className="sub-caption">식품업 10년 경력의 컨설팅은 다릅니다.<br />서비스 불 만족시 100% 환불보장</p>
                </div>
            </div>
        </div>
    );
};

export default SliderSection;
