import L from "leaflet";

const iconActivityMap = new L.Icon({
  iconUrl: require("./img/bolt-solid.svg"),
  iconRetinaUrl: require("./img/bolt-solid.svg"),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 40),
  className: "iconOnGeoloc"
});

export { iconActivityMap };
