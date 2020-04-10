import React from "react";
import { Map } from "./Map";
import { useState } from "react";
import {addStore} from '../utils/store'
import firebase from  'firebase/app'
import { connect } from "react-redux";
const mapToDispatch = dispatch=>{
    return {
      createStore :(uid,store)=>{
        dispatch(addStore({uid,store}))
      }
    }
}

let  AddStore = ({createStore}) => {
  let storeName;
  let ownerName;
  let mobileNumber;
  const [location, setLocation] = useState({});

const onSubmit = event => {
    event.preventDefault();
    let s_name = storeName.value;
    let o_name = ownerName.value;
    let number = mobileNumber.value;
    const store = {
      name:s_name,
      owner:o_name,
      number,
      location:new firebase.firestore.GeoPoint(Number(location.lat),Number(location.lng))
    }
    const uid="HnS3twSSiCfUYAthS2KPMTQo9482";
    createStore(uid,store)
  };

  return (
      <div className="columns is-centered is-desktop">
        <div className="column">
          <div className="title is-4 has-text-centered has-background-info has-text-white">Add Store</div>
          <form className="form" autoComplete="off" onSubmit={e => onSubmit(e)}>
            <div>
              <div className="field">
                <div className="control  has-icons-left">
                  <input className="input is-small" type="text" placeholder="Store Name " ref={node => (storeName = node)} />
                  <span className="icon is-left">
                    <i className="fas fa-store"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control  has-icons-left">
                  <input className="input is-small" type="text" placeholder="Owner Name " ref={node => (ownerName = node)} />
                  <span className="icon is-left">
                    <i className="fas fa-user-tie"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control   has-icons-left">
                  <input
                    className="input  is-small"
                    type="tel"
                    placeholder="888-9999-888"
                    ref={node => (mobileNumber = node)}
                    maxLength="12"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"
                    defaultValue="999-3044-923"
                  />
                  <span className="icon is-left">
                    <i className="fas fa-phone"> </i>
                  </span>
                </div>
              </div>
              <div className="field ">
                <div className="control has-text-centered">
                  <Map setLocation={setLocation} />
                </div>
              </div>
              <div className="control">
                <div className="field has-text-centered">
                  <button className="button is-success">Add Store</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddStore = connect(null,mapToDispatch)(AddStore);