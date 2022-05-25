import curiousAnimals from "./CuriosityAnimals"
import CuriosityAnimals from "./CuriosityAnimals"
import './exercicio8.css'
import JokesForYou from "./Jokes"
import './Jokes.css'
function Exercicio8() {



	return <><h1 className='title'>Exercício 8</h1>
	<div className="header__conteudo--background">
	<div>
		{curiousAnimals.map((fatos) => {
			const list = (
				<>
				<div className="body__conteudo--animalname">
				<ul>Animal: {fatos.animal}</ul>
				</div>
				<div className="body__conteudo--animalfact">
				<ul>Fact: {fatos.fact}</ul>
				</div>
				
				</>
			);
			return list;
		})}
	</div>
	</div>
	<br></br>

	<div className="JokesForYou">		<JokesForYou></JokesForYou>
	</div>

	
	
	</>
}

export default Exercicio8
