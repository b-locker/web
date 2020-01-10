import React, { Suspense } from 'react';
import './testPage.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../global/i18n/languageSelector';

const TestPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Suspense fallback={null}>
                <LanguageSelector></LanguageSelector>
                <ul>
                    <li>
                        <NavLink to="/">{t('thispage.label')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">{t('orgloginpage.label')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/unlock">{t('userunlockpage.label')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/claim">{t('claimpage.label')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/claim/passcode">{t('setPasscode.set.label')} </NavLink>
                    </li>
                    <li>
                        <NavLink to="/unavailable">{t('unavailable.un.label')} </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tutorial">tutorial </NavLink>
                    </li>
                    <li>
                        <NavLink to="/randompagethatwontwork">404</NavLink>
                    </li>
                </ul>
            </Suspense>
        </div>
    );
}

export default TestPage;