import "./PainterDetail.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const PainterDetail = () => {

    const { id } = useParams();

    const [painter, setPainter] = useState({});

    useEffect(() => {
        const getPainterById = async () => {
          const painterAPI = await axios.get(
            `http://localhost:8000/painters/${id}`
          );
          console.log(painterAPI)
          setPainter(painterAPI.data.data.painterByID);
        };
    
        getPainterById();
      });

  return (
    <div className="PainterDetail"> 
        {painter ? (
      <>
          <div >
              <h2>{painter.name}</h2>
              <p>{painter.country}</p>
              <p>{painter.life}</p>
          </div>
          <img src={painter.portrait} alt={painter.name} />
      </>
    ) : null}
    </div>
  )
}

export default PainterDetail;