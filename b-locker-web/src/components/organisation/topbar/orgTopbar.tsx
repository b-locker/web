import React from 'react';
import './orgTopbar.scss';

import navUserIcon from '../../../assets/userTopbar.svg'

const topbar: React.FC = () => {

    return (
        <section className="topbar">
            <div className="container">
                <a><img className="user-icon" src={navUserIcon} alt='' />Brian </a>
                
                <a href="#news">Admin </a>
            </div>
        </section>
    );
}

function redirectHome() {
    console.log('test');
}

export default topbar;