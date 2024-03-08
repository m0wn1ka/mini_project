import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ProtoTypePollution from "../../tasks/tasks/developers/proto_type_pollution/ProtoTypePollution";
export default function Routes2(){
    return(<>
    <Routes>
                        <Route
                            exact
                            path="/tasks/developer/protoTypePollution"
                            element={<ProtoTypePollution />}
                        >
                            
                        </Route>
                       
                            
                      
                        
    </Routes>
    </>)
}