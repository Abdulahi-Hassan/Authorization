import { Link, useNavigate } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import '../index.css'
import { SingleDash } from './SingleDashboard';
import { useEffect } from 'react';
export const UserDashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    let navigate = useNavigate()
    useEffect(() => {
        navigate('/UserDashboard')
    }, [navigate])
    const Handle = () => {
        let user = document.querySelector('.user')
        user.classList.toggle('open')
    }

    const SingleDashboard = () => {
        const singleuser = document.querySelector('.singleuser')
        singleuser.classList.toggle('open')
        let singleuserimage = document.querySelector('.singleuserimage')
        singleuserimage.classList.remove('open')
    }
    const ImageEdit = () => {
        let singleuserimage = document.querySelector('.singleuserimage')
        console.log(singleuserimage)
        singleuserimage.classList.toggle('open')
        const singleuser = document.querySelector('.singleuser')
        singleuser.classList.remove('open')
    }


    return (
        <div className='row'>
            <div className='col-3'>
                <div className='user'>
                    <TiThMenu className='iconMenu' onClick={Handle} />
                    <Link to={`/Profile/${user._id}`} className='bg'>
                        <img onClick={ImageEdit} className='image' src={`http://localhost:3000/` + user.Profile} alt='' />
                    </Link>
                    <Link to='/UserDashboard ' className='bg-white text-danger ' style={{ lineHeight: "45px" }}>
                        {user.Name}
                    </Link>
                    <Link to='/UserDashboard' onClick={SingleDashboard} className='active SingeUser text-light fs-5' >Dashboard</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services' >Services</Link>
                    <Link to='/user'>User</Link>
                    <Link to='/UserDashboard' onClick={ImageEdit}  >
                        Contuct
                    </Link>
                </div>
            </div>
            <div className='col singleuser'>
                <SingleDash />
            </div>
            <div className='col singleuserimage'>
                {/* <UpdateUserProfile/> */}
                consu
            </div>
        </div>

    )
}