//import axios from 'axios';
//import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const Api_End = `https://maps.googleapis.com/maps/api/geocode/json?`
const key = `AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8`

export default function Ratings() {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('')
   // const [address,setaddress] = React.useState({});
    React.useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)
        })

    }, [setLatitude,setLongitude])
    // axios.get(`${Api_End}latlng=${latitude},${longitude}&key=${key}`)
    //     .then((res) => {
    //         console.log(res.data);
    //    setaddress(res.data)
    //     })

        const handleclick=async()=>{
       
          let result = await fetch(`${Api_End}latlng=${latitude},${longitude}&key=${key}`,{
          method: 'get',
        });
        result = await result.json();  
        console.log(result);
     //  setaddress(result);
        }
       // const [address,setaddress] = React.useState();
    return (
        <div>
            <h4>Location</h4>
            <p>sf</p>
            <Button onClick={handleclick}>GetLocation</Button>
            <p>{latitude}</p>
            <p>{longitude}</p>
               {/* <h4>{address.result[0].formatted_address}</h4>   */}
        </div>
    )
}
