import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campus from "./components/CampusList";
import Student from "./components/student";
import AddCampus from "./components/addCampus";
import SingleCampus from "./components/SingleCampus";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<h1 className="page-title">Home Page</h1>} />

          <Route
            path="/campuses"
            element={
              <>
                <h1 className="page-title">All Campuses</h1>
                <AddCampus />
                <Campus />
              </>
            }
          />

          <Route
            path="/students"
            element={
              <>
                <h1 className="page-title">All Students</h1>
                <Student />
              </>
            }
          />

          <Route path="/campuses/:id" element={<SingleCampus />} />
        </Routes>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
