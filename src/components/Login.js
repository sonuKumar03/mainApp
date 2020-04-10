import React from "react";
import { useState } from "react";
import { loginUser } from '../utils/user';
import store from '../Reducers/appReducer'
import { useHistory, useLocation } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let from =  location.state|| { from:{pathname:"/home"}}

  let email ,password;
  const [user ,setUsser] =useState({email:'sonu4dragon@gmail.com',password:"x1234x567xzy"})
  const onChange = (event)=>{
    let _email = email.value;
    let _password = password.value;
    setUsser(Object.assign({},user,{
        email:_email,
        password:_password
    }));
    history.replace(from);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    store.dispatch(loginUser({...user}));
  }
  return (
    <>
      <div className="columns is-centered">
        <div className="column is-4 is-narrow">
        <div className="title has-text-centered  has-text-primary">
            Login
        </div>
      <form className="form" autoComplete="off">
        <div>
          <div className="field">
            <div className="control  has-icons-left">
              <input className="input" type="email" placeholder="Email" ref={node=>(email=node)}  onChange={(e)=>{onChange(e)}} defaultValue={user.email}/>
              <span className="icon is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control   has-icons-left">
              <input className="input" type="password" placeholder="Password" ref={node=>(password=node)} defaultValue={user.password}  onChange={(e)=>{onChange(e)}} />
              <span className="icon is-left">
                <i className="fas fa-lock"> </i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-info"   type="submit" onClick={(e)=>{onSubmit(e)}}>Log In</button>
            </div>
          </div>
        </div>
      </form>
      </div>
      </div>
    </>
  );
};
