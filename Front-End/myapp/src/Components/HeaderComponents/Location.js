import React,{useState} from 'react';
import Button from 'react-bootstrap/esm/Button'

export default function Location (){
    const Api=`https://www.googleapis.com/geolocation/v1/geolocate?`
    const Key= `key=AIzaSyDr0lH_z8QG6gWJy0AI9kw1eqfICD23VC8`
    const Finalapi=(`${Api}&${Key}`)
    const [lat,setLat]=useState("");
    const [lon,setLon]=useState("");
    const handleclick=async()=>{
       
        let result = await fetch(Finalapi,{
      method: 'post',
    });
    result = await result.json();
    setLat(result.accuracy);
    setLon(result.accuracy);
    

    console.log(result);
    }
    return(
        <>
        <p>{lat.accuracy}</p>
        <p>{lon.accuracy}</p>
        {/* <p value={lat} onChange={(e)=>setLat(e.target.value)}></p>
        <p value={lon} onChange={(e)=>setLon(e.target.value)}></p> */}
        <Button onClick={handleclick}>Location</Button>
        </>
    )
}