import { Link, useNavigate } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
export const Header = () => {
    // let User = JSON.parse(localStorage.getItem('user'))
    const Handle = () => {
        let nav = document.querySelector('nav')
        nav.classList.toggle('menu')
    }
    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    const HandleLoginOut = () => {
        setTimeout(() => {
            navigate('/login')
        },);
        localStorage.removeItem("token")
    }
    return (
        <div className="container lii ">
            <header>
                <Link className='logo'>Student</Link>
                <nav className='ms-5 '>
                    <Link to='/' className='active'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services' >Services</Link>
                    {/* {User && User.Role === "false" &&
                        (<Link to='/UserDashboard'>User</Link>)
                    } */}
                    <Link to='/contuct'>Contuct</Link>
                </nav>
                <div className='signup' >
            
                    {!token &&
                           <>
                            <Link style={{ textDecoration: "none" }} to='/login'>SignIn</Link>
                            <Link style={{ textDecoration: "none" }} to='/signup'>SingUp</Link>
                           </>
                    }
                </div>
                <div className='signup' >
                    {token && (
                        <>
                            <Link onClick={HandleLoginOut} style={{ textDecoration: "none" }} >SignOut</Link>
                        </>
                    )}
                </div>

                <div className='icons'>
                    <TiThMenu onClick={Handle} />
                </div>
            </header>
        </div>
    )
}