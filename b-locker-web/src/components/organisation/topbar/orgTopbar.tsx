import React from 'react';
import './orgTopbar.scss';

const topbar: React.FC = () => {

    return (
        <section className="topnav">
            <div className="container">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </section>
    );
}

function redirectHome() {
    console.log('test');
}

export default topbar;