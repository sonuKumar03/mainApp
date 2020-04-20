import React from "react";

export const BasicInfo = () => {
  let storeName, city, owner,notowner, number, openingStatus;
const handleBasic = (e)=>{
    e.preventDefault();
    console.log(owner);
    console.log(notowner);
}

const handleChange = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
}
  return (
    <div className="container">
      <div className="label"> Basic Info </div>
      <div className="box">
        <div className="field">
          <div className="label is-uppercase has-text-grey">
            store name <span className="has-text-danger"> * </span>
          </div>
          <div className="control">
            <input type="text" ref={(node) => (storeName = node)} className="input has-text-grey is-capitalized" placeholder="enter store name.........." />
          </div>
        </div>

        <div className="field">
          <div className="label is-uppercase  has-text-grey ">
            City <span className="has-text-danger"> * </span>
          </div>
          <div className="control">
            <input type="text"  ref={(node)=>city=node} className="input  has-text-grey is-capitalized " placeholder="enter city name" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="label " htmlFor="ownership">
              ARE YOU THE OWNER OR MANAGER OF THIS PLACE? <span className="has-text-danger">*</span>
            </div>
          </div>
            <div className="control">
                <select name="ownership" className='input' onChange={(e)=>handleChange(e)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
        </div>
        <div className="field">
          <div className="label is-uppercase  has-text-grey "> phone number</div>
          <div className="control">
            <input className="input has-tetx-grey" type="text" placeholder="Enter store Phone Number......." />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div className="label is-uppercase" htmlFor="ownership">
              opening status <span className="has-text-danger">*</span>{" "}
            </div>
          </div>
          <div className="control">
            <label className="radio">
              <input className="radio" type="radio" name="owner"  onChange={(e)=>handleChange(e)} value='already_open'/> this place is opened already
            </label>
          </div>
          <div className="control">
            <label className="radio">
              <input type="radio" name="owner" onChange={e=>handleChange(e)} value='opening_soon'/>
              this place is opening soon
            </label>
          </div>
        </div>
      <button className="button is-success" onClick={(e)=>handleBasic(e)} >Next</button>
      </div>
    </div>
  );
};
