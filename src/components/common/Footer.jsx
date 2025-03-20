import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <div className="container footer-text d-flex justify-content-between align-items-center p-4">
                <span>{currentYear} &copy; Restoran Brana</span>
                <div>
                    <a href="https://github.com/crni99" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" className="mx-2" title="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/ognj3n" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="mx-2" title="LinkedIn" />
                    </a>
                    <a href="mailto:andjelicb.ognjen@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" className="mx-2" title="Email" />
                    </a>
                </div>
            </div>
        </footer>
    );
}