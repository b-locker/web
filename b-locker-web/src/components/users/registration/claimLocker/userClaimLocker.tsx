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
    let values = queryString.parse((location.search.substr(1)));
    console.log('location:', location);
    console.log('values:',values);
    console.log('guid:', values.guid);

    function claim(e:any) {
        console.log('entered email:',email);
        if(validator.isEmail(email)){
            let dataToSend = {
                'guid': values.guid,
                'email': email
            }
            http.postRequest('/managers', dataToSend).then((res)=>{
                console.log('http result:',res);
                history.push('/claim/mailsent');
            }).catch((error)=>{
                console.log('error:',error);
            });
        }
        else{
            alert.error(t('error.invalid.email'));
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