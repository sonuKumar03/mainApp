import React from "react";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import { mapToken } from "../config/mapToken";
import { useState } from "react";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
const mapStyle = {
  width: "100%",
  height: "100%"
};

export const Map = ({setLocation=f=>{}}) => {
  const [state, setState] = useState({ location: { lat: "23.262200", lng: "82.560000" }, zoom: 13 });
  const mapConfig = {
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [state.location.lng, state.location.lat],
    zoom: [state.zoom]
  };
  useEffect(()=>{
    setLocation(state.location);
  });
  let updateState  = (location)=>{
    setState(Object.assign({}, state, { location }));
    setLocation(state.location);
  }
  let mapInitialize = () => {
    updateState(state.location);
    mapboxgl.accessToken = mapToken;
    let map = new mapboxgl.Map(mapConfig);
    map.on('load',()=>{
      map.resize();
    })
    map.addControl(new MapboxGeocoder({
      accessToken:mapboxgl.accessToken,
      mapboxgl
    }))
    // listeners for map
    let marker = new mapboxgl.Marker({ draggable: true });
    marker.setLngLat(state.location);
    marker.addTo(map);
    
    map.addControl(new mapboxgl.FullscreenControl())
    map.on("click", e => {
      updateState(e.lngLat);
      if (typeof marker.getLngLat() === "undefined") {
        marker.setLngLat(e.lngLat);
        marker.addTo(map);
      } else {
        marker.remove();
        marker.setLngLat(e.lngLat);
        marker.addTo(map);
      }
      map.setCenter(e.lngLat);
    });

    // grag end event listener
    marker.on("dragend", e => {
      let lat = marker.getLngLat().lat;
      let  lng = marker.getLngLat().lng;
      setState(Object.assign({}, state, { location: {  lng,lat} }));
    });
  };
  useEffect(mapInitialize, []);
  return (
    <div>
    <div id="map" style={mapStyle}>
    </div>
    </div>
  );
};
