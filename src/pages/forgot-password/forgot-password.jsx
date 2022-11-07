// eslint-disable-next-line
import styles from './forgot-password.module.scss';
import generalStyles from '../general.module.scss';
import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { forgotPassword } from '../../utils/api';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handlerClick = (email) => {
    forgotPassword(email)
      .then(value => {
        if (value?.success) {
          history.replace({ pathname: '/reset' });
        }
      })
  };
  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
        <Input
          type="email"
          value={email}
          placeholder="Укажите e-mail"
          onChange={e => setEmail(e.target.value)}
          extraClass="mb-6"
        />
        <Button onClick={() => handlerClick(email)} extraClass="mb-20">Восстановить</Button>
        <span className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?&nbsp;
        <Link to="/login" className="text text_type_main-default">Войти</Link>
        </span>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;