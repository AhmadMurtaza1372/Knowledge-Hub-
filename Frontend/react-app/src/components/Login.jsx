import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from './AuthContext';
import '../style/Forms.scss';
import userIcon from '../Assets/user.png';
import lockIcon from '../Assets/padlock.png';

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const { data } = await axios.post('http://localhost:5000/api/login', formData);
      
      if (data.message === 'Logged In Successfully') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        
        setIsAuthenticated(true);
        navigate('/Mainpage');
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-center" />
      
      <div className="heading">
        <h1>Login</h1>
      </div>

      <div className="form-container">
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">
            <img src={userIcon} alt="" className="logo1" /> Username:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />

          <label htmlFor="password">
            <img src={lockIcon} alt="" className="logo3" /> Password:
          </label>
          <div className="password-input">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="eye-icon-btn"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

      <div className="disclaimer">
        <p style={{ fontSize: 20 }}><strong>Disclaimer:</strong></p>
        <p>
          By logging into this app, you agree to our terms of service. We securely store your session data for authentication purposes only to keep your account safe.
        </p>
      </div>
    </div>
  );
};

export default Login;

  