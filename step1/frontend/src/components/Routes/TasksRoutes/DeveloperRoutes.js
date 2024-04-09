import {
    BrowserRouter,
    Routes,
    Route
    
} from "react-router-dom";
import LoginAsAdmin from "../../tasks/tasks/developers/LoginAsAdmin";
import JwtNone from "../../tasks/tasks/developers/JwtNone";
import ProtoTypePollution from "../../tasks/tasks/developers/proto_type_pollution/ProtoTypePollution";
export default function DeveloperRoutes(){
    return(<>
    <Routes>
                        <Route
                            exact
                            path="/tasks/developer/protoTypePollution"
                            element={<ProtoTypePollution />}
                        >
                            
                        </Route>
                        <Route exact path='/tasks/developer/task1' element={<LoginAsAdmin/>}></Route>
                        <Route
                            exact
                            path="/tasks/developer/jwtNone"
                            element={<JwtNone />}
                        >
                            
                        </Route>
                       
                            
                      
                        
    </Routes>
    </>)
}