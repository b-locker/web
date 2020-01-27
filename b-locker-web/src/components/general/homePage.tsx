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
                </div>
            </div>
        </div>
    );
}

export default HomePage;