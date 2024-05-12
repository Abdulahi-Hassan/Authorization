import axios from "axios"
import { endpoint, token } from "../.."
import { useEffect, useState } from "react"
import { Link} from "react-router-dom"
import moment from 'moment'
export const User = () => {
    let [ApiData, setApiData] = useState([])
    const { GetAlluser } = ApiData
    localStorage.setItem('user',JSON.stringify(GetAlluser))
    
    useEffect(() => {
        const GetUser = async () => {
            try {
                let { data } = await axios.get(endpoint + 'user/Alluser', { headers: { token } })
                setApiData(data)
            } catch (error) {
                console.log(error.message)
    
            }
        }
        GetUser()
    }, [])
    return (
        <div className="container" style={{ marginTop: "10px", padding: "0 4%" }}>
         |<Link to={`/UserCreate`} className="btn btn-info mx-2">Create +</Link>
            <table className="table  text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {GetAlluser && GetAlluser.map((data, index) => (
                            <tr key={index}>
                                <td>{data._id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>{data.Role}</td>
                                <td>{data.Status}</td>
                                <td>{moment(data.Date).format("LL")}</td>

                                <td>{
                                    <div>
                                        <Link to={`/UserUpdate/${data._id}`} className="btn btn-primary mx-2">Edit</Link>|
                                        <Link to={`/UserDelete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
                                    </div>
                                }</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}