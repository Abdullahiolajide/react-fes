import React, { useState } from 'react'
import axios from "axios"

const Fetch = () => {
    const [data, setData] = useState([])
    let endPoint = "https://api.github.com/users"
    const FetchData =()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((response)=> response.json())
        // .then((data)=> setData(data))
        axios.get(endPoint).then((res) =>{
            setData(res.data)
            console.log(data)
        })
    }
  return (
    <div>
        <button onClick={FetchData}>Fetch Data</button>
        {
            data.map((items)=>(
               <>
                <div>
                <img src={items.avatar_url} alt="" style={{width:'20%'}} />
                <p>{items.login}</p>
                </div>


               </>
            ))
        }
    </div>
  )
}

export default Fetch