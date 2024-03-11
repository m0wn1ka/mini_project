import {Routes,Route} from 'react-router-dom'
import Help from './Help'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
export default function Routes1(){
    return(<>
    <Routes>

        <Route exact path='/' element={<Help/>}></Route>
        <Route exact path='/Register' element={<Register/>}></Route>
        <Route exact path='/Login' element={<Login/>}></Route>
        <Route exact path='/Profile' element={<Profile/>}></Route>

    </Routes>
    </>)
}