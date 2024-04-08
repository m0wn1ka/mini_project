import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './components/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').style.height='100vh'
document.getElementById('root').style.fontFamily='Times New Roman'
document.getElementById('root').className='w-100 index'
root.render(
  <GoogleOAuthProvider clientId='626933237916-h3jvh992aodll3ptjbnrcp5p2j5m06sj.apps.googleusercontent.com '>
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
