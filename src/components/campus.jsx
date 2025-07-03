import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./campus.css";

const Campus = () => {
  const [campuses, setCampuses] = useState([]);

  const getAllCampuses = async () => {
    try {
      const getCampuses = await axios.get(
        "http://localhost:8080/api/campuses"
      );
      setCampuses(getCampuses.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllCampuses();
  }, []);
  console.log("Campuses from API:", campuses);

  return (
    <div>
      <ul>
        {campuses.map((campus) => (
          <li>{campus.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Campus;
