import React from 'react';
import './orgSingleLocker.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';

// import unlockIcon from '../../../assets/unlock.png'
// import chevronIcon from '../../../assets/chevron-right.svg'

import { useHistory } from 'react-router';


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
                            <button className="org-href-button" onClick={redirectLogin}>Click here to unlock this locker</button>
                        </div>

                    </div>
                    <div className="locker-panel">
                        <h2>Locker Logs</h2>
                        <div className="limiter">
                            <div className="container-table100">
                                <div className="wrap-table100">
                                    <div className="table100 ver1 m-b-110">
                                        <div className="table100-head">
                                            <table>
                                                <thead>
                                                    <tr className="row100 head">
                                                        <th className="cell100 column1">Status</th>
                                                        <th className="cell100 column2">Locker Id</th>
                                                        <th className="cell100 column3">Current User</th>
                                                        <th className="cell100 column4">Latest activity</th>
                                                        <th className="cell100 column5">Action</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>

                                        <div className="table100-body js-pscroll">
                                            <table>
                                                <tbody>
                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Boxing</td>
                                                        <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                                        <td className="cell100 column4">Aaron Chapman</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Adam Stewart</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                                                        <td className="cell100 column4">Aaron Chapman</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">7:00 AM - 8:30 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Dance</td>
                                                        <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">20</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">6:30 AM - 8:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Used</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">20</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Unused</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">20</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Unused</td>
                                                        <td className="cell100 column2">Boxing</td>
                                                        <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                                        <td className="cell100 column4">Aaron Chapman</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Unused</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Adam Stewart</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Unused</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">9:00 AM - 10:00 AM</td>
                                                        <td className="cell100 column4">Aaron Chapman</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Wheel Pose Full Posture</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">7:00 AM - 8:30 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Playful Dancer's Flow</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Zumba Dance</td>
                                                        <td className="cell100 column2">Dance</td>
                                                        <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">20</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Cardio Blast</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">5:00 PM - 7:00 PM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Pilates Reformer</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">10</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Supple Spine and Shoulders</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">6:30 AM - 8:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">15</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Yoga for Divas</td>
                                                        <td className="cell100 column2">Yoga</td>
                                                        <td className="cell100 column3">9:00 AM - 11:00 AM</td>
                                                        <td className="cell100 column4">Donna Wilson</td>
                                                        <td className="cell100 column5">20</td>
                                                    </tr>

                                                    <tr className="row100 body">
                                                        <td className="cell100 column1">Virtual Cycle</td>
                                                        <td className="cell100 column2">Gym</td>
                                                        <td className="cell100 column3">8:00 AM - 9:00 AM</td>
                                                        <td className="cell100 column4">Randy Porter</td>
                                                        <td className="cell100 column5">20</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}

export default OrgLockers;