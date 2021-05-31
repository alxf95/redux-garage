import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form'
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import App from './components/App';
import carsReducer from './reducers/carsReducer';
import CarsNew from './containers/CarsNew';
import CarsShow from './containers/CarsShow';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" component={CarsShow} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
