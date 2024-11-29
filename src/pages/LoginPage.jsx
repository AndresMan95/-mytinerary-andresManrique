import React from 'react';
import LoginForm from '../components/LoginForm'; // Verifica que el nombre sea correcto según tu archivo
import GoogleLoginButton from '../components/GoogleLoginButton';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/signup'); // Redirige a la página de registro
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a MyTinerary</h1>
      <LoginForm />
      <div className="mt-6 text-center">ó</div>
      <GoogleLoginButton />
      <div className="mt-4">
        <button
          onClick={handleRegisterRedirect}
          className="w-full py-2 bg-gray-600 text-white font-bold rounded-md"
        >
          ¿No tienes cuenta? Regístrate
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
