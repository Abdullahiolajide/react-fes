import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <div>
        <button onClick={props.handle}>{props.name}</button>
    </div>
  )
}

export default Button