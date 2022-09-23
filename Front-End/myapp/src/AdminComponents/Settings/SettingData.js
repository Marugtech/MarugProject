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
