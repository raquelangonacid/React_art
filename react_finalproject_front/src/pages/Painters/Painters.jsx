import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Painter.css"
import { Link } from "react-router-dom";

const Painters = () => {
  const [painters, setPainters] = useState([]);

  useEffect(()=>{
    const getPainters = async () =>{
      const paintersAPI = await axios.get("http://localhost:8000/painters");
      setPainters(paintersAPI.data.data.painter);
    };
    getPainters();
  })
  return (
    < >
      {painters.length ? (
        <div className="Painters">
          {painters.map((painter) => (
          <Link key={painter._id} to={`${painter._id}` }>
          <figure key={painter._id} className="Pintor">
              <p className="Nombre">{painter.name}</p>
              <img src={painter.portrait} alt={painter.name} className="Retrato"/>
            </figure>
          </Link>

          ))}
        </div>
      ) : (
        <p>Loading painters</p>
      )}
    </>
  );
}

export default Painters;