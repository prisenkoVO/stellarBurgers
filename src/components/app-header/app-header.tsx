import './app-header.scss';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type HeaderBtnProps = {
  title: string,
  children: React.ReactNode,
  isNotActive?: boolean
};


const HeaderBtn = ({ children, title, isNotActive }: HeaderBtnProps) => (
  <div className="app-header__btn pt-4 pr-5 pb-4 pl-5">
    <span className="mr-2">
      {children}
    </span>
    <span className={`text text_type_main-default ${isNotActive ? 'app-header__btn_disable':''}`}>{title}</span>
  </div>
);

function AppHeader() {
  return (
    <header className="app-header pt-4 pb-4">
      <div className="app-header__content">
        <div className="app-header__btn-block">
          <HeaderBtn title="Конструктор">
            <BurgerIcon type="primary" />
          </HeaderBtn>
          <HeaderBtn title="Лист заказов" isNotActive={true}>
            <ListIcon type="secondary" />
          </HeaderBtn>
        </div>
        <Logo />
        <HeaderBtn title="Личный кабинет" isNotActive={true}>
          <ProfileIcon type="secondary"/>
        </HeaderBtn>
      </div>
    </header>
  );
}

export default AppHeader;