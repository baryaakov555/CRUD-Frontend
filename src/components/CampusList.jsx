import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CampusList.css";
import { useNavigate } from "react-router-dom";
import AddCampus from "./AddCampus";

const Campus = () => {
  const [campuses, setCampuses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

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

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="campus-container">
      {campuses.length === 0 ? (
        <p className="no-campus">There are no campuses in the database.</p>
      ) : (
        <ul className="campus-list">
          {campuses.map((campus) => (
            <li
              key={campus.id}
              className="campus-item"
              onClick={() => navigate(`/campuses/${campus.id}`)}
            >
              {campus.name}
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(campus.id);
                }}
              >
                🗑️
              </p>
            </li>
          ))}
        </ul>
      )}
      {showForm === true ? (
        <AddCampus />
      ) : (
        <button className="toggle-campus-button" onClick={handleShowForm}>
          Add Campus
        </button>
      )}
    </div>
  );
};

export default Campus;
