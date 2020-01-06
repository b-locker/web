import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserPassChanged: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('passChanged.newPassSet.label')}</p>
                    <p className="global-desc-label ">{t('passChanged.done.label')}</p>
                </div>
                <br />
                <p className="global-desc-label ">{t('passChanged.desc.label')}</p>
            </div>
        </div>
    );
}

export default UserPassChanged;