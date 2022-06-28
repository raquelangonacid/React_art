import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(()=>{
    const getPaintings = async () =>{
      const paintingsAPI = await axios.get("http://localhost:8000/paintings");
      setPaintings(paintingsAPI.data.data.painting);
    };
    getPaintings();
  })
  return (
    <>
      {paintings.length ? (
        <div className="Gallery">
          {paintings.map((painting) => (
          <Link key={painting._id} to={`${painting._id}` }>

            <figure key={painting._id} className="Cuadro">
              <p className="Titulo">{painting.title}</p>
              <img src={painting.img} alt={painting.title} className="Cuadro_img"/>
            </figure>

          </Link>

          ))}
        </div>
      ) : (
        <p>Loading paintings</p>
      )}
    </>
  );
}

export default Gallery;