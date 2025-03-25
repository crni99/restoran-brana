import React, { useState, useEffect } from "react";
import i18n from '../i18n';
import { NavDropdown } from 'react-bootstrap';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        setSelectedLanguage(i18n.language);
    }, []);

    return (
        <NavDropdown title={selectedLanguage === 'en' ? 'English' : 'Srpski'} id="language-dropdown">
            <NavDropdown.Item as="button" onClick={() => i18n.changeLanguage('sr')} className="nav-link">
                Srpski
            </NavDropdown.Item>
            <NavDropdown.Item as="button" onClick={() => i18n.changeLanguage('en')} className="nav-link">
                English
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default LanguageSelector;
