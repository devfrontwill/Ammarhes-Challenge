import { useNavigate } from 'react-router-dom';

export default function Registered(){

    const navigate = useNavigate();

    function navigateTo(){
        navigate('/signin', {replace: true})
    }

    return(
        <div>
            <h1>Conta criada com sucesso FAZER LOGIN</h1>
            <button type='submit' onClick={navigateTo} >Fazer login</button>
        </div>
    )
}