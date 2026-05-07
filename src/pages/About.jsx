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

			<section className="farm">
				<article className="farm__article">
					<h2 className="farm__title">Søgård Hovedgård</h2>
					<p className="farm__subtitle">
						Hjertet af vores lejr findes på den historiske Søgård Hovedgård på
						Sydlangeland. Her, omgivet af åbne vidder og tæt på havets brusen,
						skaber vi rammerne for en uge fyldt med eventyr. Gården danner den
						perfekte kulisse for både afslapning og vilde lege i naturen.
					</p>

					<ul className="farm__ul">
						<li className="farm__li">
							<img
								src="../../public/icons/red-checkmark.svg"
								alt="red checkmark"
								className="farm__li-icon"
							/>
							<p className="farm__li-text">Historiske rammer med sjæl</p>
						</li>
						<li className="farm__li">
							<img
								src="../../public/icons/red-checkmark.svg"
								alt="red checkmark"
								className="farm__li-icon"
							/>
							<p className="farm__li-text">Rig mulighed for naturoplevelser</p>
						</li>
						<li className="farm__li">
							<img
								src="../../public/icons/red-checkmark.svg"
								alt="red checkmark"
								className="farm__li-icon"
							/>
							<p className="farm__li-text">Trygge omgivelser for alle børn</p>
						</li>
					</ul>
				</article>
				<figure className="farm__figure">
					<img
						src="/icons/frontpage-farm.png"
						alt="farm image"
						className="farm__figure-img"
					/>
					<img
						src="/icons/farm-back.jpg"
						alt="farm image"
						className="farm__figure-img"
					/>
					<img
						src="/icons/farm-pool.jpg"
						alt="farm image"
						className="farm__figure-img"
					/>
				</figure>
			</section>

			<Footer />
		</main>
	);
}
