import {useState} from 'react'
import axios from 'axios'
export default function Alumini(){

    let [inputs, setInputs] = useState({});
    function addAnotherHandler(event){
        const keyy = document.getElementById("keyy").value
        document.getElementById("keyy").value=""
        const valuee= document.getElementById("valuee").value
        document.getElementById("valuee").value=""
        setInputs(values => ({...values, [keyy]: valuee}))
    }
    async function submitHandler(e){
        let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        console.log("inputss",inputs)
        window.alert("u clicked submit");
        let url1="https://mini-project-backend-xnqj.onrender.com/alumini"
        let url2="http://localhost:3001/alumini"
        let body=inputs
        let res=await axios.post(url2,body,headers)
        console.log("the response after to backed is ",res)

    }
    return (
    <>
    alumin page
    <h1>page</h1>
        <form onSubmit={submitHandler}>
            the key:<input type="text" name="the_key" id="keyy"/>
            <br/>
            value:<input type="text" name="the_value" id="valuee"/>
            <input type="button" onClick={addAnotherHandler}/><br/>
            <input type="submit"/>
        </form>
        <p>
            the admin will look into the provided data and once admin validates them they will be displayed(for authenticity this featerue is added)
        </p>
    </>)
}