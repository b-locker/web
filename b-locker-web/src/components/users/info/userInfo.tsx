import React from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';

const UserInfo: React.FC = () => {

    const { t, i18n } = useTranslation();
    let previousOpened: Date = new Date();
    let previousOpenedDay: string = previousOpened.getDay().toString();
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    let timeOptions = { hour: '2-digit', minute: '2-digit'};
    

    return (
        <div className="main-div">
            <UserHeader></UserHeader>
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title unlock-title ">{t('info.opensesame.label')}</p>
                    <p className="global-desc-label ">{t('info.desc.label')}</p>
                </div>
                <p className="global-small-title">{t('info.prevopen.label')}</p>
                <p className="global-desc-label ">{ previousOpened.toLocaleDateString(i18n.language, dateOptions) + ' - ' + previousOpened.toLocaleTimeString(i18n.language, timeOptions)}</p>
            </div>
        </div>
    );
}

export default UserInfo;