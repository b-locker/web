import React from 'react';
import './orgLockers.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';
import OrgLockerBadges from '../badges/orgLockerBadges';

// import chevronIcon from '../../../assets/chevron-right.svg'

import OrgLockerTables from '../tables/orgLockerTables';


const OrgLockers: React.FC = () => {

    return (
        <div className="main-div-org">
            <OrgNavigation></OrgNavigation>
            <OrgTopbar></OrgTopbar>
            <main>
                <div className="container">
                    <div className="row">
                        <h1>Lockers</h1>
                    </div>
                    <OrgLockerBadges></OrgLockerBadges>
                </div>
                <div className="wrapper">
                    <div className="locker-panel">
                        <h2>Locatie: Stadslab</h2>
                        <OrgLockerTables></OrgLockerTables>

                    </div>
                    <div className="locker-panel">
                        <h2>Locatie: Security Lokaal</h2>

                    </div>
                </div>

            </main>
        </div>
    );
}

export default OrgLockers;