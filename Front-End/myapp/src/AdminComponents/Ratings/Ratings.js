<<<<<<< HEAD
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
=======
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './../Ratings/Ratings.css'
import DataTable from 'react-data-table-component'

export default function Ratings() {
    const [restaurent, setRestaurent] = useState([]);
    


    const getRestaurent = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setRestaurent(response.data);
        } catch (error) {
            console.log(error)
        }
    };
    const columns = [
        
        {
            name :<h4>#</h4>,
             selector:(row) =><p className='text-table'>{1234567891011}</p>,
             width:"150px"
        },
        {
            name :<h4 className='tit-tab'>Hotel Name</h4>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"350px"
        },
        {
            name :<h4>Hotel Type</h4>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"200px"
        },
        {
            name :<h4>Owner Name</h4>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"200px"
        },
        {
            name :<h4>Email</h4>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"250px"
        },
        {
            name :<h4>Phone</h4>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"200px"
        },
        {
            name :<h4>Location</h4>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"400px"
        },
    ]

    useEffect(() => {
        getRestaurent();
    }, []);

// useEffect(() =>{
// const result = countries.filter(country =>{
//     return country.name.toLowerCase().match(search.toLocaleLowerCase());
// });
// setfilterCountries(result);
// },[search])

    return (
        <div>
            <input className='search-text mb-3 w-25 form-control' type="text" placeholder='Search Here' >
            </input>
            <DataTable
            striped
             columns={columns} 
             data={restaurent} 
             pagination
             highlightOnHover
             ></DataTable>
>>>>>>> a76c19d6d2c0d384da67c1d2ceadea671810b5c7
        </div>
    )
}
