import { useEffect } from 'react';

import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

import AppHeader from '../app-header/app-header';
import AppStyles from './app.module.scss';

import HomePage from '../../pages/home';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import ProfilePage from '../../pages/profile/profile';
import NotFoundPage from '../../pages/not-found/not-found';
import OrdersPage from '../../pages/profile/orders/orders';
import { ProtectedRoute } from '../protected-route/protected-route';
import { getProfile } from '../../services/actions/user';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modal/modal';

function App() {
  const dispatch = useDispatch();
  const { checkAuth } = useSelector(state => state.user);
  const { items } = useSelector(state => state.ingredients);

  useEffect(() => {
    if (!items?.length) {
      dispatch(getIngredients());
    }
    if (!checkAuth) {
      dispatch(getProfile());
    }
  }, [dispatch, checkAuth, items]);

  const location = useLocation();
  const history = useHistory();
  const background = location.state && location.state.background;

  const handleCloseModal = () => {
    history.goBack();
  };

  return (
    <div className={AppStyles.app}>
      <AppHeader />

      <DndProvider backend={HTML5Backend}>
        <Switch location={background || location}>
          <ProtectedRoute path="/profile" component={ProfilePage} exact />
          <ProtectedRoute path="/profile/orders" component={OrdersPage} exact />

          <Route path="/login" component={LoginPage} isAuthRequired={false} />
          <Route path="/register" component={RegisterPage} isAuthRequired={false} />
          <Route path="/forgot" component={ForgotPasswordPage} isAuthRequired={false} />
          <Route path="/reset" component={ResetPasswordPage} isAuthRequired={false} />
          <Route path="/ingredients/:id" component={IngredientDetails} />

          <Route path="/" component={HomePage} exact />

          <Route component={NotFoundPage} />
        </Switch>
        {
          background && (
            <Route path="/ingredients/:id" children={
              <Modal header="Детали ингредиента" onClose={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            } />
          )
        }
      </DndProvider>
    </div>
  );
}

export default App;