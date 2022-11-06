import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useDispatch } from 'react-redux';
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

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={AppStyles.app}>
      <Router>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forgot" component={ForgotPasswordPage} />
            <Route path="/reset" component={ResetPasswordPage} />
            <Route path="/profile" component={ProfilePage} exact />
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