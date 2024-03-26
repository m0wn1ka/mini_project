export default function Person({name,id_no,image_url,alumini_data,min_height}){
   let obj_data=Object.keys(alumini_data).map(prop1=>{
    return (
        <tr>
            <td>
                {prop1}
            </td>
            <td>
            { alumini_data[prop1]}
            </td>
        </tr>
    )
   })
   
   return( <div className='border border-secondary rounded d-flex justify-content-center align-items-center flex-column overflow-auto bg-secondary bg-gradient w-100 person' style={{minHeight: {min_height}}}>
         
    <div className="d-flex-col justify-content-center">
    name:{name}<br/>{min_height}
    id_no:{id_no}<br/>
    image:<img src={image_url} style={{height:'20px',width:'20px'}} alt="image"/><br/>
    more info:
    </div>
    <table>
        {obj_data}
        </table>
    </div>)
}