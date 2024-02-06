import Banner from '../../components/Banner';

import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    function navigateTo(){
        navigate('/', {replace: true})
    }

    return (
        <>
            <Banner/>
            <div className='container'>
                <h1>ERROR 404 PAGE NOT FOUND...</h1>
                <button  className='btn_generic' onClick={navigateTo} > Home</button>
            </div>
        </>
    )
}