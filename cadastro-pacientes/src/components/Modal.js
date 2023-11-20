// Modal.js
import React from 'react';
import '../App.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;