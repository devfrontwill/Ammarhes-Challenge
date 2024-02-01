import './styles.css';

export default function Signin(){
    return(
        <div className="container">
            <form className="formulario" >
                <h1>Ammarhes Challenge</h1>
                <label htmlFor="Email">Nome</label>
                <input
                    placeholder='Digite seu email'
                    type='text'                    
                    required
                />
                <label htmlFor="Senha">Senha</label>
                <input
                    placeholder='*********'
                    type='password'
                    minLength={6}
                    required
                />

                <button> Acessar </button>
            </form>
        </div>
    )
}
