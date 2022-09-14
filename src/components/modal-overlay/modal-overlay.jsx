import ModalOverlayStyles from './modal-overlay.module.scss';
import PropTypes from 'prop-types';

export const ModalOverlay = ({onClose}) => {
  return (
    <div className={ModalOverlayStyles.overlay} onClick={onClose}>
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
}
