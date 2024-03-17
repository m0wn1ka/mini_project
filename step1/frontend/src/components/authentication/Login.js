import {useState} from 'react'
import { UseSelector } from 'react-redux'
import { Link } from 'react-router-dom';
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
    const [showPassword, setShowPassword] = useState(false);
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
      {/*let  headers= {
            'Content-Type': 'application/json'
          }*/}
        e.preventDefault();
        if (!inputs.email || !inputs.password) {
          window.alert('Please enter email and password');
          return;
        }
        
        let  headers= {
          'Content-Type': 'application/json'
        }

        
        let body=inputs
       
        let response=await axios.post(url,body,{headers})
        console.log("submitted ",inputs)
        console.log(response)
        if(response.status==201){
          window.alert("welcom admin");
          localStorage.setItem("user",response.data.token) 
          dispatch(ADMIN_LOGIN())
          // window.location=url+'Admin'
          navigate('/Admin')
        }
        else if (response.status==205){
          window.alert("give valid details")
        }
        else{
          window.alert("succsffuly lgoin")
          localStorage.setItem("user",response.data.token) 
          dispatch(LOGIN_SUCCESS())
          navigate("/Profile")
          // console.log("tke",response.data.token)
          
          // window.location=(url+'Profile')
        }
        
      }
      const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    return (
        <>
        <center><h3><b>Login Page</b></h3>
        {/*<div class="container d-flex justify-content-center">*/}

       
       
     
    <form onSubmit={onsubmitHandler}>
        {/*email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
      password:  <input type={showPassword ? "text":"password"} name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >jjj</span><br />
    <input type="submit"/>*/}
        <table cellPadding={15} cellSpacing={15}>
          <tr>
          <td>
          <div class="input-group mb-3">
            <span class="input-group-text" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            </span>
            <input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler} placeholder=''/>
            
            </div>
          </td>
            <td></td>
          </tr>
          <tr>
             <td>
              <div class="input-group mb-3">
                <span class="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
              </svg>
              </span>
              <input type={showPassword ? "text":"password"} name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
              </div>
             </td>
          </tr>
        </table>
        
        <input type="submit" value="Submit"  style={{borderRadius:"20px", border:"none", padding:"10px 20px", cursor:"pointer"}}/>
    </form>
    </center>
    <span className="password-toggle" onClick={togglePasswordVisibility}>jjj</span>
    <p>you are  typing: {inputs.name}</p>
    {/*</div>*/}

    {/* <Link to='/admin'>got to amdin if u are admin</Link> */}
        </>
    )
}
