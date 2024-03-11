import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register(){
  const navigate=useNavigate()
  const main_url="http://localhost:4003/"
  let url=main_url+'register'
    let [inputs, setInputs] = useState({});

      function onchangeHandler(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
     async function onsubmitHandler(e){
      let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        let body={"email":"email2","name":"name2","passowrd":"pass2"}
        body=inputs
       
        let response=await axios.post(url,body,{headers})
        if(response.status==205){
          window.alert("usr alerdy register,please login")
        }
        else{
          window.alert("succsffuly registed")
          navigate("/Login")
        }
        console.log("submitted ",inputs)
        alert("submitted")
        navigate('/Login')
        
      }
    
    return (
        <>
      
    <center><h3><b>Registration Page</b></h3></center>
    <form onSubmit={onsubmitHandler}  id="form">
      <center>
      <table cellPadding={15} cellSpacing={15}>
        <tr>
         <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            </span>
            
            
            <input type="text" class="form-control" placeholder="Email" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
        <tr>  <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
            </span>
            
            <input type="text" class="form-control" placeholder="Name" name="name" id="name" value={inputs.name} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
        <tr>
          <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
            </svg>
            </span>
            
            <input type="password" class="form-control" placeholder="Password" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
          </div>
          </td>
        </tr>
      </table><br />
      <input type="submit" value="Submit" id="btn" style={{borderRadius:"20px", border:"none", padding:"10px 20px", cursor:"pointer"}}/>
      </center>
    </form>
    
   
        </>
    )
    
}