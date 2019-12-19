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
                        <div className="box1">
                            <div className="box-left-side">
                                <p>hai</p>
                            </div>
                            <div className="box-right-side"></div>
                        </div>
                        <div className="box2">
                            <div className="box-left-side"></div>
                            <div className="box-right-side"></div>
                        </div>
                        <div className="box3">
                            <div className="box-left-side"></div>
                            <div className="box-right-side"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="panel">

                    </div>

                </div>
            </main>
        </div>
    );
}

export default orgDashboard;