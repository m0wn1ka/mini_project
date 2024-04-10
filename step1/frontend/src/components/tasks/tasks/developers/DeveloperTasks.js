import {Link} from 'react-router-dom'
export default function DeveloperTasks(){
    let cardCustom='h-50 bg-light shadow rounded w-50 p-3 m-3'
    let cardCustom2='h-100 w-100 d-flex flex-column m-2 justify-content-center align-items-center'
    return(<div className=''>
        {/* <div className='m-5 mx-auto'>DeveloperTasks</div> */}
        <div className='container  h-100 d-flex flex-column justify-content-center align-items-center w-100'>
            <div className={cardCustom}>
                <div className={cardCustom2}>
                    <img src='./images/laptop.png' height={100} width={100}/>
                   <p>prototype pollution</p> 
                </div>
                
            </div>
            <div className={cardCustom}>
                <div className={cardCustom2}>
                    <img src='./images/kids.png' height={100} width={100}/>
                   <p>jwt none</p> 
                </div>
                
            </div>
            <div className={cardCustom}>
                <div className={cardCustom2}>
                    <img src='./images/man_clock.png' height={100} width={100}/>
                    <Link to='/tasks/developer/task1'>login as admin</Link>
                </div>
                
            </div>
        </div>
    </div>)
}