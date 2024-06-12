import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { store } from './store/Store.js'
import { Provider } from 'react-redux'

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] =`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
  
    <RouterProvider router={router} />
  
  </Provider>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

