import React from "react";
import { LiveCounts } from "./LiveCounts";
import { Requests } from "./Requests";
import { Breadcrumb } from "./Breadcrumb";
import { SideMenu } from "./SideMenu";
import { Stores } from "./Stores";
import { Switch, Route, useRouteMatch} from "react-router-dom";


export const Dashboard = () => {
  const {url} = useRouteMatch();
  return (
    <div className="columns has-margin-top-20 has-padding-15">
    <div className="column is-3 has-background-light">
      <SideMenu/>
    </div>
    <div className="column">
      <Breadcrumb />
      <Switch>
        <Route exact path={`${url}/`} component={Dash}/>
        <Route path={`${url}/editStores`}><EditStore/></Route>
        <Route path={`${url}/stores`}><Stores/></Route>
      </Switch>
    </div>
  </div>
  );
};


const Dash = ()=>{
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
  )
}

const EditStore = ()=>{
  return (
    <div>
      EDIT store
    </div>
  )
}