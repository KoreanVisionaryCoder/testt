import React from 'react';
import FixedBackgroundSection from '../components/FixedBackgroundSection';
import CenteredImageSection from '../components/CenteredImageSection';
import '../styles/Home.css';
import firstImage from '../assets/images/first.png';
import background from '../assets/images/배경.png';
import defaultImage from '../assets/images/무료상담2.png';
import hoverImage from '../assets/images/무료상담1.png';
import section2icon1 from '../assets/images/section2icon1.png';
import section2icon2 from '../assets/images/section2icon2.png';
import section2icon3 from '../assets/images/section2icon3.png';
import section2icon4 from '../assets/images/section2icon4.png';
import barImage from '../assets/images/bar.png';
import drive from '../assets/images/운전자금시설자금.png';
import leftImage from '../assets/images/어떤것이다를까요.gif';
import rightImage from '../assets/images/clecle.gif';
import downImage from '../assets/images/down.png';
import consultingImage from '../assets/images/식품컨설팅은다르다.png';

const Home = () => {
    return (
        <div className="home">
            <FixedBackgroundSection />
            <CenteredImageSection
                background={background}
                image={firstImage}
                defaultImage={defaultImage}
                hoverImage={hoverImage}
                link="https://www.corpuccessmaker.com"
            />
            <div className="bar-container">
                <img src={barImage} alt="Bar" className="bar-image" />
            </div>
            <div className="title h3">
                운전자금 / 시설자금 / 기계장비구입자금<br/>
                <br className="hidden-sm hidden-xs"/>
                <strong>
                    식품업 10년 경력의 컨설팅은 다릅니다.<br/>
                    서비스 불 만족시 100% 환불보장
                </strong>
            </div>
            <div className="section-container">
                <div className="section">
                    <img src={section2icon1} alt="식품제조" className="responsive-image" />
                    <h3>식품제조</h3>
                </div>
                <div className="section">
                    <img src={section2icon2} alt="식자재 유통" className="responsive-image" />
                    <h3>식자재 유통</h3>
                </div>
                <div className="section">
                    <img src={section2icon3} alt="프랜차이즈" className="responsive-image" />
                    <h3>프랜차이즈</h3>
                </div>
                <div className="section">
                    <img src={section2icon4} alt="음식점" className="responsive-image" />
                    <h3>음식점</h3>
                </div>
            </div>
            <div className="new-section">
                <div className="left-image">
                    <img src={leftImage} alt="어떤것이다를까요" className="responsive-image" />
                </div>
                <div className="right-image">
                    <img src={rightImage} alt="clecle" className="responsive-image" />
                </div>
            </div>
            <div className="final-section down-section">
                <img src={downImage} alt="down" className="down-image" />
            </div>
            <div className="final-section consulting-section">
                <img src={consultingImage} alt="식품컨설팅은다르다" className="down-image" />
            </div>
        </div>
    );
};

export default Home;
