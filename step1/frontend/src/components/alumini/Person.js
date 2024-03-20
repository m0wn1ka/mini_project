export default function Person({name,id_no,image_url,alumini_data}){
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
   
   return(<>
    name:{name}<br/>
    id_no:{id_no}<br/>
    image_ulr:{image_url}<br/>
    single alumini data
    <table>
        {obj_data}
        </table>
    </>)
}