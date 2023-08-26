import Card from './components/Card/Card';
import beerData from './lib/data/beer-data.json';
import budLightImage from './assets/img/bud-light.jpeg';
import ButtonFilter from './components/ButtonFilter/ButtonFilter';

import './app.scss';

const App = () => {
	return (
		<main>
			<h1>Cervezas</h1>
			<div className='card-container'>
				{beerData.map((singleBeer, index) => (
					<Card
						key={index}
						title={singleBeer.title}
						description={singleBeer.description}
						price={singleBeer.price}
						imageUrl={budLightImage}
					/>
				))}
			</div>
			<ButtonFilter />
		</main>
	);
};

export default App;
