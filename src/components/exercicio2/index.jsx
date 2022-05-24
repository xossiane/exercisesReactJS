import BtnOnClick from './BtnOnClick'
import './index.css'

function myAlert(props){
	alert("Você clicou aqui!");
}



function Exercicio2() {
	return ( 
	<><h1 className='title'>Exercício 2</h1>
	<div className="Btn__container">
	<BtnOnClick event={myAlert}>Clique aqui!</BtnOnClick>

	</div>
	</>
	)
}

export default Exercicio2
