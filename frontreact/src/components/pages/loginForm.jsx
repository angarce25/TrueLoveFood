import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateAllFieldsCompleted(e.target.value, password, captchaChecked);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateAllFieldsCompleted(username, e.target.value, captchaChecked);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaChecked(e.target.checked);
    validateAllFieldsCompleted(username, password, e.target.checked);
  };

  const validateAllFieldsCompleted = (username, password, captchaChecked) => {
    if (username && password && captchaChecked) {
      setAllFieldsCompleted(true);
    } else {
      setAllFieldsCompleted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar campos
    if (!username || !password) {
      setError('Por favor, complete todos los campos');
      return;
    }
    if (!captchaChecked) {
      setError('Por favor, marque la casilla de verificación');
      return;
    }
    // Aquí puedes realizar la lógica de autenticación
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Limpiar campos y errores después del envío
    setUsername('');
    setPassword('');
    setError('');
    setCaptchaChecked(false);
    // Navegar a la página de usuario después de iniciar sesión
    navigate('/User');
  };

  const handleRestauranteClick = () => {
    // Navegar a la página de crear una nueva entrada del blog
    navigate('/registerForm');
  };

  const handleUserClick = () => {
    navigate('/User');
  };

  return (
    <section className="container" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Inicio de Sesión</h2>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Usuario:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder='username'
                    required
                    autoComplete="off" // Desactiva el autocompletado para este campo
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    placeholder='********'
                    minLength="8"
                    required
                    onChange={handlePasswordChange}
                    autoComplete="off" // Desactiva el autocompletado para este campo
                  />
                </div>
                <div className="mb-3 form-check d-flex justify-content-center align-items-center">
                  <input
                    type="checkbox"
                    id="captcha"
                    className="form-check-input me-2"
                    checked={captchaChecked}
                    onChange={handleCaptchaChange}
                  />
                  <label htmlFor="captcha" className="form-check-label mb-0"><small>*Acepto términos y condiciones</small></label>
                </div>
                <button onClick={handleUserClick} className="btn btn-primary button-spacing" disabled={!allFieldsCompleted}>Iniciar Sesión</button>
                <button onClick={handleRestauranteClick} className="btn btn-secondary button-spacing">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
