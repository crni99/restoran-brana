import React from 'react';

const DrinkSection = ({ title, items }) => {
    return (
        <div className='min-vh-75 d-flex justify-content-center align-items-center mt-5 mb-5' data-aos='fade-up' data-aos-duration="2000">
            <div className="row-wrapper w-100">
                <span>
                    <p className="fs-4 menu-title text-center">{title}</p>
                </span>
                {items && items.length > 0 ? (
                    <ul className="list-group list-group-flush">
                        {items.map((item, index) => (
                            <li key={index} className="list-group-item w-100 d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center">
                                    <h5 className="fw-bold">{item.title || 'Unnamed Item'}</h5>
                                    <p>
                                        <small className="text-muted">
                                            {item.price ? `${item.price} RSD` : 'Price not available'}
                                        </small>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">No items available for this section.</p>
                )}
            </div>
        </div>
    );
};

export default DrinkSection;
