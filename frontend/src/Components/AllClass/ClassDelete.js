// import { useEffect } from 'react'
// import axios from 'axios'
// import toast, { Toaster } from 'react-hot-toast'
// import { useNavigate, useParams } from 'react-router-dom'
// import { endpoint } from '../..'
// export const ClassDelete = () => {
//     let { id } = useParams()
//     let token = localStorage.getItem('token')
//     let navigate = useNavigate()
//     useEffect(() => {
//         async function load() {
//             let { data } = await axios.delete(`${endpoint + '/class'}/${id}`, { headers: { token } })
//             if (data.status === "Success") {
//                 toast.success(data.message)
//                 setTimeout(() => {
//                     navigate('/Class')
//                 }, 3000);
//             }
//         }
//         load()
//     }, [])
//     return (
//         <div>
//             <Toaster />

//         </div>
//     )
// }