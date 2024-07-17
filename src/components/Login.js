import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../users';
import '../styles/Login.css';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/board');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
