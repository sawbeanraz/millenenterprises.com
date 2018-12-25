import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom }) => (
  <div style={{ height: '400px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAsJnb60DB93Wlbl0AlFtpYWYckB3qDgBE' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <MapMarker
        lat={center.lat}
        lng={center.lng}
        text="Millen Enterprises"
      />
    </GoogleMapReact>
  </div>
);


MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
};

Map.defaultProps = {
  center: {
    lat: 27.687009,
    lng: 85.319910,
  },
  zoom: 17,
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

export default Map;
