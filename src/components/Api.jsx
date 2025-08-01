import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const Api = () => {
     const [apidata, setApiData] = useState([]);

     useEffect(() => {
          axios.get("http://localhost:3000/userdata")
          .then((res) =>setApiData(res.data));
     }, [apidata]);
     
          const handleDelete=(id)=>{
               axios.delete(`http://localhost:3000/userdata/${id}`)
               .then(()=>alert("user deleted"))
               .catch(()=>alert("something went wrong"));
          }
     return (
          <div>
               <h1>API</h1>
               <Link to="/">Home</Link>
               <table border="2px">
                    <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Contact</th>
                         <th>City</th>
                         <th> 
                              Action
                         </th>
                    </tr>
                    {apidata.map((item) => (
                         <tr>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>
                              <td>{item.city}</td>
                              <td><div>
                                   <button style={{backgroundColor:"yellow"}}>Edit</button>
                                   <button onClick={()=>handleDelete(item.id)} style={{backgroundColor:"red"}}>Delete</button>
                              </div></td>
                         </tr>
                    ))}
               </table>
          </div>
     );
};

export default Api;
