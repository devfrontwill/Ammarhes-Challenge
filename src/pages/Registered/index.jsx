import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';

export default function Registered() {

    const navigate = useNavigate();

    function navigateTo() {
        navigate('/signin', { replace: true })
    }

    return (
        <>
            <Banner />
            <div className='container' >
                <h1 className='title' >Conta criada com sucesso.</h1>
                <button className='btn_generic' type='submit' onClick={navigateTo} >Fazer login</button>
            </div>
        </>
    )
}