import { NavLink, Link } from "react-router"
import logo from "../assets:icons/Logo/logo.svg"
import "./Navbar.sass"
import Button from "./Button"

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        <img src={logo} alt="Børnelejren logo" className="nav__logo" />
        <h2 className="nav__title">Børnelejren på Langeland</h2>
      </NavLink>
      <nav className="nav__nav-wrapper">
        <NavLink to="/about" className="nav__about">Om os</NavLink>
        <NavLink to="/sponsor" className="nav__sponsor">Tilmeld som sponsor</NavLink>
      </nav>

      <Button text="Tilmeld som sponsor" size="small" color="primary" link="/sponsor" />
    </nav >
  )
}

