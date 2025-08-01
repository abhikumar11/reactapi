import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Api = () => {
     const [apidata, setApiData] = useState([]);
     const [userid, setUserId] = useState(null);
     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = () => {
          axios.get("http://localhost:3000/userdata").then((res) =>
               setApiData(res.data)
          );
     };

     const handleDelete = (id) => {
          axios.delete(`http://localhost:3000/userdata/${id}`)
               .then(() => {
                    alert("user deleted");
                    fetchData();
               })
               .catch(() => alert("something went wrong"));
     };
     const [frmData, setFrmData] = useState({});
     const [loadForm, setLoadForm] = useState(false);

     const handleInput = (e) => {
          const { name, value } = e.target;
          setFrmData({ ...frmData, [name]: value });
     };
     const handleEdit = (item) => {
          setFrmData(item);
          setLoadForm(true);
          setUserId(item.id);
     };
     const handleSubmit = (e) => {
          e.preventDefault();
          axios.put(`http://localhost:3000/userdata/${userid}`, frmData)
               .then(() => {
                    alert("user updated");
                    setLoadForm(false);
                    setUserId(null);
                    fetchData();
               })
               .catch((err) => alert("something went wrong", err));
     };
     return (
          <div>
               <h1>User Table</h1>
               <Link to="/">Home</Link>
               <table border="2px">
                    <tr>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Contact</th>
                         <th>City</th>
                         <th>Action</th>
                    </tr>
                    {apidata.map((item) => (
                         <tr>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>
                              <td>{item.city}</td>
                              <td>
                                   <div>
                                        <button
                                             style={{
                                                  backgroundColor: "yellow",
                                             }}
                                             onClick={() => {
                                                  handleEdit(item);
                                             }}
                                        >
                                             Edit
                                        </button>
                                        <button
                                             onClick={() =>
                                                  handleDelete(item.id)
                                             }
                                             style={{ backgroundColor: "red" }}
                                        >
                                             Delete
                                        </button>
                                   </div>
                              </td>
                         </tr>
                    ))}
               </table>

               <div style={{ marginTop:"15px",display: loadForm ? "block" : "none" }}>
                    <form onSubmit={handleSubmit}>
                         <label>Name</label>
                         <input
                              type="text"
                              name="name"
                              value={frmData.name}
                              onChange={handleInput}
                         />
                         <br />
                         <br />
                         <label>Contact</label>
                         <input
                              type="text"
                              name="contact"
                              value={frmData.contact}
                              onChange={handleInput}
                         />
                         <br />
                         <br />
                         <label>Email</label>
                         <input
                              type="email"
                              name="email"
                              value={frmData.email}
                              onChange={handleInput}
                         />
                         <br />
                         <br />
                         <label>City</label>
                         <input
                              type="text"
                              name="city"
                              value={frmData.city}
                              onChange={handleInput}
                         />
                         <br />
                         <br />
                         <input type="submit" value="Submit" />
                           <button
          type="button"
          onClick={() => setLoadForm(false)}
          style={{ marginLeft: "10px" }}
     >
          Cancel
     </button>
                    </form>
                    
               </div>
          </div>
     );
};

export default Api;
