import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory } from 'react-router';

const UserClaimLocker: React.FC = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    let history = useHistory();

    function claim(e:any) {
        console.log('entered email:',email);
        if(email){
            history.push('/claim/mailsent')
        }
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('claim.claimlocker.label')}</p>
                    <p className="global-desc-label ">{t('claim.desc.label')}</p>
                </div>
                <input className="global-input" placeholder={t('claim.email.hint')}
                    type="email"
                    id="email"
                    onChange={evt => setEmail(evt.target.value)}>
                </input>
                <button className="global-button global-button-green" onClick={claim}>{t('claim.claimlocker.button')}</button>
                <p className="global-desc-label ">{t('claim.tos.label')}</p>
            </div>
        </div>
    );
}

export default UserClaimLocker;