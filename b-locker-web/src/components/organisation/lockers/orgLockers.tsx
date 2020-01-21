import React from 'react';
import './orgLockers.scss';
import OrgNavigation from '../navigation/orgNavigation';
import OrgTopbar from '../topbar/orgTopbar';
import OrgLockerBadges from '../badges/orgLockerBadges';

import lockerIcon from '../../../assets/locker.png'
import unlockIcon from '../../../assets/unlock.png'
// import chevronIcon from '../../../assets/chevron-right.svg'

import { useHistory } from 'react-router';

const OrgLockers: React.FC = () => {

    let history = useHistory();

    function redirectRelogin(e: any) {
        history.push('/relogin');
    }

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
                            <button className="org-href-button" onClick={redirectRelogin}>
                                <div className="box4">
                                    <div className="box-left-side">
                                        <img className="unlock-icon" src={unlockIcon} alt='' />
                                    </div>
                                    <div className="box-right-side">
                                        <p>Unlock All</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="locker-panel">
                        <h2>Locatie: Stadslab</h2>

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