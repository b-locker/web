import React, { useState } from 'react';
import './userUnlock.scss';
import UserHeader from '../header/userHeader';
import { useTranslation } from 'react-i18next';
import { useAlert } from 'react-alert';
import lockIcon from '../../../assets/lock.svg'
import { useHistory, useLocation } from 'react-router';
import { authProvider } from '../../../global/auth/authProvider';
import { httpProvider } from '../../../global/http/httpProvider';
import queryString from 'querystring';
import store from 'store2';

const UserUnlock: React.FC = () => {
    const [passcode, setPasscode] = useState("");
    const { t } = useTranslation();
    const alert = useAlert();
    const auth = new authProvider();
    const http = new httpProvider();
    let history = useHistory();
    let location = useLocation();
    let locationValues = queryString.parse((location.search.substr(1)));
    let guid;
    if(!locationValues.guid){
        alert.error(t('error.somethingwentwrong.global'));
        history.push('/unavailable');
    }
    else guid = locationValues.guid;

    function redirectForgotPass(e: any) {
        history.push('/forgotPassSent');
    }


        function unlock(e: any) {
        if (passcode) {
            checkPasscode(passcode).then((res)=>{
                if(res){
                    auth.setDevDebugToken(true);
                    history.push('/info?guid='+guid);
                }
                else{
                    // Do nothing, this is already handled in the checkPasscode method
                }
            }).catch((err)=>{
                alert.error(t('error.somethingwentwrong.global'))
            }) 
        }
        else {
            alert.error('Fill in a passcode');
        }
    }
    
    function checkPasscode(passcode: string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject)=>{
            http.postRequestQueryParams('/lockers/'+guid+'/unlock?key='+passcode).then((res)=>{
                console.log('res:',res);
                if(res.status === 200){
                    resolve(true);
                }
                else{
                    reject(false);
                }
            }).catch((error)=>{
                if(error.response){
                    console.log('error data:',error.response.data);
                    if(error.response.data === "You have no more attempts left."){
                        //history.push('/lockdown');
                    }
                    resolve(false);
                    alert.error(error.response.data.message);
                }
                console.log('error:',error);
            });
        })
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            unlock(event);
        }
    }

    
    function checkPasscode(passcode: string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject)=>{
            http.postRequestQueryParams('/lockers/'+guid+'/unlock?key='+passcode).then((res)=>{
                if(res.status === 200){
                    store.set("locker_id", res.data.data.claim.id)
                    resolve(true);
                }
                else{
                    reject(false);
                }
            }).catch((error)=>{
                if(error.response){
                    if(error.response.data === "You have no more attempts left."){
                        //history.push('/lockdown');
                    }
                    resolve(false);
                    alert.error(error.response.data.message);
                }
            });
        })
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
                    onChange={evt => setPasscode(evt.target.value)}
                    onKeyPress={handleKeyPress} >
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