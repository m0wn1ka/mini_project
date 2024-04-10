import { Link } from "react-router-dom"
export default function PracticeChallenges(){
    let cardsCustom='col-md-6 h-50 mt-4 mb-4'
    let cardCustom2='rounded border shadow bg-light  d-flex flex-column justify-content-center align-items-center h-100 w-100'
    return(

<div className='p-3 m-5 w-100'>
        <div className="container d-flex flex-column mb-4 justify-content-center align-items-center w-100 h-100">
            <div className="row"> <b>Practice Challenges</b></div>
             <div className='row d-flex  m-4 justify-content-center align-items-center w-100 h-75'>
                    <div className={cardsCustom}>
                        <div className={cardCustom2}>
                        <img src='./images/informative.png' height={100} width={100}/>
                        informative
                        </div>
                    </div>
                    <div className={cardsCustom}>
                        <div className={cardCustom2}>
                        <img src='./images/mobile_phone.png' height={100} width={100}/>
                        <Link to='/DeveloperTasks'>developer</Link>
                        </div>
                    </div>
                    <div className={cardsCustom}>
                        <div className={cardCustom2}>
                        <img src='./images/kids.png' height={100} width={100}/>
                        <Link to='#'>kids</Link>
                        </div>
                    </div>
                    <div className={cardsCustom}>
                        <div className={cardCustom2}>
                        <img src='./images/laptop.png' height={100} width={100}/>
                        <Link to='/#'>more to see?</Link>
                        </div>
                    </div>
            </div>
        </div>
</div>
    )
}