import axios from "axios"
import { useEffect, useState } from "react"
const Api = () => {
    const [apidata,setApiData]=useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>setApiData(res.data));
    }, [])

    return (
        <div>
            <h1>API</h1>
            <table border="2px">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Url</th>
                </tr>
                {
                    apidata.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Api