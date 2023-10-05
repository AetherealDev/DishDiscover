import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';  

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

export default Modal;
