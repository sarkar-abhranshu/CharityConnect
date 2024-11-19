import React from 'react';
import './ham.css';

function MenuPage() {
    return (
        <>
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
        </>
    );
}

export default MenuPage;
