import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (username === 'admin' && password === '123') {
            localStorage.setItem('auth', 'true'); 
            navigate('/home');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />

            <div className="password-wrapper">
                <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                />
                <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? '🙈' : '👁️'}
                </button>
            </div>

            <button onClick={handleLogin} className="login-button">
                🔐 Login
            </button>
        </div>
    );
}

export default Login;