import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CampusList.css";

const Campus = () => {
  const [campuses, setCampuses] = useState([]);

  const getAllCampuses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/campuses");
      setCampuses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllCampuses();
  }, []);

  return (
    <div className="campus-container">
      {campuses.length === 0 ? (
        <p className="no-campus">There are no campuses in the database.</p>
      ) : (
        <ul className="campus-list">
          {campuses.map((campus, index) => (
            <li key={index} className="campus-item">
              {campus.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Campus;
