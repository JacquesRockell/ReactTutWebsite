import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';



ReactDOM.render(
  <React.StrictMode>   
    <BrowserRouter>
      <App />
    </BrowserRouter>       
  </React.StrictMode>,
  document.getElementById('root')
);


OverlayScrollbars(document.body, {
  nativeScrollbarsOverlaid: {
      initialize: false,
      autoHide: 'l'
  },
  scrollbars : {
    autoHide: "scroll",
  }
});