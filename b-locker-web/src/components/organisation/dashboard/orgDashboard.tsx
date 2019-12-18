import React from 'react';
import './orgDashboard.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';


const orgDashboard: React.FC = () => {
    return (
        <div className="main-div">
            <OrgNavigation></OrgNavigation>
            <OrgTopbar></OrgTopbar>
            <main>
                <h1>Dashboard</h1>


            </main>
        </div>
    );
}

export default orgDashboard;