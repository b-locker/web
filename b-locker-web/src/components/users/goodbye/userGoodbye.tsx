import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserGoodbye: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('goodbye.seeya.label')}</p>
                    <p className="global-desc-label ">{t('goodbye.desc.label')}</p>
                </div>
            </div>
        </div>
    );
}

export default UserGoodbye;