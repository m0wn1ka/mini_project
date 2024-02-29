import {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
export default function Alumini(){
    const main_url=useSelector(state=>state.auth.url)
    let url=main_url+'alumini'
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
        
        let body=inputs
        let res=await axios.post(url,body,headers)
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