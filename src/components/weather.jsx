import React, { useState } from 'react'
import axios from "axios"


const Weather = () => {
    const [data, setData] = useState("");
    const [cityName, setCityName] = useState()
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=88f2173231835c50c3984c96fb001ba1`;
    // let display = document.getElementById("display");
    let description = document.getElementById("description")
    let windSpeed = document.getElementById("windSpeed")
    let country = document.getElementById("country")
    let lon = document.getElementById("lon")
    let lat = document.getElementById("lat")
    let sect = document.getElementById("sect")
    let icon  = document.getElementById("icon")
    
    const FetchData =()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((response)=> response.json())
        // .then((data)=> setData(data))
        axios.get(endPoint).then((res) =>{
            setData(res.data)
            console.log(data)
        })
        if (data) {
            display.innerHTML = `Temprature: ${Math.round( data.main.temp - 273)}°C`;
            description.innerHTML = `<h1>${data.weather[0].description}</h1>`;
            windSpeed.innerHTML = `Wind Speed:  ${data.wind.speed} km/h`
            country.innerHTML = `Country: ${data.sys.country}`
            lon.innerHTML = `Longitude: ${data.coord.lon}`
            lat.innerHTML = `Longitude: ${data.coord.lat}`
            icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
            sect.style.display = "block"
        }else{
            alert("Enter the city name")
        }
    }
  return (
    <div>
        
        <input type="text" onChange={(e)=>{setCityName(e.target.value)}} style={{textAlign:"center"}} />
        <button onClick={FetchData}>Check Weather</button>
        <section id='sect' style={{display:"none"}}>
            <center style={{width:"40%", fontSize:"17px", padding:"25px", marginTop:"70px", justifyContent:"space-between", margin:"auto", boxShadow:"10px 5px 25px rgb(230, 241, 200)"}}>
                <div id='description'></div>
                <img src="" id='icon' alt="" />
                <div id='display'></div><br />
                <div id='windSpeed'></div><br />
                <div id='country'></div><br />
                <div id='lon'></div><br />
                <div id='lat'></div>
            </center>
        </section>
        {/* {
            data.map((items)=>(
               <>
                <div>
                <img src={items.avatar_url} alt="" style={{width:'20%'}} />
                <input type="text" onChange={(e)=>{setCityName(e.target.value)}}  />
                <p>{items.login}</p>
                </div>


               </>
            ))
        } */}
    </div>
  )
}

export default Weather