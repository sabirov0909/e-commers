import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password,
            });
            setUser(response.data.user);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        try {
            await axios.post('http://localhost:1337/api/auth/local/register', {
                username,
                email,
                password,
            });
            setSuccess(true);
            setTimeout(() => setIsLogin(true), 2000);
        } catch (err) {
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-form-tabs">
                    <button
                        className={isLogin ? 'active' : ''}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={!isLogin ? 'active' : ''}
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </div>
                {isLogin ? (
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        {error && <p className="login-error">{error}</p>}
                        <div className="login-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-auth-button">Login</button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister}>
                        <h2>Register</h2>
                        {error && <p className="login-error">{error}</p>}
                        {success && <p className="login-success">Registration successful! You can now log in.</p>}
                        <div className="login-input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-auth-button">Register</button>
                    </form>
                )}
                <div className="login-footer">
                    <p>{isLogin ? 'Don\'t have an account?' : 'Already have an account?'}</p>
                    <a href="#" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Register here' : 'Login here'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
