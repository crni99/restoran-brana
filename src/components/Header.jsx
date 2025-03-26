import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from "../assets/logo.svg";
import { useLanguage } from '../context/LanguageContext';
import flagSr from "../assets/lang-flags/sr.svg";
import flagEn from "../assets/lang-flags/en.svg";

export default function Header() {

    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (newLanguage) => {
        changeLanguage(newLanguage);
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
                                    &nbsp;{t("MenuV2")}&nbsp;
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/karta-pica" className="nav-link dropdown-item-link">
                                    &nbsp;{t("Drinks")}&nbsp;
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Link to="/igraonica" className="nav-link">{t("PlayroomName")}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/kontakt" className="nav-link">{t("Contact")}</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button
                                    variant="link"
                                    onClick={() => handleLanguageChange(language === 'sr' ? 'en' : 'sr')}
                                    className="nav-link">
                                    &nbsp;
                                    <img
                                        src={language === 'sr' ? flagEn : flagSr}
                                        alt="Language Flag"
                                        width="20"
                                        height="14"
                                    />
                                    &nbsp;
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
