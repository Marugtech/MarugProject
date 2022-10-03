// import React from 'react'
// import ReactDOM from 'react-dom/client';

// class CustomerData extends React.Component() {

//     constructor (props){
//         super(props);
//         this.state={
//             latitude:null,
//             longitude:null,
//         };

//         this.getlocation = this.getlocation.bind(this);
//     }
//     getlocation(){
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.getCoordinates);
//           } else {
//             alert  ("Geolocation is not supported by this browser.");
//           }
//     }
//     getCoordinates(position){
//         console.log(position)
//     }
//     render() {
//         return (
//             <div className='app'>
//                 <h2>Location</h2>
//                 <button onClick={this.getlocation}>get Location</button>
//                 <p>Latitude:{this.state.latitude}</p>
//                 <p>longitude:{this.state.longitude}</p>
//                 {/* <p>Address:{this.state.userAddress}</p> */}
//             </div>
//         )
    
//     }
// }
// ReactDOM.render(<CustomerData />, document.getElementById('root'));

// import React from "react";

// class CustomerData extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       datatemp: {},
//       loading: true
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data => {
//         this.fetchedData(data);
//       });
//   }

//   fetchedData = data => {
//     this.setState({
//       datatemp: data,
//       loading: false
//     });
//     for (let i = 0; i < this.state.datatemp.length; i++) {
//       console.log(this.state.datatemp[i].body);
//     }
//   };
//   render() {
//     return <p>Good Luck</p>;
//   }
// }
// export default CustomerData;


import React, { useEffect, useState } from 'react'

export default function CustomerData() {

function loadCustomerData(){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=12.8909312,80.2390016&key=AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8")
    .then((response)=> response.json())
    .then((data)=>setAddress(data.plus_code));
}

const [address, setAddress] = useState([]);

useEffect(()=>{loadCustomerData()});
  return (
    <div>{address}</div>
  )
}
