import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './style.css';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Url from './url/Url';
const {url} = Url();
axios.defaults.baseURL = url;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

