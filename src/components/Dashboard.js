import React from "react";
import { LiveCounts } from "./LiveCounts";
import { Requests } from "./Requests";
export const Dashboard = () => {
  return (
    <div>
      <section className="hero welcome is-small is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hello, Admin.</h1>
            <h2 className="subtitle">I hope you are having a great day!</h2>
          </div>
        </div>
      </section>
      <LiveCounts/>
      <Requests />
    </div>
  );
};
