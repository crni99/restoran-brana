import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from "../assets/logo.svg";

export default function Header() {
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
                        <span>Restoran Brana</span>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Link to="/" className="nav-link">Početna</Link>
                            </Nav.Item>
                            <NavDropdown title="Meni" id="navbarDropdown" drop="down">
                                <NavDropdown.Item as={Link} to="/jelovnik" className="nav-link dropdown-item-link">
                                    &nbsp;Jelovnik
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/karta-pica" className="nav-link dropdown-item-link">
                                    &nbsp;Karta Pića
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Link to="/igraonica" className="nav-link">Okean Igraonica</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/kontakt" className="nav-link">Kontakt</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
