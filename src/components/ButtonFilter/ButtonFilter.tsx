import React from 'react';
import FilterIcon from '../../assets/svg/filter.svg';
import './buttonFilter.scss';

export default function ButtonFilter() {
	return (
		<div className='button-filter'>
			<button>
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
