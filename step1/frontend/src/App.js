import React from 'react';
import './App.css' 
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routes1 from './components/Routes/Routes1';
import Routes2 from "./components/Routes/Routes2";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="container-fluid  App "  style={{ height: "100vh" }}>
   <BrowserRouter>
  
   <Routes1/>
   </BrowserRouter>
 </div>
  );
}

export default App;