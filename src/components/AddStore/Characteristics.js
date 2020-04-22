import React from "react";
const types = [ "two wheeler" , "four wheeler" ];
const services = ["wash", "repair", "replace", "coloring"];

const mapToProps = (state)=>{
  return {
    types:state.Characteristics.types
  }
}

export const Characteristics = ({ handleTypes, handleServices }) => {
  return (
    <div className="container has-margin-top-10">
      <div className="label ">Characteristics</div>
      <div className="box">
        <label htmlFor="type" className="label">
          Type
        </label>
        <div className="field is-grouped">
          {types.map((type,i)=><div key={i} className="control">
            <label className="checkbox is-capitalized">
              <input type="checkbox" name={type.replace(' ','_')} value={type.replace(' ','_')}  onChange={e=>{handleTypes(e)}} />
              {type}
            </label>
          </div>)}
        </div>
        <label htmlFor="services" className="label">
          Services
        </label>
        <div className="field is-grouped">
          {
            services.map((service,i)=> <div key={i} className="control">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name={service} onChange={(e) => handleServices(e)} />
          {service}
            </label>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};
