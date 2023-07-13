import "../styles/navbar.css"
import Logo from "../assets/a-rocket-5-no-background.png"
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className="navbar-container">
            <div className="navbar-sub-container">
                <Link className="logo" to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
                <Link className={`navbar-link ${activePath === '/' ? 'active-link' : ''}`} to="/">
                    Exercícios
                </Link>
                <Link className={`navbar-link ${activePath === '/compiler' ? 'active-link' : ''}`} to="/compiler">
                    Compiler
                </Link>
            </div>
            <div className="navbar-sub-container">
            </div>
        </nav>
    )
}