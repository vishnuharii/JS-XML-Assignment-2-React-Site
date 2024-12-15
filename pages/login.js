import React, { useState } from 'react';

const Login = () => {
  // State for storing email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic (e.g., user authentication)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required // Makes the email field mandatory
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required // Makes the password field mandatory
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
