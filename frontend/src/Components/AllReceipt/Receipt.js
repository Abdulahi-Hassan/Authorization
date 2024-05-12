import axios from "axios"
import { useEffect, useState } from "react"
import { endpoint } from "../.."
import { Link } from "react-router-dom"

export const Receipt = () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50Ijp7Il9pZCI6IjY2M2JkYTA1Zjg4Nzc3MmNiZjIxMjc2NSIsIk5hbWUiOiJhbGlAZ21haWwuY29tIiwiVXNlcklEIjoiNjYzYmQ5YjBmODg3NzcyY2JmMjEyNzVkIiwiUGhvbmUiOjYxMzg0MzIzLCJHZW5kZXIiOiJNYWxlIiwiQWRkcmVzcyI6IlNvbWFsaWEiLCJCYWxhbmNlIjo5MCwiQW1vdW50UGFpZCI6MTAsIlRvdGFsQW1vdW50IjoxMDAsIlN0YXR1cyI6IlBlcmNpYWxQYWlkIiwiY3JlYXRlZEF0IjoiMjAyNC0wNS0wOFQyMDowMTowOS44NDJaIiwidXBkYXRlZEF0IjoiMjAyNC0wNS0wOFQyMDowMzo1Ny4zODNaIiwiX192IjowfSwidXNlciI6eyJfaWQiOiI2NjNiZDliMGY4ODc3NzJjYmYyMTI3NWQiLCJVc2VyTmFtZSI6IkFsaSIsIkVtYWlsIjoiQWxpQGdtYWlsLmNvbSIsIlBhc3N3b3JkIjoiJDJiJDEwJHd0TVJOV1dkSVlab3lOU09Kd2x1cS5YZjRDOGxidzg3MnhXQmZkclJ0S3RmdmxGYlJCVTI2IiwiUm9sZSI6InRydWUiLCJQcm9maWxlIjoiaHR0cHM6Ly93d3cubXVycmF5Z2xhc3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzEwL2F2YXRhci1zY2FsZWQuanBlZyIsIlN0YXR1cyI6IkFjdGl2ZSIsIl9fdiI6MH0sImlhdCI6MTcxNTIwMjgxNX0.DxZmybYVdFPMVmKD_IAli2r5q2_Q26RSruRv5hQoDZg'
    let [ApiData, setApiData] = useState([])
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint + '/receipt', { headers: { token } })
            setApiData(data)
        }
        load()
    }, [token])
    return (
        <div className="container" style={{ marginTop: "100px", padding: "0 4%" }}>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>ClassName</th>
                        <th>StudentName</th>
                        <th>ReceiptAmount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ApiData && ApiData.map((data, index) => (
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.UserID.UserName}</td>
                            <td>{data.ClassID.ClassName}</td>
                            <td>{data.StudentID.Name}</td>
                            <td>{data.ReceiptAmount}</td>
                            <td>{data.Status}</td>
                            <td>{
                                <div>
                                 <Link to={`/ReceiptUpdate/${data._id}`} className="btn btn-primary mx-2">Edit</Link>|
                                  <Link to={`/ReceiptDelete/${data._id}`} className="btn btn-danger mx-2">Delete</Link>
                                </div>
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}