// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import axios from 'axios';

// const Api = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8"
// class Orgindestination extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       latlngs: {}
//     }
//     this.state = {
//       currentLocation: { lat: 40.756795, lng: -73.954298 },
//     };
    
//   }
//   componentDidMount() {
//     axios.post(Api)
//       .then(res => {
//         console.log(res.data);
//          const latlngs = res.data;
//          this.state({ latlngs });
//       })
//   }
//   render() {
//     const apiIsLoaded = (map, maps) => {
//       const google = window.google;
//       const directionsService = new google.maps.DirectionsService();
//       const directionsRenderer = new google.maps.DirectionsRenderer();
//       directionsRenderer.setMap(map);
//       const origin = { lat: 13.0417554, lng: 80.23763149999999 };
//       const destination = { lat: 12.9239426, lng: 80.1000117 };
//       directionsService.route(
//         {
//           origin: origin,
//           destination: destination,
//           travelMode: google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             directionsRenderer.setDirections(result);
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     };

//     return (
//       <div>
//         <div style={{ height: '400px', width: '100%' }}>
//           <GoogleMapReact
//             bootstrapURLKeys={{
//               key: 'AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8',
//             }}
//             defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//             defaultZoom={10}
//             center={this.state.currentLocation}
//             yesIWantToUseGoogleMapApiInternals
//             onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default Orgindestination;


import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useEffect,useState } from 'react';

export default function Orgindestination() {
  let [latlng, setLatlng] = useState({});
  //const Curentlocation = { lat: 40.756795, lng: -73.954298 }
  const Curentlocation = { lat: latlng.lat, lng: latlng.lng }
  const Api = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8"
  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(Api, {
        method: 'POST',
      });
      result = await result.json();
      console.log(result);
    setLatlng(result.location);
    };
    fetchData();
}, []);
  const apiIsLoaded = (map, maps) => {
    const google = window.google;
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    const origin = { lat: latlng.lat, lng: latlng.lng };
    const destination = { lat: 12.9239426, lng: 80.1000117 };
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };
  return (
    
      <div>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8',
            }}
            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            defaultZoom={10}
            center={Curentlocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    
  )
}
