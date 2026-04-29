import React from 'react';
import './Card.sass';
import Button from './Button';

const cardContent = {
	childSponsor: {
		icon: '../../public/icons/smiley.svg',
		bgColor: 'card__figure-red',
		headline: 'Børnesponsorat',
		price: 'kr. 4.000,-',
		text: 'Dækker ét barns fulde ophold inklusiv transport, mad, aktiviteter og udflugter i løbet af hele ugen.',
		listItems: ['Fuld forplejning', 'Busrejse t/r', 'Alle entrebilletter']
	},
	campSponsor: {
		icon: '../../public/icons/huse.svg',
		bgColor: 'card__figure-light-red',
		headline: 'Lejrsponsorat',
		price: 'kr. 2.000,-',
		text: 'Støtter de generelle lejrfornødenheder såsom fællesudstyr, legetøj, sportsrekvisitter og pleje.',
		listItems: [
			'Fælles rekvisitter',
			'Vedligehold af faciliteter',
			'Generel lejrhjælp'
		]
	},
	diplomaSponsor: {
		icon: '../../public/icons/diplom.svg',
		bgColor: 'card__figure-blue',
		headline: 'Diplomsponsorat',
		price: 'kr. 1.000,-',
		text: 'Direkte støtte til foreningens arbejde. Som tak modtager I et flot trykt diplom til ophængning i virksomheden.',
		listItems: ['Officielt diplom', 'Skattefradrag', 'Synlighed på hjemmesiden']
	}
};

export default function Card({ type = 'childSponsor' }) {
	const content = cardContent[type] || cardContent.childSponsor;

	return (
		<div className="card">
			<article className='card__wrapper'>
				<figure className={`${content.bgColor}`}>
					<img
						src={content.icon}
						alt={content.headline}
						className="card__figure-img"
					/>
				</figure>
				<h2 className="card__title">{content.headline}</h2>
				<p className="card__price">{content.price}</p>
				<p className="card__text">{content.text}</p>
				<ul className="card__ul">
					{content.listItems.map((item) => (
						<li key={item} className="card__li">
							<img
								src="../../public/icons/checkmark.svg"
								alt="checkmark icon"
							/>
							{item}
						</li>
					))}
				</ul>
			</article>
			<Button text="Vælg dette" color="outline" size="small" />
		</div>
	);
}
