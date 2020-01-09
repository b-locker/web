import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory } from 'react-router';

const UserSetPasscode: React.FC = () => {
    const { t, i18n } = useTranslation();
    let history = useHistory();

    const [passcode, setPasscode] = useState("");

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    let expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    let daysLeft = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

    function dayOrDays(): string {
        if(daysLeft > 1){
            return t('setPasscode.days.label');
        }
        else{
            return t('setPasscode.day.label');
        }
    }

    function finish(e: any){
        if(passcode){
            history.push('/claim/complete')
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('setPasscode.set.label')}</p>
                    <p className="global-desc-label ">{t('setPasscode.desc.label')}</p>
                </div>
                <p className="global-small-title">{t('setPasscode.itsYours.label')}</p>
                <p className="global-desc-label ">{expirationDate.toLocaleDateString(i18n.language, dateOptions)}</p>
                <p className="global-desc-label">{'(' + daysLeft + ' ' + dayOrDays() + ')'}</p>
                <input className="global-input" placeholder={t('setPasscode.passcode.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <button className="global-button global-button-green" onClick={finish}>{t('setPasscode.finish.button')}</button>
            </div>
        </div>
    );
}

export default UserSetPasscode;