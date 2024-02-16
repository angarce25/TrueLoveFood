import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Realiza una solicitud HTTP para obtener los datos del usuario desde la base de datos
        const response = await axios.get('http://localhost:8000/users/1'); // Cambia la URL y el ID del usuario según tu configuración
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Perfil de Usuario</h2>
              {userData ? (
                <div>
                  <p><strong>Nombre:</strong> {userData.name}</p>
                  <p><strong>Teléfono:</strong> {userData.phone}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                  <p><strong>ID:</strong> {userData.id}</p>
                </div>
              ) : (
                <p>Cargando datos del usuario...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
