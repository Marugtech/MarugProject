const findMyState = ()=>{
    const status = document.querySelector('.status');

    const success = (position)=>{
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const googleAPiurl = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en"
        
         fetch(googleAPiurl)
         .then(res => res.json())
         .then(data =>{
            status.textContent = data.principalSubdivision
         })
    
    }
    const error = ()=>{
        status.textContent = "unable to load";
    }
    navigator.geolocation.getCurrentPosition(success, error)
}

document.querySelector(".find-state").addEventListener('click', findMyState)
