import axios from "axios"
import { useState } from "react"
import { endpoint } from "../.."
import toast, { Toaster } from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
export const ClassUpdate = () => {
    let { id } = useParams()
    let token = localStorage.getItem('token')
    let user = JSON.parse(localStorage.getItem('user'))
    const UserExist = user.filter(data => data._id === id)
    const { UserID, ClassName, ClassStatus } = UserExist[0]
   
    const [change, setchange] = useState({
        UserID: UserID.Email,
        ClassName: ClassName,
        ClassStatus: ClassStatus,
    })

    let navigate = useNavigate()
    const HandleLogin = async (e) => {
        e.preventDefault()
        let { data } = await axios.put(`${endpoint + '/class'}/${id}`, change, { headers: { token } })
        console.log(data)
        if (data.status === "Success") {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/Class')
            }, 3000);
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center  bg-info" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title " style={{ fontSize: "38px", fontWeight: "bold" }}>Update User</div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" className="form-control mt-4" placeholder="Enter Your ClassName" value={change.ClassName} onChange={(e) => setchange({ ClassName: e.target.value, ClassStatus: change.ClassStatus })} />
                            </div>
        
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <select className="form-control mt-4" placeholder="Enter Your ClassStatus" value={change.ClassStatus} onChange={(e) => setchange({ ClassStatus: e.target.value, ClassName: change.ClassName })}>
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