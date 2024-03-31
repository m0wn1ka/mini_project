import {useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
export default function Alumini(){
    const main_url=useSelector(state=>state.auth.url)
    let [id_no,setId_no]=useState("n191034");
    let [name,setName]=useState("RADHA");
    let [image_url,setImage_url]=useState("https://radham0wn1ka.github.io/assets/img/avatar.jpg")
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
        console.log("id no is ",id_no)
        if(id_no=='n191034' || name=='RADHA' || image_url=='https://radham0wn1ka.github.io/assets/img/avatar.jpg'){
            window.alert("please fill your details")
            return;
            }
        let body={"alumini_data":inputs,"id_no":id_no,"name":name,"image_url":image_url}
        console.log("body is ",body)
        let res=await axios.post(url,body,headers)
        console.log("the response after to backed is ",res)
        if(res.status==299){
            window.alert("already filled?if not msg the admin ")
        }
        else{
            window.alert("successfully submitted")
        }

    }
    function suggestionHandler(e){
        e.preventDefault()
        let a=e.target.name
        document.getElementById('keyy').value=a
        // window.alert(a)
    }
    return (
    <div data-aos="fade up bg-dark text-secondary" >
    
    <center><h1>Alumini form</h1></center><hr />
        <h3>To ease the search  use these suggested fields:</h3>
    <div className='container'>
            <h4>Suggestions:</h4>
            <button name='year' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Year of admisson</button>
            <button name='branch' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Branch</button>
            <button name='compnay_name' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"10px"}}>Present Company name</button>
            
        </div><hr />
        <form onSubmit={submitHandler}>
            <center>
            <table>
                <tr>
                    <th>Id No.</th>
                    <td>
                        <input type="text" name="id_no" id="id_no" value={id_no} onChange={e=>setId_no(e.target.value)} /> <br />

                    </td>
                    <td></td>
                </tr>
                <tr>
                    <th>name:</th>
                    <td><input type="text" name="name" id="name" value={name} onChange={e=>setName(e.target.value)}/></td>
                </tr>
                <tr>
                    <th>image url</th>
                    <td><input type="text" name="image_url" id="image_url" value={image_url} onChange={e=>setImage_url(e.target.value)}/></td>
                </tr>
                <tr>
                    <th>Key:</th>
                    <td>
                        <input type="text" name="the_key" id="keyy" />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <th>Value:</th>
                    <td>
                        <input type="text" name="the_value" id="valuee" />
                    </td>
                    <td><input type="button" onClick={addAnotherHandler} value={"+"}/></td>
                </tr>
            </table><br />
            <input type="submit" value={"Submit"}/>
            </center>
        </form>
        <br />
        <p>
            The admin will look into the provided data and once admin validates them they will be displayed(for authenticity this featerue is added)
        </p>

    </div>)
}
