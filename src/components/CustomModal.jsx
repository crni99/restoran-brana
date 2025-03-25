import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ title, message, buttonTitle, show, onHide }) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
            aria-live="assertive"
            role="alert"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='alert-title'>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='fw-bold'>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} className='custom-button'>{buttonTitle}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
