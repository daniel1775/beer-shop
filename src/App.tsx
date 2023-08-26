import Card from './components/Card/Card';
import beerData from './lib/data/beer-data.json';
import budLightImage from './assets/img/bud-light.jpeg';
import './app.scss';

const App = () => {
	return (
		<main>
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
		</main>
	);
};

export default App;
