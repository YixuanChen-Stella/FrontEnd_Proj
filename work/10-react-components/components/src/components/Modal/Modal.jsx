import { useRef } from 'react';
import Button from '../Button/Button';
import './Modal.css';

function Modal({ isOpen, onClose }) {

  const dialogRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);

    onClose();
  };

  if (isOpen) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return (
      <dialog ref={dialogRef} className="modal">
        <div className="modal-content">
          <h2>Adopt a Kitten Today!</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Why do you want to adopt this kitten?</label>
              <textarea
                  id="message"
                  name="message"
                  required
              />
            </div>

            <div className="modal-actions">
              <Button
                  type="submit"
                  visual="button"
              >
                Submit Application
              </Button>

              <Button
                  type="button"
                  visual="link"
                  onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </dialog>
  );
}

export default Modal;
