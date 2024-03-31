import Card from "./Card"
import Task1 from "./tasks/Task1";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './css/Navbar1.css'
// import './css/Home.css's
export default function Home(){
    return (
        <div className="d-flex home   justify-content-center align-items-center h-100"  >
<div className="d-flex justify-content-center row ">

                    <div className="col-3 h-100 w-50">
                        <img src="./images/home_page.png" className="h-50 image-fluid"/>
                    </div>
                    <div className="col-9 " >
                    HI THERE WELCOME TO OUR MINI PROJECT...
                    </div>


            
            </div>        
          
    </div>
    )
}