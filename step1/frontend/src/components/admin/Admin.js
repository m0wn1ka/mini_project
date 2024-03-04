import axios from 'axios'
import { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'

export default function Admin(){
    let [id_no,setId_no]=useState("")
    let [alumini_data,setAlumini_data]=useState('')
    let key_of_data=1;
    let main_url=useSelector(state=>state.auth.url)
    let res=''
    let [res_id,setRes_id]=useState("")
   async function fetchAluminiToVerifyHandler(){
    
        res=await axios.get(main_url+'alumini/verify')
        console.log('res from alumini get verify',res)
        setId_no(res.data.id_no)
        if(res.status!=203){
        let res_id=res.data._id
       console.log("Res id ",res_id)
        res=res.data.data_of_alumini
        setRes_id(res_id)
        res=JSON.stringify(res)
        // console.log(res,typeof(res.data))
        setAlumini_data(res)
        }
        else{
            setAlumini_data("all are verified")
        }
       
    
    }
    async function verfiyAluminiHandler(e){
        console.log("verify called",res_id)
            if(res_id!=''){
            let  headers= {
                'Content-Type': 'application/json'
              }
            e.preventDefault();
            let body={}
            body.id=res_id
            body.verify=true
            console.log("verify alumini cale")
            let response=await axios.post(main_url+'alumini/verify',body,{headers})
            if (response.status==200){
              setAlumini_data("vefied successfuly")
              
            }
            else{
                setAlumini_data("u need to fetech alumin data to verify")
            }

            }
        }


        async function deVerfiyAluminiHandler(e){
            console.log("deverify called",res_id)
                if(res_id!=''){
                let  headers= {
                    'Content-Type': 'application/json'
                  }
                e.preventDefault();
                let body={}
                body.id=res_id
                body.verify=false
                console.log("verify alumini cale")
                let response=await axios.post(main_url+'alumini/verify',body,{headers})
                if (response.status==200){
                  setAlumini_data("devefied successfuly")
                  
                }
                else{
                    setAlumini_data("u need to fetech alumin data to deverify")
                }
    
                }
            }
           
    

    return (<>
    admin page
    <form>
        <input type="button"  value="fetch alumin to verify" onClick={fetchAluminiToVerifyHandler}/>
    </form>
    {id_no}
    {alumini_data}
    <form>
        <input type="button" value="verfiy the alumini" onClick={verfiyAluminiHandler}/>
    </form>

    <form>
        <input type="button" value="deverfiy the alumini" onClick={deVerfiyAluminiHandler}/>
    </form>
    </>
    )
    }