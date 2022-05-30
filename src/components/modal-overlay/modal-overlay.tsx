import styles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }: { onClose: () => void }) => {
  return <div className={styles.modal_overlay} onClick={onClose} />;
};

export default ModalOverlay;
