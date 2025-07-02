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
        localStorage.setItem('auth', 'true'); // lưu trạng thái đăng nhập
        navigate('/home');
        } else {
        alert('Sai tài khoản hoặc mật khẩu');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Đăng nhập</h2>

            <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />

            <div className="password-wrapper">
                <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mật khẩu"
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
                🔐 Đăng nhập
            </button>
        </div>
    );
}

export default Login;