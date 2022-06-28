import "./GalleryDetail.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GalleryDetail = () => {

    const { id } = useParams();

    const [painting, setPainting] = useState({});

    useEffect(() => {
        const getPaintingById = async () => {
          const paintingsAPI = await axios.get(
            `http://localhost:8000/paintings/${id}`
          );
          console.log(paintingsAPI)
          setPainting(paintingsAPI.data.data.paintingByID);
        };
    
        getPaintingById();
      });

  return (
    <div className="GalleryDetail">
    {painting ? (
      <>
        <div>
            <h2>{painting.title}</h2>
            <p>{painting.year}</p>
            <p>{painting.author}</p>
        </div>
        <img src={painting.img} alt={painting.title} />
      </>
    ) : null}
  </div>
);
};

export default GalleryDetail;