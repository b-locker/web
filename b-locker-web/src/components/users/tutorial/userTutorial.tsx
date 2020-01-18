import React from 'react'
import { useTranslation } from 'react-i18next';
import UserHeader from '../header/userHeader';

const UserTutorial: React.FC = () => {
    const { t } = useTranslation();

    // TODO: add icons to steps
    return (
        <div className="main-div">
            <UserHeader />
            <div className="global-edge-div">
                <div className="global-title-desc-div ">
                    <p className="global-page-title ">{t('tutorial.how.label')}</p>
                    <p className="global-desc-label ">{t('tutorial.desc.label')}</p>
                </div>
                <b><p className="global-small-title">1.</p></b>
                <p className="global-desc-label ">{t('tutorial.step1.label')}</p>
                <b><p className="global-small-title">2.</p></b>
                <p className="global-desc-label ">{t('tutorial.step2.label')}</p>
                <b><p className="global-small-title">3.</p></b>
                <p className="global-desc-label ">{t('tutorial.step3.label')}</p>
                <b><p className="global-small-title">4.</p></b>
                <p className="global-desc-label ">{t('tutorial.step4.label')}</p>

            </div>
        </div>
    );
}

export default UserTutorial;