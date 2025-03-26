import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import VideoSection from '../components/sections/VideoSection';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {

    const { t } = useTranslation();

    return (
        <>
            <VideoSection
                title={t('RestaurantName')}
                subTitle={t('HomePage.subTitle')}
                videoSource="/assets/videos/BranaPromoVideo.mp4"
            />

            <div className="container d-flex justify-content-center align-items-center min-vh-90 mt-4" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/images/home/Brana4.jpg"
                            loading="lazy"
                            className="w-100 rounded mb-4 home-main-image"
                            alt="Unutrašnjost restorana sa Deda Mrazom koji drži znak dobrodošlice" />
                    </div>
                    <div className="row-wrapper col-md-6 home-text playroom-text">
                        <p className="fs-4 home-section-title text-center">
                            <Trans i18nKey="HomePage.sectionTitle"></Trans>
                        </p>
                        <p className=''>
                            <Trans i18nKey="HomePage.sectionText1"></Trans>
                            &nbsp;
                            <Link to="/igraonica" className="text-decoration-none">
                                <strong><u>
                                    {t('HomePage.playroomLink')}
                                </u></strong>
                                <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm"
                                    className="mx-2 custom-icon" title="Arrow" />
                            </Link>
                            {t('HomePage.sectionText2')}
                        </p>
                        <p className='mt-4'>
                            {t('HomePage.sectionText3')}
                        </p>
                        <p className='mt-4'>
                            {t('HomePage.sectionText4')}
                        </p>
                        <p className='mt-4'>
                            <Trans i18nKey="HomePage.sectionText5"></Trans>
                        </p>
                    </div>
                </div>
            </div>

            <div className="full-width-image position-relative home-full-width-menu-wrapper mt-4" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/images/menu/mix-kobasica-2.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt="Mix kobasica na dasci sa krompirom, prilozima i hlebom"
                />
                <img src="/assets/images/menu/cevapi-cvrcak.jpg" loading="lazy"
                    className="w-50 h-100 object-fit-cover" alt="Cvrčak ćevapi sa kajmakom i krompirom"
                />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100">
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 home-full-width-menu">
                        <p className='h5'>{t('HomePage.qualityText')}</p>
                        <h2 className='h2 mt-4 mb-5'>{t('HomePage.specialtiesText')}</h2>
                        <Link to="/jelovnik" className="btn custom-button-inverted fw-bold p-3 text-decoration-none">
                            {t('HomePage.checkMenuButton')}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center min-vh-75 mt-4"
                data-aos="fade-up" data-aos-duration="2000">
                <div className='row'>
                    <div className="col-md-6 zoom-in-hover home-menu-playroom-1">
                        <Link to="/jelovnik">
                            <div className="full-width-image position-relative">
                                <img src="/assets/images/menu/mix-kobasica-2.jpg" loading="lazy"
                                    className="w-100 h-100 object-fit-cover rounded " alt="Mix kobasica na dasci sa krompirom, prilozima i hlebom"
                                />
                                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100 rounded">
                                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                        <h2 className='text-uppercase'>{t('MenuV2')}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 zoom-in-hover home-menu-playroom-2">
                        <Link to="/karta-pica">
                            <div className="full-width-image position-relative">
                                <img src="/assets/images/home/Brana7.jpg" loading="lazy"
                                    className="w-100 h-100 object-fit-cover rounded" alt="Krigla sa pivom - Birra Moretti"
                                />
                                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100 rounded ">
                                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                        <h2 className='text-uppercase'>{t('Drinks')}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="full-width-image position-relative home-reserve-table-images mt-5"
                data-aos="fade-up" data-aos-duration="2000">
                <img src="/assets/images/home/Brana1.jpg"
                    className="w-50 h-100 object-fit-cover" alt="Unutrašnjost restorana ukrašena za Novu Godinu" />
                <img src="/assets/images/home/Brana5.jpg"
                    className="w-50 h-100 object-fit-cover" alt="Bašta restorana, sa stolicama i pogledom na reku" />
                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100"
                >
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white"
                        data-aos="zoom-in" data-aos-duration="3000">
                        <img src='/logo512.avif' className='logo-rounded' alt='Brana Logo' loading="lazy" />
                        <h2 className='mt-4 mb-5 home-reserve-title'>{t('HomePage.bookTableText')}</h2>
                        <Link to="/kontakt#2" className="btn custom-button-inverted fw-bold p-3 text-decoration-none">
                            {t('HomePage.reserveButton')}
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}
