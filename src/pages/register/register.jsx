// eslint-disable-next-line
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './register.module.scss';
import generalStyles from '../general.module.scss';
import { useState } from 'react';

function RegisterPage() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium">Регистрация</span>
        <Input
          type="text"
          value={name}
          placeholder="Имя"
          extraClass={styles.elem}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type={passwordShow ? 'text' : 'password'}
          value={password}
          placeholder="Пароль"
          onIconClick={() => setPasswordShow(!passwordShow)}
          icon={passwordShow ? 'HideIcon' : 'ShowIcon'}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Зарегистрироваться</Button>
        <span className="text text_type_main-default">
        Уже зарегистрированы?&nbsp;
        <Link to="/login" className="text text_type_main-default">Войти</Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;