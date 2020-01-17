import React from 'react';
import './userHeader.scss';
import bLockerLogo from '../../../assets/qr.png'
import hrLogo from '../../../assets/Hogeschool_Rotterdam_Logo.png'
import dutchFlag from '../../../assets/netherlands-flag-icon-64.png'
import ukFlag from '../../../assets/united-kingdom-flag-icon-64.png'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const UserHeader: React.FC = () => {
    const { t, i18n } = useTranslation();

    let history = useHistory();
    function redirectHome() {
        history.push('/');
    }

    function changeLanguage(lang: string){
        i18n.changeLanguage(lang);
    }

    return (
        <div className="header">
            <div className="header-top" >
                <div className="header-top-left">
                    <p id="title" onClick={redirectHome} >B-locker</p>
                    <img src={bLockerLogo} alt="BLocker logo" id="bl-logo" onClick={redirectHome} />
                </div>
                <div className="header-top-right">
                    <img src={dutchFlag} alt="Dutch flag" id="dutch-flag" onClick={()=>{changeLanguage('nl')}} />
                    <img src={ukFlag} alt="Dutch flag" id="uk-flag" onClick={()=>{changeLanguage('en')}} />
                </div>
            </div>
            <div className="header-bottom">
                <img src={hrLogo} alt="RUAS logo" id="ruas-logo" />
                <p id="ruas-title">{t('header.ruas.label')}</p>
            </div>
            <div className="sub-header">
                <p id="user-detail">abcdefghijklmnopqrstu</p>
            </div>
        </div>
    );
}

export default UserHeader;