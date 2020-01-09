import React, { useState } from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const UserEndOwnership: React.FC = () => {
    const { t } = useTranslation();
    const [passcode, setPasscode] = useState("");
    let history = useHistory();

    function unlock(e: any) {
        console.log('entered passcode: ', passcode);
        if (passcode) {
            history.push('/goodbye')
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
                    <p className="global-page-title ">{t('end.areyousure.label')}</p>
                    <p className="global-desc-label ">{t('end.desc.label')}</p>
                </div>
                <br />
                <input className="pass-input global-input" placeholder={t('end.passcode.label')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-red" onClick={unlock}>{t('end.imsure.button')}</button>
            </div>
        </div>
    );
}

export default UserEndOwnership;