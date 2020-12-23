import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  // 경로 이동할 때마다 app도 바뀌어야 한다...?
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// export default index;
