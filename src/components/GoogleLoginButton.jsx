// GoogleLoginButton.jsx
import React from 'react';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google'; // Cambia la URL al endpoint de Google en tu servidor
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full py-2 mt-4 bg-red-600 text-white font-bold rounded-md"
    >
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleLoginButton;
