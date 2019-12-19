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
                <div className="row">
                    <h1>Dashboard</h1>
                </div>
                <div className="row">
                    <div className="flex-container">
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                    </div>
                </div>
                <div className="Panel">
                    <p>Hoi</p>
                </div>
            </main>
        </div>
    );
}

export default orgDashboard;