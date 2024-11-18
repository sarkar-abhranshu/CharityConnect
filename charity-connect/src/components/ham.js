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
                        <li>
                            <a href='/about'>ABOUT</a>
                        </li>
                        <li>
                            <a href='/services'>SERVICES</a>
                        </li>
                        <li>
                            <a href='/contact'>CONTACT</a>
                        </li>
                        <li>
                            <a href='/signup'>SIGNUP</a>
                        </li>
                        <li>
                            <a href='/login'>LOGIN</a>
                        </li>
                    </ul>
                </div>
            </a>
            <Footer/>
        </>
    );
}

export default MenuPage;
