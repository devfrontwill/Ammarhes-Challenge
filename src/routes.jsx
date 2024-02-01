import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Error from './pages/Error';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>} />          
                <Route path="/logon" element={<SignIn/>} />    
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}