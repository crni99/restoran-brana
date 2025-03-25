import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from "../assets/logo.svg";
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <header>
            <Navbar expand="lg" className="shadow-sm mb-3 bg-body-tertiary">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        &nbsp;
                        <span>Brana</span>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Link to="/" className="nav-link">{t("Home")}</Link>
                            </Nav.Item>
                            <NavDropdown title={t("Menu")} id="navbarDropdownMenu" drop="down">
                                <NavDropdown.Item as={Link} to="/jelovnik" className="nav-link dropdown-item-link">
                                    &nbsp;{t("MenuV2")}
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/karta-pica" className="nav-link dropdown-item-link">
                                    &nbsp;{t("Drinks")}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Link to="/igraonica" className="nav-link">{t("PlayroomName")}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/kontakt" className="nav-link">{t("Contact")}</Link>
                            </Nav.Item>
                            <NavDropdown title={language === 'sr' ? 'Jezik' : 'Language'} id="navbarDropdownLanguage" drop="down">
                                <NavDropdown.Item as={Button} value="sr" onClick={handleLanguageChange} className="nav-link dropdown-item-link">
                                    &nbsp;Srpski
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Button} value="en" onClick={handleLanguageChange} className="nav-link dropdown-item-link">
                                    &nbsp;English
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
