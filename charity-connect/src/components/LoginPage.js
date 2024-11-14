import React from 'react';
import './LoginPage.css';
import Header from './header';
import Footer from './footer';

function LoginPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Header/>    
                <div className="login-page">
                    <div className="login-container">
                        <h2>Welcome to Charity Connect</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                        <div className="footer-links">
                            <a href="#">Forgot Password?</a>
                            <a href="/signup">Create an Account</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
                
    );
}

export default LoginPage;