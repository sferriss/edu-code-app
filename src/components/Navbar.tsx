import "../styles/navbar.css"
import Logo from "../assets/logo_navbar.png"
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const params = useParams();
    const questionId = params.id as string;

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    return (
        <nav className="navbar-container">
            <div className="navbar-sub-container">
                <Link className="logo" to="/">
                    <img src={Logo} alt="logo"/>
                </Link>
                <Link className={`navbar-link ${activePath === '/' || activePath.startsWith('/topic')  ? 'active-link' : ''}`} to="/">
                    Conteúdos
                </Link>
                <Link className={`navbar-link ${activePath === '/exercises' ? 'active-link' : ''}`} to="/exercises">
                    Exercícios
                </Link>
                {activePath.startsWith(`/lab/${questionId}`) && <Link className={`navbar-link ${activePath.startsWith(`/lab/${questionId}`) ? 'active-link' : ''}`}
                       to={`/lab/${questionId}`}>
                    Laboratório
                </Link>}
            </div>
            <div className="navbar-sub-container">
            </div>
        </nav>
    )
}