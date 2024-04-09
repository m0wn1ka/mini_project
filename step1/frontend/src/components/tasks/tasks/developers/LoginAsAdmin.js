//login as admin
//base64 decode cookie
//fronend secuity implementation
//docker pull radham0wn1ka1/developer_task1
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
export default function LoginAsAdmin(){
    const main_url=useSelector((state)=>state.auth.url)
    let url=main_url+'score'
    let [solution,setSolution]=useState("")
  async  function scoreHandler(e){
    e.preventDefault()
    if(!localStorage.getItem("user")){
        return window.alert("u need to logn to submit")
    }
    else{
        const cookie=localStorage.getItem("user")
      let   headers={"Content-Type":"application/json"}
      console.log("value is ",solution)
      let body={"task_name":"developer_task1","solution":solution,"cookie":cookie}
      try{
      let response=await axios.post(url,body,{headers})
      console.log("resp is ",response)
      window.alert(response.data.msg)
      }
      catch(e){
        console.log("err is ",e)
      }

    }

  }
    return(
    <div>
    <div className="container border shadow  d-flex h-50 justify-content-center align-items-center bg-light">
        <ol>
            <li>It tells about the authentication issues</li>
            <li>it is using express (e)js </li>
        </ol>

    </div>
    <div className="container border shadow d-flex flex-column h-50 justify-content-center align-items-center bg-light">
    <b>prerequiste</b>: need to have docker installed
        <pre>docker pull radham0wn1ka1/developer_task1<br/>
        docker run -dp 127.0.0.1:4001:4001 developer_task1<br/>
        go to browser at 127.0.0.1:4001</pre>
        <br/>
        <b>prerequiste</b>: need to node installed
        <pre>
            git clone https://github.com/m0wn1ka/mini_project_tasks.git<br/>
            cd mini_project_tasks/developers/cookie_admin_b64<br/>
            node index.js
        </pre>

    </div>

    <div className="container border shadow d-flex h-50 justify-content-center align-items-center bg-light">
        solution part

    </div>
    <div className="container border shadow d-flex flex-column h-50 justify-content-center align-items-center bg-light">
        takeaways:<br/>
        - implementation of secuity checks just on fronend is not enough<br/>
        - never trust user input

    </div>
    
    <div className="container border shadow d-flex flex-column h-50 justify-content-center align-items-center bg-light">
       - one can find the flag after loggin in as admin 
       <form>
       key: <input type="text" id='scoring' value={solution} onChange={e=>setSolution(e.target.value)}/>
       <button onClick={scoreHandler}>submit</button>
       </form>

    </div>
    
    </div>)
}