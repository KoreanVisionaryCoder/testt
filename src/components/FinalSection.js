import React from 'react';
import '../styles/FinalSection.css';
import fourBoxImage from '../assets/images/4box.gif';
import graybar from '../assets/images/bar.png';


const FinalSection = () => {
    return (

        <div className="final-section">
            <img src={graybar} alt="bar" className="graybar" />

            {/*<img src={fourBoxImage} alt="4box" className="responsive-image" />*/}
        </div>
    );
};

export default FinalSection;
