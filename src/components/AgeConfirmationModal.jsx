import React from 'react';
import Modal from 'react-modal';
import { createPortal } from 'react-dom';
import '../styles/ageModal.css';

const AgeConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <>{isOpen &&
      createPortal(
        <Modal
          isOpen={true}
          onRequestClose={onRequestClose}
          contentLabel="Age Confirmation Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
          appElement={document.getElementById('root')}
        >
          <p>Lassumenda hndi eaque asperiores saepe, dicta facilis pariatur reprehenderit et voluptas ipsum. Modi recusandae maxime, ad quas consectetur sunt ipsa!</p>
          <h1>Você tem 18 anos ou mais?</h1>
          <div className="modal-buttons">
            <button onClick={onRequestClose}>Não</button>
            <button onClick={onConfirm}>Sim</button>
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

export default AgeConfirmationModal;
