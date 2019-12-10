import React from 'react';
import './languageSelector.scss'
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event: any) => {
        console.log('language changing to:', event.target.value)
        i18n.changeLanguage(event.target.value);
    }

    return (
        <div onChange={changeLanguage}>
            <input type="radio" value="en" name="language" defaultChecked /> English
            <input type="radio" value="nl" name="language" /> Dutch
        </div>
    );
}

export default LanguageSelector;