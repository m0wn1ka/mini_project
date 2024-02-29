import {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import  {useNavigate}  from 'react-router-dom';
export default function Register(){
  const navigate = useNavigate();

  const main_url=useSelector((state)=>state.auth.url)
  let url=main_url+'register'
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
        if(response.status==205){
          window.alert("usr alerdy register,please login")
        }
        else{
          window.alert("succsffuly registed")
          navigate("/Login")
        }
        
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