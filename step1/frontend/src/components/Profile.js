import {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
export default function Profile(){
    const main_url=useSelector((state)=>state.auth.url)
    let [profileData,setProfileData]=useState({"name":'sample name',"email":"sample mail","solved_status":[]})
    const [isLoaded,setIsLoaded]=useState(false)
    const cookie=localStorage.getItem("user")
    let solved_status_result=''

    solved_status_result=profileData.solved_status.map((item1)=>{
        <li>{item1}</li>
    
    })
    useEffect(()=>{
       async function fetch_profile(){
        let  headers= {'Content-Type': 'application/json'}
       let  body={cookie:cookie}
        let res=await axios.post(main_url+'profile',body=body,headers=headers)
        // console.log("res body of profile is",res.data.user1)
        setProfileData({
            "name":res.data.user1.name,
            "email":res.data.user1.email,
            "solved_status":res.data.user1.solved_status
       })
        
        setIsLoaded(true)
       }

       fetch_profile()

    },[])
    if(!isLoaded){
        return(
            <>
           
            profile page 
            will fetch you profile shortly
            <b>can have a loading effect here</b>
            </>
        )

    }
    else{
        return(<>
        {/* profile data after useEffect<br/>
        name: {profileData.name}
        <br/>
        email: {profileData.email}
         */}
         <div className='container h-100 w-100 d-flex flex-column justify-content-center align-items-center h-100 '>
            <img src={"https://radham0wn1ka.github.io/assets/img/avatar.jpg"} style={{height:'120px',width:'120px'}} className='rounded-circle'/>
            <div className='d-flex flex-column'>
                <div className='row mb-3'>
                        <div className='col-md-6'>name</div>
                        <div className='col-md-6'>{profileData.name}</div>
                </div>
                <div className='row mb-3'>
                        <div className='col-md-6'>email</div>
                        <div className='col-md-6'>{profileData.email}</div>
                </div>
                <div className='row mb-3'>
                        <div className='col-md-6'>score</div>
                        <div className='col-md-6'>1289</div>
                </div>
                <div className='row mb-3'>
                        <div className='col-md-6'>badge</div>
                        <div className='col-md-6'>badge/dummy</div>
                </div>
                <div className='row mb-3'>
                        <div className='col-md-6'>solve-stat</div>
                        <div className='col-md-6'>{profileData.solved_status}</div>
                </div>
            
            </div>
            
         </div>
        </>)
        
    }
   
}