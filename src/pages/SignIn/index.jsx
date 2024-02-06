import { useState, useRef } from 'react';
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import { emailValidate, passwordValidate } from '../../utils/regex';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ButtonGlobal from '../../components/ButtonGlobal';
import Banner from '../../components/Banner';

export default function Signin() {

    const emailRef = useRef(null);
    const passwordRef = useRef()
    const codeErros = () => AuthErrorCodes();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    function navigateTo() {
        navigate('/', { replace: true })
    }

    function forgotPassword() {
        alert('Por favor, entre em contato com o suporte !');
    }

    async function handleSignIn(e) {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/logged', { replace: true })
            })
            .catch((err) => {
                if (AuthErrorCodes.INVALID_EMAIL || AuthErrorCodes.INVALID_PASSWORD) {
                    alert('Usuario ou Senha inválidos! Tente novamente.')
                    setEmail("");
                    setPassword("");
                    emailRef.current.focus();                
                }

            })
    }


    return (
        <>
            <Banner />
            <div className="container" >
                <h1 className='title'>Acessar sua conta</h1>
                <div className="form_container">
                    <form noValidate className='form__children' onSubmit={handleSignIn} >
                        <label htmlFor="Email" className='etiqueta'>Email</label>
                        <input
                            className='input__form'
                            placeholder='Seu email'
                            type='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ref={emailRef}
                        />

                        <label htmlFor="senha" className='etiqueta'>Senha</label>
                        <input
                            className='input__form'
                            placeholder='Sua senha'
                            maxLength={12}
                            type='password'
                            minLength={6}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={passwordRef}
                        />

                        <ButtonGlobal title="Entrar" />
                        <button className='btn_normal' disabled={true} onClick={forgotPassword} >Esqueci minha senha</button>
                        <button className='btn_normal' onClick={navigateTo} >Não possui uma conta? Cadastrar-se</button>

                    </form>
                </div>

            </div>
        </>
    )
}
