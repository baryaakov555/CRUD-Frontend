import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CampusList.css";

const Campus = () => {
  const [campuses, setCampuses] = useState([]);

  const getAllCampuses = async () => {
    try {
      const getAllCampuses = await axios.get(
        "http://localhost:8080/api/campuses"
      );
      setCampuses(getAllCampuses.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCampuses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deleteCampus = await axios.delete(
        `http://localhost:8080/api/campuses/${id}`
      );
      await getAllCampuses();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="campus-container">
      {campuses.length === 0 ? (
        <p className="no-campus">There are no campuses in the database.</p>
      ) : (
        <ul className="campus-list">
          {campuses.map((campus) => (
            <li key={campus.id} className="campus-item">
              {campus.name}
              <p onClick={() => handleDelete(campus.id)}>🗑️</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Campus;
