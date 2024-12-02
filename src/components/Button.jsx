import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ to, label }) => {
  const navigate = useNavigate(); // Replaces useHistory

  // Function that handles redirection when the button is clicked
  const handleClick = () => {
    navigate(to); // Navigates to the provided route
  };

  return (
    <button onClick={handleClick} className="navigation-button">
      {label}
    </button>
  );
};

export default Button;