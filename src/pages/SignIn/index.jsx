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

    const [emailErr, setEmailErr] = useState(false);
    

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

    const validateEmail = () => {
        if (!emailValidate.test(email)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }

    const validate = () => {
        if (!emailValidate.test(email)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }

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
                            id='Email'
                            className='input__form'
                            placeholder='Seu email'
                            type='email'
                            onBlur={validateEmail}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            ref={emailRef}
                        />

                        {emailErr &&
                            <p className="error_msg">Por favor digite um email válido</p>
                        }

                        <label htmlFor="senha" className='etiqueta'>Senha</label>
                        <input
                            id='senha'
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

                        <button className='btn_generic' type='submit' onClick={validate}>Entrar</button>
                        <button className='btn_normal' disabled={true} onClick={forgotPassword} >Esqueci minha senha</button>
                        <button className='btn_normal' onClick={navigateTo} >Não possui uma conta? Registre-se</button>

                    </form>
                </div>

            </div>
        </>
    )
}
