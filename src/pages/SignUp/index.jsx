import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConnection';
import './styles.css';
import { useNavigate } from 'react-router-dom'
import ButtonGlobal from '../../components/ButtonGlobal';



export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function navigateTo() {
        navigate('/signin', { replace: true })
    }

    async function handleSignUp(e) {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/registered', { replace: true })
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className="container" >
            <h1 className='title'>Preencha os campos abaixo para criar sua conta!</h1>
            <div className="form_container">
                <form className='form__children' onSubmit={handleSignUp}>
                    <label className='etiqueta' htmlFor='nome' >Nome</label>
                    <input
                        className='input__form'
                        placeholder='Digite seu nome'
                        type='text'
                        minLength={3}
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="Email" className='etiqueta'>Email</label>
                    <input
                        className='input__form'
                        placeholder='SeuMelhorEmail@exemplo.com'
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha" className='etiqueta'>Senha</label>
                    <input
                        className='input__form'
                        placeholder='***********'
                        type='password'
                        minLength={3}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div class="formulario__termos">
                        <input name="termos" class="termos__input" type="checkbox" required />
                        <p class="termos__texto">Li e estou ciente quanto às condições de tratamento dos meus dados
                            conforme
                            descrito na Política
                            de
                            Privacidade.</p>
                    </div>
                    <ButtonGlobal title="Cadastrar" />
                    <button className="btn_normal" onClick={navigateTo}>Já possui uma conta? Entrar</button>

                </form>
            </div>

        </div>
    )
}