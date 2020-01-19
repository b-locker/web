import React from 'react';
import './orgNavigation.scss';
import navGridIcon from '../../../assets/grid.svg'
import navLockerIcon from '../../../assets/navLocker.svg'
import navUserIcon from '../../../assets/user.svg'
import navSettingsIcon from '../../../assets/settings.svg'
import navLogoutIcon from '../../../assets/log-out.svg'

import { useHistory } from 'react-router';
import { authProvider } from '../../../global/auth/authProvider';



const OrgNavigation: React.FC = () => {

    let auth = new authProvider();

    let history = useHistory();

    function redirectDashboard(e: any) {
        history.push('/dashboard');
    }
    function redirectLockers(e: any) {
        history.push('/lockers');
    }
    function redirectLogin(e: any) {
        auth.setDevDebugToken(false);
        history.push('/login');
    }

    return (
        <nav className="menu">
            <div className="smartphone-menu-trigger"></div>
            <ul>
                <li className="icon-dashboard"><img className="grid-icon" src={navGridIcon} alt='' /><button className="org-href-button" onClick={redirectDashboard}>Dashboard</button></li>
                <li className="icon-lockers"><img className="locker-icon" src={navLockerIcon} alt='' /><button className="org-href-button" onClick={redirectLockers}>Lockers</button></li>
                <li className="icon-users"><img className="user-icon" src={navUserIcon} alt='' /><button className="org-href-button" onClick={redirectLockers}>Users</button></li>
                <li className="icon-settings"><img className="settings-icon" src={navSettingsIcon} alt='' /><button className="org-href-button" onClick={redirectLockers}>Settings</button></li>
                <li className="icon-logout"><img className="logout-icon" src={navLogoutIcon} alt='' /><button className="org-href-button" onClick={redirectLogin}>Log Out</button></li>
            </ul>
        </nav>

    );
}


export default OrgNavigation;

