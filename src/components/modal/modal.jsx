import { createPortal } from 'react-dom';
import './modal.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

export const Modal = ({children, onClose, header}) => {
  const modalRoot = document.getElementById('modal-root');
  const headerBlock = (
    <span className="modal__header text text_type_main-large mt-3">
      {header}
    </span>
    );
  return createPortal(
    <>
      <div className="modal pt-10 pr-10 pb-15 pl-10">
        {header ? headerBlock : ''}
        <span className="modal__close-btn">
          <CloseIcon onClick={onClose} type="primary" />
        </span>
        {children}
      </div>
      <ModalOverlay onClose={onClose}/>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  header: PropTypes.string
}
