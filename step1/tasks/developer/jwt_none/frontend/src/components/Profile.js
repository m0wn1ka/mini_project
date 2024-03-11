import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Profile(){
        let [userdata,setUserdata]=useState({})
        let [hasUserData,setHasUserData]=useState(false)
        const main_url="http://localhost:4003/profile"
        const cookie=localStorage.getItem("token")
        async function fetch_profile(e){
            window.alert("profle fetec")
        e.preventDefault()
        let  headers= {'Content-Type': 'application/json'}
        let  body={token:cookie}
        console.log("body yis ",body)
        let res=await axios.post(main_url,body=body,headers=headers)
        
        setUserdata(res.data)
        console.log("user data is",userdata)
        setHasUserData(true)
        }
        return(<>
        profile page
        <form>
            <input type="button" onClick={fetch_profile} value="fetch your profile"/>
        </form>
        {hasUserData?
        
    <div>
        username:{userdata["name"]}<br/>
        email:{userdata["email"]}<br/>
        password:{userdata["password"]}

    </div>:
    <></>}
        </>)
    
}