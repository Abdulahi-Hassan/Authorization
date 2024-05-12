import axios from "axios"
import { useRef, useState } from "react"
import { endpoint, token } from "../.."
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate, useParams } from "react-router-dom"
export const UserUpdate = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    let UserData = JSON.parse(localStorage.getItem('user'))
    let UserExist = UserData.filter(data => data._id === id)[0]
    const { Role, Name, Profile, Status } = UserExist


    let ProfileImageRef = useRef()

    const [User, setUser] = useState({
        Role: Role,
        Name: Name,
        Profile: Profile,
        Status: Status
    })
    const HandleLogin = async (e) => {
        e.preventDefault()
        const Formdata=new FormData()
        Formdata.append("Name",User.Name)
        Formdata.append("Email",User.Email)
        Formdata.append("Profile",User.Profile)
        Formdata.append("Role",User.Role)
        Formdata.append("Password",User.Password)
        Formdata.append("Status",User.Status)
        let { data } = await axios.put(`${endpoint + 'user/Alluser'}/${id}`, Formdata, { headers: { token } })
        if (data.status === "Success") {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/User')
            }, 3000);
        } else {
            toast.error(data.message)
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center  bg-info" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "400px" }}>
                <div className="card-title   " style={{ fontSize: "38px", fontWeight: "600" }}>
                    <strong className="ms-5">Update User</strong>
                    <Link to='/User' className=" btn btn-danger mt-2 mx-2" style={{ float: 'right' }} >X</Link>
                </div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" className="form-control " placeholder="Enter Your Name" value={User.Name} onChange={(e) => setUser({ Name: e.target.value, Role: User.Role, Status: User.Status, Profile: User.Profile })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <select className="form-control mt-4" value={User.Role} onChange={(e) => setUser({ Role: e.target.value, Name: User.Name, Status: User.Status, Profile: User.Profile })}>
                                    <option value="">Choose Role</option>
                                    <option value="true">Admin</option>
                                    <option value="false">User</option>
                                </select>
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="file" className="form-control mt-4" placeholder="Enter Your Profile" ref={ProfileImageRef} onChange={(e) => setUser({ Profile: e.target.files[0], Role: User.Role, Status: User.Status, Name: User.Name })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <select className="form-control mt-4" value={User.Status} onChange={(e) => setUser({ Status: e.target.value, Role: User.Role, Name: User.Name, Profile: User.Profile })}>
                                    <option value="">Choose Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Blocked">Blocked</option>
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