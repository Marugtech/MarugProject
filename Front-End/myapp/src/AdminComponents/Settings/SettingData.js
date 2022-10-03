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