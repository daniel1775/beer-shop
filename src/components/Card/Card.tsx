import './card.scss';

type typeCardProps = {
	title: string;
	description: string;
	price: string;
	imageUrl: string;
	type: string;
};

export default function Card({
	title,
	description,
	price,
	imageUrl,
	type,
}: typeCardProps) {
	return (
		<div className='card'>
			<div className='card-wrapper'>
				<img
					src={imageUrl}
					alt={title}
				/>
				<h2 className='card-title'>{title}</h2>
				<p className='card-description'>{description}</p>
				<p className={`card-type card-type-${type}`}>{type}</p>
				<p className='card-price'>${price}</p>
			</div>
			<button>AGREGAR</button>
		</div>
	);
}
