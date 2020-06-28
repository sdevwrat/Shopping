import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
