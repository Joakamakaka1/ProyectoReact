import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
      <Button to="/login" label="Go to Login" />
      <Button to="/register" label="Go to Register" />
      <Button to="/contact" label="Go to Contact" />
    </div>
  );
};

export default Home;