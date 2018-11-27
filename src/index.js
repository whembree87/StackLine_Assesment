import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import NavBar from './containers/NavBar';
import RetailSales from './components/RetailSales';
import Overview from './components/Overview';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div className="container">
              <div className="row">
                  <NavBar />
                  <Switch>
                      <Route path="/overview" component={Overview} />
                      <Route path="/" component={RetailSales} />
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
