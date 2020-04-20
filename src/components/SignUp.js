import React from "react";
import { useState } from "react";

export const SignUp = () => {
  let _email, confirm_password, _password;
  const [errors, setError] = useState("");
  const _handleSubmit = (e) => {
    e.preventDefault();
    const email = _email.value;
    const password = _password.value;
    const c_password = confirm_password.value;

  };

  return (
    <div className="columns has-margin-top-40 has-padding-10">
      <div className="column "></div>
      <div className="column">
        <form className="form">
          <div className="field">
            <div className="control">
              <input className="input" type="email" ref={(node) => (_email = node)} placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="password" ref={(node) => (_password = node)} placeholder="Password" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="password" ref={(node) => (confirm_password = node)} placeholder="Confirm Password" />
            </div>
          </div>
          <div className="field">
            <div className="control has-text-centered">
              <button className="button is-link" onClick={(e) => _handleSubmit(e)}>
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="column"></div>
    </div>
  );
};
