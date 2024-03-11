import {useState} from 'react'
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();
  let url="http://localhost:4003/login"
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
        
        let body=inputs
       
        let response=await axios.post(url,body,{headers})
        // console.log("submitted ",inputs)
        console.log(response)
        if(response.status==200){
          window.alert("succesful logoin")
          // console.log("on login backend resp i s",response)
          localStorage.setItem("token",response.data.tok)
          navigate("/Profile")
        }
       
        else{
          window.alert("in succesufl login")
        
          
        }
        
      }
    return (
        <>
        <div class="container d-flex justify-content-center">

       <p>login pge</p>
     
    <form onSubmit={onsubmitHandler}>
        email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
      password:  <input type="text" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <input type="submit"/>
    </form>

    </div>
   
        </>
    )
}