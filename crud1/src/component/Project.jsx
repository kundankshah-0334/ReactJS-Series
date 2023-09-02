import React from "react";
import { NavLink } from "react-router-dom";


const Project = () => {
  return (
    <>
    <div className="container">

    <h1>CRUD Application</h1>
    <NavLink className="btn_started" to="/add">Get Started</NavLink>
    </div>
    </>

  );
}

export default Project;