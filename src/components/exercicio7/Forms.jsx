
import { useForm } from 'react-hook-form'


function Form (){

    const {register, handleSubmit} = useForm();


    

    const CadastrarUsuario = (e) => {
        alert('Bem vindo ' + (firstName)+ ' ' + (lastName));
    };



    return (
        <div className="body__container--input">
            
            <form onSubmit={handleSubmit(CadastrarUsuario)}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name = "firstName" id="firstName" {...register("firstName")} placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <label>Sobrenome:</label>
                    <input type="text" name= "lastName"  id="lastName" {...register("lastName")} placeholder="Digite seu sobrenome" />
                </div>
                <div>
                    <input type="submit" value="Diga oi pra mim!"/>
                </div>
            </form>
        </div>
    )




}

export default Form