import { useEffect, useState } from "react"
import { endpoint } from "../.."
import axios from 'axios'
import moment from 'moment'
import '../../index.css'
import { Link } from "react-router-dom"
export const Class = () => {
    let token = localStorage.getItem('token')
    let [ApiData, setApiData] = useState([])
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint + '/class', { headers: { token } })
            setApiData(data)
        }
        load()
    }, [token])
    localStorage.setItem('user', JSON.stringify(ApiData))
    return (
        <div className="container" style={{ marginTop: "100px", padding: "0 4%" }}>
                                    |<Link to={`/ClassCreate`} className="btn btn-info mx-2">Create +</Link>

            <table className="table tabl-boreder" >
                <thead  >
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>ClassName</th>
                        <th>ClassStatus</th>
                        <th>ClassDate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ApiData && ApiData.map((data, index) => (
                        <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.UserID.UserName}</td>
                            <td>{data.ClassName}</td>
                            <td>{data.ClassStatus}</td>
                            <td>{moment(data.ClassDate).format("LL")}</td>
                            <td>{
                                <div>
                                    <Link to={`/ClassUpdate/${data._id}`} className="btn btn-primary mx-2">Edit</Link>|
                                    <Link to={`/ClassDelete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
                                </div>
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}