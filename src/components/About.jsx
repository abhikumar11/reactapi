import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {name}=useParams();
  return (
    <div>
        <h1>This is about page-{name}</h1>
    </div>
  )
}

export default About