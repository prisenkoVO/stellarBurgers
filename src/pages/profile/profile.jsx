// eslint-disable-next-line
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.module.scss';

function ProfilePage() {
  const [name, setName] = useState('Вячеслав');
  const [login, setLogin] = useState('test@test.ru');
  const [password, setPassword] = useState('123456');
  return (
    <div className={styles.container}>
      <div className={`${styles.nav} mr-15`}>
        <NavLink
          to={{ pathname: "/profile" }}
          className={`text text_type_main-medium ${styles.btn}`}
          activeClassName={styles.btn_active}>Профиль</NavLink>
        <NavLink
          to={{ pathname: "/profile/orders" }}
          className={`text text_type_main-medium ${styles.btn}`}>История заказов</NavLink>
        <NavLink
          to={{ pathname: "/" }}
          className={`text text_type_main-medium ${styles.btn}`}>Выход</NavLink>
      </div>
      <div className={styles.main}>
        <Input
          type="text"
          value={name}
          placeholder="Имя"
          icon="EditIcon"
          extraClass="mb-6"
          disabled={true}
        />
        <Input
          type="login"
          value={login}
          placeholder="Логин"
          icon="EditIcon"
          extraClass="mb-6"
          disabled={true}
        />
        <Input
          type="password"
          value={password}
          placeholder="Пароль"
          icon="EditIcon"
          extraClass="mb-6"
          disabled={true}
        />
      </div>
    </div>
  );
}

export default ProfilePage;