import React from 'react';
import './orgDashboard.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';

import lockerIcon from '../../../assets/locker.png'
import OrgDashboardTables from '../tables/orgDashboardTable';


const orgDashboard: React.FC = () => {
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
                        <div className="row">
                            <div className="flex-container">
                                <div className="box1">
                                    <div className="box-left-side">
                                        <img className="locker-icon" src={lockerIcon} alt='' />
                                        <p>Used</p>

                                    </div>
                                    <div className="box-right-side">
                                        <p>10</p>
                                    </div>

                                </div>
                                <div className="box2">
                                    <div className="box-left-side">
                                        <img className="locker-icon" src={lockerIcon} alt='' />
                                        <p>Unused</p>
                                    </div>
                                    <div className="box-right-side">
                                        <p>4</p>
                                    </div>

                                </div>
                                <div className="box3">
                                    <div className="box-left-side">
                                        <img className="locker-icon" src={lockerIcon} alt='' />
                                        <p>Total</p>
                                    </div>
                                    <div className="box-right-side">
                                        <p>14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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

