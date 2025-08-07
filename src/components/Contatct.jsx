import React from 'react'
import { useParams } from 'react-router-dom'

const Contatct = () => {
    const {city}=useParams();
  return (
    <div>
        <h1>This is a contact page</h1>
        <h2>City-{city}</h2>
    </div>
  )
}

export default Contatct