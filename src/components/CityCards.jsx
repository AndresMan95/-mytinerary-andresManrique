// src/components/CityCards.js

import React from "react";

const CityCards = ({ cities }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {cities.length === 0 ? (
        <div>No se encontraron ciudades.</div> // Mensaje cuando no hay ciudades que mostrar
      ) : (
        cities.map((city) => (
          <div key={city._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{city.name}</h3>
            <img
              src={city.photo}
              alt={city.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Continent:</strong> {city.continent}</p>
            <p>{city.description}</p>
            <p><strong>Currency:</strong> {city.currency}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CityCards;
