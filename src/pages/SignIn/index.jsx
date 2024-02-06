import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ButtonGlobal from '../../components/ButtonGlobal';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function navigateTo() {
        navigate('/', { replace: true })
    }

    async function handleSignIn(e) {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/logged', { replace: true })
            })
            .catch((error) => {
                console.log(error);                          
                alert('Usuario e / ou senha inválidos, por favor tente novamente!');
                setEmail('');
                setPassword('')
            })
    }


    return (
        <div className="container" >
            <h1 className='title'>Acesse sua conta</h1>
            <div className="form_container">
                <form className='form__children' onSubmit={handleSignIn} >
                    <label htmlFor="Email" className='etiqueta'>Email</label>
                    <input
                        className='input__form'
                        placeholder='Seu email'
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha" className='etiqueta'>Senha</label>
                    <input
                        className='input__form'
                        placeholder='Sua senha'
                        type='password'
                        minLength={3}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <ButtonGlobal title="Entrar" />
                    <button className='btn_normal'>Esqueci minha senha</button>
                    <button className='btn_normal' onClick={navigateTo} >Não possui uma conta? Cadastrar-se</button>

                </form>
            </div>

        </div>
    )
}
