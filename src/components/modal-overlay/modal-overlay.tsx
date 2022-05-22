import React from 'react';

import styles from './modal-overlay.module.css';

const ModalOverlay = ({
  onClose,
  children
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;
