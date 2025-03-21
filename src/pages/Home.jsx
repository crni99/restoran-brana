import React from 'react';
import VideoSection from '../components/common/VideoSection';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {

    return (
        <>
            <VideoSection
                title="BRANA"
                subTitle="Kafe | Restoran | Igraonica"
                videoSource="/assets/videos/BranaPromoVideo.mp4"
            />

            <div className="container d-flex justify-content-center align-items-center min-vh-90 mt-4" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/images/home/Brana4.jpg"
                            className="w-100 rounded mb-4 home-main-image" alt="Igraonica1" />
                    </div>
                    <div className="row-wrapper col-md-6 home-text playroom-text">
                        <p className="fs-4 home-section-title text-center">Dobrodošli u Restoran <strong>Brana</strong></p>
                        <p className=''>
                            U srcu Ljiga, restoran <strong>Brana</strong> nudi vam nezaboravno gastronomsko iskustvo sa tradicionalnom srpskom kuhinjom,
                            pripremljenom sa pažnjom i ljubavlju. Uživajte u svakom zalogaju, dok vaša deca istražuju i igraju se u našoj
                            &nbsp;
                            <Link to="/igraonica" className="text-decoration-none">
                                <strong><u>Okean Igraonici</u></strong>
                                <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" className="mx-2 custom-icon" title="Arrow" />
                            </Link>
                            – sigurnom i kreativnom prostoru gde mališani mogu da se opuste, igraju i druže.
                        </p>
                        <p className='mt-4'>
                            Za one koji vole uživanje na svežem vazduhu, naša bašta je savršeno mesto za letnje trenutke opuštanja. Ovde možete
                            uživati u omiljenim jelima i pićima dok upijate sunce i prijatnu atmosferu.
                        </p>
                        <p className='mt-4'>
                            Dok se opuštate uz naše specijalitete, vaše dete će biti u sigurnim rukama naših ljubaznih animatora, uživajući u
                            modernim igrama i edukativnim sadržajem.
                        </p>
                        <p className='mt-4'>
                            Posetite nas i otkrijte zbog čega je <strong>Brana</strong>savršen izbor za celu porodicu – jer
                            ovde, zabava, ukus i uživanje na otvorenom idu ruku pod ruku!
                        </p>
                    </div>
                </div>
            </div>

            <div className="full-width-image position-relative home-full-width-menu-wrapper mt-4" data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/images/menu/mix-kobasica-2.jpg"
                    className="w-50 h-100 object-fit-cover" alt="Igraonica1"
                />
                <img src="/assets/images/menu/cevapi-cvrcak.jpg"
                    className="w-50 h-100 object-fit-cover" alt="Igraonica2"
                />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100">
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 home-full-width-menu">
                        <p className='h5'>KVALITET NA PRVOM MESTU</p>
                        <h2 className='h2 mt-4 mb-5'>Probajte Naše Specijalitete</h2>
                        <Link to="/jelovnik" className="btn custom-button-inverted fw-bold p-3 text-decoration-none">
                            POGLEDAJTE JELOVNIK
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
                                <img src="/assets/images/menu/mix-kobasica-2.jpg"
                                    className="w-100 h-100 object-fit-cover rounded " alt="Igraonica2"
                                />
                                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100 rounded">
                                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                        <h2>JELOVNIK</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 zoom-in-hover home-menu-playroom-2">
                        <Link to="/karta-pica">
                            <div className="full-width-image position-relative">
                                <img src="/assets/images/home/Brana7.jpg"
                                    className="w-100 h-100 object-fit-cover rounded" alt="Igraonica2"
                                />
                                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100 rounded ">
                                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                                        <h2>KARTA PIĆA</h2>
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
                    className="w-50 h-100 object-fit-cover" alt="Igraonica1" />
                <img src="/assets/images/home/Brana5.jpg"
                    className="w-50 h-100 object-fit-cover" alt="Igraonica2" />
                <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100"
                >
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white"
                        data-aos="zoom-in" data-aos-duration="3000">
                        <img src='/logo512.avif' className='logo-rounded' alt='Brana Logo' />
                        <h2 className='mt-4 mb-5 home-reserve-title'>Rezervišite sto</h2>
                        <Link to="/kontakt#2" className="btn custom-button-inverted fw-bold p-3 text-decoration-none">
                            REZERVIŠI
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}
