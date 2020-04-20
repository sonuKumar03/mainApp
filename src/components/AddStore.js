import React from "react";
import { useState } from "react";
import { addStore } from "../utils/store";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { Timing } from "./AddStore/Timing";
import { BasicInfo } from "./AddStore/BasicInfo";
import { Characteristics } from "./AddStore/Characteristics";
import { Location } from "./AddStore/Location";
import { ContactInfo } from "./AddStore/ContactInfo";
const mapToDispatch = (dispatch) => {
  return {
    createStore: (uid, store) => {
      dispatch(addStore({ uid, store }));
    },
  };
};


let AddStore = ({ createStore }) => {
  let storeName;
  let ownerName;
  let mobileNumber;
  const [location, setLocation] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    let s_name = storeName.value;
    let o_name = ownerName.value;
    let number = mobileNumber.value;
    const store = {
      name: s_name,
      owner: o_name,
      number,
      location: new firebase.firestore.GeoPoint(Number(location.lat), Number(location.lng)),
    };
    const uid = "HnS3twSSiCfUYAthS2KPMTQo9482";
    createStore(uid, store);
  };

  const handleTiming = (event)=>{
    event.preventDefault();
  }
  return (
    <div className="has-margin-top-10">
      <form>
      <BasicInfo/> 
      <Characteristics/>
       <Timing handleTiming={handleTiming}/>
       <Location/>
       <ContactInfo/>
      </form>
    </div>
  );
};

export default AddStore = connect(null, mapToDispatch)(AddStore);
