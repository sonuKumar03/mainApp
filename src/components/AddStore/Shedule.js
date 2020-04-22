import React from "react";
const timing = [
  { day: "sunday", time: { from: "12:00", to: "10:30" } },
  { day: "sunday", time: { from: "12:00", to: "10:30" } },
   { day: "sunday", time: { from: "12:00", to: "10:30" } },
   { day: "sunday", time: { from: "12:00", to: "10:30" } },
];
const Shedule = ({ data }) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th>Day</th>
          <th>From</th>
          <th>To</th>
          <th>close</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody className="has-text-weight-light is-family-code is-size-7">
        {!(typeof data==='undefined')?data.map((t, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td className="is-capitalized">{t.day}</td>
            <td>{t.time.from}</td>
            <td>{t.time.to}</td>
            <td>
              <p onClick={() => console.log("hi")} className="has-text-danger is-small cursor">
                mark this as closed
              </p>
            </td>
            <td>
              <p onClick={() => console.log("hi")} className="has-text-danger is-small cursor">
                remove
              </p>
            </td>
          </tr>
        )):[]}
      </tbody>
    </table>
  );
};

export default Shedule;
