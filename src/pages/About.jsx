import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutPage.sass';

export default function About() {
	return (
		<main>
			<Navbar />
			<section className="hero">
				<article className="hero__wrapper">
					<span className="hero__span">vores mission</span>
					<h1 className="hero__title">
						Om os - En <span>Velgørende</span>, Non-Profit Forening
					</h1>
					<p className="hero__subtitle">
						Børnelejren på Langeland har gennem generationer skabt et frirum for
						børn, der har brug for et afbræk fra hverdagen. Vi er drevet af
						lysten til at gøre en mærkbar forskel gennem leg, fællesskab og
						natur.
					</p>
					<article className="hero__box">
						<h2 className="hero__box-title">Ingen egenbetaling for forældre</h2>
						<p className="hero__box-subtitle">
							Vi mener, at økonomi aldrig må stå i vejen for en
							barndomsoplevelse. Derfor er alle ophold på lejren 100% gratis. Vi
							dækker alle udgifter til kost, logi og aktiviteter, så alle børn
							kan deltage på lige fod.
						</p>
					</article>
				</article>
				<figure className="hero__figure">
					<img
						src="../../public/icons/about-header-img.jpg"
						alt="boy"
						className="hero__figure-img"
					/>
				</figure>
			</section>
			<Footer />
		</main>
	);
}
