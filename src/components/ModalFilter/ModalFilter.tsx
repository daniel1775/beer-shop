import React from 'react';
import './modalFilter.scss';
import { typeFilterValues } from '../../lib/types/filter';
import FilterIcon from '../../assets/svg/filter.svg';
import { objectFieldsActive } from '../../lib/helpers/objects';

type typeModalFilter = {
	isActiveFilter: boolean;
	setIsActiveFilter: (value: boolean) => void;
	filterValues: typeFilterValues;
	setFilterValues: (values: typeFilterValues) => void;
};

export default function ModalFilter({
	isActiveFilter,
	setIsActiveFilter,
	filterValues,
	setFilterValues,
}: typeModalFilter) {
	const handleHideModal = () => {
		setIsActiveFilter(false);
	};

	const numberFiltersActive = objectFieldsActive(filterValues);

	const handleChangeOption = (
		name: string,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const filterValuesUpdated = {
			...filterValues,
			[name]: e.target.checked,
		};
		setFilterValues(filterValuesUpdated);
	};

	const handleClearOptions = () => {
		const defaultFilterValues = {
			rubia: false,
			morena: false,
			roja: false,
		};
		setFilterValues(defaultFilterValues);
		setIsActiveFilter(false);
	};

	const handleFilter = () => {
		setIsActiveFilter(false);
	};

	return (
		<div
			className={`modal-filter ${
				isActiveFilter ? 'modal-filter-show' : 'modal-filter-hide'
			}`}
		>
			<div className='wrapper'>
				<button
					className='close'
					onClick={handleHideModal}
				>
					<div className='close-wrapper'>
						<div className='close-line close-line-one' />
						<div className='close-line close-line-two' />
					</div>
				</button>
				<p className='subtitle'>Filtros</p>
				<label>
					Rubia
					<input
						type='checkbox'
						onChange={(e) => handleChangeOption('rubia', e)}
						checked={filterValues.rubia}
					/>
				</label>
				<label>
					Morena
					<input
						type='checkbox'
						onChange={(e) => handleChangeOption('morena', e)}
						checked={filterValues.morena}
					/>
				</label>
				<label className='last-label'>
					Roja
					<input
						type='checkbox'
						onChange={(e) => handleChangeOption('roja', e)}
						checked={filterValues.roja}
					/>
				</label>
				<div className='buttons-container'>
					<button onClick={handleClearOptions}>LIMPIAR</button>
					<button onClick={handleFilter}>
						FILTRAR
						<img
							src={FilterIcon}
							alt='filter icon'
							className=''
						/>
						{numberFiltersActive > 0 && (
							<span>{numberFiltersActive}</span>
						)}
					</button>
				</div>
			</div>
		</div>
	);
}
