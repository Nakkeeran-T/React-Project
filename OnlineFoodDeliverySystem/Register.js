// Food.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import './Register.css';

function Food() {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const { password, confirmPassword } = formData;
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return false;
        } else if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            setErrorMessage('');

            try {
                const response = await axios.post('http://localhost:3000/register', formData);
                console.log('Response:', response.data);
                navigate('/home'); 
            } catch (error) {
                console.error('Error during registration:', error);
                setErrorMessage('Registration failed. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div>
            <div className="navbar">
                <p className="foods">Food Delivery System</p>
            </div>
            <div className="container">
                <form id="registration" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <div id="error-message" className="error-message">
                        {errorMessage}
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                    </button>

                    <p>
                        Already have an account?{' '}
                        <button type="button" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Food;
