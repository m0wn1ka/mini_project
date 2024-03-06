import {useState} from 'react'
import { UseSelector } from 'react-redux'
import axios from 'axios'
import  {useNavigate}  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_FAIL,LOGIN_SUCCESS,ADMIN_LOGIN } from '../features/auth/AuthSlice'
export default function Login(){
  const navigate = useNavigate();
  const main_url=useSelector((state)=>state.auth.url)
  let url=main_url+'login'
  const dispatch = useDispatch()
    let [inputs, setInputs] = useState({});
   async function handleClick() {
        alert('You clicked me!');

let res=await axios.get(url)
res=res.data
console.log(res)
alert(res);
      }
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
        console.log("submitted ",inputs)
        console.log(response)
        if(response.status==201){
          window.alert("welcom admin");
          dispatch(ADMIN_LOGIN())
          // window.location=url+'Admin'
          navigate('/Admin')
        }
        else if (response.status==205){
          window.alert("give valid details")
        }
        else{
          window.alert("succsffuly lgoin")
          dispatch(LOGIN_SUCCESS())
          navigate("/Profile")
          // console.log("tke",response.data.token)
          localStorage.setItem("user",response.data.token) 
          // window.location=(url+'Profile')
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
    <p>u typeing {inputs.name}</p>
    </div>
        </>
    )
}