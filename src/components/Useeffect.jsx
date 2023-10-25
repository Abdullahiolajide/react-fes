import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Useeffect = () => {
    const URL ="https://api.github.com/users"
    const [data, setData] = useState([])
    const getData =()=>{
        axios.get(URL).then((response) =>{
            console.log(response.data)
            setData(response.data)

        })
    }
    useEffect(()=>{
        console.log("Use effect")
        
    })
  return(
    <div onClick={getData}>Useeffect</div>
  )
}

export default Useeffect