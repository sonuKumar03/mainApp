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

export const Timing = ({ handleTiming }) => {
  return (
    <div className=" container has-margin-top-10">
      <div className="label">Timing</div>
      <div className="box is-mobile">
        <label htmlFor="services" className="label">
          Days
        </label>
        <div className="columns is-multiline is-mobile">
          <div className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="sunday" value="sunday" />
              sunday
            </label>
          </div>
          <div className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="monday" value="monday" />
              monday
            </label>
          </div>
          <div className="column   is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="tuesday" value="tuesday" />
              tuesday
            </label>
          </div>
          <div className="column   is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="wednesday" value="wednesday" />
              wednesday
            </label>
          </div>
          <div className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="thursday" value="thursday" />
              thursday
            </label>
          </div>
          <div className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="friday" value="friday" />
              friday
            </label>
          </div>
          <div className="column is-narrow">
            <label className="checkbox is-capitalized">
              <input className="checkbox" type="checkbox" name="saturday" value="saturday" />
              saturday
            </label>
          </div>
        </div>
        {detectMob() ? <MobileTimePicker handleTiming={handleTiming} /> : <DesktopTimePicker handleTiming={handleTiming} />}
      </div>
    </div>
  );
};

const DesktopTimePicker = ({ handleTiming }) => {
  return (
    <div className="field is-grouped">
      
      <div className="control is-expanded">
        <select className="input" name="from">
          {time.map((t, i) => (
            <option key={i} value={t}>{`${t}`}</option>
          ))}
        </select>
      </div>
      {/* <span className="label has-margin-right-10">-</span> */}
      <div className="control is-expanded">
        <select className="input" name="to">
          {time.map((t, i) => (
            <option key={i} value={t}>{`${t}`}</option>
          ))}
        </select>
      </div>
      <div className="control">
        <button className="button is-success" onClick={(e) => handleTiming(e)}>
          Add Time
        </button>
      </div>
    </div>
  );
};

const MobileTimePicker = ({ handleTiming }) => {
  return (
    <div className="field is-grouped">
      <div className="control">
        <input className="input" type="time" defaultValue="08:00" />
      </div>
      <span className="label has-margin-right-10">-</span>
      <div className="control">
        <input className="input" type="time" defaultValue="22:00" />
      </div>
      <div className="control">
        <button className="button is-light" onClick={(e) => handleTiming(e)}>
          Add Time
        </button>
      </div>
    </div>
  );
};
