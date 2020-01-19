import React, { Suspense, useState, useEffect } from 'react';
import './testPage.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../global/i18n/languageSelector';
import { httpProvider } from '../../global/http/httpProvider';

const TestPage: React.FC = () => {
    const { t } = useTranslation();
    let http = new httpProvider();
    const [guid, setGuid] = useState("Wa1bkwWx");
    const lockerCall = 'lockers';
    const [lockerData, setLockerData] = useState([{
        id: 0,
        guid: "",
        active_claim: null
    }]);

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
        // eslint-disable-next-line   
    }, []);
    if (!lockerData) return (<div>Loading...</div>);

    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/' + lockerCall).then((res) => {
                let data = res.data.data;
                data.forEach(locker => {
                    locker.active_claim = (locker.active_claim ? "Used" : "Unused");
                });
                resolve(res.data.data);
            }).catch((error) => {
                reject();
            });
        })
    }

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
                        <NavLink to={"/l/" + guid}>Landing</NavLink>
                    </li>
                    <input className="global-input" placeholder="Guid"
                        type="text"
                        id="guid"
                        onChange={evt => setGuid(evt.target.value)}>
                    </input>
                    <li>
                        <NavLink to="/tutorial">tutorial </NavLink>
                    </li>
                    <li>
                        <NavLink to="/randompagethatwontwork">404</NavLink>
                    </li>
                    {
                        lockerData.map((lockerData) => {
                            return (
                                <div key={lockerData.guid}>
                                        <span>{lockerData.guid + ' '}</span>
                                        <b>{lockerData.active_claim}</b>
                                </div>
                            );
                        }
                        )}
                </ul>
            </Suspense>
        </div>
    );
}

export default TestPage;