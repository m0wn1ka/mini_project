import Card from "./Card"
import Task1 from "./tasks/Task1";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <>
       <div className="container-fluid ">
        <div className="row">
            <div className="col-md-4">
                <Card>
                    <Link to="/Task1">
                <Task1/>
                </Link>
                </Card>
            </div>
            <div className="col-md-4">
            <Card>
                <Task1/>
            </Card>
            </div>
            <div className="col-md-4">
            <Card>
                <Task1/>
            </Card>
            </div>
        </div>

       </div>
        </>
    )
}