import { useRef, useState } from "react"
import { endpoint } from "./index"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [login, setlogin] = useState({
        Email: '',
        Password: ''
    })
    let EmailRef = useRef()
    let PassRef = useRef()

    let navigate = useNavigate()
    const HandleLogin = async (e) => {
        
        try {
            e.preventDefault()
            if(PassRef.current.value===""){
                PassRef.current.focus()
            }
            if(EmailRef.current.value===""){
                EmailRef.current.focus()
            }
            
            let { data } = await axios.post(endpoint + 'login', login)
           

            if (data.status === "Success") {
               
                localStorage.setItem('user', JSON.stringify(data.UserExist))
                localStorage.setItem('token', data.token)
                toast.success(data.message)
                if (data.Role === "true") {
                    setTimeout(() => {
                        navigate('/AdminDashboard')
                    }, 3000);
                } else {
                    setTimeout(() => {
                        navigate('/UserDashboard')
                    }, 3000);
                }


            } else {
                toast.error(data)
            }
        } catch (error) {
            console.log(error.message)

        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center  bg-dark login" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title " style={{ fontSize: "38px", fontWeight: "bold" }}>Login</div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input ref={EmailRef} type="text" className="form-control" placeholder="Enter Your E-mail" value={login.Email} onChange={(e) => setlogin({ Email: e.target.value, Password: login.Password })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input ref={PassRef} type="text" className="form-control mt-4" placeholder="Enter Your Password" value={login.Password} onChange={(e) => setlogin({ Password: e.target.value, Email: login.Email })} />
                            </div>
                            <div className="col-1" style={{ width: "30%", margin: "0 auto" }}>
                                <button type="text" className="form-control btn btn-primary mt-4"  >Submit</button>
                            </div>
                            <Link to='/Change' className="mt-3 " style={{ textDecoration: "none" }}>ForgetPassword</Link>
                            <Link to='/signup' className="mt-2" style={{ textDecoration: "none" }}>Sign-Up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Login


export const Change = () => {
    const [change, setchange] = useState({
        Email: '',
        Password: '',
        Confirm: '',
    })
    let EmailRef=useRef()
    let PassRef=useRef()
    let ConfirmRef=useRef()


    
    
    let navigate = useNavigate()
    const HandleLogin = async (e) => {
        e.preventDefault()
        if(ConfirmRef.current.value===""){
            ConfirmRef.current.focus()
        }
        if(PassRef.current.value===""){
            PassRef.current.focus()
        }
        if(EmailRef.current.value===""){
            EmailRef.current.focus()
        }
        let { data } = await axios.post(endpoint + 'change', change)
        console.log(data)
        if (data.status === "Success") {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        } else {
            toast.error(data)
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center   login" style={{ height: "600px" }}>
            <div className="card mar" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title " style={{ fontSize: "38px", fontWeight: "bold" }}>Chnage
                    <Link to='/login' className=" btn btn-danger mt-2 mx-2" style={{ float: 'right' }} >X</Link>
                </div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={EmailRef} className="form-control" placeholder="Enter Your E-mail" value={change.Email} onChange={(e) => setchange({ Email: e.target.value, Password: change.Password, Confirm: change.Confirm })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={PassRef} className="form-control mt-4" placeholder="Enter Your Password" value={change.Password} onChange={(e) => setchange({ Password: e.target.value, Email: change.Email, Confirm: change.Confirm })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={ConfirmRef} className="form-control mt-4" placeholder="Enter Your Confirm" value={change.Confirm} onChange={(e) => setchange({ Confirm: e.target.value, Email: change.Email, Password: change.Password })} />
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













export const SingUp = () => {
    let navigate = useNavigate()
    const [User, setUser] = useState({
        Name: '',
        Email: '',
        Password: '',
    })

    let EmailRef=useRef()
    let PassRef=useRef()
    let NameRef=useRef()
    const HandleLogin = async (e) => {
        e.preventDefault()
        
        if(PassRef.current.value===""){
            PassRef.current.focus()
        }
        if(EmailRef.current.value===""){
            EmailRef.current.focus()
        }
        if(NameRef.current.value===""){
            NameRef.current.focus()
        }
        let { data } = await axios.post(endpoint + 'signup', User)
        if (data.status === "Success") {
            toast.success(data.message)
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        } else {
            toast.error(data)
        }
    }
    return (
        <div className="contaier d-flex align-items-center  text-center  justify-content-center   login" style={{ height: "600px" }}>
            <div className="card" style={{ width: "450px", borderRadius: "12px", height: "340px" }}>
                <div className="card-title   " style={{ fontSize: "38px", fontWeight: "600" }}>
                    <strong className="ms-5">Create User</strong>
                    <Link to='/login' className=" btn btn-danger mt-2 mx-2" style={{ float: 'right' }} >X</Link>
                </div>
                <div className="card-body ">
                    <form onSubmit={HandleLogin}>
                        <div className="row">
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={NameRef} className="form-control " placeholder="Enter Your Name" value={User.Name} onChange={(e) => setUser({ Name: e.target.value, Email: User.Email, Password: User.Password })} />
                            </div>

                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={EmailRef} className="form-control mt-4" placeholder="Enter Your E-mail" value={User.Email} onChange={(e) => setUser({ Email: e.target.value, Name: User.Name, Password: User.Password })} />
                            </div>
                            <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                                <input type="text" ref={PassRef}className="form-control mt-4" placeholder="Enter Your Password" value={User.Password} onChange={(e) => setUser({ Password: e.target.value, Email: User.Email, Name: User.Name })} />
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