import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";

export default function Header() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow-sm mb-3 bg-body-tertiary">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                        <span>Restoran Brana</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link"> Meni </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/our-story" className="nav-link"> Naša Priča </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/playroom" className="nav-link"> Igraonica </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Društvene Mreže
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="https://www.instagram.com/restoran.brana.ljig/" target="_blank" rel="noopener noreferrer"> Instagram </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="https://www.facebook.com/RestoranBrana" target="_blank" rel="noopener noreferrer"> Facebook </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link"> Kontakt </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}