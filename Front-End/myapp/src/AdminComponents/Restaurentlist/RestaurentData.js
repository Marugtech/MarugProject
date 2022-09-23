import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import './../Restaurentlist/Restaurentlist.css'
import { MdModeEdit,MdDeleteOutline } from "react-icons/md";
export default function RestaurentData() {
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
            name :<h5>#</h5>,
             selector:(row) =><p className='text-table'>{1234567891011}</p>,
             width:"150px"
        },
        {
            name :<h5 className='tit-tab'>Hotel Name</h5>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"350px"
        },
        {
            name :<h5>Hotel Type</h5>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"200px"
        },
        {
            name :<h5>Owner Name</h5>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"200px"
        },
        {
            name :<h5>Email</h5>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"250px"
        },
        {
            name :<h5>Phone</h5>,
            selector:(row) => <p className='text-table'>{row.email}</p>,
            width:"200px"
        },
        {
            name :<h5>Location</h5>,
            selector:(row) => <p className='text-table'>{row.body}</p>,
            width:"400px"
        },
        {
            name :<h5>Action</h5>,
            selector:(row) =><div>
                <button className='btnedit'><MdModeEdit></MdModeEdit></button>
                &nbsp;&nbsp;
                <button className='btndelete pl-4'><MdDeleteOutline></MdDeleteOutline></button>
            </div>,
            width:"200px"
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
            <input className='search-text mb-3  form-control' type="text" placeholder='Search Here' >
            </input>
            <DataTable
            striped
             columns={columns} 
             data={restaurent} 
             pagination
             highlightOnHover
             ></DataTable>
             <h6 className='pt-4'>2022 @ Wahh all rights Reserved</h6>
        </div>
    )
}
