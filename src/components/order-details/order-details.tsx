import checkIcon from '../../images/done.png';

import styles from './order-details.module.css';

const OrderDetails = () => {
  return (
    <div className={styles.order_details}>
      <h2 className={styles.title}>034536</h2>
      <p className={styles.subtitle}>идентификатор заказа</p>
      <img className={styles.icon} src={checkIcon} />
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
