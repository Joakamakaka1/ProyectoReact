import React from 'react';
import Button from '../components/Button'; 

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Button to="/" label="Go to Home" />
      <Button to="/login" label="Go to Login" />
    </div>
  );
};

export default ContactPage;