import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

export default ( ) => {
  return (
    <Router>
      <React.Fragment>
        <App />
      </React.Fragment>
    </Router>
  )
}