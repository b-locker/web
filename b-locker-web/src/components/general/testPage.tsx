import React, { Suspense, useState, useEffect } from 'react';
import './testPage.scss'
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TestPage: React.FC = () => {
    const { t } = useTranslation();
    let history = useHistory();
    const [guid, setGuid] = useState("Wa1bkwWx");

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            history.push('/l/' + guid);
        }
    }

    return (
        <div>
            <Suspense fallback={null}>
                    <NavLink to="/">{t('thispage.label')}</NavLink>
                    <br/>
                    <NavLink to="/dashboard">{t('orgloginpage.label')}</NavLink>
                    <br/>
                    <NavLink to={"/l/" + guid}>Landing</NavLink>
                    <input className="global-input" placeholder="Guid"
                        type="text"
                        id="guid"
                        onChange={evt => setGuid(evt.target.value)}
                        onKeyPress={handleKeyPress} >
                    </input>
                    <NavLink to="/tutorial">tutorial </NavLink>
                    <br/>
                    <NavLink to="/randompagethatwontwork">404</NavLink>
            </Suspense>
        </div>
    );
}

export default TestPage;