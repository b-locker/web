import React from 'react';
import './userHeader.scss';
import bLockerLogo from '../../../assets/qr.png'
import hrLogo from '../../../assets/Hogeschool_Rotterdam_Logo.png'
import { useTranslation } from 'react-i18next';

const UserHeader: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="header">
            <div className="header-top" >
                <p id="title" onClick={redirectHome} >B-locker</p>
                <img src={bLockerLogo} alt="BLocker logo" id="bl-logo" onClick={redirectHome} />
            </div>
            <div className="sub-header">
                <img src={hrLogo} alt="RUAS logo" id="ruas-logo" />
                <p id="ruas-title">{t('header.ruas.label')}</p>
                <p id="user-detail">abcdefghijklmnopqrstu</p>
            </div>
        </div>
    );
}

function redirectHome() {
    console.log('test');
}

export default UserHeader;