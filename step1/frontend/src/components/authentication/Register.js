import {useState} from 'react'
import axios from 'axios'
export default function Register(){
    let [inputs, setInputs] = useState({});
   async function handleClick() {
        alert('You clicked me!');
let res=await axios.get("http://localhost:3001/register")
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
        let body={"email":"email2","name":"name2","passowrd":"pass2"}
        body=inputs
        await axios.post("http://localhost:3001/register",body,{headers})
        console.log("submitted ",inputs)
        alert("submitsted")
        
      }
    return (
        <>
       <p>register pge</p>
       <button onClick={handleClick}>
      Click me
    </button>
    <form onSubmit={onsubmitHandler}>
        email:<input type="text" name="email" id="email" value={inputs.email} onChange={onchangeHandler}/><br/>
              name:  <input type="text" name="name" id="name" value={inputs.name} onChange={onchangeHandler}/><br/>
      password:  <input type="text" name="password" id="password" value={inputs.password} onChange={onchangeHandler}/>
      <input type="submit"/>
    </form>
    <p>u typeing {inputs.name}</p>
        </>
    )
}