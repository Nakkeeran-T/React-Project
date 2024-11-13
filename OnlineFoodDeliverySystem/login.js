// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './login.css';

function Login() {
    const navigate = useNavigate(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Fetch user data from the backend
            const response = await axios.get('http://localhost:3000/register');
            const register = response.data;

            // Find the user with matching email and password
            const user = register.find((u) => u.email === email && u.password === password);

            if (user) {
                console.log('Login successful:', user);
                alert('Login successful!');
                navigate('/home'); // Navigate to the home page
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <form id="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div id="error-message" className="error-message">
                        {errorMessage}
                    </div>
                    <button type="submit">Login</button>
                    <div className="signup-link">
                        <p>Don't have an account?</p>
                        <button type="button" onClick={() => navigate('/')}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
