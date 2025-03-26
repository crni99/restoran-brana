import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import VideoSection from '../components/sections/VideoSection';
import { Carousel } from 'react-bootstrap';

export default function PlayroomPage() {

    const { t } = useTranslation();

    return (
        <>
            <VideoSection
                title={t('Playroom')}
                subTitle={t('PlayroomPage.subTitle')}
                videoSource="/assets/videos/IgraonicaPromoVideo.mp4"
            />

            <div className="container d-flex justify-content-center align-items-center min-vh-75 mt-3 playroom-main-image-wrapper" data-aos="fade-up" data-aos-duration="2000">
                <div className="row row-wrapper row-direction">
                    <div className="col-md-6 mt-2">
                        <img src="/assets/images/playroom/Igraonica1.jpeg" loading="lazy"
                            className="w-100 rounded mb-3 playroom-main-image" alt="Igraonica1" />
                    </div>
                    <div className="col-md-6 playroom-text mt-2">
                        <Trans i18nKey="PlayroomPage.sectionText1"></Trans>
                        <br></br>
                        <br></br>
                        {t('PlayroomPage.sectionText2')}
                        <br></br>
                        <br></br>
                        <Trans i18nKey="PlayroomPage.sectionText3"></Trans>
                    </div>
                </div>
            </div>

            <div className="justify-content-center align-items-center mt-3 full-width-images-playroom-wrapper"
                data-aos="fade-up" data-aos-duration="2000"
            >
                <div className="full-width-image position-relative"
                >
                    <img src="/assets/images/playroom/Igraonica2.jpg" loading="lazy"
                        className="w-50 h-100 object-fit-cover" alt="Igraonica1"
                    />
                    <img src="/assets/images/playroom/Igraonica3.jpg" loading="lazy"
                        className="w-50 h-100 object-fit-cover" alt="Igraonica2"
                    />
                    <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100">
                        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h2 className='mt-4 mb-5 h2'>
                                <span className='playroom-birthday-title'>
                                    {t('PlayroomPage.organizeBirthday')}
                                </span>
                                <br></br>
                                <span className='fw-bold'>
                                    {t('PlayroomPage.playroomLink')}
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center mt-5 min-vh-75" data-aos="fade-up" data-aos-duration="2000">
                <div className="row row-wrapper">
                    <div className="col-md-12 playroom-text">
                        <p className='mt-2'>
                            <Trans i18nKey="PlayroomPage.sectionText4"></Trans>
                        </p>
                        <p className='mt-4'>
                            <Trans i18nKey="PlayroomPage.sectionText5"></Trans>
                        </p>
                        <p className='mt-4'>
                            {t('PlayroomPage.sectionText6')}
                        </p>
                        <p className='mt-4'>
                            <Trans i18nKey="PlayroomPage.sectionText7"></Trans>
                        </p>
                        <p className='mt-4 playroom-text-bundle'>
                            <b>
                                <Trans i18nKey="PlayroomPage.sectionText8"></Trans>
                            </b>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center mt-4 mb-5 playroom-carousel-wrapper" data-aos="fade-up" data-aos-duration="2000">
                <div className="row w-100">
                    <Carousel id="carouselPlayroomIndicators" interval={3000} className="carousel-playroom">
                        <Carousel.Item className="playroom-bundle-image active">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket1.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket1"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket2.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket2"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket3.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket3"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket4.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket4"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket5.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket5"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket6.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket6"
                                loading="lazy"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/all-inclusive/AllInclusivePaket1.jpg"
                                className="d-block w-100 rounded"
                                alt="AllInclusivePaket1"
                                loading="lazy"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </>
    );
}
