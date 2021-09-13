import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactModal from "react-modal";
import styles from './styles.module.css';

const Modal = forwardRef(({ children }, ref) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    }
  }))

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() { }

  ReactModal.setAppElement("#root");

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        closeTimeoutMS={200}
      >
        {children}
      </ReactModal>
    </>
  );
});

export default Modal;
