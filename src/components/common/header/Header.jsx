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
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"> Početna </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jelovnik" className="nav-link"> Jelovnik </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/karta-pica" className="nav-link"> Karta Pića </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/igraonica" className="nav-link"> Okean Igraonica </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kontakt" className="nav-link"> Kontakt </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
