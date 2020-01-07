import React from 'react';
import './orgNavigation.scss';
import navGridIcon from '../../../assets/grid.svg'
import navLockerIcon from '../../../assets/navLocker.svg'
import navUserIcon from '../../../assets/user.svg'
import navSettingsIcon from '../../../assets/settings.svg'
import navLogoutIcon from '../../../assets/log-out.svg'

const orgNavigation: React.FC = () => {

    return (
        <nav className="menu">
            <div className="smartphone-menu-trigger"></div>
            <ul>
                <li className="icon-dashboard"><img className="grid-icon" src={navGridIcon} alt='' /><a className="active" href="#home">Dashboard</a></li>
                <li className="icon-lockers"><img className="locker-icon" src={navLockerIcon} alt='' /><a href="#">Lockers</a></li>
                <li className="icon-users"><img className="user-icon" src={navUserIcon} alt='' /><a href="#">Users</a></li>
                <li className="icon-settings"><img className="settings-icon" src={navSettingsIcon} alt='' /><a href="#">Settings</a></li>
                <li className="icon-logout"><img className="logout-icon" src={navLogoutIcon} alt='' /><a href="#">Log out</a></li>
            </ul>
        </nav>

    );
}

function redirectHome() {
    console.log('test');
}

export default orgNavigation;

