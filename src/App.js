import React from "react";
import "bulma/css/bulma.css";
import "bulma-spacing/css/bulma-spacing.min.css";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import {Home} from './components/Home'
import {Page404} from './components/Page404'
import {Login} from './components/Login'
import {SignUp} from './components/SignUp'
const mapToProps = (state) => ({ isLoggedIn: state.user.isLoggedIn });

function App({ isLoggedIn }) {
  console.log(isLoggedIn);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home"><Home/></Route> 
        <Route path="/login"> <Login/></Route>
        <Route path="/signup"><SignUp/></Route>
        <Route exact path="*"><Page404/></Route>
      </Switch>
    </Router>
  );
}
export default App = connect(mapToProps, null)(App);
