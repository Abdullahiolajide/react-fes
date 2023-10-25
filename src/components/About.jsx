import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
     const {id} = useParams()
     console.log(id)
  return (
    <div>More About {id}</div>
  )
}

export default About