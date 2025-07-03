import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SingleCampus = () => {
  const [campus, setCampus] = useState(null);
  const { id } = useParams();

  const getSingleCampus = async (id) => {
    try {
      const getSingleCampus = await axios.get(
        `http://localhost:8080/api/campuses/${id}`
      );
      setCampus(getSingleCampus.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleCampus(id);
  }, []);

  if (!campus) return <p>Loading...</p>;

  return (
    <div>
      <h2>{campus.name}</h2>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <img src={campus.imageUrl || "https://via.placeholder.com/150"} />
    </div>
  );
};

export default SingleCampus;
