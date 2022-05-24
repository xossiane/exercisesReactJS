import {useState} from 'react'

function Form (){
    function CadastrarUsuario(e){
        
        e.preventDefault()
        alert("Oi pessoa" + JSON.stringify({name} + {lastName}))

    }

    const [name, setName] = useState()
    const [lastName, setlastName] = useState()


    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Sobrenome:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Digite seu sobrenome" onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Diga oi pra mim!"/>
                </div>
            </form>
        </div>
    )




}

export default Form