import FilterIcon from '../../assets/svg/filter.svg';
import './buttonFilter.scss';

type typeButtonFilter = {
	onClickFunction: () => void;
	numberFiltersActive: number;
};

export default function ButtonFilter({
	onClickFunction,
	numberFiltersActive,
}: typeButtonFilter) {
	return (
		<div className='button-filter'>
			<button onClick={onClickFunction}>
				FILTRAR
				<img
					src={FilterIcon}
					alt='filter icon'
				/>
				{numberFiltersActive > 0 && <span>{numberFiltersActive}</span>}
			</button>
		</div>
	);
}
