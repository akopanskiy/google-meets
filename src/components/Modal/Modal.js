import { createPortal } from 'react-dom';
import Toolbar from '../Toolbar';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  return createPortal(
    <div className={styles.modalContent}>
      <Toolbar />
    </div>,
    modalRoot,
  );
};
export default Modal;
