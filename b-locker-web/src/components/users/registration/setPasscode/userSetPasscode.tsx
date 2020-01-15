import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory, useLocation } from 'react-router';
import queryString from 'querystring';
import { useAlert } from 'react-alert';
import { httpProvider } from '../../../../global/http/httpProvider';

const UserSetPasscode: React.FC = () => {
    const { t, i18n } = useTranslation();
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();
    let location = useLocation();
    let locationValues = queryString.parse((location.search.substr(1)));
    if(!locationValues.id || !locationValues.token || !locationValues.claimId){
        alert.error(t('error.somethingwentwrong.global'));
        history.push('/unavailable');
    }
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
            // min 6 max 100 chars
            if(validatePasscode(passcode)){
                //id=HtXHuV3y&token=p6ibwtPBLgBSubvk
                http.putRequest(
                    '/lockers/'+locationValues.id+
                    '/claims/'+locationValues.claimId+
                    '?key='+passcode+
                    '&setup_token='+locationValues.token).then((res)=>
                    {
                        console.log('http result:',res);
                        history.push('/claim/complete');
                    }).catch((error)=>{
                        console.log('error:',error);
                        alert.error(t('error.somethingwentwrong.global'))
                })
            }
            history.push('/claim/complete')
        }
    }

    function validatePasscode(passcode: string): boolean{
        return true;
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