import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';
import { useHistory } from 'react-router';

const UserChangePass: React.FC = () => {
    const { t } = useTranslation();
    let history = useHistory();
    const [currentPasscode, setCurrentPasscode] = useState("");
    const [newPasscode, setNewPasscode] = useState("");

    function setPass(e: any) {
        console.log('entered current passcode: ', currentPasscode);
        console.log('entered new passcode: ', newPasscode);
        if (currentPasscode && newPasscode) {
            history.push('/passChanged');
        }
        else {
            alert('Fill in a passcode');
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('changePass.changePass.label')}</p>
                    <p className="global-desc-label ">{t('changePass.desc.label')}</p>
                </div>
                <br />
                <b>
                    <p className="global-desc-label ">{t('changePass.currentPass.label')}</p>
                </b>
                <input className="pass-input global-input" placeholder={t('changePass.current.hint')}
                    type="password"
                    id="currentPasscode"
                    onChange={evt => setCurrentPasscode(evt.target.value)}>
                </input>
                <b>
                    <p className="global-desc-label ">{t('changePass.newPass.label')}</p>
                </b>
                <input className="pass-input global-input" placeholder={t('changePass.passcode.hint')}
                    type="password"
                    id="newPasscode"
                    onChange={evt => setNewPasscode(evt.target.value)}>
                </input>
                <button className="global-button global-button-blue" onClick={setPass}>{t('changePass.setPass.button')}</button>
            </div>
        </div>
    );
}

export default UserChangePass;