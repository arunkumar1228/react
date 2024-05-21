import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';

import logo from '../../Assets/QBrainX-trademark-logo-Original-hashtag.png';
import { FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errors, setErrors] = useState(""); // State to manage form errors
  const history = useNavigate(); // Initialize useHistory hook

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const forgotPassword = () => {
    // Implement forgot password functionality
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value; // Get the entered username
    const password = e.target.elements.password.value; // Get the entered password

    // Check if the entered username and password match the static credentials
    if (username === 'admin' && password === 'admin@1234') {
      history('/dashboard');
      console.log("hi")
    } else {
      // If the credentials do not match, display an error message
      setErrors("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="grid">
      <div className="grid-item">
        <div className="card">
          <div className="text-center mb-3">
            <a href="#">
              <img src={logo} className="custom-image" alt="Logo" />
            </a>
          </div>
          <h4 className="login-title">Login To Your Account</h4>
          <div className="form-row">
            <form onSubmit={loginFormSubmit} className="login-form">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  <FaUser className="person-icon" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  <FaLock className="lock-icon" />
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control pr-5"
                  placeholder="Password"
                />
                <span className="position-absolute toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <a onClick={forgotPassword} className="forgot-password-link">Forgot Password?</a>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                <span className="error-message">{errors}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
