import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import Marker from '../components/Marker';

const Map = ({ center, zoom }) => (
  <div style={{ height: '400px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAsJnb60DB93Wlbl0AlFtpYWYckB3qDgBE' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Marker lat={center.lat} lng={center.lng} text="Millen Enterprises" />
    </GoogleMapReact>
  </div>
);

Map.defaultProps = {
  center: {
    lat: 27.687009,
    lng: 85.31991,
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
