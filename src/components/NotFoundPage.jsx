import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    const { t } = useTranslation();

    return (
        <div className="container d-flex justify-content-center align-items-center px-5" style={{ height: "85dvh" }}>
            <div className="section-title text-center row-wrapper w-50 ">
                <h1>{t('NotFoundPage.title')}</h1>
                <p className='mt-3'>{t('NotFoundPage.subTitle')}</p>
                <Link to="/" className="btn custom-button fw-bold p-3 text-decoration-none mt-3" >{t('NotFoundPage.returnToHomeButton')}</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
