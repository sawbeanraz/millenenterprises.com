import React from 'react'
import GoogleMapReact from 'google-map-react'


const MapMarker = ({ text }) => <div>{text}</div>;

class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 27.687009,
      lng: 85.319910
    },
    zoom: 17
  };

  render() {
    return (      
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAsJnb60DB93Wlbl0AlFtpYWYckB3qDgBE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>          

          <MapMarker
            lat={27.687009}
            lng={85.319910}
            text={'Millen Enterprises'} />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;