import axios from 'axios'
import '../../App.css'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import Split_to_persons from './Split_to_person'
// function Person({person_data,id_no}){
    
//     //we get a single persons data as a object 
//     const items=Object.keys(person_data).map(attrribute=>
//     <>
//     <div className="row">
//     <div className="col">{attrribute}</div>
//     <div className="col">{person_data[attrribute]}</div>
//    </div>
//     </>
    
//     )
    
//     return <>
//     <h1>{id_no}</h1>
//     <div className='container '>
//         {items}
//     </div>
  
//     </>
// }
// function Split_to_persons({persons_data}){
//     //in this fucntion we get data of multiple persons
//     // res.data.alumini_data is input 
//     //so we loop thrugh the arary 
//     //for each element we call/render person with .data_of_alumini property
//     let items;
//      items=persons_data.map(item=><>
//     <Person person_data={item.data_of_alumini} id_no={item.id_no}/>
//     </>)
//     return <>
//       <div className='container-fluid flex-container '>
//     <div className='row flex-grow-1'> 
//     <div className='col card'>{items[0]}</div>
//     <div className='col card'>{items[1]}</div>
//     </div>

//     <div className='row flex-grow-1'> 
//     <div className='col card'>{items[2]}</div>
//     <div className='col card'>{items[3]}</div>
//     </div>
//     </div>
//     </>

// }

export function AluminiData(){

    let [have_alumini_data,setHave_alumini_data]=useState(false)
    let [count_of_alumini,setCount_of_alumini]=useState(1)
    const main_url=useSelector(state=>state.auth.url)
    let url=main_url+'alumini/getAlumini'
    let [alumini_data,setAlumini_data]=useState({})
    async function get4aluminiHanlder(e){
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
    
          <div className='container-fluid'>
        this is page where u can find alumini
        <form>
            <input type="button" value="get the next 4 alumini" onClick={get4aluminiHanlder}/>
        </form>
        </div>
    
    )
}
else{
    return (
    <div className='container-fluid ' >
    <Split_to_persons persons_data={alumini_data}/>
        <div className='footer'>
        <form>
            <input type="button" value="get the next 4 alumini" onClick={get4aluminiHanlder}/>
        </form>
        </div>
        </div>
        )
}
}