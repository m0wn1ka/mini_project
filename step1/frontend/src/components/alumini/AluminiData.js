import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Person from './Person';

export default function AluminiData() {
    const main_url = useSelector(state => state.auth.url);
    const [alumini_data, setAlumini_data] = useState([]);
    const [hasAluminiData, setHasAluminiData] = useState(false);

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

    return (
        <div className="container row">
            <div className='col-3'>
                <button onClick={getAluminiData}>get data</button>
                col1 we have filters here
            </div>
            <div className='col-9'>
                col2 we have data here
                <div className="row">
                    {hasAluminiData && alumini_data.map(p1 =>
                        <div key={p1.id} className='col-3 '>
                            <Person name={p1.name} id_no={p1.id_no} image_url={p1.image_url} alumini_data={p1.data_of_alumini} min_height='calc(100vh/4)'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
