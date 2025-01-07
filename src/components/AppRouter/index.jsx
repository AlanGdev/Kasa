import { Routes,Route } from "react-router-dom";
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Logement from '../../pages/Logement'
import Error from '../../pages/Error'
function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Apropos' element={<Apropos/>} />
            <Route path='/Logement/:id' element={<Logement/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}
export default AppRouter