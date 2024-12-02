import React from 'react';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Button to="/register" label="Go to Register" />
      <Button to="/" label="Go to Home" />
    </div>
  );
};

export default LoginPage;