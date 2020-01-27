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
        auth.logout();
        history.push('/login');
    }

    return (
        <nav className="menu">
            <div className=""></div>
            <ul>
                <li className="icon-dashboard" onClick={redirectDashboard}><img className="grid-icon" src={navGridIcon} alt='' /><button className="org-href-button global-white-box">Dashboard</button></li>
                <li className="icon-lockers" onClick={redirectLockers}><img className="locker-icon" src={navLockerIcon} alt='' /><button className="org-href-button" >Lockers</button></li>
                <li className="icon-users" onClick={redirectLockers}><img className="user-icon" src={navUserIcon} alt='' /><button className="org-href-button" >Users</button></li>
                <li className="icon-settings" onClick={redirectLockers}><img className="settings-icon" src={navSettingsIcon} alt='' /><button className="org-href-button" >Settings</button></li>
                <li className="icon-logout" onClick={redirectLogin}><img className="logout-icon" src={navLogoutIcon} alt='' /><button className="org-href-button" >Log Out</button></li>
            </ul>
        </nav>

    );
}


export default OrgNavigation;

