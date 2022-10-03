import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 
    
const enhancer = composeEnhancers();
const store = createStore(rootReducer, enhancer); 

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <div id="modal-root"></div>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
