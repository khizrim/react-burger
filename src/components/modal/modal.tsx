import React from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';
import useEscCloser from '../../hooks/use-esc-closer';

import styles from './modal.module.css';

const Modal = ({
  title,
  children,
  onClose
}: {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const modalRoot = document.getElementById('modals-root') as HTMLElement;

  useEscCloser(onClose);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <section className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <CloseIcon onClick={onClose} type="primary" />
        </div>
        <div className={styles.content}>{children}</div>
      </section>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
