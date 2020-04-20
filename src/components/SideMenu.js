import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useState } from "react";

const _menus = [
  {_path:"",_name:"dashboard"},
  { _path: "/stores", _name: "stores" },
];

const _adminMenus = [{ _path: "/editStores", _name: "edit store" }];
export const SideMenu = () => {
  const {url} = useRouteMatch();
  const [clicked, setClicked] = useState({ active: _menus[0]._name });
  const _handleClick = (url) => {
    setClicked({ active: url });
};
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li> <Link  to="/dashboard">Dashboard</Link>
          <ul className="menu-list">
            <li> <Link to="/dashboard/stores">Stores</Link> </li>
          </ul>
        </li>

      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        {_adminMenus.map((store,index) => (
          <li key={index}>
            <Link
              className={`is-capitalized ${clicked.active.localeCompare(store._name) === 0 ? "is-active" : ""}`}
              to={`${url}${store._path}`}
              onClick={() => {
                _handleClick(store._name);
              }}>
              {store._name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

 {/* {_menus.map((store,index) => (
          <li key={index}>
            <Link
              className={`is-capitalized ${clicked.active.localeCompare(store._name) === 0 ? "is-active" : ""} `}
              onClick={() => _handleClick(store._name)}
              to={`${url}${store._path}`}>
              {store._name}
            </Link>
          </li>
        ))} */}