import Card from "./Card"
import Task1 from "./tasks/Task1";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <>
       <div className="container-fluid ">
        hi welcome 
        this is a place where u can find 
        <ol>
            <li>learning path to learn about security</li>
            <li>
                have a personzlized account by registering 
            </li>
       <li>alumini page</li>
            <ul>
            <li>u can meet our alumini and find them by search filters</li>
            <li>if u are one of alumini u can fill the form of alumini </li>
            <li>admin will verify the data to protrct the integrity and authenticity of data</li>
           
            </ul>
            <li>
             <Link to="/TasksHomePage" > tasks</Link>
            </li>
            <ul>
                <li>we have tasks in various caegoresi </li>
                <li>for kids,devlopers,informative caterogry...</li>
                <li>the common developer misconceptions and how they are vulnerable</li>
                <li>in informateive caterogry we explain  issues like with usign public wifi</li>
                <li>we will be generating certifications and they will be evefiable ,we use some cryptography for that</li>
            </ul>
            <li>
                there will a suggestion section where one cans suggest us what feature need to be added
            </li>
           
          
        </ol>

       </div>
        </>
    )
}