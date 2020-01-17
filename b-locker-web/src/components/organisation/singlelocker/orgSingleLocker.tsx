import React, { useState, useEffect } from 'react';
import './orgSingleLocker.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';

import unlockIcon from '../../../assets/unlock.png'

import { useHistory } from 'react-router';
import OrgLogTables from '../tables/orgLogTables';
import { httpProvider } from '../../../global/http/httpProvider';
import { useLocation } from 'react-router-dom';
import queryString from 'querystring';


const OrgLockers: React.FC = () => {

    let history = useHistory();
    let http = new httpProvider();
    let location = useLocation();
    console.log('location:', location);
    let locationValues = queryString.parse((location.search.substr(1)))
    let guid = locationValues.guid;
    console.log('locationValues:', locationValues);
    const [lockerData, setLockerData] = useState({
        id: 0,
        guid: "",
        is_currently_claimable: false
    }[""]);

    function redirectLogin(e: any) {
        history.push('/login');
    }

    useEffect(() => {
        componentConsole().then((res) => {
            setLockerData(res);
        })
        // eslint-disable-next-line   
    }, []);
    if (!lockerData) return (<div>Loading...</div>);

    function componentConsole(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            http.getRequest('/lockers/' + guid).then((res) => {
                let data = res.data.data;
                console.log('data:', data);
                resolve(res.data.data);
            }).catch((error) => {
                console.log(error);
                reject();
            });
        })
    }
    componentConsole();
    return (
        <div className="main-div-org">
            <OrgNavigation></OrgNavigation>
            <OrgTopbar></OrgTopbar>
            <main>
                <div className="container">
                    <div className="row">
                        <h1>Locker {lockerData.id}</h1>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="locker-panel">
                        <h2>Locker Details</h2>
                        <div className="locker-details">
                            <div className="locker-details-content">
                                <p>Locker GUID: {lockerData.guid}</p>
                                <p>Locker number: {lockerData.id}</p>
                                <p>Locker Availability: {lockerData.is_currently_claimable.toString()}</p>
                                <p>Current Owner: 0867973@hr.nl</p>
                            </div>

                        </div>
                        <h2>Unlock Locker</h2>
                        <div className="locker-unlock">
                            <img className="logout-icon" src={unlockIcon} alt='' /><button className="org-href-button" onClick={redirectLogin}>Click here to unlock this locker</button>
                        </div>

                    </div>
                    <div className="locker-panel">
                        <h2>Locker Logs</h2>
                        <OrgLogTables></OrgLogTables>

                    </div>
                </div>

            </main>
        </div>
    );
}

export default OrgLockers;