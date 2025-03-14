import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow-sm mb-3">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                        &nbsp;Restoran Brana
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/menu" className="nav-link"> Meni </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/our-story" className="nav-link"> Naša Priča </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Društvene Mreže
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="https://www.instagram.com/restoran.brana.ljig/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="https://www.facebook.com/RestoranBrana" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className="nav-link"> Kontakt </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}