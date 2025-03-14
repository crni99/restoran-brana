import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100dvh" }} data-aos="fade-left" data-aos-duration="2000">
                <div className="row w-100 row-wrapper">
                    <div className="col-4">
                        <h3 className="text-uppercase fw-bold mb-4">Adresa i radno vreme</h3>
                        <p className="mt-5">
                            <FontAwesomeIcon icon={faHome} size="lg" className="mx-2 custom-icon" title="Home" />
                            Ravnogorska BB, 14240, Ljig, Srbija
                        </p>
                        <p className="mt-3">
                            <FontAwesomeIcon icon={faClock} size="lg" className="mx-2 custom-icon" title="Time" />
                            08:00 - 23:00
                        </p>
                    </div>
                    <div className="col-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8088.44946687881!2d20.228696360372304!3d44.21327086207373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759e33490edc5e7%3A0x3b442e916ab64d37!2sKafe%20Restoran%20Brana!5e0!3m2!1ssr!2srs!4v1741910999018!5m2!1ssr!2srs"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title='Google Map'>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100dvh" }} data-aos="fade-right" data-aos-duration="2000">
                <div className="row w-100 row-wrapper">
                    <div className="col-4">
                        <h3 className='text-uppercase fw-bold mb-4'>Informacije i rezervacije</h3>
                        <p className="mt-5">
                            <a href="tel:+381658679000" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faPhone} size="lg" className="mx-2 custom-icon" title="Phone" />
                                Pozovite nas +381 65 867 9000
                            </a>
                        </p>
                        <p className="mt-4">
                            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="mx-2 custom-icon" title="Email" />
                                Imate pitanje? Pišite nam.
                            </a>
                        </p>
                        <p className="mt-4">
                            <a href="https://www.instagram.com/restoran.brana.ljig/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagramSquare} size="lg" className="mx-2 custom-icon" title="Email" />
                                Zapratite nas na Instagramu.
                            </a>
                        </p>
                        <p className="mt-4">
                            <a href="https://www.facebook.com/RestoranBrana/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="mx-2 custom-icon" title="Email" />
                                Pogledajte Facebook stranicu.
                            </a>
                        </p>
                    </div>
                    <div className="col-8 d-flex justify-content-end">
                        <img src="/assets/images/slikaUnutra.jpg" className="rounded w-75 h-auto" alt="Slika Unutra" />
                    </div>
                </div>
            </div>
        </>
    );
}
