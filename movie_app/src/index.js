import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react는 1개의 컴포넌트만 랜더할 수 있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

