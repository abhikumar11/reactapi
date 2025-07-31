import axios from "axios"
import { useEffect } from "react"
const Api = () => {
        useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/photos")
          .then((res)=>console.log(res.data))
        }, [])
        
  return (
    <div>
        <h1>API</h1>
    </div>
  )
}

export default Api