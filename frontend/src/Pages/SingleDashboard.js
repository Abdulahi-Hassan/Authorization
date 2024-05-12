import '../index.css'
import { useEffect, useState } from "react"
import {token,endpoint} from '../index'
import axios from "axios"
export const SingleDash = () => {
    const [ApiData,setApiData]=useState([])
    useEffect(()=>{
       async function load(){
        let {data}=await axios.get(endpoint+'user',{headers:{token}})
        setApiData(data)
       }
       load()
    },[])
    const {message}=ApiData
  
    return (
        <div className="block" style={{padding:"0 15%",marginLeft:"32px"}}>
            <table className=" table text-center  mt-4" >
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {message &&
                   <tr className="text-center">
                   <td>{message.Email}</td>
                   <td>{message.Role}</td>
                   <td>{message.Status}</td>
               </tr>
                   
                   }
                </tbody>
            </table>
            <table className=" table text-center  mt-4" >
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {message &&
                   <tr className="text-center">
                   <td>{message.Email}</td>
                   <td>{message.Role}</td>
                   <td>{message.Status}</td>
               </tr>
                   
                   }
                </tbody>
            </table>
            <table className=" table text-center  mt-4" >
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {message &&
                   <tr className="text-center">
                   <td>{message.Email}</td>
                   <td>{message.Role}</td>
                   <td>{message.Status}</td>
               </tr>
                   
                   }
                </tbody>
            </table>
        </div>
    )
}