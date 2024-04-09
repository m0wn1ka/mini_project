import {Link} from 'react-router-dom'
export default function DeveloperTasks(){
    let cardCustom='h-25 bg-light shadow rounded w-50 p-3 m-3'
    return(<div className=''>
        {/* <div className='m-5 mx-auto'>DeveloperTasks</div> */}
        <div className='container  h-100 d-flex flex-column justify-content-center align-items-center w-100'>
            <div className={cardCustom}>
                prototype pollution
            </div>
            <div className={cardCustom}>
                jwt none
            </div>
            <div className={cardCustom}>
               <Link to='/tasks/developer/task1'>login as admin</Link>
            </div>
        </div>
    </div>)
}