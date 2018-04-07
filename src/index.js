import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// Below syntax was unfamiliar to me (importing a directory rather than a file). It is shorthand for
// "import todoApp from './reducers/index.js';". Not sure the value of this syntax, but will keep
// for now.
import todoApp from './reducers';
import './index.css';
// import App from './components/app.js';
import Root from './components/root.js';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localstorage.js';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// Grab saved state from local storage. Returns undefined if not saved or err.
const persistedState = loadState();

// Second (optional) argument is the initial state
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
