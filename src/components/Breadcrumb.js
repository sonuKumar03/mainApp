import React from "react";
import { Link } from "react-router-dom";
export const Breadcrumb = () => {
  return (
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
  );
};
