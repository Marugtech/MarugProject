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
        </div>
    )
}
