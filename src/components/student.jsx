import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./student.css";

const Student = () => {
  const [Students, setStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const getStudents = await axios.get(
        "http://localhost:8080/api/students"
      );
      setStudents(getStudents.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  console.log("Studnets from API:", Students);

  return (
    <div>
      <ul>
        {Students.map((student) => (
          <li>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;