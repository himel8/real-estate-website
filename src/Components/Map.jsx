import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

const Google = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRX0D21tjCpNmpABQp8bnfNyA99pscQrM",
  });
  if (!isLoaded) return <div>Loading ....</div>;
  return <Map />;
};

export default Google;

const Map = () => {
  <GoogleMap
    zoom={10}
    center={{ lat: 44, lng: -88 }}
    mapContainerClassName="map-container"
  >
    <Marker />
  </GoogleMap>;
};
