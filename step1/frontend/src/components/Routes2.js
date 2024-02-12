import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Task1 from "./tasks/Task1";
export default function Routes2(){
    return(<>
    <Routes>
    <Route
                            exact
                            path="/Task1"
                            element={<Task1 />}
                        >
                            
                        </Route>
                        
    </Routes>
    </>)
}