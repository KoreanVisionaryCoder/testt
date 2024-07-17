import React from 'react';
import '../styles/FixedBackgroundSection.css';

const FixedBackgroundSection = () => {
    return (
        <div className="fixed-background-section">
            <div className="overlay">
                <p className="main-caption">약은 약사에게<br />식품은 식품전문가에게 !</p>
                <p className="sub-caption">식품업 10년 경력의 컨설팅은 다릅니다.<br />서비스 불 만족시 100% 환불보장</p>
            </div>
        </div>
    );
};

export default FixedBackgroundSection;
