import { NavLink,Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

export default function Vnavbar(){

    let [authVisible,setAuthVisible]=useState(false)
    let [aluminiVisible,setAluminiVisible]=useState(false)
    let [tasksVisible,setTasksVisible]=useState(false)
    let [visibility,setVisibility]=useState(false)
    let [cookie,setCookie]=useState(localStorage.getItem("user"))
  
   
    return (<div className='bg-dark text-white h-100 d-flex flex-row '>
        <div className="d-flex flex-row">
        <div><Link to='/AluminiSite'>alumini site</Link></div>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/About'>About</Link></div>
        <div><Link to='/Help'>Help</Link></div>
        <div><Link to='/Profile'>Profile</Link></div>

       <div onClick={()=>{setAuthVisible(x=>!x);setAluminiVisible(false);setTasksVisible(false)}}>auth</div>
       </div>
       {authVisible?<div >
       <div><Link to='/Register'>Register</Link></div>
       <div><Link to='/Login'>LOgin</Link></div>
       </div>:<></>}
        <div onClick={()=>{setAluminiVisible(x=>!x);setAuthVisible(false);setTasksVisible(false)}}>alumini</div>

        {aluminiVisible?<div >
       <div><Link to='/Alumini'>alumini form</Link></div>
       <div><Link to='/AluminiData'>alunini data</Link></div>
       </div>:<></>}


        <div onClick={()=>{setTasksVisible(x=>!x);setAluminiVisible(false);setAuthVisible(false)}}><Link to='/TasksHomePage'>tasks</Link></div>

        {tasksVisible?<div >
       <div><Link to='#'>developers</Link></div>
       <div><Link to='#'>kids</Link></div>
       <div><Link to='#'>informative</Link></div>
       </div>:<></>}
    
       <div><Link to='/Connect'>connect?</Link></div>
       <div><Link to='/MessageToAdmin'>messageToAdmin?</Link>
       </div>

       
        
        
        

    </div>)
}