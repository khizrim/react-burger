import { ReactNode } from 'react';
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
  children: ReactNode;
  onClose: () => void;
}) => {
  const modalRoot = document.getElementById('modals-root') as HTMLElement;

  useEscCloser(onClose);

  return ReactDOM.createPortal(
    <>
      <section className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.close_btn}>
            <CloseIcon onClick={onClose} type="primary" />
          </span>
        </div>
        <div className={styles.content}>{children}</div>
      </section>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
