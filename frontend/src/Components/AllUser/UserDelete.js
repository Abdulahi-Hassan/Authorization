import axios from "axios"
import { useEffect } from "react"
import { endpoint, token } from "../.."
import { useNavigate, useParams } from "react-router-dom"
import { Toaster, toast } from "react-hot-toast"
export const UserDelete = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        const load = async () => {
            let { data } = await axios.delete(`${endpoint + 'user/Alluser'}/${id}`, { headers: { token } })
            if (data.status === "Success") {
                toast.success(data.message)
                setTimeout(() => {
                    navigate('/User')
                }, 3000);
            } else {
                toast.error(data)
            }
        }
        load()
    }, [id, navigate])
    return (
        <div>

            <Toaster />
        </div>
    )
}