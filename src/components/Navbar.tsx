import "../styles/navbar.css"
import Logo from "../assets/a-rocket-5-no-background.png"
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-sub-container">
                <Link className="logo" to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
                <Link className={`navbar-link ${location.pathname === "/" ? "active-link" : ""}`} to="/">
                    Exercícios
                </Link>
            </div>
            <div className="navbar-sub-container">
            </div>
        </nav>
    )
}