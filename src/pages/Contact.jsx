import React from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
    return (
        <>

            <div className="contact-page-container">
                <div className="contact-text">
                    <h1 className='text-uppercase fw-bold mb-4'>Kontaktirajte nas</h1>
                    <p className="mt-3">
                        <FontAwesomeIcon icon={faHome} size="lg" className="mx-2 custom-icon" title="Home" />
                        Lokacija: Ljig, 14240, Srbija
                    </p>
                    <p className="mt-3">
                        <a href="tel:+381658679000" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPhone} size="lg" className="mx-2 custom-icon" title="Phone" />
                            Pozovite nas +381 65 867 9000
                        </a>
                    </p>
                    <p className="mt-3">
                        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mx-2 custom-icon" title="Email" />
                            Imate pitanje? Pišite nam.
                        </a>
                    </p>
                    <p className="mt-3">
                        <FontAwesomeIcon icon={faClock} size="lg" className="mx-2 custom-icon" title="Time" />
                        Radno vreme: 08:00 - 23:00
                    </p>
                </div>

                <div className="contact-image">
                    <img src={logo} alt="Contact Us" />
                </div>

            </div>

            <div className="google-reviews mt-5">
                <h2 className="text-uppercase fw-bold mb-3">Šta naši korisnici kažu</h2>
                <p>
                    Pogledajte naše <a href="https://www.google.com/search?q=Restoran+Brana+Ljig&rlz=1C1GCEV_enRS827RS827&oq=Restoran+Brana+Ljig&aqs=chrome..69i57j0i512l9.2932j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4758ac5a3ac36539:0x2b0b47e9f2d84a7f,1,,," target="_blank" rel="noopener noreferrer">Google Reviews</a>.
                </p>
            </div>

            <div className="google-reviews-widget mt-5">
                <h3 className="text-uppercase fw-bold mb-3">Pogledajte našu recenziju na Google-u</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8088.44946687881!2d20.228696360372304!3d44.21327086207373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759e33490edc5e7%3A0x3b442e916ab64d37!2sKafe%20Restoran%20Brana!5e0!3m2!1ssr!2srs!4v1741910999018!5m2!1ssr!2srs"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}
