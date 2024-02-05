import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function navigateTo(){
        navigate('/', {replace: true})
    }

    async function handleSignIn(e) {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/logged', {replace: true} )                
            })
            .catch((error) => {

                if (error.code === 'auth/invalid-password') {
                    alert("Senha inválida");

                } else if (error.code === 'auth/invalid-email') {
                    alert("Email inválido!");

                } else if (error.code === 'auth/user-not-found') {
                    alert("Este usuario não existe!")
                }
                setEmail('');
                setPassword('');
            })
    }


    return (
        <div className="container" >
            <h1 className='title'>Acesse sua conta</h1>
            <div className="formulario">
                <form className='form' onSubmit={handleSignIn} >
                    <label htmlFor="Email">Email</label>
                    <input
                        placeholder='exemplo@exemplo.com'
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        placeholder='***********'
                        type='password'
                        minLength={3}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'> Entrar </button>
                    <button onClick={navigateTo} >Não possui um cadastro? Cadastrar-se</button>

                </form>
            </div>

        </div>
    )
}
