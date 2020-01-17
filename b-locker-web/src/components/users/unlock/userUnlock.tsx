import React, { useState } from 'react';
import './userUnlock.scss';
import UserHeader from '../header/userHeader';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'react-alert';
import lockIcon from '../../../assets/lock.svg'
import { useHistory } from 'react-router';
import { authProvider } from '../../../global/auth/authProvider';

const UserUnlock: React.FC = () => {
    const [passcode, setPasscode] = useState("");
    const { t } = useTranslation();
    const alert = useAlert();
    let unlockTriesAmount: number = 1;
    const auth = new authProvider();
    let history = useHistory();
    function redirectForgotPass(e: any) {
        history.push('/forgotPass');
    }

    function unlock(e: any) {
        if (unlockTriesAmount > 2) {
            history.push('/lockdown');
        }
        else if (passcode) {
            if (checkPasscode(passcode)) {
                auth.setDevDebugToken(true);
                history.push('/info');
            }
        }
        else {
            alert.error('Fill in a passcode');
            unlockTriesAmount++;
        }
    }

    function checkPasscode(passcode: string): boolean {
        // TODO: check credentials with backend
        return true;
    }

    return (
        <div className="main-div">
            <UserHeader></UserHeader>
            <div className="global-edge-div">
                <div className="title-icon-div">
                    <p className="global-page-title unlock-title">{t('unlock.unlock.label')}</p>
                    <img className="lock-icon" src={lockIcon} alt='' />
                </div>
                <p className="global-desc-label">{t('unlock.desc.label')}</p>
                <input className="global-input" placeholder={t('unlock.passcode.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-green" onClick={unlock}>{t('unlock.unlock.button')}</button>
                <br />
                <button className="link-button" onClick={redirectForgotPass}>{t('unlock.forgotpass.label')}</button>
            </div>
        </div>
    );
}

export default UserUnlock;