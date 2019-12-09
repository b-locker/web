import React from 'react';
import './testPage.css'
import { NavLink } from 'react-router-dom';

const TestPage: React.FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">This page</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Organisation login page</NavLink>
                </li>
                <li>
                    <NavLink to="/unlock">User unlock page</NavLink>
                </li>
                <li>
                    <NavLink to="/randompagethatwontwork">404</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default TestPage;