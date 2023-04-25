import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);
//the output will be a object
console.log('store',store);
//the output will be the empty array (because of default argument as empty array in reucers)
console.log('STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



