import './Footer.sass'
import { NavLink } from 'react-router'

export default function footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <section className='footer__section-left'>
          <h2 className='footer__section-left-title'>Børnelejren på Langeland</h2>
          <p className='footer__section-left-subtitle'>Vi skaber rum for barndommens glæder gennem nærvær og natur på Sydlangeland.</p>
        </section>
        <nav className='footer__nav'>
          <h2 className='footer__nav-title'>Hurtige links</h2>
          <NavLink to='/' className='footer__nav-link'>Kontakt</NavLink>
          <NavLink to='/' className='footer__nav-link'>Mission</NavLink>
          <NavLink to='/' className='footer__nav-link'>Facebook</NavLink>
          <NavLink to='/' className='footer__nav-link'>Instagram</NavLink>
        </nav>
        <section className='footer__section-right'>
          <h2 className='footer__section-right-title'>Find os</h2>
          <p className='footer__section-right-subtitle'>Søgård Hovedgård</p>
          <p className='footer__section-right-subtitle'>Søgaardsvej 1</p>
          <p className='footer__section-right-subtitle'>5935 Bagenkop</p>
        </section>
      </div>
      <div className='footer__line'></div>
      <p className='footer__copyright'>© 2026 Børnelejren på Langeland. Alle rettigheder forbeholdes.</p>
    </footer>
  )
}

