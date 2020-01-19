import React, { useState } from 'react';
import './orgLogin.scss';
import { useTranslation } from 'react-i18next';

import lockIcon from '../../../assets/lock.svg'
import lockers from '../../../assets/lockers.png'
import { useHistory } from 'react-router';
import UserHeader from '../../users/header/userHeader';
import { authProvider } from '../../../global/auth/authProvider';
import { useAlert } from 'react-alert';

const UserUnlock: React.FC = () => {
    // https://stackoverflow.com/a/57767104/7052690
    const [passcode, setPasscode] = useState("");
    const [username, setUsername] = useState("");
    const { t } = useTranslation();
    let auth = new authProvider();
    let alert = useAlert();
    let unlockTriesAmount: number = 0;
    let usernameCheck = "admin", passwordCheck = "admin";

    let history = useHistory();
    function redirectForgotPass(e: any) {
        history.push('/forgotPass');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            unlock(event);
        }
    }

    function unlock(e: any) {
        console.log('entered passcode: ', passcode);
        console.log('unlock tries: ', unlockTriesAmount);
        if (unlockTriesAmount >= 5) {
            history.push('/lockdown');
        }
        else if (passcode) {
            if (passcode === passwordCheck && username === usernameCheck) {
                auth.setDevDebugToken(true);
                history.push('/dashboard')
            }
            else {
                alert.error('Wrong password');
                unlockTriesAmount++;
            }
        }
        else{
            alert.error('Fill in a passcode');
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
                    id="username"
                    onChange={evt => setUsername(evt.target.value)}>
                </input>
                <input className="pass-input global-input" placeholder={t('login.pass.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}
                    onKeyPress={handleKeyPress} >
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