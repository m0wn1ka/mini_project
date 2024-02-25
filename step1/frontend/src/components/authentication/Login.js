import {useState} from 'react'
import axios from 'axios'
export default function Login(){
    let [inputs, setInputs] = useState({});
   async function handleClick() {
        alert('You clicked me!');
let res=await axios.get("http://localhost:3001/login")
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
        let url1="https://mini-project-backend-xnqj.onrender.com/login"
        let url2="http://localhost:3001/login"
        let response=await axios.post(url2,body,{headers})
        console.log("submitted ",inputs)
        console.log(response)
        if(response.status==201){
          window.alert("welcom admin");
          window.location="http://localhost:3000/Admin"
        }
        if(response.status==205){
          window.alert("give valid details")
        }
        else{
          window.alert("succsffuly lgoin")
          console.log("tke",response.data.token)
          localStorage.setItem("user",response.data.token)
          window.location=("http://localhost:3000/Profile")
        }
        
      }
    return (
        <>
       <p>login pge</p>
       <button onClick={handleClick}>
      Click me
    </button>
    <form onSubmit={onsubmitHandler}>
        email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
      password:  <input type="text" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <input type="submit"/>
    </form>
    <p>u typeing {inputs.name}</p>
        </>
    )
}