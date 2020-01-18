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
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const PageNotFound: React.FC = () => {
    const { t } = useTranslation();

    let history = useHistory();
    function redirectBack(e: any){
        e.preventDefault();
        history.goBack();
    }

    return (
        <div className="main bg-purple">
            <div id="bg">
                <img src={background} alt="" />
            </div>
            <div className="stars">
                <img src={staroverlay} alt="" />
            </div>
            <div className="central-body">
                <img className="image-404" src={image404} width="300px" alt="" />
                <button onClick={redirectBack} className="btn-go-home">{t('goback.button')}</button>
            </div>
            <div className="objects box">
                <img className="object_rocket" src={rocket} width="40px" alt="" />
                <div className="earth-moon">
                    <img className="object_earth" src={earth} width="100px" alt="" />
                    <img className="object_moon" src={moon} width="80px" alt="" />
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src={astronaut} width="140px" alt="" />
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
    );
}

export default PageNotFound;