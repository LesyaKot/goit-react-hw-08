import css from "./Modal.module.css";

export default function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>Are you sure you want to delete this contact?</p>
        <button className={css.btn} onClick={onConfirm}>
          Yes
        </button>
        <button className={css.btn} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}
