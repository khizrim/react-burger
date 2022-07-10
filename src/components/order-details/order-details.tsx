import { useContext } from 'react';
import checkIcon from '../../images/done.png';
import OrderContext from '../../services/order-context';

import styles from './order-details.module.css';

const OrderDetails = () => {
  const { order } = useContext(OrderContext);

  return (
    <div className={styles.order_details}>
      <h2 className={styles.title}>{order.number}</h2>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.icon} src={checkIcon} alt="Заказ успешно создан" />
      <p className={styles.caption}>
        Ваш заказ начали готовить
        <span className={styles.caption_secondary}>
          Дождитесь готовности на&nbsp;орбитальной станции
        </span>
      </p>
    </div>
  );
};

export default OrderDetails;
