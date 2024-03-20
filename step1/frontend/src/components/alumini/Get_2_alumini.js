import axios from 'axios'
import {useEffect,useState} from 'react'
import { useSelector} from 'react-redux'
import Person from './Person'
export default function Get_2_alumini(){
    const main_url=useSelector((state)=>state.auth.url)
    let [alumini2data,setAlumini2data]=useState([])
    let url=main_url+'alumini/get2Alumini'
    let [loaded,setLoaded]=useState(false)
useEffect(()=>{
    async function get2aluminiHanlder(){
        let  headers= {'Content-Type': 'application/json'}
        let body={}
        let res=await axios.post(url,body,{headers})
        if(res.status==200 ){
        console.log("get 2 alumini res is ",res.data.alumini_data)
        setAlumini2data(res.data.alumini_data)
        console.log("use state data is ",alumini2data)
    }
        else{
            console.log("that is the end of alumini data",res.data.alumini_data)
        }
    }
    let result=get2aluminiHanlder()
    setLoaded(true)
},[])

if(!loaded){
    return(<>
    soon u will somehitng else</>)
}
else{


    return(
    <>
    {alumini2data.map(p1=>
        <div>
            <Person name={p1.name} id_no={p1.id_no} image_url={p1.image_url} alumini_data={p1.data_of_alumini}/>    
        </div>)}
    ihi
    </>)
}
}