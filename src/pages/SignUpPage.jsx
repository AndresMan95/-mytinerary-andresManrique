// SignUpPage.jsx
import React from "react";
import SignUp from "../components/SignUp"; // Asegúrate de que la ruta sea correcta

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Crea una Cuenta</h1>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
