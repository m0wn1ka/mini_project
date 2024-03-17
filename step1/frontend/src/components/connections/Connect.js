import axios from "axios"
import {useState} from 'react'
import { useSelector } from 'react-redux'
export default function Connect(){
    let user_data_component;
    const cookie=localStorage.getItem("user")
    const main_url=useSelector((state)=>state.auth.url)
    let [usersData,setUsersData]=useState([])
    let url=main_url+'profile/user'
    let [name,setName]=useState('radha')
   async function getProfileHandler(e){
    e.preventDefault();
    window.alert("fetch is called")
    
    let  headers= { 'Content-Type': 'application/json'}
    let body={"user_name":name}
    let res=await axios.post(url,body,{headers})
    // console.log("res.dat is ",res.data)
    // console.log("res.data.user1",res.data.user1)
    // console.log("res.data.user1[0]",res.data.user1[0])
    setUsersData(res.data.user1)
    }
    async function followHandler(index){
        if(cookie==undefined){
            window.alert("login to follow");
            return;
        }
        let  headers= { 'Content-Type': 'application/json'}
        // console.log(usersData[index])
        let following_mail=usersData[index].email
        let body={cookie:cookie,following_mail:following_mail}
        let res=await axios.post(main_url+'profile/follow',body,{headers})
        // window.alert(usersData[index].email)
        // console.log("follwign status code is ",res)
        window.alert(usersData[index].email,"is beign follwod")
    }
    return (<>
    want to connect with someone?
    <form>
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="button" onClick={getProfileHandler} value="fetch profile"/>
    </form>
    name fetching is {name}
    <br/>
    <br/>
    {usersData.map((userOne,index)=><div>
        <p>name:{userOne.name}</p>
        <p>mail:{userOne.email}</p>
        <button onClick={()=>followHandler(index)}>follow</button>
    </div>)}
    </>)
}