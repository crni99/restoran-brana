import React from 'react';
import { Carousel } from 'react-bootstrap';

const MenuSection = ({ title, items, sectionId, interval = 6000 }) => {

    const carouselId = `carouselExampleCaptions${sectionId || 'default'}`;

    return (
        <div className='min-vh-90 d-flex justify-content-center align-items-center' data-aos='fade-up' data-aos-duration="2000">
            <div className="row-wrapper w-100">
                <span>
                    <p className="fs-4 menu-title text-center">{title}</p>
                </span>
                <Carousel interval={interval} id={carouselId} aria-label={`Carousel for ${title}`} className="mb-4">
                    {items.map((item, index) => {
                        const imageUrl = process.env.PUBLIC_URL + (item.image || '/default-image.jpg');
                        return (
                            <Carousel.Item key={item.id || index}>
                                <div className="container d-flex justify-content-center align-items-center">
                                    <div className="row w-100">
                                        <div className="col-md-8 image-menu-placeholder">
                                            <img
                                                src={imageUrl}
                                                className="rounded mx-auto d-block menu-image"
                                                style={{ objectFit: "contain", maxHeight: "500px" }}
                                                alt={item.title}
                                                loading="lazy"
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
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default MenuSection;
