import React from 'react';
import './pageNotFound.scss';
import '../../styles/global.scss';
import background from '../../assets/bg_purple.png'
import staroverlay from '../../assets/overlay_stars.svg'
import image404 from '../../assets/404.svg';
import rocket from '../../assets/rocket.svg';
import earth from '../../assets/earth.svg';
import moon from '../../assets/moon.svg';
import astronaut from '../../assets/astronaut.svg';

const homeUrl: string = "http://b-locker.com"
const PageNotFound: React.FC = () => {
    return (
        <div className="main bg-purple red-box">
            <div id="bg">
                <img src={background} alt="" />
            </div>
            <div className="stars box">
                <img src={staroverlay} alt="" />
            </div>
            <div className="central-body box">
                <img className="image-404 box" src={image404} width="300px" alt="" />
                <a href={homeUrl} className="btn-go-home box" target="_blank" rel="noopener noreferrer">GO BACK HOME</a>
            </div>
            <div className="objects box">
                <img className="object_rocket box" src={rocket} width="40px" alt="" />
                <div className="earth-moon box">
                    <img className="object_earth box" src={earth} width="100px" alt="" />
                    <img className="object_moon box" src={moon} width="80px" alt="" />
                </div>
                <div className="box_astronaut box">
                    <img className="object_astronaut box" src={astronaut} width="140px" alt="" />
                </div>
            </div>
            <div className="glowing_stars red-box">
                <div className="star box"></div>
                <div className="star box"></div>
                <div className="star box"></div>
                <div className="star box"></div>
                <div className="star box"></div>
            </div>
        </div>
    );
}

export default PageNotFound;