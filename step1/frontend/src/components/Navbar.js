import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <div class="w-100 p-3 container-fluid border rounded">
  <div class="row">
    <div class="col-sm-3">
    <Link to="/">Home</Link>
    </div>
    <div class="col-sm-3">
    <Link to="/Profile">Profile</Link>
    </div>
    <div class="col-sm-3">
    <Link to="/About">About</Link>
    </div>
    <div class="col-sm-3">
    <Link to="/Help">Help</Link>
    </div>
  </div>
</div>
       </>
    )
}