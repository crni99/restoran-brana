import React, { useEffect, useState } from 'react';

const Alert = ({ message, duration = 4000 }) => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        showAlert && (
            <>
                <div className="alert-overlay"></div>
                <div className="alert-center p-5 alert-wrapper">
                    <div className="alert row-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                        <h5 className='fw-bold alert-title'>Napomena:</h5>
                        <h6 className='fw-bold'>{message}</h6>
                    </div>
                </div>
            </>
        )
    );
};

export default Alert;
