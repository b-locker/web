import React, { useState, useEffect } from 'react';
import './orgLogin.scss';
import { useTranslation } from 'react-i18next';
import lockIcon from '../../../assets/lock.svg'
import lockers from '../../../assets/lockers.png'
import { useHistory, useLocation } from 'react-router';
import UserHeader from '../../users/header/userHeader';
import axios from 'axios';
import { httpProvider } from '../../../global/http/httpProvider';
import admin from "../tables/data/admin.json";
import { authProvider } from '../../../global/auth/authProvider';
import queryString from 'querystring';
import { useAlert } from 'react-alert';

const UserUnlock: React.FC = () => {
    let history = useHistory();
    let http = new httpProvider();
    const auth = new authProvider();
    const alert = useAlert();

    const state = {
        clients: [],
    };

    
    function unlock(e: any) {
        console.log('entered passcode: ', passcode);
        console.log('entered username: ', email);
        if (passcode) {
            checkPasscode(passcode).then((res)=>{
                console.log('checkPasscode result:',res);
                if(res){
                    auth.setDevDebugToken(true);
                    history.push('/dashboard');
                }
                else{
                    // Do nothing, this is already handled in the checkPasscode method
                }
            }).catch((err)=>{
                console.log('checkPasscode error:',err); 
                alert.error(t('error.somethingwentwrong.global'))
            }) 
        }
        else {
            alert.error('Fill in a passcode');
        }
    }
    
    // '/managers/login?email=walker.bram@gmail.com&password=123123'

    function checkPasscode(passcode: string): Promise<boolean>{
        return new Promise<boolean>((resolve, reject)=>{
            http.postRequestQueryParams('/managers/login?email='+email+'&password='+passcode ).then((res)=>{
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

    // https://stackoverflow.com/a/57767104/7052690
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const { t, i18n } = useTranslation();
    let unlockTriesAmount: number = 1;

    function redirectForgotPass(e: any) {
        history.push('/forgotPass');
    }

    // function unlock(e: any) {
    //     let adminlogin = admin;
    //     console.log('entered email: ', email);
    //     console.log('unlock tries: ', unlockTriesAmount);
    //     if(unlockTriesAmount > 2){
    //         history.push('/lockdown');
    //     }
    //     else if (email === "") {
    //         alert('Fill in a email');
    //     }
    //     else if (passcode === "") {
    //         alert('Fill in a password');
    //     }
    //     else if (passcode === "password" && (email === "Admin" || "admin")) {
    //         history.push('/dashboard')
    //     }
    //     else {
    //         alert('Invalid login data');
    //         unlockTriesAmount++;
    //     }
    // }

    return (
        <div className="left-div">
            <UserHeader></UserHeader>
            <div className="unlock-div screen-rule">
                <div className="title-icon-div">
                    <p className="global-page-title unlock-title">{t('login.title.label')}</p>
                    <img className="lock-icon" src={lockIcon} alt='' />
                </div>
                <p className="global-desc-label">{t('login.desc.label')}</p>
                <input className="pass-input global-input" placeholder={t('login.user.hint')}
                    type="email"
                    id="email"
                    onChange={evt => setEmail(evt.target.value)}>
                </input>
                <input className="pass-input global-input" placeholder={t('login.pass.hint')}
                    type="password"
                    id="passcode"
                    onChange={evt => setPasscode(evt.target.value)}>
                </input>
                <br />
                <button className="global-button global-button-green" onClick={unlock}>{t('login.check.label')}</button>
                <br />
                <button className="href-button" onClick={redirectForgotPass}>{t('login.forgotpass.label')}</button>
            </div>
            <div className="right-div">
                <div className="centered">
                    <img className="lockers" src={lockers} alt='Lockers' />
                    
                </div>
            </div>
        </div>
        
    );
}

export default UserUnlock;