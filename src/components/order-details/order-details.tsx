/* eslint-disable @typescript-eslint/no-explicit-any */
import useAppSelector from '../../hooks/use-app-selector';
import checkIcon from '../../images/done.png';

import styles from './order-details.module.css';

const OrderDetails = () => {
  const { order }: { order: { number?: number } } = useAppSelector((store) => store.orderReducer);

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
