import React, { useState } from 'react';
import './LoginPage.css';
import Header from './header';
import Footer from './footer';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (response.ok) {
                setSuccess('Login successful! You will be redirected to home page in a few seconds...');
                setTimeout(() => {
                    window.location.href = '/home';
                }, 3000);
            } else {
                setError(data.error || 'Login failed!');
            }
        } catch (err) {
            setError('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />    
            <div className="login-page">
                <div className="login-container">
                    <h2>Welcome to Charity Connect</h2>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="login-btn" 
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                    <div className="footer-links">
                        <a href="/forgot-password">Forgot Password?</a>
                        <a href="/signup">Create an Account</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;