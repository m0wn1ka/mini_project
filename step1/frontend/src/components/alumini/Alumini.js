import {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
export default function Alumini(){
    const main_url=useSelector(state=>state.auth.url)
    let [id_no,setId_no]=useState("n191034");
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
        console.log("id no is ",id_no)
        let body={"alumini_data":inputs,"id_no":id_no}
        console.log("body is ",body)
        let res=await axios.post(url,body,headers)
        console.log("the response after to backed is ",res)

    }
    return (
    <>
    alumin page
    <h1>page</h1>
        <form onSubmit={submitHandler}>
        id no:<input type="text" name="id_no" id="id_no" value={id_no} onChange={e=>setId_no(e.target.value)}/><br/>
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