import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

export default ( ) => {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Router>
    </Provider>
  )
}