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
    let locationValues = queryString.parse((location.search.substr(1)))
    let guid = locationValues.guid;
    const [lockerData, setLockerData] = useState({
        id: 0,
        guid: "",
        active_claim: null
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
                resolve(res.data.data);
            }).catch((error) => {
                reject();
            });
        })
    }

    function displayClaim() {

        let string = ""
        if (lockerData.active_claim != null) {
            string = "Used"
        } else {
            string = "Unused"
        }

        return string
    }

    function displayOwner() {

        let string = "";
        if (lockerData.active_claim == null) {
            string = "None";
        } else {
            string = lockerData.active_claim.client.email
        }

        return string
    }

    function displayStartDate() {
        let result = "";
        if (lockerData.active_claim == null) {
            result = "none";

        } else {
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            let date = new Date(lockerData.active_claim.start_at);
            let time = new Date(lockerData.active_claim.start_at);
            result = date.toLocaleDateString('en', dateOptions) + ' ' + time.toLocaleTimeString('en', timeOptions);
        }
        return result;
    }

    function displayEndDate() {
        let result = "";
        if (lockerData.active_claim == null) {
            result = "none";

        } else {
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            let date = new Date(lockerData.active_claim.end_at);
            let time = new Date(lockerData.active_claim.end_at);
            result = date.toLocaleDateString('en', dateOptions) + ' ' + time.toLocaleTimeString('en', timeOptions);
        }
        return result;
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
                                <p>Locker Availability: {displayClaim()}</p>
                                <p>Current Owner: {displayOwner()}</p>
                                <p>Start Lease: {displayStartDate()}</p>
                                <p>End Lease: {displayEndDate()}</p>
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