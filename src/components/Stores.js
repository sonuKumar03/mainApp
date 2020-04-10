import React from "react";
import { useRouteMatch, Link, useParams, Switch, Route } from "react-router-dom";
export const Stores = () => {
const {url,path} = useRouteMatch(); 
  return (
    <div>
      <ul>
        <li> <Link to={`${url}/1`}>Store 1</Link> </li>
        <li> <Link to={`${url}/2`}>Store 2</Link> </li>
        <li> <Link to={`${url}/3`}>Store 3</Link> </li>
      </ul>
      <Switch>
        <Route path={`${path}/:id`}> <Store/> </Route>
      </Switch>
    </div>
  );
};

const Store = ()=>{
  const {id} = useParams();
  return (
  <h3>{id}</h3>
  )
}
