import { useState } from 'react';
// eslint-disable-next-line
import styles from './reset-password.module.scss';
import generalStyles from '../general.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../utils/api';

function ResetPasswordPage() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handlerClick = (form) => {
    resetPassword(form)
      .then(value => {
        // if (value?.success) {
        //   history.replace({ pathname: '/reset' });
        // }
        console.warn(value);
      })
  };

  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium mb-6">Восстановление пароля</span>
        <Input
          type={passwordShow ? 'text' : 'password'}
          value={password}
          placeholder="Пароль"
          icon={passwordShow ? 'HideIcon' : 'ShowIcon'}
          onIconClick={() => setPasswordShow(!passwordShow)}
          onChange={e => setPassword(e.target.value)}
          extraClass="mb-6"
          />
        <Input
          type={'text'}
          value={token}
          placeholder={'Введите код из письма'}
          onChange={e => setToken(e.target.value)}
          extraClass="mb-6"
        />
        <Button onClick={() => handlerClick({password, token})} extraClass="mb-20">Сохранить</Button>
        <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?&nbsp;
          <Link to="/login" className="text text_type_main-default">Войти</Link>
        </span>
      </div>
    </div>
  );
}

export default ResetPasswordPage;