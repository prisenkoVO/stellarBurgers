// eslint-disable-next-line
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../services/actions/user';
import ProfileNav from './components/profile-nav/profile-nav';
import styles from './profile.module.scss';

function ProfilePage() {

  const dispatch = useDispatch();
  const { name: nameState, email: emailState } = useSelector(state => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('********');

  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  useEffect(() => {
    setName(nameState);
    setEmail(emailState);
  }, [nameState, emailState]);

  // useEffect(() => {
  //   console.warn('LOG')
  //   if(!emailState) {
  //     dispatch(getProfile());
  //   }
  // }, [emailState, dispatch]);


  const handlerEdit = () => {
    dispatch(editProfile({ name, email, password }));
    setIsNameEditing(false);
    setIsEmailEditing(false);
    setIsPasswordEditing(false);
  }

  const handlerCancel = () => {
    setIsNameEditing(false);
    setIsEmailEditing(false);
    setIsPasswordEditing(false);
  }

  return (
    <div className={styles.container}>
      <ProfileNav />
      <div className={styles.main}>
        <Input
          type="text"
          value={name}
          placeholder="Имя"
          icon={isNameEditing ? 'CloseIcon' : 'EditIcon'}
          extraClass="mb-6"
          onChange={(e) => setName(e.target.value)}
          onIconClick={() => isNameEditing ? setName('') : setIsNameEditing(true)}
          disabled={!isNameEditing}
        />
        <Input
          type="email"
          value={email}
          placeholder="Логин"
          icon={isEmailEditing ? 'CloseIcon' : 'EditIcon'}
          extraClass="mb-6"
          onChange={(e) => setEmail(e.target.value)}
          onIconClick={() => isEmailEditing ? setEmail('') : setIsEmailEditing(true)}
          disabled={!isEmailEditing}
        />
        <Input
          type="password"
          value={password}
          placeholder="Пароль"
          icon={isPasswordEditing ? 'CloseIcon' : 'EditIcon'}
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
          onIconClick={() => isPasswordEditing ? setPassword('') : setIsPasswordEditing(true)}
          disabled={!isPasswordEditing}
        />
        {(isNameEditing || isEmailEditing || isPasswordEditing) &&
          <div className={styles.btnBlock}>
            <Button htmlType="button" onClick={() => handlerCancel()} type="secondary" size="medium">
              Отменить
            </Button>
            <Button htmlType="button" onClick={() => handlerEdit()}>
              Сохранить
            </Button>
          </div>
        }
      </div>
    </div>
  );
}

export default ProfilePage;