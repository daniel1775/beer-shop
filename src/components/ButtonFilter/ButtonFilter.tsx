import FilterIcon from '../../assets/svg/filter.svg';
import './buttonFilter.scss';

type typeButtonFilter = {
	onClickFunction: () => void;
};

export default function ButtonFilter({ onClickFunction }: typeButtonFilter) {
	return (
		<div className='button-filter'>
			<button onClick={onClickFunction}>
				FILTRAR
				<img
					src={FilterIcon}
					alt=''
					className=''
				/>
			</button>
		</div>
	);
}
