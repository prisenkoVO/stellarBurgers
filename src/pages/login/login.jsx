// eslint-disable-next-line
import styles from './login.module.scss';
import generalStyles from '../general.module.scss';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorization } from '../../services/actions/user';

function LoginPage() {
  
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const { email: emailState } = useSelector(store => store.user);

  const handlerClick = (form) => {
    dispatch(authorization(form));
  };
  
  useEffect(() => {
    if (emailState) {
      history.push('/');
    }
  }, [emailState, history]);

  return (
    <div className={generalStyles.container}>
      <div className={generalStyles.form}>
        <span className="text text_type_main-medium mb-6">Вход</span>
        <Input
          type={'email'}
          value={email}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
          extraClass="mb-6"
        />
        <Input
          type={passwordShow ? 'text' : 'password'}
          value={password}
          placeholder="Пароль"
          onIconClick={() => setPasswordShow(!passwordShow)}
          icon={passwordShow ? 'HideIcon' : 'ShowIcon'}
          onChange={e => setPassword(e.target.value)}
          extraClass="mb-6"
        />
        <Button onClick={() => handlerClick({email, password})} extraClass="mb-20">Войти</Button>
        <span className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?&nbsp;
          <Link to="/register" className="text text_type_main-default">Зарегистрироваться</Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?&nbsp;
          <Link to="/forgot" className="text text_type_main-default">Восстановить пароль</Link>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;