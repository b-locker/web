import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory, useLocation } from 'react-router';
import queryString from 'querystring';
import validator from 'validator';
import { useAlert } from 'react-alert';
import { httpProvider } from '../../../../global/http/httpProvider';

const UserClaimLocker: React.FC = () => {
    const { t } = useTranslation();
    const alert = useAlert();
    const [email, setEmail] = useState("");
    let http = new httpProvider();
    let history = useHistory();
    let location = useLocation();
    let locationValues = queryString.parse((location.search.substr(1)));
    if(!locationValues.guid){
        alert.error(t('error.somethingwentwrong.global'));
        history.push('/unavailable');
    }

    function claim(e:any) {
        // Check if email is valid
        if(validator.isEmail(email)){
            sendMailRequest(locationValues.guid.toString(), email)
        }
        else{
            alert.error(t('error.invalid.email'));
        }
    }

    function sendMailRequest(guid: string, email: string){
        http.postRequestQueryParams('/lockers/'+guid+'/claims?email='+email).then((res)=>{
            history.push('/claim/mailsent');
        }).catch((error)=>{
            alert.error(t('error.somethingwentwrong.global'))
        });
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