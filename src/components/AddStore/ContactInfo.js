import React from "react";

export const ContactInfo = ({handleContact}) => {
  return (
    <div className="container box">
      <label className="label" htmlFor="contactInfo">
        Contact Info
      </label>
      <div className="field is-grouped">
        <div className="control is-expanded has-icons-left">
          <input name="email" className="input is-capitalized has-text-grey" type="text" placeholder="enter store email ......."  onChange={(e)=>handleContact(e)} />
          <span className="icon is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
        <div className="control  is-expanded has-icons-left">
          <input name="website" className="input is-capitalized has-text-grey" type="text" placeholder="enter resturant website ......." onChange={(e)=>handleContact(e)} />
          <span className="icon is-left">
            <i className="fas fa-globe"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
