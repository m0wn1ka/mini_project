import Person from "./Person";
export default function Split_to_persons({persons_data}){
    //in this fucntion we get data of multiple persons
    // res.data.alumini_data is input 
    //so we loop thrugh the arary 
    //for each element we call/render person with .data_of_alumini property
    let items;
     items=persons_data.map(item=><>
    <Person person_data={item.data_of_alumini} id_no={item.id_no} name={item.name} image_url={item.image_url}/>
    </>)
    return <>
      <div className='container-fluid flex-container '>
    <div className='row flex-grow-1'> 
    <div className='col card'>{items[0]}</div>
    <div className='col card'>{items[1]}</div>
    </div>

    <div className='row flex-grow-1'> 
    <div className='col card'>{items[2]}</div>
    <div className='col card'>{items[3]}</div>
    </div>
    </div>
    </>

}