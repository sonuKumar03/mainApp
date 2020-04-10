import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useState } from "react";

const _generalMeuItems = ['dashboard']
export const SideMenu = () => {
  const { url } = useRouteMatch();
  const [clicked, setClicked] = useState({ active: _generalMeuItems[0] });
  const _handleClick = (url) => {
    setClicked({ active: url });
  };
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
          <li>
            <Link className={`${(clicked.active==='dashboard')?'is-active':''}`} onClick={()=>{_handleClick('dashboard')}} to={`${url}`}> DashBoard </Link>
          </li>
          <li>
            <Link className={`${(clicked.active==='stores')?'is-active':''}`} onClick={()=>{_handleClick('stores')}} to={`${url}/stores`}> Stores </Link>
          </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
        <Link to={`${url}/editStore`} className={`${(clicked.active==='editStore')?'is-active':''}`} onClick={()=>{_handleClick('editStore')}} >Edit / Add Stores </Link>  
        </li> 
      </ul>
    </aside>
  );
};
