import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campus from "./components/campus";
import Student from "./components/student";


const App = () => {
  return (
    <div>
      <NavBar />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<h1>Home Page</h1>}
          />

          <Route
            path="/campuses"
            element={
              <>
                <h1>All Campuses</h1>
                <Campus />
              </>
            }
          />

          <Route
            path="/students"
            element={
              <>
                <h1>All Students</h1>
                <Student />
              </>
            }
          />
        </Routes>
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
