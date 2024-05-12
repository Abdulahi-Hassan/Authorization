import axios from "axios"
import { useEffect, useState } from "react"
import { endpoint } from "../.."
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
export const ClassCreate = () => {
    let token = localStorage.getItem('token')
    let navigate = useNavigate()

    let [ApiData, setApiData] = useState([])
    useEffect(() => {
        async function load() {
            let { data } = await axios.get(endpoint + '/user', { headers: { token } })
            
            setApiData(data)
        }
        load()
    }, [token])
    const [change, setchange] = useState({
        ClassName: '',
        UserID: '',
        ClassStatus: '',
    })
    const HandleLogin = async (e) => {
        e.preventDefault()
        let { data } = await axios.post(endpoint + '/class', change)
        console.log(data)
        if (data.status === "Success") {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/Class')
            }, 3000);
        }else{
            toast.error(data)
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center  bg-info" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title " style={{ fontSize: "38px", fontWeight: "bold" }}>Create User</div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>

                                <select className="form-control " placeholder="Enter Your E-mail" value={change.UserID} onChange={(e) => setchange({ UserID: e.target.value, ClassName: change.ClassName, ClassStatus: change.ClassStatus })}>
                                    <option value=''>Choose Email</option>

                                    {ApiData.map((data, index) => (
                                        <option key={index} value={data._id}>{data.Email}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" className="form-control mt-4" placeholder="Enter Your ClassName" value={change.ClassName} onChange={(e) => setchange({ ClassName: e.target.value, UserID: change.UserID, ClassStatus: change.ClassStatus })} />
                            </div>

                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <select className="form-control mt-4" placeholder="Enter Your ClassStatus" value={change.ClassStatus} onChange={(e) => setchange({ ClassStatus: e.target.value, ClassName: change.ClassName, UserID: change.UserID })}>
                                    <option value=''>Choose ClassStatus</option>
                                    <option value='Active'>Active</option>
                                    <option value='Pending'>Pending</option>
                                    <option value='Blocked'>Blocked</option>
                                </select>
                            </div>
                            <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                                <button type="text" className="form-control btn btn-primary mt-4"  >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    )
}