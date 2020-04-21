import React from 'react'
import { Map } from "../Map";

export const Location = ({handleLocation}) => {
    return (
        <div className="container">
          <label htmlFor="map" className="label has-margin-top-10">
            Add Location
          </label>
          <Map setLocation={handleLocation}/>
        </div>
    )
}
