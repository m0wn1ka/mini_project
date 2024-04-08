import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light  justify-content-center ">
        <div class="container-fluid">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/" class="nav-link"><p style={{ fontWeight:"bolder"}}>Home</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Profile" class="nav-link"><p style={{ fontWeight:"bolder"}}>Profile page</p></Link>
              </li>
            </ul>
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/About" class="nav-link"><p style={{ fontWeight:"bolder"}}>About</p></Link>
              </li>
            </ul>
            {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Help" class="nav-link"><p style={{ fontWeight:"bolder"}}>Help</p></Link>
              </li>
            </ul> */}
            {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Register" class="nav-link"><p style={{ fontWeight:"bolder"}}>Register</p></Link>
              </li>
            </ul> */}
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Login" class="nav-link"><p style={{ fontWeight:"bolder"}}>Login</p></Link>
              </li>
            </ul>

            {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Alumini" class="nav-link"><p style={{ fontWeight:"bolder"}}>Alumini</p></Link>
              </li>
            </ul> */}

            {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/Admin" class="nav-link"><p style={{ fontWeight:"bolder"}}>Admin</p></Link>
              </li>
            </ul> */}

            {/* <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/AluminiData" class="nav-link"><p style={{ fontWeight:"bolder"}}>see our alumini</p></Link>
              </li>
            </ul> */}

            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/AluminiSIte" class="nav-link"><p style={{ fontWeight:"bolder"}}>alumini site</p></Link>
              </li>
            </ul>
        </div>
        
        </nav>
        </div>
    )
}
