import React, { useState } from 'react'
import './style.css'


const Signup = () => {

    const [firstName1, setFirstName] = useState();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [list, setList] = useState([])
    let id = 0;
   

    const handleSubmit=(e)=>{
      id++;
      e.preventDefault()
      const data = {firstName1, email, password}

      if (firstName1&&email&&password) {
        
        setList((ls)=>[...ls, data])
        setEmail("")
        setFirstName("")
        setPassword("")
      }
      console.log(firstName1, email, password)
      console.log(list)
    }
  return (
    <div>
        <center>
        <form action="" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
            <input type="text" name='firstName1' value={firstName1} onChange={(e)=>setFirstName(e.target.value)} placeholder='Fullname'/> <br /><br />
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/> <br /><br />
            <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <br /><br />
            <button>Sign up</button>            
        </form>
        <table border={1} >
        <tr style={{color:"white", background:"rgb(16, 231, 16)"}}>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        {
          
          
          list.map((a)=> <tbody key={id}>
            {/* <li>{a.firstName1}</li>
            <li>{a.email}</li>
            <li>{a.password}</li> */}
            <tr style={{backgroundColor:"rgb(195, 248, 195)"}}>
              <td>{a.firstName1}</td>
              <td>{a.email}</td>
              <td>{a.password}</td>
            </tr>
          </tbody> )
        }
        </table>
        </center>
    </div>
  )
}

export default Signup