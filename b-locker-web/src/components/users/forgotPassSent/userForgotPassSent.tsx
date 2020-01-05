import React, { useState, useEffect } from 'react';
import UserHeader from '../header/userHeader';
import { useTranslation } from 'react-i18next';
import Countdown, { zeroPad } from 'react-countdown';

const UserForgotPassSent: React.FC = () => {
    const { t } = useTranslation();
    // TODO: change this email to the real email adress
    let adminEmail: string = "briannogwat@gmail.com"
    //let timeout: number = Date.now() + 3000;
    let [timeout, setTimeout] = useState(Date.now()+30000);

    function reSendForgotPass(e: any) {
        // resend email
        setTimeout(Date.now()+30000);
    }

    const resendButton = ({ minutes, seconds, completed }) => {
        if (completed) {
            return (
                <button className="global-button global-button-green" onClick={reSendForgotPass}>{t('forgotSent.resend.button')}</button>
            );
        }
        else {
            return (
                <button className=" global-button global-button-green-disabled" disabled>{t('forgotSent.resend.button') + ' ' + zeroPad(minutes) + ':' + zeroPad(seconds)}</button>
            );
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('forgotSent.sent.label')}</p>
                    <p className="global-desc-label ">{t('forgotSent.checkMail.label')}</p>
                </div>
                <p className="global-desc-label ">{t('forgotSent.explanation.label')}</p>
                <p className="global-desc-label "><b> {adminEmail} </b></p>
                <br></br>
                <Countdown
                    date={timeout}
                    renderer={resendButton}
                    key={timeout}
                />
            </div>
        </div>
    );
}

export default UserForgotPassSent;