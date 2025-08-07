import React from 'react'
import { useParams } from 'react-router-dom'

const Services = () => {
  const {service}=useParams();
  return (
    <div>
      <h1>This is a service page</h1>
      <h2>We provide-{service}</h2>
    </div>
  )
}

export default Services