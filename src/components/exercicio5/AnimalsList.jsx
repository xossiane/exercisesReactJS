import ReactDOM from 'react-dom'

function AnimalsList2 () {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse','whale'];
    
    const listAnimals = animals.map((animal) => 
    <li>{animal}</li>
    );


    return (
        <div>
            <ul>{listAnimals}</ul>
        </div>
    );
}

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
// ReactDOM.render(
//     <AnimalsList2 animals = {animals} />,
//     document.getElementById('root'));
    
export default AnimalsList2 