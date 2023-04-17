import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore ,compose} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import { getAllPets } from './actions/pet';
import {BrowserRouter as Router}from 'react-router-dom'
import { petReducer } from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combineReducers({pet:petReducer}),composeEnhancers(applyMiddleware(thunk)))
//store.dispatch(getAllPets());

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <Provider store={store}>
      <App/>
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
