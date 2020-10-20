// React [Essentials]
import React from 'react';
import ReactDOM from 'react-dom';
// Views [Local Components]
import { Home } from './containers';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
