import React from 'react';

const MenuSection2 = ({ title, items, sectionId }) => {

    return (
        <div className='min-vh-90 d-flex justify-content-center align-items-center' data-aos='fade-up' data-aos-duration="2000">
            <div className="row-wrapper w-100">
                <span>
                    <p className="fs-4 menu-title text-center">{title}</p>
                </span>
                <div id={`carouselExampleCaptions${sectionId}`} className="carousel slide mb-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {items.map((item, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="container d-flex justify-content-center align-items-center">
                                    <div className="row w-100">
                                        <div className="col-12 col-md-8">
                                            <img
                                                src={process.env.PUBLIC_URL + item.image}
                                                className="rounded mx-auto d-block menu-image"
                                                style={{ objectFit: "contain", maxHeight: "500px" }}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="col-12 col-md-4 menu-text">
                                            <h5>{item.title}</h5>
                                            <p className='fst-italic'>{item.description ? item.description : '\u00A0'}</p>
                                            <p>
                                                <small className="text-muted">{item.price ? item.price + ` RSD` : '\u00A0'}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carouselExampleCaptions${sectionId}`}
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Prethodni</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carouselExampleCaptions${sectionId}`}
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Sledeći</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default MenuSection2;
