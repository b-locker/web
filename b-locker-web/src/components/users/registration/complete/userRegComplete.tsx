import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';
import { useHistory, useLocation } from 'react-router-dom';
import store from 'store2';
import queryString from 'querystring';

const UserRegComplete: React.FC = () => {
    const { t, i18n } = useTranslation();
    let history = useHistory();
    let guid = store.get("guid");

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    let expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    let location = useLocation();
    let locationValues = queryString.parse((location.search.substr(1)));

    if(!locationValues.guid){
        history.push('/unavailable');
    }
    else{
        store.set("guid", locationValues.guid);
    }

    function redirectToLander(){
        history.push('/l/'+guid);
    }

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('claimComplete.good.label')}</p>
                    <p className="global-desc-label ">{t('claimComplete.desc.label')}</p>
                </div>
                <p className="global-small-title">{t('claimComplete.itsYours.label')}</p>
                <p className="global-desc-label ">{expirationDate.toLocaleDateString(i18n.language, dateOptions)}</p>
                <br></br>
                <button className="global-button global-button-green" onClick={redirectToLander}>{t('claimComplete.goTo.button')}</button>
            </div>
        </div>
    );
}

export default UserRegComplete;