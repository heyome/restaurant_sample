import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
import './SignupPage.css'; // Import the CSS file

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if passwords match
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(response => response.text())
      .then(data => {
        if (data.message) {
          // Signup failed, display error message to user
          alert(data.message);
        } else {
          // Signup succeeded, set user and navigate to home page
          setUser({ name: email });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  };
  

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="button-group">
          <input type="submit" value="Signup" className="signup-submit" />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
