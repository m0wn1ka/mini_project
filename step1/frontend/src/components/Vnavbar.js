import { NavLink,Link } from "react-router-dom"
import { useState } from "react"
export default function Vnavbar(){
    let [authVisible,setAuthVisible]=useState(false)
    let [aluminiVisible,sestAluminiVisible]=useState(false)
    return (<div className=''>
        <div >
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/Profile'>Profile</Link></div>
       <div onClick={()=>setAuthVisible(x=>!x)}>auth</div>
       </div>
       {authVisible?<div >
       <div><Link to='/Register'>Register</Link></div>
       <div><Link to='/Login'>LOgin</Link></div>
       </div>:<></>}

       
        
        
        

    </div>)
}