import React, { useEffect, useState } from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import { httpProvider } from '../../../global/http/httpProvider';
import queryString from 'querystring';
import { useAlert } from 'react-alert';
import store from 'store2';

const UserInfo: React.FC = () => {
    const { t, i18n } = useTranslation();
    let history = useHistory();
    let http = new httpProvider();
    let alert = useAlert();

    let location = useLocation();
    let locationValues = queryString.parse((location.search.substr(1)));
    let guid;
    if(!locationValues.guid){
        alert.error(t('error.somethingwentwrong.global'));
        history.push('/unavailable');
    }
    else{
        guid = locationValues.guid;
        store.set("guid", guid);
    } 

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    const timeOptions = { hour: '2-digit', minute: '2-digit'};
    let previousOpened: Date = new Date();
    const [ expirationDate, setExpirationDate ] = useState(new Date());
    const [ daysLeft, setDaysLeft ] = useState(0);
    let timesOpened: number = 5;

    function changePass(e: any){
        history.push('/changePass');
    }

    function endOwnership(e: any){
        history.push('/endOwnership');
    }

    useEffect(()=>{

        getLockerData().then((data)=>{
            setExpirationDate(new Date(data.active_claim.end_at));
            setDaysLeft(Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));
        });// eslint-disable-next-line
    },[daysLeft])
    if(daysLeft === 0){
        return (<div><UserHeader></UserHeader><div>Loading...</div></div>);
    } 
    
    function getLockerData():Promise<any>{
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/lockers/'+guid).then((res)=>{
                let data = res.data.data;
                resolve(data);
            }).catch((error)=>{
                if(error){
                    alert.error(t('error.somethingwentwrong.global'));
                    reject(error);
                }
            })
        })
    }

    return (
        <div className="main-div">
            <UserHeader></UserHeader>
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('info.opensesame.label')}</p>
                    <p className="global-desc-label ">{t('info.desc.label')}</p>
                </div>
                <p className="global-small-title">{t('info.prevopen.label')}</p>
                <p className="global-desc-label ">{ previousOpened.toLocaleDateString(i18n.language, dateOptions) + ' - ' + previousOpened.toLocaleTimeString(i18n.language, timeOptions)}</p>
                <p className="global-small-title">{ daysLeft + ' ' + t('info.daysleft.label')}</p>
                <p className="global-desc-label ">{t('info.ends.label') + ' ' + expirationDate.toLocaleDateString(i18n.language, dateOptions)}</p>
                <p className="global-small-title">{t('info.timesopened.label')}</p>
                <p className="global-desc-label ">{timesOpened}</p>
                <button className="global-button-spacing global-button global-button-blue" onClick={changePass}>{t('info.changepass.button')}</button>
                <button className="global-button-spacing global-button global-button-gray" onClick={endOwnership}>{t('info.end.button')}</button>
            </div>
        </div>
    );
}

export default UserInfo;