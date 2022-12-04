
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../../services/actions/user';
import styles from './profile-nav.module.scss';

function ProfileNav() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  }
  return (
    <div className={`${styles.nav} mr-15`}>
      <NavLink
        to={{ pathname: "/profile" }}
        className={`text text_type_main-medium ${styles.btn}`}
        activeClassName={styles.btn_active} exact>Профиль</NavLink>
      <NavLink
        to={{ pathname: "/profile/orders" }}
        className={`text text_type_main-medium ${styles.btn}`}
        activeClassName={styles.btn_active} exact>История заказов</NavLink>
      <NavLink
        to={{ pathname: "/" }}
        onClick={() => handleLogOut()}
        className={`text text_type_main-medium ${styles.btn}`}>Выход</NavLink>
      <span className="text text_type_main-default mt-20">В этом разделе вы можете <br/> изменить свои персональные данные</span>
    </div>
  );
}

export default ProfileNav;