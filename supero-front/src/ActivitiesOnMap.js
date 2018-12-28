import React, { Fragment } from "react";
import Header from "./Header";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];
const ActivitiesOnMap = () => {
  return (
    <Fragment>
      <Header activitiesView={true} title="Flux" />
      <Map
        style={{ height: "100vh", marginTop: "71px" }}
        center={position}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </Fragment>
  );
};

export default ActivitiesOnMap;
