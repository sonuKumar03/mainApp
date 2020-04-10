import React from "react";
import { Dashboard } from "./Dashboard";
import { Breadcrumb } from "./Breadcrumb";
import { SideMenu } from "./SideMenu";
import { Switch, Route, useRouteMatch} from "react-router-dom";
import { Stores } from "./Stores";
export const Home = () => {
  const {path} = useRouteMatch();
  return (
    <div className="columns">
      <div className="column is-3 has-background-light">
        <SideMenu/>
      </div>
      <div className="column">
        <Breadcrumb />
        <Switch>
        <Route  path={`${path}/editStore`}><EditStore/></Route>
          <Route path={`${path}/:id`}><Stores/></Route>
          <Route exact path={`${path}`}><Dashboard/></Route>
        </Switch>
      </div>
    </div>
  );
};

const EditStore = ()=>{
  return (
    <div>
      EDIT store
    </div>
  )
}
