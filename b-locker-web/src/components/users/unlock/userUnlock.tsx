import React, { useState } from 'react';
import './userUnlock.scss';
import UserHeader from '../header/userHeader';
import { useTranslation } from 'react-i18next';

import lockIcon from '../../../assets/lock.svg'
import { useHistory } from 'react-router';

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
            history.push('/info')
        }
        else {
            alert('Fill in a passcode');
            unlockTriesAmount++;
        }
    }

    return (
        <div className="main-div">
            <UserHeader></UserHeader>
            <div className="unlock-div screen-rule">
                <div className="title-icon-div">
                    <p className="global-page-title unlock-title">{t('unlock.unlock.label')}</p>
                    <img className="lock-icon" src={lockIcon} alt='' />
                </div>
                <p className="global-desc-label">{t('unlock.desc.label')}</p>
                <input className="pass-input global-input" placeholder={t('unlock.passcode.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-green" onClick={unlock}>{t('unlock.unlock.button')}</button>
                <br />
                <button className="href-button" onClick={redirectForgotPass}>{t('unlock.forgotpass.label')}</button>
            </div>
        </div>
    );
}

export default UserUnlock;