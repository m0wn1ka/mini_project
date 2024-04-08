export default function PracticeChallenges(){
    let cardsCustom='col-md-6 h-50 rounded border shadow bg-light mt-4 mb-4'
    return(

<div className='p-3 m-5 w-100'>
        <div className="container d-flex flex-column mb-4 justify-content-center align-items-center w-100 h-100">
            <div className="row"> Practice Challenges</div>
             <div className='row d-flex  m-4 justify-content-center align-items-center w-100 h-75'>
                    <div className={cardsCustom}>informative</div>
                    <div className={cardsCustom}>developer</div>
                    <div className={cardsCustom}>kids</div>
                    <div className={cardsCustom}>more to see?</div>
            </div>
        </div>
</div>
    )
}