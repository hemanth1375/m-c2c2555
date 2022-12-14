import React from 'react';
import { CgProfile } from 'react-icons/cg';
import './Modal.css'
const Modal = () => {
    return (
        <div className="modal-card">
            <div className="modal-name">
                <CgProfile className="modal-card-profile"/>
                <p className="name">Will Westin</p>
            </div>
            <div className="modal-button-container">
                <button className='btn btn-primary'>Profile</button>
                <button className='btn btn-primary'>Signout</button>
            </div>
        </div>
    );
};

export default Modal;