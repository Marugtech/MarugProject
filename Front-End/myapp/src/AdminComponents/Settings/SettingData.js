<<<<<<< HEAD
import React,{useEffect, useState} from 'react';
//import Button from 'react-bootstrap/esm/Button'

export default function SettingData (){
     const Api=`https://jsonplaceholder.typicode.com/comments`
     //const Key= `key=AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8`
//const FinalApi = `${Api},${Key}`
    const [data, setdata] = useState([])
    
useEffect(()=>{
  fetch(Api)
  .then(response => response.json()).then(json =>{
    console.log("json", json)
    setdata(json)
  }).catch(e =>{
    console.log("e",e)
  })
})
    return(
      <div>
        <div className='container'>
          {
            (data) ?
            (
              <ul>
              {
               data.map(post =>{
                return <li>{post.email}</li>
               }) 
              }
            </ul>
            ): (<h3>Loading...</h3>)
          }
        </div>
      </div>
        
    )
}
=======
import React from 'react'
import axios from 'axios'

 const ApiEnd = `https://www.googleapis.com/geolocation/v1/geolocate?`;
 const API_KEY = `AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8`

export default function SettingData() {  

 
     const [lat, setlatitude] = React.useState('');
     const [long, setlongitude] = React.useState('');

    React.useEffect(()=>{
          navigator.geolocation.getCurrentPosition((position) =>{
            setlatitude(position.coords.latitude);
            setlongitude(position.coords.longitude)
          })
        let final_API=(`${ApiEnd}lat=${lat}&lon=${long}&key=${API_KEY}`);
         axios.post(final_API)
         .then((response)=>{
           console.log(response.data)
         })
    }, [])
  return (
    <div>
   setting Data 
  </div>

  )
}
>>>>>>> a76c19d6d2c0d384da67c1d2ceadea671810b5c7
