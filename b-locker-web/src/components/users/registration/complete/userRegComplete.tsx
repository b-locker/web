import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';

const UserRegComplete: React.FC = () => {
    const { t, i18n } = useTranslation();

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'};
    let expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    let daysLeft = Math.ceil((expirationDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

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
            </div>
        </div>
    );
}

export default UserRegComplete;