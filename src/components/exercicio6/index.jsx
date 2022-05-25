import AnimalsList2 from "../exercicio5/AnimalsList"
import RenderingAnimals from "./RenderingAnimals";


function Exercicio6() {

    

	return <><h1 className='title'>Exercício 6</h1>
	<div className="body__content--animalsAndInfos">
	<p>Ok, we have those animals: </p>
	<AnimalsList2></AnimalsList2>
	<p>And they look like that:</p>
	<div>
		{RenderingAnimals.map((emojis) => {
			const list = (
				<>
				<ul>
					<li key="1">Animal: {emojis.animal}</li>
					<li key="2">Emoji: {emojis.emoji}</li>
				</ul>
				</>
			);
			return list;
		})}
		</div>
	</div>
	</>
}



export default Exercicio6
