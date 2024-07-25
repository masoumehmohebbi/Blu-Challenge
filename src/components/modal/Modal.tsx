import { XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./modal.module.css";

function Modal({ onOpen, open }) {
  if (!open) return null;
  return (
    <div>
      <div className={styles.backdrop} onClick={() => onOpen(false)}></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 className={styles.title}>لیست تسهیلات</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className={`${styles.close} ${styles.icon}`} />
          </button>
        </div>
        ...
      </div>
    </div>
  );
}

export default Modal;
