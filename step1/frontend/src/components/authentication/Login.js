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
    

      function onchangeHandler(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
     async function onsubmitHandler(e){
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

        }
        
      }
    

    return (
        <div className='container justify-content-center align-items-center d-flex  text-white rounded'>
        <div className='container bg-secondary justify-content-center align-items-center d-flex  row h-75 p-0' >
            <div className='col-md-7 h-100  d-flex-col justify-content-center align-items-center' style={{backgroundImage:`url('https://media.istockphoto.com/id/1493013286/photo/businessman-logging-on-to-a-password-protected-website.webp?b=1&s=170667a&w=0&k=20&c=OXsY3B-x8h5ocDWjRXYDrUHVDGCAfRWqEVVyrSlCJe0=')`, backgroundSize:"cover"}}>
               <h3 className='p-3'>WELCOME to our website</h3> 
               <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
            </div>
            <div className='col-md-5 bg-dark h-100 justify-content-center align-items-center d-flex'>
            <form onSubmit={onsubmitHandler}>
            <div className='pb-3'>
              <center className='pb-3'><h4>Login Form</h4></center>
              </div>
            <div className='row p-3'>
              
              
                <label className='col-form-label col-sm-3' >email</label>
                <div className='col-sm-9'>
                <i className="bi bi-envelope"></i>
                <input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler} placeholder=''className='rounded'/>
                </div>
            </div>
            <div className='row p-3'>
                <label className='col-sm-3 col-form-label'>password</label>
                <div className='col-sm-9'>
                     <input  name="password" id="password" value={inputs.password} onChange={onchangeHandler} className='rounded'/>  
                </div>
            </div>
             <center className='p-3'><Link to='/Register'>not registerd?</Link></center>
             <center> <input type="submit" value="Submit"  style={{borderRadius:"20px", border:"none", padding:"10px 20px", cursor:"pointer"}}/></center>
             
              
            
            </form>
          </div>
       
   
   


        </div>
      
        </div>
    )
}
