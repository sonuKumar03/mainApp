import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bulma-badge/dist/css/bulma-badge.min.css";
export let Nav = () => {
  let listener = () => {
    let burger = document.querySelector(".navbar-burger");
    burger.addEventListener("click", () => {
      let target = burger.getAttribute("data-target");
      burger.classList.toggle("is-active");
      document.getElementById(target).classList.toggle("is-active");
    });
  };
  let addListener = () => {
    if (document.readyState !== "loading") {
      listener();
    } else {
      document.addEventListener("DOMContentLoaded", listener);
    }
  };
    useEffect(addListener, []);
return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-bold  is-size-4">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
        </Link>
        <div className="navbar-burger burger" data-target="_navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/stores">Stores</Link>
            <Link className="navbar-item" to="/dashboard">Dashboard</Link>
            <Link className="navbar-item" to="/addstore">Add Store </Link>
        </div>
      </div>
      <div className="navbar-menu" id="_navMenu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="icon ">
              <i className="fas fa-bell has-badge-rounded has-badge-info" data-badge="8"></i>
            </div>
          </div>
          <div className="navbar-item has-text-medium">
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
