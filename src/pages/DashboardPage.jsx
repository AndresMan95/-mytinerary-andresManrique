// DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Header';

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data.user);
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="p-8">
        {userData ? (
          <div>
            <h2 className="text-3xl">Hola, {userData.firstName}</h2>
            <p>{userData.email}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
