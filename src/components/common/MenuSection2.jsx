import React from 'react';
import { Carousel } from 'react-bootstrap';

const MenuSection2 = ({ title, items, sectionId }) => {
    return (
        <div className='min-vh-90 d-flex justify-content-center align-items-center' data-aos='fade-up' data-aos-duration="2000">
            <div className="row-wrapper w-100">
                <span>
                    <p className="fs-4 menu-title text-center">{title}</p>
                </span>
                <Carousel interval={6000} id={`carouselExampleCaptions${sectionId}`} className="mb-4">
                    {items.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="container d-flex justify-content-center align-items-center">
                                <div className="row w-100">
                                    <div className="col-md-8">
                                        <img
                                            src={process.env.PUBLIC_URL + item.image}
                                            className="rounded mx-auto d-block menu-image"
                                            style={{ objectFit: "contain", maxHeight: "500px" }}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="col-md-4 menu-text zoom-in-move-down-hover">
                                        <h5 className='fw-bold'>{item.title}</h5>
                                        <p className='fst-italic'>{item.description ? item.description : '\u00A0'}</p>
                                        <p>
                                            <small className="text-muted">{item.price ? item.price + ` RSD` : '\u00A0'}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default MenuSection2;
