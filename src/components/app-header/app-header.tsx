import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu_container}>
          <a className={styles.menu_button_active} href="#">
            <BurgerIcon type="primary" />
            <span>Конструктор</span>
          </a>
          <a className={styles.menu_button} href="#">
            <ListIcon type="secondary" />
            <span>Лента заказов</span>
          </a>
        </nav>
        <div className={styles.logo_container}>
          <a className={styles.logo_link} href="/">
            <Logo />
          </a>
        </div>
        <div className={styles.profile_container}>
          <a className={styles.menu_button} href="#">
            <ProfileIcon type="secondary" />
            <span>Личный кабинет</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
