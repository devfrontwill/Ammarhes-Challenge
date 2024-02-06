import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';

export default function Logged() {

    const navigate = useNavigate();

    async function Logout() {
        await signOut(auth)
            .then(() => {
                navigate('/signin', { replace: true })
                alert('Usuario deslogado com sucesso!');
            })
    }

    return (
        <>
            <Banner />
            <div className='container' >
                <h1 className='title' > Seja bem vindo à Ammarhes Challenge  </h1>
                <button  className='btn_generic' type='submit' onClick={Logout} >Sair</button>
            </div>
        </>
    )
}