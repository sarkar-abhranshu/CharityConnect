import React from 'react';
import './ham.css';

function MenuPage() {
    return (
        <>
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
                        <li>
                            <a href="/home">&larr; Go back</a>
                        </li>
                    </ul>
                </div>
            
        </>
    );
}

export default MenuPage;
