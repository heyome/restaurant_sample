import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser({ email: email });

    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="button-group">
          <input type="submit" value="Login" className="login-submit" />
          <Link to="/signup">
            <button className="signup-button">Signup</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
