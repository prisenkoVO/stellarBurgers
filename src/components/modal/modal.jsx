import { createPortal } from 'react-dom';
import ModalStyles from './modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

export const Modal = ({ children, onClose, header }) => {
  window.onkeydown = (event) => {
    if (event.keyCode == 27) {
      onClose();
    }
  };
  const headerBlock = (
    <span className={`${ModalStyles.header} text text_type_main-large mt-3`}>
      {header}
    </span>
  );
  return createPortal(
    <>
      <div className={`${ModalStyles.modal} pt-10 pr-10 pb-15 pl-10`}>
        {header ? headerBlock : ''}
        <span className={ModalStyles.closeBtn}>
          <CloseIcon onClick={onClose} type="primary" />
        </span>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  header: PropTypes.string
}
