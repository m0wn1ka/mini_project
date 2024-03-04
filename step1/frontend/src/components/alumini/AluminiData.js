import axios from 'axios'
import { useState } from 'react'
import {useSelector} from 'react-redux'
function Person({person_data,id_no}){
    //we get a single persons data as a object 
    const items=Object.keys(person_data).map(attrribute=>
    <>
    <tr>
   <td>{attrribute}</td>
   <td>{person_data[attrribute]}</td>
   </tr>
    </>
    )
    return <>
    <h1>{id_no}</h1>
    <table>
        {items}
    </table>
  
    </>
}
function Split_to_persons({persons_data}){
    //in this fucntion we get data of multiple persons
    // res.data.alumini_data is input 
    //so we loop thrugh the arary 
    //for each element we call/render person with .data_of_alumini property
    let items;
     items=persons_data.map(item=><>
    <Person person_data={item.data_of_alumini} id_no={item.id_no}/>
    </>)
    return <>
    {items}
    </>

}

export function AluminiData(){

    let [have_alumini_data,setHave_alumini_data]=useState(false)
    let [count_of_alumini,setCount_of_alumini]=useState(1)
    const main_url=useSelector(state=>state.auth.url)
    let url=main_url+'alumini/getAlumini'
    let [alumini_data,setAlumini_data]=useState({})
    async function get5aluminiHanlder(e){
        let  headers= {
            'Content-Type': 'application/json'
          }
        e.preventDefault();
        let body={}
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

if(!have_alumini_data){
    return (
        <>
        this is page where u can find alumini
        <form>
            <input type="button" value="get the next 5 alumini" onClick={get5aluminiHanlder}/>
        </form>
        </>
    )
}
else{
    return (<>
<Split_to_persons persons_data={alumini_data}/>

        <form>
            <input type="button" value="get the next 5 alumini" onClick={get5aluminiHanlder}/>
        </form></>)
}
}