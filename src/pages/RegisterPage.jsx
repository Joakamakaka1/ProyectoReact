import React from 'react';
import Button from '../components/Button';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Button to="/contact" label="Go to Contact" />
      <Button to="/" label="Go to Home" />
    </div>
  );
};

export default RegisterPage;