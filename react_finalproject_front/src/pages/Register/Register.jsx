import React from 'react';
import "./Register.css"; 
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div className="Register">
      <h2>Formulario de registro</h2>
      <RegisterForm />
    </div>
  )
}

export default Register;