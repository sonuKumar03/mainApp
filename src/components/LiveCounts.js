import React from "react";


export const LiveCounts = () => {
  return (
    <section className="info-tiles">
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">230K</p>
            <p className="subtitle">Pending Requests</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">120K</p>
            <p className="subtitle">Total Requests</p>
          </article>
        </div>
      </div>
    </section>
  );
};
