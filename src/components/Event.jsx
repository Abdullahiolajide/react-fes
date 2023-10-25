import React, { useState } from 'react'

const EventS = () => {
    const [name, setName] = useState("Damilola")

    const handleChange =()=>{
        setName(name)
    };



    const [number, setNumber] = useState(0)
    const increase =()=>{
       setNumber(number + 1)
    }
    const decrease =()=>{
       if (number == 0) {
        setNumber(0)
       }else{
        setNumber(number - 1)
       }
     }
     const reset =()=>{
        setNumber(0)
     }
    
  return (
    <div>
        <p>{name}</p>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleChange}>Change Name</button>

        <div>{number}</div>
        <button onClick={increase}>Add</button>
        <button onClick={decrease}>Substract</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default EventS