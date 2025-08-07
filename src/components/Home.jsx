import React, { useRef } from 'react'
import { toast} from 'react-toastify';
const Home = () => {
    const myref=useRef();

    const handleClick=()=>{
        myref.current.value="";
        myref.current.focus();
    }
    const handleHeading=()=>{
        myref.current.style.color="skyblue"
    }
  return (
    <div>
        <h1 ref={myref}>This is home page</h1>
        <button onClick={()=>handleHeading}>Change</button>
        <br />
        <button onClick={()=>toast.success("")}>Click Me</button>
        <br /><br />
        <input type="text" ref={myref}/>
        <button onClick={handleClick}>Reset</button>
    </div>
  )
}

export default Home