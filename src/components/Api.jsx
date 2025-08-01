import axios from "axios";
import { useEffect,useState } from "react";
const Api = () => {
     const [apidata, setApiData] = useState([]);

     useEffect(() => {
          axios.get("http://localhost:3000/userdata")
          .then((res) =>setApiData(res.data));
     }, []);

     return (
          <div>
               <h1>API</h1>
               <table border="2px">
                    <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Contact</th>
                         <th>City</th>
                    </tr>
                    {apidata.map((item) => (
                         <tr>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>
                              <td>{item.city}</td>
                         </tr>
                    ))}
               </table>
          </div>
     );
};

export default Api;
