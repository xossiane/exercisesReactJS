import { Link } from 'react-router-dom'
import './index.css'
import exercises from '/src/exercicios'


function Menu() {
	return (
		<nav className='nav'>
			<ul className='nav_list'>
				<li className='nav_link'>
					<Link to='/'>Home</Link> |
				</li>
				{exercises.map((exercise, index) => (
					<li className='nav_link' key={index}>
						<Link to={`/exercicio${index + 1}`}>{`exercicio${index + 1}`}</Link>

						{exercises.length !== index + 1 ? ` |` : ''}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
