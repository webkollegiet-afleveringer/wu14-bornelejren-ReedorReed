import Button from "../components/Button";
import Navbar from "../components/Navbar";
import '../styles/homepage.sass'
import heartIcon from '../assets:icons/heart-icon.svg'
import natureIcon from '../assets:icons/nature-icon.svg'
import boy from '../assets:icons/frontpage-boy-img.png'
import farm from '../assets:icons/frontpage-farm.png'

export default function Homepage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero">
        <h1 className="hero__title">
          Velkommen til
          Børnelejren på
          Langeland
        </h1>
        <p className="hero__subtitle">Giv dårligt stillede børn et frirum fyldt med nærvær. natur og uforglemmelige sommerminder.</p>
        <Button text="Læs vores historie" size="small" color="primary" link="/about" />
      </section>
      <section className="mission">
        <article className="mission__article">
          <h2 className="mission__title">Vores mission</h2>
          <p className="mission__subtitle">Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland.</p>
          <div className="mission__line"></div>
        </article>
      </section>


      <section className="why">
        <article className="why__wrapper">
          <h2 className="why__title">Hvorfor er jeres hjælp <span className="why__title-span">afgørende?</span></h2>
          <p className="why__subtitle">Mange børn vokser op i hjem, hvor ressourcerne er små, og ferier er en sjældenhed.
            På Søgård Hovedgård får de mulighed for at koble af fra hverdagens udfordringer og
            bare være børn.</p>
          <ul className="why__ul">
            <li className="why__li">
              <img src={heartIcon} alt="Heart icon" className="why__li-img" />
              <article className="why__li-article-wrapper">
                <h2 className="why__li-title">Tryghed og Nærvær</h2>
                <p className="why__li-subtitle">Vi skaber rammerne for dybe relationer og pædagogisk støtte i rolige       omgivelser.
                </p>
              </article>
            </li>
            <li className="why__li">
              <img src={natureIcon} alt="nature icon" className="why__li-img" />
              <article className="why__li-article-wrapper">
                <h2 className="why__li-title">Naturens Kraft</h2>
                <p className="why__li-subtitle">Sydlangelands natur giver børnene plads til at udforske, lege og finde indre ro.</p>
              </article>
            </li>
          </ul>
        </article>
        <figure className="why__figure">
          <img src={boy} alt="boy cartoon" className="why__figure-img" />
          <figcaption className="why__figure-caption">
            <p className="why__figure-caption-quote">"Lejren er det eneste tidspunkt på året, hvor jeg føler, at jeg ikke skal passe på mine forældre."</p>
            <p className="why__figure-caption-quote-owner">- Tidligere deltager, 11 år</p>
          </figcaption>
        </figure>
      </section>


      <section className="banner">
        <article className="banner__article">
          <h2 className="banner__article-title">En sommer på Søgård Hovedgård</h2>
          <p className="banner__article-subtitle">Den historiske herregård danner rammen om vores lejr. Her er plads til både store armbevægelser og stille stunder under de gamle træer. </p>
        </article>

        <figure className="banner__article-figure">
          <img src={farm} alt="ai farm image" className="banner__article-figure-img" />
        </figure>
      </section>
    </main>
  )
}

