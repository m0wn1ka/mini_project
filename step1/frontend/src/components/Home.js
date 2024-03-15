import Card from "./Card"
import Task1 from "./tasks/Task1";
import { Link } from "react-router-dom";
import './css/Navbar1.css'
import './css/Home.css'
export default function Home(){
    return (
        <div className="container-fluid center">
        <center>
    <div className="navbar">
        <ul className="navbar-items">
            <li className="navbar-item"><Link to='/' className="navbar-item">HOME</Link></li>
            <li className="navbar-item"><Link to='/About' className="navbar-item">Dashboard</Link></li>
        
        </ul>
    </div>
    </center>
            <div className="container-fluid center">
            HI THERE<br/>WELCOME TO OUR MINI PROJECT...
            </div>
            <div className="container-fluid center">
            let us dive in
            </div>
    </div>
    )
}