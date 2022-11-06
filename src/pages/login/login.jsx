// eslint-disable-next-line
import styles from './login.module.scss';
import generalStyles from '../general.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
  
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium">Вход</span>
        <Input
          type={'email'}
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
        <Button>Войти</Button>
        <span className="text text_type_main-default">
          Вы — новый пользователь?&nbsp;
          <Link to="/register" className="text text_type_main-default">Зарегистрироваться</Link>
        </span>
        <span className="text text_type_main-default">
          Забыли пароль?&nbsp;
          <Link to="/forgot" className="text text_type_main-default">Восстановить пароль</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;