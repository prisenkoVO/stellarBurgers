import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderStyles from './app-header.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';



const HeaderBtn = ({ title, href, children }) => (
  <NavLink
    to={{ pathname: href }}
    className={`${HeaderStyles.header__btn} pt-4 pr-5 pb-4 pl-5`}
    activeClassName={HeaderStyles.header__btn_active}
    exact>
      <span className="mr-2">
        {children}
      </span>
      <span className="text text_type_main-default">{title}</span>
  </NavLink>
);

HeaderBtn.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

function AppHeader() {
  return (
    <header className={`${HeaderStyles.header} pt-4 pb-4`}>
      <div className={HeaderStyles.header__content}>
        <div className={HeaderStyles.header__btnblock}>
          <HeaderBtn title="Конструктор" href="/">
            <BurgerIcon type="secondary" />
          </HeaderBtn>
          <HeaderBtn title="Лист заказов" href="/list">
            <ListIcon type="secondary" />
          </HeaderBtn>
        </div>
        <Logo />
        <HeaderBtn title="Личный кабинет" href="/profile">
          <ProfileIcon type="secondary"/>
        </HeaderBtn>
      </div>
    </header>
  );
}

export default AppHeader;