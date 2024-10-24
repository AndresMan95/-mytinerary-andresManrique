// src/pages/Cities.js

import React, { useState, useEffect } from "react";
import CityCards from "../components/CityCards";

function Cities() {
  const [cities, setCities] = useState([]); // Estado para almacenar las ciudades
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  // Función para obtener las ciudades desde el backend
  const fetchCities = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cities"); // Cambia la URL por la de tu backend
      const data = await response.json();
      setCities(data); // Guarda las ciudades en el estado
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Ejecutar fetchCities al cargar el componente
  useEffect(() => {
    fetchCities();
  }, []);

  // Función que se ejecuta cuando cambia el valor de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Actualiza el término de búsqueda
  };

  // Filtrar las ciudades basadas en el término de búsqueda
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border border-gray-400 rounded mb-4 w-1/2" // Ajusta el ancho según necesites
      />

      {/* Mostrar las ciudades filtradas */}
      <CityCards cities={filteredCities} />
    </div>
  );
}

export default Cities;
