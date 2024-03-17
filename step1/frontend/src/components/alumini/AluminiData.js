import axios from 'axios'
import '../../App.css'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import Split_to_persons from './Split_to_person'
export function AluminiData(){
    let [inputs, setInputs] = useState({});

    let [have_alumini_data,setHave_alumini_data]=useState(false)
    let [count_of_alumini,setCount_of_alumini]=useState(0)
    const main_url=useSelector(state=>state.auth.url)
    let url=main_url+'alumini/getAlumini'
    let [alumini_data,setAlumini_data]=useState({})
    function addFilterHandler(event){

        let keyy = document.getElementById("keyy").value
        keyy="data_of_alumini."+keyy
        document.getElementById("keyy").value=""
        const valuee= document.getElementById("valuee").value
        document.getElementById("valuee").value=""
        setInputs(values => ({...values, [keyy]: valuee}))
       
        window.alert(JSON.stringify(inputs))
    }
    async function get4aluminiHanlder(e){
        let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        let body={}
        body.filters=inputs
        body.count=count_of_alumini;
        let res=await axios.post(url,body,{headers})
        if(res.status==200 && res.data.count>0){
        // console.log("req.body.count is ",body.count,"and res.data.alumini_data.alumini_data.count is ",res.data.count)
        setCount_of_alumini(count_of_alumini+res.data.count)
        setHave_alumini_data(true)
        // let x=res.data.alumini_data[0].data_of_alumini
        console.log('res.data. is ',res.data)
        setAlumini_data(res.data.alumini_data)
        }
        else{
            console.log("that is the end of alumini data",res.data.alumini_data)
        }
    }
    function suggestionHandler(e){
        e.preventDefault()
        let a=e.target.name
        document.getElementById('keyy').value=a
        // window.alert(a)
    }

if(!have_alumini_data){
    

    return (
        <>
        <h3>In this page you can find Alumini....</h3><hr />
        <h4>If you want to get next 4 Alumini, click the button 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-square-fill" viewBox="0 0 16 16" onClick={get4aluminiHanlder} >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z"/>
            </svg>   
            </h4>
            {/*<input type="button" value="Click this one" onClick={get4aluminiHanlder}/>*/}<hr/>
            
            <h3>Suggestions: </h3><br></br>
            <button name='year' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"20px", border:"none", padding:"10px 20px"}}>Year of admisson</button>
            <button name='branch' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"20px", border:"none", padding:"10px 20px"}}>Branch</button>
            <button name='compnay_name' onClick={suggestionHandler} style={{marginRight:"20px",borderRadius:"20px", border:"none", padding:"10px 20px"}}>Present Company name</button>
            
         <br/><br/>
            {/*filter_name <input type="text" name="filter_name" id="keyy"/>   <br/>
            filter_value <input type="text" name="filter_value" id="valuee"/><br/>
            <input type="text"  value="add filter" onClick={addFilterHandler}/>
            */}  
            <table cellPadding={5} cellSpacing={5}>
                <tr>
                    <th>Filter name:</th>
                    <td>
                    <input type="text" name="filter_name" id="keyy"/>
                    </td>
                </tr>
                <tr>
                    <th>Filter value:</th>
                    <td>
                    <input type="text" name="filter_value" id="valuee"/>
                    </td>
                </tr>
            </table> <br/> 
            <input type="text"  value="add filter" onClick={addFilterHandler}/>
       
    
    </>
    )
}
else{
    return (
    <div className='container-fluid ' >
    <Split_to_persons persons_data={alumini_data}/>
        <div className='footer'>
        <form>
            <input type="button" value="Get the next 4 alumini" onClick={get4aluminiHanlder}/>
        </form>
        </div>
        </div>
        )
}
}
