import { Link } from "react-router-dom"
import '../../App.css'
import './AluminiSite.css'
import '../alumini/Alumini'
import Alumini from "../alumini/Alumini"
import Get_2_alumini from "../alumini/Get_2_alumini"
export default function AluminiSite(){
    return(<div className="bg-light h-100 w-100 self-no-padding aluminisite">
        <div className="self-full-height h-100 self-no-padding">
                            <nav class="navbar navbar-expand-lg bg-white text-dark">
                                <div class="container-fluid">
                            <div className="row container-fluid">
                                <div className="col-8 container-fluid d-flex justify-content-center"><Link to='https://www.rgukt.in/'><p className="text-dark">RGUKT IIIT |Alumini</p></Link></div>
                                <div className="col container-fluid">
                                        <ul class="navbar-nav d-flex flex-row  justify-content-end">
                                                <li class="nav-item">
                                                    <Link to="/" class="nav-link "><p>Home</p></Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Login" class="nav-link"><p>Login/Register</p></Link>
                                                </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </nav>
                    {/* align items center makes vertically centerd and justify contnet center horizontally */}
                    <div className="self-image-bg text-secondary d-flex align-items-center justify-content-center ">
                        <div className="fs-1">
                            RGUKT   Alumini<br/>
                    WELCOME...
                        </div>
                        </div>
            
        </div>
        <div className="self-full-height bg-light d-flex justify-content-center align-items-center h-100">
            a block about rgukt alumini
           

        </div>
        <div className="self-full-height  row"  >
            <div className="col-4 d-flex h-100 align-items-center ">
                <img src="./alumini_image.webp" className="img-fluid h-50 "/>
            </div>
            <div className="col-8"  data-aos="flip-right">
            <Alumini/>
            </div>
           
            {/* a form to be filled by alumini */}

        </div>

        <div className="self-full-height bg-light d-flex justify-content-center align-items-center h-100" data-aos="zoom-in" >
               
            <Get_2_alumini/>

        </div>
         </div>)
}