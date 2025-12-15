import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
    const modalRoot = document.getElementById('modal');

    return ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        modalRoot
    );
};

export default Modal;
