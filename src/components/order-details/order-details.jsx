import OrderDetailsStyles from './order-details.module.scss';
import done from '../../images/done.svg';
import { useSelector } from 'react-redux';

export const OrderDetails = () => {
    const { number } = useSelector((state) => state.order.order)
    return (
        <div className={`${OrderDetailsStyles.container} pt-30 pb-30 pr-25 pl-25`}>
            <span className={`${OrderDetailsStyles.id} text text_type_digits-large mb-8`}>{number}</span>
            <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
            <span className="mb-15">
                <img src={done} alt="done" />
            </span>
            <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
            <span className={`${OrderDetailsStyles.description} text text_type_main-default`}>Дождитесь готовности на орбитальной станции</span>
        </div>
    )
}