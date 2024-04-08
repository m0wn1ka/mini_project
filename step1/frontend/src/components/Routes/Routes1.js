
import Task1 from "../tasks/Task1";
import Home from "../Home";
import Gauth from "../Gauth/Gauth";
import Admin from   '../admin/Admin'
import Profile from "../Profile";
import Help from "../Help";
import PracticeChallenges from "../PracticeChallenges";
import MessageToAdmin from "../admin/MessageToAdmin";
import About from "../About";
import Login from '../authentication/Login'
import Register from "../authentication/Register";
import Alumini from "../alumini/Alumini"
import Counter from '../counter/Counter'
import  AluminiData  from "../alumini/AluminiData";
import TodoList from "../TodoList/TodoList";
import Routes2 from "./Routes2";
import Navbar from "../Navbar";
import Connect from "../connections/Connect";
import {
    BrowserRouter,
    Routes,
    Route
    ,useLocation
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Vnavbar from "../Vnavbar";
import AluminiSite from "../AluminiSite/AluminiSite";
import AdminProtectedRoute from './AdminProtectedRoute'
import { Provider } from 'react-redux'
import { useEffect, useState } from "react";
import '../../App.css'
import LadningPage from "../LandingPage";

import DeveloperRoutes from  './TasksRoutes/DeveloperRoutes'
import LandingPage from "../LandingPage";
export default function Routes1(){
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="container-fluid w-100 self-no-padding routes d-flex flex-column" style={{ height: "100vh" }}  >
            
        {pathname!='/AluminiSIte'?<Navbar/>:<></>}
           
         
          
            <div className=" row  w-100 self-no-padding d-flex innerRoutes  justify-content-center" style={{ height: "100vh" }} >
           
  <DeveloperRoutes/>
     <Routes2/>
          <Routes>
          <Route
                            exact
                            path="/"
                            element={<LandingPage />}
                        >
                            
                        </Route>
                        <Route path="/Landing" element={<LadningPage/>}></Route>
                        
                        <Route
                            exact
                            path="/About"
                            element={<About />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Gauth"
                            element={<Gauth />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/AluminiSite"
                            element={<AluminiSite />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/MessageToAdmin"
                            element={
                                <ProtectedRoute>
                            <MessageToAdmin />
                            </ProtectedRoute>
                            }
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Connect"
                            element={<Connect />}
                        >
                            
                        </Route>
                        

                        <Route
                            exact
                            path="/Profile"
                            element={
                                <ProtectedRoute>
                            <Profile />
                             </ProtectedRoute>
                        }

                        >
                            
                        </Route>
                        
                        <Route
                            exact
                            path="/Help"
                            element={<Help />}
                        >

                        </Route>
                        <Route
                            exact
                            path="/Register"
                            element={<Register />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Login"
                            element={<Login />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Alumini"
                            element={<Alumini />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Counter"
                            element={<Counter />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Admin"
                            element={
                                <AdminProtectedRoute>
                            <Admin />
                             </AdminProtectedRoute>
                        }

                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/AluminiData"
                            element={
                               
                            <AluminiData />
                            
                        }

                        >
                            
                        </Route>


                        <Route
                            exact
                            path="/AluminiSIte/AluminiData"
                            element={
                               
                            <AluminiData />
                            
                        }

                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/TodoLIst"
                            element={
                                <ProtectedRoute>
                            <TodoList />
                            </ProtectedRoute>
                                }
                        >
                            
                        </Route>
                        <Route path="/PracticeChallenges" element={<PracticeChallenges/>}></Route>


                        
                    </Routes>
        </div>
      

   </div>
   
    )
}