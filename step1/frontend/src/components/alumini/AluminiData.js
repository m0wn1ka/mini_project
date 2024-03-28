import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Person from './Person';

export default function AluminiData() {
    const main_url = useSelector(state => state.auth.url);
    const [alumini_data, setAlumini_data] = useState([]);
    const [hasAluminiData, setHasAluminiData] = useState(false);
    const [filters,setFilters]=useState({})
    async function getAluminiData() {
        try {
            const response = await axios.post(main_url + 'alumini/getAlumini');
            console.log("res is ", response.data.alumini_data);
            setAlumini_data(response.data.alumini_data);
            setHasAluminiData(true); 
        } catch (error) {
            console.error('Error fetching alumini data:', error);
        }
    }
    async function addFilterHandler(e){
        let key1=document.getElementById("key1").value;
        if(key1!="name"){
        key1="data_of_alumini."+key1
        }
        let value1=document.getElementById("value1").value
        setFilters(values=>({...values,[key1]:value1}))
        document.getElementById("key1").value=''
        document.getElementById("value1").value=''
    }
    async function getAluminiWithFilterHandler(){
        console.log("the filter values are",filters)

        try {
            let body={"data_of_alumini":filters}
            let  headers= {'Content-Type': 'application/json' }
            const response = await axios.post(main_url + 'alumini/getAluminiFiltered',body=body,headers=headers);
            console.log("res is ", response.data.alumini_data);
            setAlumini_data(response.data.alumini_data);
            setHasAluminiData(true); 
        } catch (error) {
            console.error('Error fetching alumini data:', error);
        }
        setFilters({})
    }

    return (
        <div className="container row">
            <div className='col-3'>
                <button onClick={getAluminiData}>get all data</button>
                <form>
                    <div className='container w-100'>
                        <div className='row'>
                            <div className='col'>filter_name</div>
                            <div className='col'><input type="text" name="key1" id="key1"/></div>
                            </div>
                            <div>
                            <div className='col'>filter value</div>
                            <div className='col'><input type="text" name="value1" id="value1"/>
                            <input type="button" value="+" onClick={addFilterHandler}/></div>
                            </div>
                            <div>
                            
                            <div className='col'><input type="button" value="getAluminiWithFilter" onClick={getAluminiWithFilterHandler}/></div>
                        </div>

                    </div>
               
                  
                  
                </form>
               
            </div>
            <div className='col-9'>
               
                <div className="row">
                    {hasAluminiData && alumini_data.map(p1 =>
                        <div key={p1.id} className='col-3 pb-3 '>
                            <Person name={p1.name} id_no={p1.id_no} image_url={p1.image_url} alumini_data={p1.data_of_alumini} min_height='calc(100vh/4)'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
