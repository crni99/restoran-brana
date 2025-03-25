import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import MainTitle from '../components/MainTitle';

export default function ContactPage() {

    const { t } = useTranslation();

    return (
        <>
            <MainTitle title={t('Contact')} />

            <div className="container d-flex justify-content-center align-items-center min-vh-90"
                data-aos="fade-left" data-aos-duration="2000"
                id='1'>
                <div className="row w-100 row-wrapper">
                    <div className="col-md-12 mt-3">
                        <iframe
                            src={t('ContactPage.googleMap')}
                            width="100%"
                            height="500"
                            className='contact-map'
                            style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(94%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title='Google Map'>
                        </iframe>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
                        <p className="mt-3 text-center zoom-in-hover">
                            <FontAwesomeIcon icon={faHome} size="xl" className="mx-2 custom-icon" title="Home" />
                            Ravnogorska BB, 14240, Ljig, Srbija
                        </p>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
                        <p className="mt-3 text-center zoom-in-hover">
                            <FontAwesomeIcon icon={faClock} size="xl" className="mx-2 custom-icon" title="Time" />
                            08:00 - 23:00
                        </p>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center container-full-view min-vh-90 mb-3"
                data-aos="fade-right" data-aos-duration="2000"
                id='2'>
                <div className="row w-100 row-wrapper">
                    <div className="col-md-4 mt-3">
                        <h3 className='text-uppercase fw-bold mb-4'>{t('ContactPage.subTitle')}</h3>
                        <div className='zoom-in-move-right-hover'>
                            <p className='text-secondary'>{t('ContactPage.branaTitle')}</p>
                            <p className="mt-2">
                                <a href="tel:+381658679000" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} size="xl" className="mx-2 custom-icon" title="Phone" />
                                    {t('ContactPage.branaPhone')}
                                </a>
                            </p>
                            <p className="mt-4">
                                <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="mx-2 custom-icon" title="Email" />
                                    {t('ContactPage.branaMail')}
                                </a>
                            </p>
                            <p className="mt-4">
                                <a href="https://www.facebook.com/RestoranBrana/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="mx-2 custom-icon" title="Facebook" />
                                    {t('ContactPage.branaFacebook')}
                                </a>
                            </p>
                            <p className="mt-4">
                                <a href="https://www.instagram.com/restoran.brana.ljig/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagramSquare} size="xl" className="mx-2 custom-icon" title="Instagram" />
                                    {t('ContactPage.branaInstagram')}
                                </a>
                            </p>
                        </div>
                        <div className='zoom-in-move-right-hover'>
                            <p className='text-secondary mt-5'>{t('ContactPage.okeanTitle')}</p>
                            <p className="mt-2">
                                <a href="tel:+381643758641" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPhone} size="xl" className="mx-2 custom-icon" title="Phone" />
                                    {t('ContactPage.okeanPhone')}
                                </a>
                            </p>
                            <p className="mt-4">
                                <a href="https://www.instagram.com/okean_igraonica/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagramSquare} size="xl" className="mx-2 custom-icon" title="Instagram" />
                                    {t('ContactPage.okeanInstagram')}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end mt-3 zoom-in-move-left-hover">
                        <img src="/assets/images/slikaUnutra.jpg" className="rounded w-100 w-md-75 h-auto contact-image mb-3" alt="Slika Unutra" />
                    </div>
                </div>
            </div>
        </>
    );
}
