import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <h2>Formulario de acceso</h2>
      <LoginForm />
    </div>
  )
}

export default Login;