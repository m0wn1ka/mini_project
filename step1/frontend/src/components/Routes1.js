
import Task1 from "./tasks/Task1";
import Home from "./Home";
import Profile from "./Profile";
import Help from "./Help";
import About from "./About";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
export default function Routes1(){
    return (
        <>
        <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/About"
                            element={<About />}
                        >
                            
                        </Route>
                        

                        <Route
                            exact
                            path="/Profile"
                            element={<Profile />}
                        >
                            
                        </Route>
                        
                        <Route
                            exact
                            path="/Help"
                            element={<Help />}
                        >

                        </Route>
                    </Routes>
        </>
    )
}