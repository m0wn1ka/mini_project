import axios from 'axios'
import { useState } from 'react'
import {useSelector} from 'react-redux'
export function AluminiData(){
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
        if(res.status==200){
        // setCount_of_alumini(count_of_alumini+res.body.count)
        console.log('res.data is ',res.data)
        setAlumini_data(res.data)
        }
        else{
            console.log("that is the end of alumini data")
        }
    }


    return (
        <>
        this is page where u can find alumini
        <form>
            <input type="button" value="get the next 5 alumini" onClick={get5aluminiHanlder}/>
        </form>
        {JSON.stringify(alumini_data)}
        </>
    )
}