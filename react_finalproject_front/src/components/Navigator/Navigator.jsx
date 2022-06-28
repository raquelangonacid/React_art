import React, {useContext} from 'react';
import "./Navigator.scss";
import { Link } from "react-router-dom";
import ButtonLogout from '../ButtonLogout/ButtonLogout';
import { JwtContext } from "../../context/jwtContext";


const Navigator = () => {

  const { jwt } = useContext(JwtContext);

  return (
    <nav className="Navigator">
      <ul className="Navigator_ul">
        
        <li>
          <Link to="/">INICIO</Link>
        </li>
        
        {jwt ? (<>
        <li> <Link to="/art">ARTE</Link> </li>
        <li> <Link to="/artists">ARTISTAS</Link> </li>
        <li> <ButtonLogout /></li>
        </>) : (<>
        <li> <Link to="/register">REGISTRO</Link> </li> 
        <li> <Link to="/login">ACCESO</Link> </li>
        </>)}
 
      </ul>
    </nav>
  
  )
}

export default Navigator;