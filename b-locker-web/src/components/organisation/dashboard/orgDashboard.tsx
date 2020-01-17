import React from 'react';
import './orgDashboard.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';
import OrgDashboardBadges from '../badges/orgDashboardBadges';

import OrgDashboardTables from '../tables/orgDashboardTable';



const orgDashboard: React.FC = () => {
    // let lockertable = new orgLockerTables();
    return (
        <div className="main-div-org">
            <OrgNavigation></OrgNavigation>
            <div className="content">
                <OrgTopbar></OrgTopbar>
                <main>
                    <div className="container">
                        <div className="row">
                            <h1>Dashboard</h1>
                        </div>
                        <OrgDashboardBadges></OrgDashboardBadges>
                    </div>
                    <div className="panel">
                        <h2>Recently opened/closed lockers</h2>
                        <OrgDashboardTables></OrgDashboardTables>

                    </div>

                </main>
            </div>
        </div>
    );
}

export default orgDashboard;

