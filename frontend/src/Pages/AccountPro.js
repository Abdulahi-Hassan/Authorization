import axios from "axios"
import { useRef, useState } from "react"
import { endpoint, token } from "../index"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate, useParams } from "react-router-dom"
export const UpdateUserProfile = () => {
    let navigate = useNavigate()
    let { id } = useParams()
    let user = JSON.parse(localStorage.getItem('user'))
    let iamgeref = useRef()

    const [User, setUser] = useState({
        Name: user.Name,
        Profile:  user.Profile
    })

    const HandleLogin = async (e) => {
        e.preventDefault()
        let Formdata = new FormData()
        Formdata.append("Name", User.Name)
        Formdata.append("Profile", User.Profile)
        let { data } = await axios.put(`${endpoint+'Profile'}/${id}`, Formdata, { headers: { token } })
        if (data.status === "Success") {
            toast.success(data.message)
            console.log([data.EditPro,...Formdata])
            setTimeout(() => {
                navigate('/login')
            },3000);
            
        } else {
            toast.error(data)
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center  bg-info" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title   " style={{ fontSize: "38px", fontWeight: "600" }}>
                    <strong className="ms-5">Update  Profile </strong>
                    <Link to='/UserDashboard' className=" btn btn-danger mt-2 mx-2" style={{ float: 'right' }} >X</Link>
                </div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" className="form-control " placeholder="Enter Your Name" value={User.Name} onChange={(e) => setUser({ Name: e.target.value, Profile: User.Profile })} />
                            </div>

                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="file" className="form-control mt-4" ref={iamgeref} onChange={(e) => setUser({ Profile: e.target.files[0], Name: User.Name })} />
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