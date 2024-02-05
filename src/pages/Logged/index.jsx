import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';

export default function Logged(){

    const navigate = useNavigate();

    async function Logout(){
        await signOut(auth)
        .then(() => {
            navigate('/signin', {replace: true} )
        })
    }

    return(
        <div>
            <h1> Seja bem vindo à Ammarhes Challenge Usuario </h1>
            <button type='submit' onClick={Logout} >Sair</button>
        </div>
    )
}