import { typeBeer } from '../../lib/types/beer';
import './card.scss';

export default function Card({
	title,
	description,
	price,
	imageUrl,
}: typeBeer) {
	return (
		<div className='card'>
			<img
				src={imageUrl}
				alt={title}
			/>
			<h2 className='card-title'>{title}</h2>
			<p className='card-description'>{description}</p>
			<p className='card-price'>{price}</p>
			<button className='card-price'>AGREGAR</button>
		</div>
	);
}
