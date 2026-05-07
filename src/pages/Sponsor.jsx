import Navbar from '../components/Navbar';
import '../styles/sponsorpage.sass';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Sponsor() {
	return (
		<main>
			<Navbar />
			<section className="hero">
				<article className="hero__wrapper">
					<span className="hero__span">gør en forskel</span>
					<h1 className="hero__title">
						Bliv Sponsor - <span>Hjælp et Barn på Lejr</span>
					</h1>
					<p className="hero__subtitle">
						Din støtte sikrer, at udsatte børn får en uge med leg, venskaber og
						tryghed på Langeland. Vælg det sponsorat der passer din
						virksomhed/situation bedst
					</p>
				</article>
				<figure className="hero__figure">
					<img
						src="../../public/icons/sponsor-header-polaroid-img.jpg"
						alt="ai cartoon polaroid picture"
						className="hero__img-large"
					/>
					<img
						src="../../public/icons/sponsor-header-polaroid-img-small.jpg"
						alt="small ai cartoon polaroid picture"
						className="hero__img-small"
					/>
				</figure>
			</section>

			<section className="support">
				<article className="support__article">
					<h2 className="support__title">Vælg din støtte</h2>
					<p className="support__subtitle">
						Alle bidrag går ubeskåret til at skabe de bedste rammer for børnene
						på Langeland.
					</p>
				</article>
				<div className="support__cards">
					<Card type="childSponsor" />
					<Card type="campSponsor" />
					<Card type="diplomaSponsor" />
				</div>
			</section>

			<Footer />
		</main>
	);
}
