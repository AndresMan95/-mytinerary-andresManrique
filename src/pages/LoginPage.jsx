// LoginPage.jsx
import React from 'react';
import LoginForm from '../components/loginForm';
import GoogleLoginButton from '../components/GoogleLoginButton';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a MyTinerary</h1>
      <LoginForm />
      <div className="mt-6 text-center">ó</div>
      <GoogleLoginButton />
    </div>
  );
};

export default LoginPage;
