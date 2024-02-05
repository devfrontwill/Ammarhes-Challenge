import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Registered from './pages/Registered';
import Logged from './pages/Logged';
import Error from './pages/Error';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>} />          
                <Route path="/signin" element={<SignIn/>} />
                <Route path='/registered' element={<Registered/>} />
                <Route path='/logged' element={<Logged/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}