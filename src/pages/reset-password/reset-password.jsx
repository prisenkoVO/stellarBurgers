import { useState } from 'react';
// eslint-disable-next-line
import styles from './reset-password.module.scss';
import generalStyles from '../general.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function ResetPasswordPage() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium">Восстановление пароля</span>
        <Input
          type={passwordShow ? 'text' : 'password'}
          value={password}
          placeholder="Пароль"
          icon={passwordShow ? 'HideIcon' : 'ShowIcon'}
          onIconClick={() => setPasswordShow(!passwordShow)}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type={'text'}
          value={code}
          placeholder={'Введите код из письма'}
          onChange={e => setCode(e.target.value)}
        />
        <Button>Сохранить</Button>
        <span className="text text_type_main-default">
          Вспомнили пароль?&nbsp;
          <Link to="/login" className="text text_type_main-default">Войти</Link>
        </span>
      </div>
    </div>
  );
}

export default ResetPasswordPage;