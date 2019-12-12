import React from 'react';
import './userHeader.scss';
import logo from '../../../assets/qr.png'

const UserHeader: React.FC = () => {
    return(
        <div className="header">
            <p id="title">B-locker</p>
            <img src={logo} alt="" id="logo" />
        </div>
    );
}

export default UserHeader;