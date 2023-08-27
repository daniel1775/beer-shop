import Card from './components/Card/Card';
import beerData from './lib/data/beer-data.json';
import budLightImage from './assets/img/bud-light.jpeg';
import ButtonFilter from './components/ButtonFilter/ButtonFilter';
import ModalFilter from './components/ModalFilter/ModalFilter';
import './app.scss';
import { useState, useEffect } from 'react';

const App = () => {
	const [isActiveFilter, setIsActiveFilter] = useState(false);

	const handleClickFilter = () => {
		setIsActiveFilter((prev) => !prev);
	};

	useEffect(() => {
		if (isActiveFilter) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [isActiveFilter]);

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
			<ButtonFilter onClickFunction={handleClickFilter} />
			<ModalFilter
				isActiveFilter={isActiveFilter}
				setIsActiveFilter={setIsActiveFilter}
			/>
			<div
				className={`dark-screen ${
					isActiveFilter ? 'dark-screen-active' : 'dark-screen-hide'
				}`}
			/>
		</main>
	);
};

export default App;
