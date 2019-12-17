import React from 'react';
import './orgNavigation.scss';

const orgNavigation: React.FC = () => {

    return (
        <nav className="menu">
            <div className="smartphone-menu-trigger"></div>
            <ul>
                <li className="icon-dashboard"><a className="active" href="#home">Dashboard</a></li>
                <li className="icon-lockers"><a href="#">Lockers</a></li>
                <li className="icon-users"><a href="#">Users</a></li>
                <li className="icon-settings"><a href="#">Settings</a></li>
                <li className="icon-logout"><a href="#">Log out</a></li>
            </ul>
        </nav>
    );
}

function redirectHome() {
    console.log('test');
}

export default orgNavigation;

