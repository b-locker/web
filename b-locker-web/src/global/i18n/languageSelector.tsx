import React from 'react';
import './languageSelector.scss'
import { useTranslation } from 'react-i18next';
import dutchFlag from '../../assets/netherlands-flag-icon-64.png';
import englishFlag from '../../assets/united-kingdom-flag-icon-64.png';

const LanguageSelector: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event: any) => {
        i18n.changeLanguage(event.target.alt);
    }

    return (
        <div className="selector">
            <div onClick={changeLanguage} className="en">
                <img src={englishFlag} onClick={changeLanguage} alt="en" />
            </div>
            <div onClick={changeLanguage} className="nl">
                <img src={dutchFlag} onClick={changeLanguage} alt="nl" />
            </div>
        </div>
    );
}

export default LanguageSelector;