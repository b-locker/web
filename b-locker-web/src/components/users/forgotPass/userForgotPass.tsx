import React, { useState } from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

const UserForgotPass: React.FC = () => {
    let history = useHistory();
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    // TODO: change this email to the real email adress
    const emailHint = "095***@hr.nl";

    function sendForgotPass(e: any){
        if (email) {
            history.push('/forgotPassSent')
        }
        else {
            alert('Fill in a valid email');
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('forgot.forgotPass.label')}</p>
                    <p className="global-desc-label ">{t('forgot.enterEmail.label')}</p>
                </div>
                <input className="global-input" placeholder={emailHint}
                    type="email"
                    id="email"
                    onChange={evt => setEmail(evt.target.value)}>
                </input>
                <button className="global-button global-button-green" onClick={sendForgotPass}>{t('forgot.send.button')}</button>
            </div>
        </div>
    );
}

export default UserForgotPass;