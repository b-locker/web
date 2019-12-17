import React from 'react';
import './userUnlock.scss';
import UserHeader from '../header/userHeader';

import lockIcon from '../../../assets/lock.svg'

const UserUnlock: React.FC = () => {
    return(
        <div className="main-div">
            <UserHeader></UserHeader>
        </div>
    );
}

export default UserUnlock;