import React from 'react';
import './pageNotFound.scss';
import '../../styles/global.scss';
import image404 from '../../assets/404.svg';
import rocket from '../../assets/rocket.svg';
import earth from '../../assets/earth.svg';
import moon from '../../assets/moon.svg';
import astronaut from '../../assets/astronaut.svg';

const homeUrl: string = "http://b-locker.com"
const PageNotFound: React.FC = () => {
    return (
        <body className="main bg-purple">
            <div className="stars">
                <div className="central-body">
                    <img className="image-404" src={image404} width="300px" />
                    <a href={homeUrl} className="btn-go-home" target="_blank">GO BACK HOME</a>
                </div>
                <div className="objects">
                    <img className="object_rocket" src={rocket} width="40px" />
                    <div className="earth-moon">
                        <img className="object_earth" src={earth} width="100px" />
                        <img className="object_moon" src={moon} width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src={astronaut} width="140px" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </body>
    );
}

export default PageNotFound;