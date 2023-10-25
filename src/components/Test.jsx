import React from 'react'
import axios from 'axios'


const Test = () => {
    let url ="http://localhost:3000/user/signup"
    const clickMe =()=>{
        axios.post(url, {firstname:"wale", lastName:"wale", email:"wale@gmail.com"})
    }
  return (
    <div>
        <button onClick={clickMe}>Click me</button>
    </div>
  )
}

export default Test