import React from "react";

import "../styles/style.css";
import Menu from "./Menu";

const Base = ({
  title = "my title",
  description = "my description",
  className = "bg-dark text-white p-3",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center py-3">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
    </div>
    <div className={className}>{children}</div>
    <footer className="footer bg-dark mt-auto text-white text-center">
      <div className="container-fluid bg-success text-white text-center py-1">
        <h4>if you got any questions, feel free to reach out to us...</h4>
        <button className="btn btn-warning text-white text-center">
          ContactUs
        </button>
      </div>
      <div className="container">
        <div className="text-muted text-left">
          <span className="text-white">MERN</span> Bootcamp
        </div>
      </div>
    </footer>
  </div>
);

export default Base;
