import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { QrScanner } from './QrScanner';
import QrDisplay from './QrDisplay';
import { ResultPage } from './ResultPage';

function App() {
  return <div className='qr-code-container'>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={QrScanner} />;
        <Route exact={true} path='/qr' component={QrDisplay} />;
        <Route exact={true} path='/resultPage' component={ResultPage} />;
      </Switch >
    </BrowserRouter>
  </div>;
}

export default App;
