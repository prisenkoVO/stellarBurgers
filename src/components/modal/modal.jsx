import { createPortal } from 'react-dom';
import ModalStyles from './modal.module.scss';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ children, onClose, header }) => {
  

  useEffect(() => {
    const escListener = ({ key }) => key === 'Escape' ? onClose() : undefined;

    window.addEventListener('keydown', escListener, true);
    // Убиваем listener при размонтировании
    return () => window.removeEventListener('keydown', escListener, true);
  }, [onClose]);

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
  children: PropTypes.node.isRequired,
  header: PropTypes.string
}
