import React from 'react';

const MenuSection = ({ title, items, sectionId }) => {
    return (
        <div className="menu-section w-100">
            <span>
                <p className="fs-4">{title}</p>
            </span>
            <div className="accordion" id={`accordion${sectionId}`}>
                {items.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={`heading${sectionId}${index}`}>
                            <button
                                className="accordion-button collapsed fs-5 fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${sectionId}${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${sectionId}${index}`}
                            >
                                {item.title}
                            </button>
                        </h2>
                        <div
                            id={`collapse${sectionId}${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${sectionId}${index}`}
                            data-bs-parent={`#accordion${sectionId}`}
                        >
                            <div className="accordion-body">
                                <div className="card w-100">
                                    <img
                                        src={process.env.PUBLIC_URL + item.image}
                                        className="card-img-top rounded w-25 h-auto"
                                        alt={item.title}
                                    />
                                    <div className="card-body mt-3">
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">{item.price} RSD</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
