import { Link } from "react-router"
import "./Button.sass"

const sizeClasses = {
  small: "button--small",
  medium: "button--medium",
  large: "button--large",
}

const colorClasses = {
  primary: "button--primary",
  secondary: "button--secondary",
  outline: "button--outline",
}

export default function Button({ text, size = "medium", color = "primary", link, onClick, disabled }) {
  const className = `button ${sizeClasses[size] || ""} ${colorClasses[color] || ""}`.trim()

  if (link) {
    return (
      <Link to={link} className={className} disabled={disabled}>
        {text}
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}