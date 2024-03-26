import axios from 'axios'
import {useEffect,useState} from 'react'
import { useSelector} from 'react-redux'
import Person from './Person'
import {Link} from 'react-router-dom'
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
        <div className='d-flex justify-content-around get_2_alumini w-100 row d-flex'>
        {alumini2data.map(p1 =>
            <div className='col col-4 d-flex '> 
                <Person name={p1.name} id_no={p1.id_no} image_url={p1.image_url} alumini_data={p1.data_of_alumini} min_height='calc(100vh/2)'/>    
            </div>)}
            <div className=' col col-4 d-flex border border-secondary rounded d-flex overflow-auto   bg-secondary bg-gradient justify-content-center align-items-center'>
                 <Link to='#'>
                  see more of them?</Link>
            </div>
    </div>)
}
}