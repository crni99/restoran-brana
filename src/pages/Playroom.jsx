import React from 'react';
import VideoSection from '../components/sections/VideoSection';
import { Carousel } from 'react-bootstrap';

export default function PlayroomPage() {

    return (
        <>
            <VideoSection
                title="Okean Igraonica"
                subTitle="Mesto gde zabava ne prestaje!"
                videoSource="/assets/videos/IgraonicaPromoVideo.mp4"
            />

            <div className="container d-flex justify-content-center align-items-center min-vh-75 mt-3 playroom-main-image-wrapper" data-aos="fade-up" data-aos-duration="2000">
                <div className="row row-wrapper row-direction">
                    <div className="col-md-6 mt-2">
                        <img src="/assets/images/playroom/Igraonica1.jpeg"
                            className="w-100 rounded mb-3 playroom-main-image" alt="Igraonica1" />
                    </div>
                    <div className="col-md-6 playroom-text mt-2">
                        U restoranu <strong>Brana</strong> ne brinemo samo o vašem uživanju u ukusnoj hrani, već i o zabavi za najmlađe. Naša <strong>Okean Igraonica</strong>
                        &nbsp;je savršeno mesto za decu da se opuste, igraju, istražuju i uživaju u bezbednom okruženju, dok vi, roditelji, možete u
                        potpunosti uživati u obroku.
                        <br></br>
                        <br></br>
                        U okeanskoj atmosferi, sa modernim igrama i kreativnim sadržajem, deca mogu da se igraju, uče i druže sa vršnjacima, dok
                        se vi opuštate uz našu ponudu specijaliteta. Naša igraonica je dizajnirana da pruži sigurnost i zabavu, tako da su svi
                        mališani u rukama naših ljubaznih i obazrivih animatora.
                        <br></br>
                        <br></br>
                        Dođite u <strong>Okean Igraonicu</strong> restorana <strong>Brana</strong> i stvorite nezaboravne trenutke za celu porodicu!
                    </div>
                </div>
            </div>

            <div className="justify-content-center align-items-center mt-3 full-width-images-playroom-wrapper"
                data-aos="fade-up" data-aos-duration="2000"
            >
                <div className="full-width-image position-relative"
                >
                    <img src="/assets/images/playroom/Igraonica2.jpg"
                        className="w-50 h-100 object-fit-cover" alt="Igraonica1"
                    />
                    <img src="/assets/images/playroom/Igraonica3.jpg"
                        className="w-50 h-100 object-fit-cover" alt="Igraonica2"
                    />
                    <div className="overlay-2 position-absolute top-0 start-0 w-100 h-100">
                        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h2 className='mt-4 mb-5 h2'>
                                <span className='playroom-birthday-title'>
                                    Organizujte nezaboravan rođendan u
                                </span>
                                <br></br>
                                <span className='fw-bold'>
                                    Okean Igraonici
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
                            U restoranu <strong>Brana</strong> vaša deca mogu da uživaju u najlepšim trenucima dok proslavljaju rođendane u našoj <strong>Okean Igraonici</strong>.
                            Ovaj prostor je idealan za organizaciju rođendanskih zabava, jer pruža savršen ambijent za decu, ali i prostor za
                            roditelje, koji mogu da uživaju u miru i opuštanju po izboru.
                        </p>
                        <p className='mt-4'>
                            Naša <strong>Okean Igraonica</strong> nudi različite pakete za organizaciju rođendana, prilagođene vašim potrebama. Bilo da se odlučite
                            za <b>All Inclusive</b> ili <b>Ultra All Inclusive</b> pakete, u ponudi imamo bogatstvo opcija koje uključuju hranu, piće, zabavu i
                            sve što je potrebno da proslava bude nezaboravna.
                        </p>
                        <p className='mt-4'>
                            Deca će uživati u raznovrsnim igrama, kreativnim aktivnostima, i vodićemo ih kroz razne igre pod nadzorom naših
                            animatora, dok se roditelji mogu opustiti u našem restoranu i uživati u specijalitetima po njihovom izboru.
                        </p>
                        <p className='mt-4'>
                            Nudimo i različite opcije za <b>hranu i piće</b> – od klasičnih menija, preko zdravih užina, do luksuznih opcija koje uključuju
                            pića i tortu po izboru. Sa našim <b>Ultra All Inclusive</b> paketom, svi gosti mogu uživati u vrhunskim obrocima i napicima
                            tokom cele zabave, čineći rođendan savršenim za celu porodicu.
                        </p>
                        <p className='mt-4 playroom-text-bundle'>
                            <b>Pogledajte našu galeriju i izaberite paket koji najviše odgovara vašim potrebama!
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
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket2.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket2"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket3.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket3"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket4.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket4"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket5.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket5"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket6.jpg"
                                className="d-block w-100 rounded"
                                alt="UltraAllInclusivePaket6"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="playroom-bundle-image">
                            <img
                                src="/assets/images/playroom/all-inclusive/AllInclusivePaket1.jpg"
                                className="d-block w-100 rounded"
                                alt="AllInclusivePaket1"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </>
    );
}
