import React from "react";
//  00 : 00  to 24:00
const time = [];
for (let i = 0; i <= 24; i++) {
  for (let j = 0; j < 60; j += 15) {
    let H = `${i}`;
    let M = `${j}`;
    if (H.length < 2) {
      H = `0${H}`;
    }
    if (M.length < 2) {
      M = `0${M}`;
    }
    time.push(`${H}:${M}`);
    if (i == 24) break;
  }
}

const detectMob = () => {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

export const Timing = ({handleDays,handleTime}) => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className=" container has-margin-top-10">
      <div className="label">Timing</div>
      <div className="box is-mobile">
        <label htmlFor="services" className="label">
          Days
        </label>
        <div className="columns is-multiline is-mobile">
          {days.map((day,i)=>{ return (  <div key={i} className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name={day} value={day} onChange={e=>handleDays(e)} />
              {day}
            </label>
          </div> )})}
        </div>
        {detectMob() ? <MobileTimePicker  handleTime={handleTime} /> : <DesktopTimePicker handleTime={handleTime}/>}
      </div>
    </div>
  );
};

const DesktopTimePicker = ({handleTime}) => {
  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <select className="input" name="from" onChange={e=>handleTime(e)}>
          {time.map((t, i) => (
            <option key={i} value={t}>{`${t}`}</option>
          ))}
        </select>
      </div>
      {/* <span className="label has-margin-right-10">-</span> */}
      <div className="control is-expanded">
        <select className="input" name="to"  onChange={e=>handleTime(e)}>
          {time.map((t, i) => (
            <option key={i} value={t}>{`${t}`}</option>
          ))}
        </select>
      </div>
      <div className="control">
        <button className="button is-light" >
          Add Time
        </button>
      </div>
    </div>
  );
};

const MobileTimePicker = ({handleTime}) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <input className="input" type="time" defaultValue="08:00" onChange={e=>handleTime(e)}/>
      </div>
      <span className="label has-margin-right-10">-</span>
      <div className="control">
        <input className="input" type="time" defaultValue="22:00" onChange={e=>handleTime(e)}/>
      </div>
      <div className="control">
        <button className="button is-light" >
          Add Time
        </button>
      </div>
    </div>
  );
};
