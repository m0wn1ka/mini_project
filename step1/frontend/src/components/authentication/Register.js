import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Register(){
  const navigate=useNavigate()
  const main_url=useSelector((state)=>state.auth.url)
  let url=main_url+'register'
    let [inputs, setInputs] = useState({});
    let [passwordVisible, setPasswordVisible] = useState(false);
    function validateName(name) {
      const nameRegex = /^[a-zA-Z\s]*$/;
      return nameRegex.test(name);
    }
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    function validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return passwordRegex.test(password);
    }
  
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
        if (!inputs.email || !inputs.name || !inputs.password) {
          window.alert('Please enter all fields');
          return;
        }
        
        

        if (!validateEmail(inputs.email)) {
          window.alert('Please enter a valid email address');
          return;
        }
        if (!validateName(inputs.name)) {
          window.alert('Please enter a valid name (letters only)');
          return;
        }
     
        
       
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
      function onchangeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
      }
    
      function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
      }


    return (
      <div className='container justify-content-center align-items-center d-flex  text-white'>
      <div className='container bg-secondary justify-content-center align-items-center d-flex  row h-75 p-0' >
          <div className='col-md-7 h-100  d-flex-col justify-content-center align-items-center  rounded' style={{backgroundImage:`url('https://media.istockphoto.com/id/1493013286/photo/businessman-logging-on-to-a-password-protected-website.webp?b=1&s=170667a&w=0&k=20&c=OXsY3B-x8h5ocDWjRXYDrUHVDGCAfRWqEVVyrSlCJe0=')`, backgroundSize:"cover"}}>
             <h3 className='p-3'>WELCOME to our website</h3> 
             <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla</p>
          </div>
          <div className='col-md-5 bg-dark h-100 justify-content-center align-items-center d-flex'>
          <form onSubmit={onsubmitHandler}>
                <div className='pb-3'>
                      <center className='pb-3'><h4>Register Form</h4></center>
                  </div>
          <div className='row p-3'>
              <label className='col-form-label col-sm-3'>name</label>
              <div className='col-sm-9'>
              <input type="text" name="name" id="name" value={inputs.name} onChange={onchangeHandler} />
              </div>
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
    
      </div>)}