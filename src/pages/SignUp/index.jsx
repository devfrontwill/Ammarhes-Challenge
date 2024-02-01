import './styles.css';

export default function Signup() {

    return (
        <div className="container" >
            <form className="formulario" >
                <h1 className='title'>Complete seu cadastro:</h1>
                <label htmlFor="Nome">Nome</label>
                <input
                    placeholder='Digite seu nome'
                    type='text'
                    minLength={3}
                    required
                />

                <label htmlFor="Email">Email</label>
                <input
                    placeholder='exemplo@exemplo.com'
                    type='email'
                    required
                />

                <label htmlFor="senha">Senha</label>
                <input
                    placeholder='***********'
                    type='password'
                    minLength={3}
                    required
                />
                <label htmlFor="Data de nascimento">Data de nascimento</label>
                <input
                    placeholder='05/03/2006'
                    type='date'
                    required
                />
                <label htmlFor="CPF">CPF</label>
                <input
                    placeholder='12345678911'
                    type='text'
                    maxLength={11}
                    required
                />
                <label htmlFor="CEP">CEP</label>
                <input
                    placeholder='12345-678'
                    type='text'
                    maxLength={8}
                    required
                />
                <label htmlFor="Logradouro">Logradouro</label>
                <input
                    placeholder='Rua do infinito'
                    type='text'
                    required
                />
                <label htmlFor="Cidade">Cidade</label>
                <input
                    placeholder='Rio de Janeiro'
                    type='text'
                    required
                />
                <label htmlFor="Estado">Estado</label>
                <input
                    placeholder='RJ'
                    type='text'
                    required
                />
                <button> Cadastrar </button>
            </form>

        </div>
    )
}
