import React, { useState } from 'react';
import './orgLogin.scss';
import { useTranslation } from 'react-i18next';

import lockIcon from '../../../assets/lock.svg'
import lockers from '../../../assets/lockers.png'
import { useHistory } from 'react-router';
import UserHeader from '../../users/header/userHeader';

const UserUnlock: React.FC = () => {
    // https://stackoverflow.com/a/57767104/7052690
    const [passcode, setPasscode] = useState("");
    const { t } = useTranslation();
    let unlockTriesAmount: number = 1;

    let history = useHistory();
    function redirectForgotPass(e: any) {
        history.push('/forgotPass');
    }

    function unlock(e: any) {
        console.log('entered passcode: ', passcode);
        console.log('unlock tries: ', unlockTriesAmount);
        if(unlockTriesAmount > 2){
            history.push('/lockdown');
        }
        else if (passcode) {
            history.push('/dashboard')
        }
        else {
            alert('Fill in a passcode');
            unlockTriesAmount++;
        }
    }

    return (
        <div className="left-div">
            <UserHeader></UserHeader>
            <div className="unlock-div screen-rule">
                <div className="title-icon-div">
                    <p className="global-page-title unlock-title">{t('login.title.label')}</p>
                    <img className="lock-icon" src={lockIcon} alt='' />
                </div>
                <p className="global-desc-label">{t('login.desc.label')}</p>
                <input className="pass-input global-input" placeholder={t('login.user.hint')}
                    type="username"
                    id="user"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <input className="pass-input global-input" placeholder={t('login.pass.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-green" onClick={unlock}>{t('login.check.label')}</button>
                <br />
                <button className="href-button" onClick={redirectForgotPass}>{t('login.forgotpass.label')}</button>
            </div>
            <div className="right-div">
                <div className="centered">
                    <img className="lockers" src={lockers} alt='Lockers' />
                    
                </div>
            </div>
        </div>
        
    );
}

export default UserUnlock;