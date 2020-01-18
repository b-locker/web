import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserLockdown: React.FC = () => {
    const { t } = useTranslation();

    // TODO: think of something to lock user out for certain amount of time.

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('lockdown.lockdown.label')}</p>
                    <p className="global-desc-label ">{t('lockdown.desc.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserLockdown;