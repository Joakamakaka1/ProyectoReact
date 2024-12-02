import React from 'react';
import Button from '../components/Button';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Login Page</h1>
      </div>
      <div className="space-y-4">
        <Button
          to="/register"
          label="Go to Register"
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        />
        <Button
          to="/"
          label="Go to Home"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        />
      </div>
    </div>
  );
};

export default LoginPage;