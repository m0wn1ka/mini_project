
import Task1 from "../tasks/Task1";
import Home from "../Home";
import Admin from   '../admin/Admin'
import Profile from "../Profile";
import Help from "../Help";
import MessageToAdmin from "../admin/MessageToAdmin";
import About from "../About";
import Login from '../authentication/Login'
import Register from "../authentication/Register";
import Alumini from "../alumini/Alumini"
import Counter from '../counter/Counter'
import { AluminiData } from "../alumini/AluminiData";
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
import AdminProtectedRoute from './AdminProtectedRoute'
import { Provider } from 'react-redux'
import { useEffect, useState } from "react";
export default function Routes1(){
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="container-fluid h-100">
            {/* {pathname=="/"?<></>: <div className=""><Navbar/></div>}   */}
      <div className="row h-100">
        <div className="col-sm-2 h-100 bg-dark text-white  d-flex justify-content-left align-items-center">
            <div>
          <Vnavbar/>
          </div>
        </div>
        <div className="col-sm-10 h-100  d-flex-col justify-content-center align-items-center">
        <Routes2/>
          <Routes>
                        
                        <Route
                            exact
                            path="/About"
                            element={<About />}
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

      </div>
    </div>
    )
}