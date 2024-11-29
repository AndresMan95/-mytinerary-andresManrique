import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir después de registrarse

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoUrl: "",
    country: "",
  });

  const navigate = useNavigate(); // Usamos para redirigir

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizamos la solicitud al backend para registrar al usuario
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", { // Ajusta la URL de acuerdo a tu backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/signin"); // Redirige al login después de registrarse
      } else {
        alert(result.message); // Muestra el mensaje de error si la respuesta no es exitosa
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un error en el registro, intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="photoUrl"
        placeholder="Photo URL"
        value={formData.photoUrl}
        onChange={handleInputChange}
      />
      <select
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      >
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
