import {Link} from 'react-router-dom'
export default function LandingPage() {
let serviceCardCustom='col-lg-6 border rounded p-3 mb-4 bg-light m-n1 h-75 d-flex align-items-center justify-content-center shadow rounded'
    return (
        <div >
            <div className="container h-50 w-100  m-4 shadow  d-flex justify-content-center align-items-center" >
                        <div className="btn btn-secondary">let us get started</div>
            </div>
            <div className="container h-50 w-100 m-4 shadow rounded d-flex flex-column justify-content-center align-items-center">
                         <div className="p-4 m-4">About Us</div>
                        <div className="p-4 mb-4 text-justify">
                        Lorem ipsum dolor sit amet consectetur. Faucibus tortor habitant consequat ornare commodo quis diam suspendisse. Integer a tincidunt nec amet odio sed velit sed. Arcu nibh mauris turpis felis. Mattis mi tempor sapien suspendisse. Egestas commodo blandit nam duis mollis id egestas nisl. Nec morbi risus tincidunt amet cursus facilisis. Enim purus amet turpis sed nec orci arcu tellus mauris. At eget elit amet rhoncus nibh vestibulum eu vulputate. In integer id dictum pharetra fringilla consectetur sagittis viverra. Ut tellus gravida vitae donec arcu arcu ipsum mattis. Et nibh quis nibh posuere egestas et lorem lobortis. Pulvinar id dictumst enim amet morbi eros faucibus pulvinar urna. Mollis tincidunt libero dui proin purus. Euismod enim et viverra amet ipsum. 
                            Non elit id ultricies sem risus blandit porttitor rhoncs
                        </div>
                        <div className="btn btn-secondary rounded"> Read More</div>
            </div>
            <div className="container h-75 w-100  shadow rounded d-flex flex-column justify-content-center align-items-center">
                        <div className="p-1 mb-4">our services</div>
                        <div className="d-flex justify-content-center p-3 row w-100 m-4">
                                <div className={serviceCardCustom}><div><Link to='/PracticeChallenges'>practice secure developement</Link></div></div>
                                <div className={serviceCardCustom}><div><Link to='/AluminiSIte'>alumini site</Link></div></div>
                                <div className={serviceCardCustom}><div>forum site</div></div>
                                <div className={serviceCardCustom}><div>todo list  site</div></div>

                        </div>
                        <div className="btn btn-secondary rounded m-4"> Read More</div>
            </div>
            <div className="container h-50 shadow rounded d-flex flex-column justify-content-center align-items-center">
                    <div className="row m-3">Contact Us</div>
                    <div className="row fixed-left shadow"> Email</div>
                    <input className='row bg-secondary w-75 rounded shadow' type="email"/>
                    <div className="row shadow"> Message</div>
                    <input className="row shadow bg-secondary w-75 h-50 rounded" type='textarea '/>
                    <div className='btn btn-secondary rounded m-3'>Send</div>
                
            </div>
            <div className="container h-25 bg-light d-flex justify-content-center align-items-center rounded p-3  border shadow">
              <div>footer</div>
            </div>
        </div>
    );
}
