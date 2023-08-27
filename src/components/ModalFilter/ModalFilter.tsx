import './modalFilter.scss';

type typeModalFilter = {
	isActiveFilter: boolean;
	setIsActiveFilter: (value: boolean) => void;
};

export default function ModalFilter({
	isActiveFilter,
	setIsActiveFilter,
}: typeModalFilter) {
	const handleHideModal = () => {
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
					<input type='checkbox' />
				</label>
				<label>
					Morena
					<input type='checkbox' />
				</label>
				<label className='last-label'>
					Roja
					<input type='checkbox' />
				</label>
				<div className='buttons-container'>
					<button>LIMPIAR</button>
					<button>FILTRAR</button>
				</div>
			</div>
		</div>
	);
}
