import "../Sass/Modal.scss";

function Modal({ setShowSentForm, setFormHasChange }) {
  return (
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content">
        <p className="modal-text">Medelande skickat</p>
        <button
          className="modal-btn"
          onClick={() => {
            setShowSentForm(false);
            setFormHasChange(false);
          }}
        >
          Okej
        </button>
      </div>
    </div>
  );
}
export default Modal;
