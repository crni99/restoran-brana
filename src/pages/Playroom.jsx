import React from 'react';

export default function PlayroomPage() {

    const handleRightClick = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center min-vh-90" data-aos="fade-up" data-aos-duration="2000">
                <div className="row w-100">
                    <div className="col-12">
                        <video
                            src="/assets/videos/IgraonicaPromoVideo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-100 rounded"
                            onContextMenu={handleRightClick}
                        >
                            Vaš pretraživač ne podržava video oznaku.
                        </video>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center min-vh-90" data-aos="fade-up" data-aos-duration="2000">
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
                            <div className="carousel-item playroom-image active">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket1.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket1" />
                            </div>
                            <div className="carousel-item playroom-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket2.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket2" />
                            </div>
                            <div className="carousel-item playroom-image ">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket3.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket3" />
                            </div>
                            <div className="carousel-item playroom-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket4.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket4" />
                            </div>
                            <div className="carousel-item playroom-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket5.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket5" />
                            </div>
                            <div className="carousel-item playroom-image">
                                <img src="/assets/images/playroom/ultra-all-inclusive/UltraAllInclusivePaket6.jpg" 
                                className="w-100 rounded" alt="UltraAllInclusivePaket6" />
                            </div>
                            <div className="carousel-item playroom-image">
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
