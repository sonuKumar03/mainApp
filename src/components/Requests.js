import React from "react";
import { Link } from "react-router-dom";
import 'bulma-divider/dist/css/bulma-divider.min.css'
export const Requests = () => {
  return (
    <div className="columns">
      <div className="column">
          <div className="table">
            <div className="content">
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr>
                  <th> RequestID </th>
                  <th> Store name </th>
                  <th> Service Type </th>
                  <th> Vehicle Type </th>
                  <th> Time </th>
                  <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>324nmi1</td>
                    <td>Janta garage</td>
                    <td>Car Wash</td>
                    <td>Four Vehicle</td>
                    <td>12 PM</td>
                    <td className="level-right">
                      <Link to="/" className="button is-small is-success is-rounded">
                        Action
                      </Link>
                    </td>
                  </tr>
                  <tr>
                  <td>324nmi1</td>
                    <td>Janta garage</td>
                    <td>Car Wash</td>
                    <td>Four Vehicle</td>
                    <td> 4 PM</td>
                    <td className="level-right">
                      <Link to="/" className="button is-small is-success is-rounded">
                        Action
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
};
