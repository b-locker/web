import React from 'react';
import './orgTopbar.scss';

import navUserIcon from '../../../assets/userTopbar.svg'

const topbar: React.FC = () => {

    return (
        <section className="topbar">
            <div className="container">
                <p><img className="user-icon" src={navUserIcon} alt='' />Brian </p>
                
                <p>Admin </p>
            </div>
        </section>
    );
}


export default topbar;