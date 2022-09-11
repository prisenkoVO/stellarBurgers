import './order-details.scss';
import done from '../../images/done.svg';
import PropTypes from 'prop-types';

export const OrderDetails = ({ orderId }) => {
    return (
        <div className="order-details pt-30 pb-30 pr-25 pl-25">
            <span className="order-details__id text text_type_digits-large mb-8">{orderId}</span>
            <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
            <span className="order-details__icon mb-15">
                <img src={done} alt="done" />
            </span>
            <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
            <span className="order-details__description text text_type_main-default">Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}
OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired
}