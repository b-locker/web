import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../../header/userHeader';

const UserMailSent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('mailSent.check.label')}</p>
                    <p className="global-desc-label ">{t('mailSent.desc.label')}</p>
                </div>
                <br />
                <p className="global-desc-label ">{t('mailSent.toContinue.label')}</p>
            </div>
        </div>
    );
}

export default UserMailSent;