import React from "react";
import "bulma/css/bulma.css";
import "bulma-spacing/css/bulma-spacing.min.css";
import "./App.css";
import  "bulma-checkradio/dist/css/bulma-checkradio.min.css"
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import 'bulma-calendar/dist/js/bulma-calendar.min.js'
import { connect } from "react-redux";
import  {Router, Route, Switch, Redirect } from "react-router-dom";
import { Nav } from "./components/Nav";
import {Home} from './components/Home'
import {Page404} from './components/Page404'
import AddStore  from './components/AddStore';
import {Login} from './components/Login'
import {SignUp} from './components/SignUp'
import { Dashboard } from "./components/Dashboard";
import history from "./utils/history";
import { Map } from "./components/Map";
const mapToProps = (state) => ({ isLoggedIn: state.user.isLoggedIn });
let  App= ({ isLoggedIn })=> {
  console.log(isLoggedIn);
  return (
    <Router history={history}>
      <Nav />
      <div className="has-margin-top-40">
      <Switch>
        <Route path="/login"> <Login/></Route>
        <Route path="/map"> <Map/></Route>
        <Route path="/addstore"> <AddStore/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route path='/dashboard'>{(isLoggedIn)?<Dashboard/>:<Redirect  to='/login'></Redirect>}</Route>
        <Route exact path={["/home","/"]}><Home/></Route> 
        <Route path="*"><Page404/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App = connect(mapToProps, null)(App);
