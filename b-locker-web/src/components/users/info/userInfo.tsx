import React from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const UserInfo: React.FC = () => {

    const { t, i18n } = useTranslation();
    let history = useHistory();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    const timeOptions = { hour: '2-digit', minute: '2-digit'};
    let previousOpened: Date = new Date();
    let expirationDate: Date = new Date();
    //let testDate: Date = new Date("2020-01-13T14:11:33.000000Z");
    expirationDate.setDate(expirationDate.getDate() + 7);
    let daysLeft = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    let timesOpened: number = 5;

    function changePass(e: any){
        history.push('/changePass');
    }

    function endOwnership(e: any){
        history.push('/endOwnership');
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