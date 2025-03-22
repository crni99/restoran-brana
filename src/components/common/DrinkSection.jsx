import React from 'react';

const DrinkSection = ({ title, items }) => {
    return (
        <div className='min-vh-90 d-flex justify-content-center align-items-center' data-aos='fade-up' data-aos-duration="2000">
            <div className="row-wrapper w-100">
                <span>
                    <p className="fs-4 menu-title text-center">{title}</p>
                </span>
                {items && items.length > 0 ? (
                    <ul className="list-group list-group-flush">
                        <div className="row">
                            {items.map((item, index) => (
                                <div key={index} className="col-12 col-md-4 mb-4">
                                    <li className="list-group-item w-100 d-flex align-items-center justify-content-center">
                                        <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center">
                                            <h5 className="fw-bold">{item.title || 'Unnamed Item'}</h5>
                                            <p>
                                                <small className="text-muted">
                                                    {item.price ? `${item.price} RSD` : 'Price not available'}
                                                </small>
                                            </p>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </div>
                    </ul>
                ) : (
                    <p className="text-center">No items available for this section.</p>
                )}
            </div>
        </div>
    );
};

export default DrinkSection;
