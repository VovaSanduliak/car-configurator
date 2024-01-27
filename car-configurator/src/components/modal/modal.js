import { createPortal } from "react-dom";
import "./modal.css";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div>Modal</div>
        <button onClick={onClose}>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default Modal;
