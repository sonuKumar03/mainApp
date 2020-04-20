import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="has-margin-top-20">
      <div className="title has-text-centered has-text-danger"> Home Page</div>
        <div className="buttons">
          <Link to="/login" className="button is-info">Login</Link>
          <Link to="/signup" className="button is-success">Sign Up</Link>
        </div>
      <div className="footer has-text-centered  has-background-dark has-text-white">Footer</div>
    </div>
  );
};
