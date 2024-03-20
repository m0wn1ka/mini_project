import {useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
export default function MessageToAdmin(){
    const main_url=useSelector((state)=>state.auth.url)
    let [msgToAdmin,setMsgToAdmin]=useState('')
    let cookie=localStorage.getItem('user')
    async function messageToAdminHandler(){
        let  headers= { 'Content-Type': 'application/json'}
        let body={cookie:cookie,messageToAdmin:msgToAdmin}
        let response=await axios.post(main_url+'MsgToAdmin',body,{headers})
        console.log("resp of msg to admin  is ",response)
    }
    return(<>
    <h2>want to MessageToAdmin ?</h2>
    <ul>
        <li>any suggestions realated to site</li>
        <li>any specific functionality to be added like announcements for u..</li>
        <li>any thing ...?</li>
    </ul>
    <form>
        msg to admin:<input type="text" name="messageToAdmin" onChange={(e)=>{setMsgToAdmin(e.target.value)}}/><br/>
        <input type='button' onClick={messageToAdminHandler} value="msg to admin"/>
    </form>
    </>)
}