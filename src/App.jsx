import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campus from "./components/campus";

const App = () => {



  return (
    <div>
      <NavBar />
      <div className="app">
        <h1>CRUD APP!</h1>
        <Routes>
          <Route path="/campuses" element={<div>All Campuses </div>}></Route>
          <Route path="/students" element={<div>All Students </div>}></Route>
        </Routes>
        <Campus />
      </div>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
