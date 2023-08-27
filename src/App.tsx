import Card from './components/Card/Card';
import beerData from './lib/data/beer-data.json';
import budLightImage from './assets/img/bud-light.jpeg';
import ButtonFilter from './components/ButtonFilter/ButtonFilter';
import ModalFilter from './components/ModalFilter/ModalFilter';
import './app.scss';
import { useState, useEffect } from 'react';
import { typeFilterValues } from './lib/types/filter';
import { typeBeer } from './lib/types/beer';
import { objectFieldsActive } from './lib/helpers/objects';

const App = () => {
	const [isActiveFilter, setIsActiveFilter] = useState(false);
	const [filterValues, setFilterValues] = useState<typeFilterValues>({
		rubia: false,
		morena: false,
		roja: false,
	});
	const [beersToShow, setBeersToShow] = useState<typeBeer[]>(beerData);

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

	useEffect(() => {
		const dataToShow: typeBeer[] = [];
		if (filterValues.morena) {
			dataToShow.push(
				...beerData.filter((singleBeer) => singleBeer.type === 'morena')
			);
		}
		if (filterValues.roja) {
			dataToShow.push(
				...beerData.filter((singleBeer) => singleBeer.type === 'roja')
			);
		}
		if (filterValues.rubia) {
			dataToShow.push(
				...beerData.filter((singleBeer) => singleBeer.type === 'rubia')
			);
		}
		if (!filterValues.morena && !filterValues.roja && !filterValues.rubia) {
			dataToShow.push(...beerData);
		}
		if (dataToShow) {
			setBeersToShow(dataToShow);
		}
	}, [filterValues]);

	return (
		<main>
			<h1>Cervezas</h1>
			<div className='card-container'>
				{beersToShow?.map((singleBeer, index) => (
					<Card
						key={index}
						title={singleBeer.title}
						description={singleBeer.description}
						price={singleBeer.price}
						imageUrl={budLightImage}
						type={singleBeer.type}
					/>
				))}
			</div>
			<ButtonFilter
				onClickFunction={handleClickFilter}
				numberFiltersActive={objectFieldsActive(filterValues)}
			/>
			<ModalFilter
				isActiveFilter={isActiveFilter}
				setIsActiveFilter={setIsActiveFilter}
				filterValues={filterValues}
				setFilterValues={setFilterValues}
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
