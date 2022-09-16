import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderStyles from './app-header.module.scss';
import PropTypes from 'prop-types';



const HeaderBtn = ({ title, children, isActive = false }) => (
  <div className={`${HeaderStyles.header__btn} ${isActive ? HeaderStyles.header__btn_active:''} pt-4 pr-5 pb-4 pl-5`}>
    <span className="mr-2">
      {children}
    </span>
    <span className="text text_type_main-default">{title}</span>
  </div>
);

HeaderBtn.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}

function AppHeader() {
  return (
    <header className={`${HeaderStyles.header} pt-4 pb-4`}>
      <div className={HeaderStyles.header__content}>
        <div className={HeaderStyles.header__btnblock}>
          <HeaderBtn title="Конструктор" isActive={true}>
            <BurgerIcon type="primary" />
          </HeaderBtn>
          <HeaderBtn title="Лист заказов">
            <ListIcon type="secondary" />
          </HeaderBtn>
        </div>
        <Logo />
        <HeaderBtn title="Личный кабинет">
          <ProfileIcon type="secondary"/>
        </HeaderBtn>
      </div>
    </header>
  );
}

export default AppHeader;