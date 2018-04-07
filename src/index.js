import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import Root from './components/root.js';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localstorage.js';
import './index.css';


// Grab saved state from local storage. Returns undefined if not saved or err.
const persistedState = loadState();

// The second (optional) argument for createStore is the initial state
let store = createStore(todoApp, persistedState);

// Updage local storage on state change. Use of throttle ensures that saveState doesn't get
// excessively called
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
