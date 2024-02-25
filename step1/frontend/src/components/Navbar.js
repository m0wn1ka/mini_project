import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary justify-content-center ">
        <div class="container-fluid">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Home</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Profile" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Profile page</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/About" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>About</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Help" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Help</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Register" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Register</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Login" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Login</p></Link>
              </li>
            </ul>

            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Alumini" class="nav-link"><p style={{color:"white",fontWeight:"bolder"}}>Alumini</p></Link>
              </li>
            </ul>
        </div>
        
        </nav>
        </>
    )
}
