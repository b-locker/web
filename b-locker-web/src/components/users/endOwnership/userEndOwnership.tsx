import React from 'react'
import UserHeader from '../header/userHeader'
import { useTranslation } from 'react-i18next';

const UserEndOwnership: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('end.areyousure.label')}</p>
                    <p className="global-desc-label ">{t('end.desc.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserEndOwnership;