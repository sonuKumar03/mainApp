import React from "react";

export const Characteristics = ({handleTypes,handleServices}) => {
  return (
    <div className="container has-margin-top-10">
      <div className="label ">Characteristics</div>
      <div className="box">
        <label htmlFor="type" className="label">
          Type
        </label>
        <div className="field is-grouped">
          <div className="control">
            <label htmlFor="two_wheeler" className="checkbox is-capitalized">
              <input type="checkbox" name="two_wheeler" onChange={(e) => handleTypes(e)} value="two_wheeler" />
              two wheeler
            </label>
          </div>
          <div className="control">
            <label htmlFor="two_wheeler" className="checkbox is-capitalized">
              <input type="checkbox" name="four_wheeler" onChange={(e) => handleTypes(e)} value="four_wheeler" />
              four wheeler
            </label>
          </div>
        </div>
        <label htmlFor="services" className="label">
          Services
        </label>
        <div className="field is-grouped">
          <div className="control">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="repair" onChange={(e) => handleServices(e)} />
              repair
            </label>
          </div>
          <div className="control">
            <label className="checkbox is-capitalized">
              <input type="checkbox" name="wash" onChange={(e) => handleServices(e)} />
              wash
            </label>
          </div>
          <div className="control">
            <label className="checkbox is-capitalized">
              <input type="checkbox" name="replace" onChange={(e) => handleServices(e)} />
              replace
            </label>
          </div>
          <div className="control">
            <label className="checkbox is-capitalized">
              <input type="checkbox" name="coloring" onChange={(e) => handleServices(e)} /> coloring
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
