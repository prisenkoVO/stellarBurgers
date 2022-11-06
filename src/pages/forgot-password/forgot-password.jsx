// eslint-disable-next-line
import styles from './forgot-password.module.scss';
import generalStyles from '../general.module.scss';
import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium">Восстановление пароля</span>
        <Input
          type="email"
          value={email}
          placeholder="Укажите e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Button>Восстановить</Button>
        <span className="text text_type_main-default">
        Вспомнили пароль?&nbsp;
        <Link to="/login" className="text text_type_main-default">Войти</Link>
        </span>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;