import React from 'react';
import './orgSingleLocker.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';

import unlockIcon from '../../../assets/unlock.png'
// import chevronIcon from '../../../assets/chevron-right.svg'

import { useHistory } from 'react-router';
import OrgLogTables from '../tables/orgLogTables';


const OrgLockers: React.FC = () => {

    let history = useHistory();

    function redirectLogin(e: any) {
        history.push('/login');
    }
    return (
        <div className="main-div-org">
            <OrgNavigation></OrgNavigation>
            <OrgTopbar></OrgTopbar>
            <main>
                <div className="container">
                    <div className="row">
                        <h1>Locker 1, Stadslab</h1>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="locker-panel">
                        <h2>Locker Details</h2>
                        <div className="locker-details">
                            <div className="locker-details-content">
                                <p>Locker ID: 1.1</p>
                                <p>Locker number: 1</p>
                                <p>Locker Location: Stadslab</p>
                                <p>Current Owner: 0867973@hr.nl</p>
                                <p>Current Status: Locked</p>
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