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
      console.log("loading");
    } else {
      document.addEventListener("DOMContentLoaded", listener);
      console.log("loaded");
    }
  };

  useEffect(addListener, []);

  return (
    <nav className="navbar is-transparent">
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
          <div className="navbar-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-item">
            <Link to="/stores">Stores</Link>
          </div>
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
