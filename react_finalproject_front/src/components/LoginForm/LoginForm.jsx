import React, {useContext} from 'react';
import "./LoginForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import { JwtContext } from "../../context/jwtContext";

const LoginForm = () => {

const {register, handleSubmit} = useForm();

const { setJwt } = useContext(JwtContext);

const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", res.data.data.user.email);
      setJwt(localStorage.getItem("token"));
      navigate("/art");
    });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Campo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email", { required: true })} />
      </div>
      <div className="Campo">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" {...register("password", { required: true })} />
      </div>

        <button type="submit">ACCEDER</button>
    </form>
);  
}

export default LoginForm;