import './modal-overlay.scss';
import PropTypes from 'prop-types';

export const ModalOverlay = ({onClose}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
}
