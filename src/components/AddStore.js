import React, { Component } from "react";
import firebase from "firebase/app";
import { connect } from "react-redux";
import { Timing } from "./AddStore/Timing";
import { BasicInfo } from "./AddStore/BasicInfo";
import { Characteristics } from "./AddStore/Characteristics";
import { Location } from "./AddStore/Location";
import { ContactInfo } from "./AddStore/ContactInfo";

// TODO: connect everything
// redux
import {addStore} from '../Reducers/creators';
const mapToDispatch = (dispatch) => {
  return {
    createStore: (store) => {
      console.log(store);
      dispatch(addStore(store));
    },
  };
};

class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: {
        name: "",
        city: "Bilaspur",
        ownership: "no",
        phone: "",
        opening_status: "",
      },
      Characteristics: {
        types: {
          two_wheeler: false,
          four_wheeler: false,
        },
        services: {
          repair: false,
          wash: false,
          replace: false,
          coloring: false,
        },
      },
      timing: {
        days: {},
        time: {},
      },
      shedule:[],
      location: { coordinates: "" },
      contactInfo: {},
    };
  }
handleTime = (e)=>{
    e.preventDefault();
    this.setState(
      Object.assign({}, this.state, {
        ...this.state,
        timing:{
          ...this.state.timing,
          time:{
            ...this.state.timing.time,
            [e.target.name]: e.target.value
          }
        },
      })
    );
}
handleShedule = (e)=>{
  // day:
  // time :{ from :'',to:''}
  e.preventDefault();
  let days =Object.keys(this.state.timing.days);
  let t=days.map((day)=>({day,['time']:this.state.timing.time}));
  this.setState(Object.assign({},this.state,{
    shedule:t
  }),()=>{ console.log(this.state) });
}

  handleContact = (e) => {
    e.preventDefault();
    this.setState(
      Object.assign({}, this.state, {
        ...this.state,
        contactInfo: {
          ...this.state.contactInfo,
          [e.target.name]: e.target.value,
        },
      })
    );
  };
  handleLocation = (loc) => {
    let location = this.state.location;
    location = Object.assign({}, location, {
      coordinates: loc,
    });
    this.setState(
      Object.assign({}, this.state, {
        ...this.state,
        location,
      })
    );
  };

  handleDays = (e) => {
    e.preventDefault();
    let days = this.state.timing.days;
    days = Object.assign({}, days, {
      [e.target.name]: e.target.checked,
    });
    this.setState(
      Object.assign({}, this.state, {
        ...this.state,
        timing: {
          ...this.state.timing,
          days: days,
        },
      })
    );
  };
  handleBasic = (e) => {
    e.preventDefault();
    let basic = this.state.basic;
    basic = Object.assign({}, basic, {
      [e.target.name]: e.target.value,
    });
    this.setState({ basic });
  };

  handleTypes = (e) => {
    e.preventDefault();
    let types = this.state.Characteristics.types;
    types = Object.assign({}, types, {
      [e.target.name]: e.target.checked,
    });
    let _state = Object.assign({}, this.state, {
      ...this.state,
      Characteristics: {
        ...this.state.Characteristics,
        types: types,
      },
    });
    this.setState(_state);
  };

  handleServices = (e) => {
    e.preventDefault();
    let services = this.state.Characteristics.services;
    services = Object.assign({}, services, {
      [e.target.name]: e.target.checked,
    });
    let _state = Object.assign({}, this.state, {
      ...this.state,
      Characteristics: {
        ...this.state.Characteristics,
        services: services,
      },
    });
    this.setState(_state);
  };
  onSubmit = (e) => {
    e.preventDefault();
    let state = this.state;
    this.props.createStore(state);
    // let s_name = storeName.value;
    // let o_name = ownerName.value;
    // let number = mobileNumber.value;
    // const store = {
    //   name: s_name,
    //   owner: o_name,
    //   number,
    //   location: new firebase.firestore.GeoPoint(Number(location.lat), Number(location.lng)),
    // };
    // const uid = "HnS3twSSiCfUYAthS2KPMTQo9482";
    // createStore(uid, store);
  };
  render() {
    return (
      <div>
        <div className="has-margin-top-10">
          <form autoComplete="off">
            <BasicInfo handleBasic={this.handleBasic} />
            <Characteristics handleTypes={this.handleTypes} handleServices={this.handleServices} />
            <Timing handleDays={this.handleDays}  handleTime={this.handleTime} handleShedule={this.handleShedule} data={this.state.shedule} />
            <Location handleLocation={this.handleLocation} />
            <ContactInfo handleContact={this.handleContact} />
            <div className="control has-text-centered ">
              <button className="button is-success" onClick={(e) => this.onSubmit(e)}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddStore = connect(null, mapToDispatch)(AddStore);

// export default AddStore

// let AddStore = ({ createStore }) => {
// let store_name,city,ownership,phone,opening_status;

// const onSubmit = (event) => {
//   event.preventDefault();
//   // let s_name = storeName.value;
//   // let o_name = ownerName.value;
//   // let number = mobileNumber.value;
//   // const store = {
//   //   name: s_name,
//   //   owner: o_name,
//   //   number,
//   //   location: new firebase.firestore.GeoPoint(Number(location.lat), Number(location.lng)),
//   // };
//   // const uid = "HnS3twSSiCfUYAthS2KPMTQo9482";
//   // createStore(uid, store);
// };

//   const handleTiming = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div className="has-margin-top-10">
//       <form autoComplete="off">
//         <BasicInfo   />
//         <Characteristics/>
//         <Timing />
//         <Location/>
//         <ContactInfo />
//          <div  className="control has-text-centered " >
//     <button className="button is-success"  onClick={e=>onSubmit(e)}>Add</button>
//         </div>
//       </form>
//     </div>
//   );
// };
