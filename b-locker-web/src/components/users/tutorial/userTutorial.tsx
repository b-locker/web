import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserTutorial: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('hello.label')}</p>
                    <p className="global-desc-label ">{t('thankyou.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserTutorial;