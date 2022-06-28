import React from 'react';
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (formData) => {
        API.post("users/register", formData).then((res) => {
          console.log(res);
        });
        navigate("/login");
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Campo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email", { required: true })} />
      </div>
      <div className="Campo">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" {...register("password", { required: true })} />
      </div>
      <div className="Campo">
        <label htmlFor="city">Ciudad de referencia:</label>
        <select name="city" id="city" {...register("city", { required: true })} >
            <option value="MAD">Madrid</option>
            <option value="SEV">Sevilla</option>
            <option value="BIL">Bilbao</option>
        </select>
      </div>

        <button type="submit">REGISTRARSE</button>
    </form>
  )
}

export default RegisterForm;