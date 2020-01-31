import React, { useState } from 'react'
import './homePage.scss'
import { useTranslation } from 'react-i18next';
import UserHeader from '../users/header/userHeader';
import TestPage from './testPage';

const HomePage: React.FC = () => {
    const { t } = useTranslation();
    const [debugMode, setDebugMode] = useState(false);

    function toggleDebug(e: any) {
        setDebugMode(!debugMode);
    }

    if (debugMode) {
        return (
            <div className="main-div">
                <UserHeader />
                <div className="global-edge-div">
                    <button className="debug-button" onClick={toggleDebug}>Debug mode</button>
                    <TestPage />
                </div>
            </div>
        );
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <button className="debug-button" onClick={toggleDebug}>Debug mode</button>
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('home.welcome.label')}</p>
                    <p className="global-desc-label ">{t('home.desc.label')}</p>
                    <br/>
                    <div className="youtube-video">
                        <iframe
                            title="B-Locker demo video"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/q8pBZZtk-OY"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;