import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const [frmData,setFrmData]=useState({});
    
    const navigate=useNavigate();
    const handleInput=(e)=>{
        const {name,value}=e.target;
            setFrmData({...frmData,[name]:value})
    }
     const handleSubmit=(e)=>{
      e.preventDefault();
         axios.post("http://localhost:3000/userdata",frmData)
         .then(()=>alert("data inserted"))
         .catch((err)=>alert("something went wrong",err))
         navigate("/apidata")
    }
  return (
    <div>
        <h1>User Form</h1>
        <Link to="/apidata">User Table</Link>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInput}/><br/><br/>
             <label>Contact</label>
            <input type="text" name="contact" onChange={handleInput}/><br/><br/>
             <label>Email</label>
            <input type="email" name="email" onChange={handleInput}/><br/><br/>
             <label>City</label>
            <input type="text" name="city" onChange={handleInput}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Form