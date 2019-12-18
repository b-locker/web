import React from 'react';
import './orgDashboard.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';


const orgDashboard: React.FC = () => {
    return (
        <div className="main-div">
            <OrgNavigation></OrgNavigation>
            <OrgTopbar></OrgTopbar>
        </div>
    );
}

export default orgDashboard;
