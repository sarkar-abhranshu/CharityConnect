import React from 'react';
import './ham.css';
import Header from './header';
import Footer from './footer';

function MenuPage() {
    return (
        <>
            <Header/>
            <a href='/ham'>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>CONTACT</li>
                        <li>SIGNUP</li>
                        <li>LOGIN</li>
                    </ul>
                </div>
            </a>
            <Footer/>
        </>
    );
}

export default MenuPage;
