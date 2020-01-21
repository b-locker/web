import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserLockerUnavailable: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('unavailable.un.label')}</p>
                    <p className="global-desc-label ">{t('unavailable.desc.label')}</p>
                    <br />
                    <p className="global-desc-label ">{t('unavailalbe.explanation.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserLockerUnavailable;