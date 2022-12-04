import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import NotFoundPage from '../../pages/not-found/not-found';
import OrdersPage from '../../pages/profile/orders/orders';
import { ProtectedRoute } from '../protected-route/protected-route';
import { getProfile } from '../../services/actions/user';

function App() {
  const dispatch = useDispatch();
  const { checkAuth } = useSelector(state => state.user);
  const { items } = useSelector(state => state.ingredients);

  useEffect(() => {
    if(!items?.length) {
      dispatch(getIngredients());
    }
    if(!checkAuth) {
      dispatch(getProfile());
    }
  }, [dispatch, checkAuth, items]);

  return (
    <div className={AppStyles.app}>
      <Router>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <ProtectedRoute path="/profile" component={ProfilePage} exact />
            <ProtectedRoute path="/profile/orders" component={OrdersPage} exact />

            <Route path="/login" component={LoginPage} isAuthRequired={false} />
            <Route path="/register" component={RegisterPage} isAuthRequired={false} />
            <Route path="/forgot" component={ForgotPasswordPage} isAuthRequired={false} />
            <Route path="/reset" component={ResetPasswordPage} isAuthRequired={false} />
            
            <Route path="/ingredients/:id" component={IngredientDetailsPage} />
            <Route path="/" component={HomePage} exact />
            
            <Route component={NotFoundPage} />
          </Switch>
        </DndProvider>
      </Router>
    </div>
  );
}

export default App;