
import Task1 from "../tasks/Task1";
import Home from "../Home";
import Admin from   '../admin/Admin'
import Profile from "../Profile";
import Help from "../Help";
import About from "../About";
import Login from '../authentication/Login'
import Register from "../authentication/Register";
import Alumini from "../alumini/Alumini"
import Counter from '../counter/Counter'
import { AluminiData } from "../alumini/AluminiData";
import TodoList from "../TodoList/TodoList";
import Routes2 from "./Routes2";
import Navbar from "../Navbar";
import {
    BrowserRouter,
    Routes,
    Route
    ,useLocation
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Vnavbar from "../Vnavbar";
import AdminProtectedRoute from './AdminProtectedRoute'
import { Provider } from 'react-redux'
import { useEffect, useState } from "react";
export default function Routes1(){
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="container-fluid h-100 container">
            <div className="row">
             {pathname=="/"?<></>: <div className=""><Navbar/></div>}  
             </div>
<div className="row">
    <div className="col-sm-4 h-100">
     {pathname=="/"?<></>: <div className="h-100"><Vnavbar/></div>}    
     </div>
          <br/>
        <div className="col-sm-8 h-100">
        <Routes>
                        
                        <Route
                            exact
                            path="/About"
                            element={<About />}
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
                            path="/TodoLIst"
                            element={
                                <ProtectedRoute>
                            <TodoList />
                            </ProtectedRoute>
                                }
                        >
                            
                        </Route>


                        
                    </Routes>
                    </div>
                    </div>//row
                    </div>//contanier
    )
}