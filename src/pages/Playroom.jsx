import React from 'react';
import VideoSection from '../components/common/VideoSection';

export default function PlayroomPage() {

    return (
        <>
            <VideoSection
                title="Okean Igraonica"
                subTitle="Mesto gde zabava ne prestaje!"
                videoSource="/assets/videos/IgraonicaPromoVideo.mp4"
            />

            <div className="container d-flex justify-content-center align-items-center min-vh-90 mt-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="row row-wrapper row-direction">
                    <div className="col-12 col-md-6 mt-3">
                        <img src="/assets/images/playroom/Igraonica1.jpeg"
                            className="w-100 rounded mb-3 playroom-main-image" alt="Igraonica1" />
                    </div>
                    <div className="col-12 col-md-6 playroom-text mt-3">
                        U restoranu <strong><i>Brana</i></strong> ne brinemo samo o vašem uživanju u ukusnoj hrani, već i o zabavi za najmlađe. Naša <strong><i>Okean Igraonica</i></strong>
                        &nbsp;je savršeno mesto za decu da se opuste, igraju, istražuju i uživaju u bezbednom okruženju, dok vi, roditelji, možete u
                        potpunosti uživati u obroku.
                        <br></br>
                        <br></br>
                        U okeanskoj atmosferi, sa modernim igrama i kreativnim sadržajem, deca mogu da se igraju, uče i druže sa vršnjacima, dok
                        se vi opuštate uz našu ponudu specijaliteta. Naša igraonica je dizajnirana da pruži sigurnost i zabavu, tako da su svi
                        mališani u rukama naših ljubaznih i obazrivih animatora.
                        <br></br>
                        <br></br>
                        Dođite u <strong><i>Okean Igraonicu</i></strong> restorana <strong><i>Brana</i></strong> i stvorite nezaboravne trenutke za celu porodicu!
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                        <img src="/assets/images/playroom/Igraonica2.jpg"
                            className="w-100 rounded mb-3 playroom-main-image" alt="Igraonica2" />
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                        <img src="/assets/images/playroom/Igraonica3.jpg"
                            className="w-100 rounded mb-3 playroom-main-image" alt="Igraonica3" />
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center min-vh-90 mt-5" data-aos="fade-up" data-aos-duration="2000">
                <div className="row row-wrapper">
                    <span>
                        <p className="fs-4 menu-title text-center">Organizujte nezaboravan rođendan u <strong>Okean Igraonici</strong></p>
                    </span>
                    <div className="col-12 col-md-12 playroom-text">
                        <p className='mt-2'>
                            U restoranu <strong><i>Brana</i></strong> vaša deca mogu da uživaju u najlepšim trenucima dok proslavljaju rođendane u našoj <strong><i>Okean Igraonici</i></strong>.
                            Ovaj prostor je idealan za organizaciju rođendanskih zabava, jer pruža savršen ambijent za decu, ali i prostor za
                            roditelje, koji mogu da uživaju u miru i opuštanju po izboru.
                        </p>

                        <p className='mt-4'>
                            Naša <strong><i>Okean Igraonica</i></strong> nudi različite pakete za organizaciju rođendana, prilagođene vašim potrebama. Bilo da se odlučite
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

            <div className="container d-flex justify-content-center align-items-center min-vh-90 mt-5 mb-3" data-aos="fade-up" data-aos-duration="2000">
                <div className="row w-100 row-wrapper">
                    <div id="carouselExampleIndicators" className="carousel slide mt-3">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div className="carousel-playroom carousel-inner rounded">
                            <div className="carousel-item playroom-bundle-image active">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket1.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket1" />
                            </div>
                            <div className="carousel-item playroom-bundle-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket2.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket2" />
                            </div>
                            <div className="carousel-item playroom-bundle-image ">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket3.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket3" />
                            </div>
                            <div className="carousel-item playroom-bundle-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket4.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket4" />
                            </div>
                            <div className="carousel-item playroom-bundle-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket5.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket5" />
                            </div>
                            <div className="carousel-item playroom-bundle-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket6.jpg"
                                    className="w-100 rounded" alt="UltraAllInclusivePaket6" />
                            </div>
                            <div className="carousel-item playroom-bundle-image">
                                <img src="/assets/images/playroom/all-inclusive/AllInclusivePaket1.jpg"
                                    className="w-100 rounded" alt="AllInclusivePaket1" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Prethodni</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Sledeći</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
