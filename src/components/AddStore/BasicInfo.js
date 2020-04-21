import React from "react";
export const BasicInfo = ({handleBasic}) => {
  const handleChange = (e)=>{
    e.preventDefault();
    handleBasic(e);
  }
  return (
    <div className="container">
      <div className="label"> Basic Info </div>
      <div className="box">
        <div className="field">
          <div className="label is-uppercase ">
            store name <span className="has-text-danger"> * </span>
          </div>
          <div className="control">
            <input type="text" name='name' className="input has-text-grey is-capitalized" placeholder="enter store name.........." onChange={e=>handleChange(e)}/>
          </div>
        </div>

        <div className="field">
          <div className="label is-uppercase ">
            City <span className="has-text-danger"> * </span>
          </div>
          <div className="control">
            <input type="text"  name="city"  className="input  has-text-grey is-capitalized " placeholder="enter city name" onChange={e=>handleChange(e)}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="label " htmlFor="ownership">
              ARE YOU THE OWNER OR MANAGER OF THIS PLACE? <span className="has-text-danger">*</span>
            </div>
          </div>
          <div className="control">
            <select name="ownership" className="input" onChange={(e) => handleChange(e)}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>
        <div className="field">
          <div className="label is-uppercase "> phone number</div>
          <div className="control">
            <input name="phone" className="input has-tetx-grey" type="text" placeholder="Enter store Phone Number......." onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="label is-uppercase" htmlFor="ownership">
              opening status <span className="has-text-danger">*</span>
            </div>
          </div>
          <select name="opening_status" className="input" onChange={e=>handleChange(e)}>
            <option value="openig_soon">Opening Soon</option>
            <option value="already_open">Already Open</option>
          </select>
        </div>
      </div>
    </div>
  );
};
