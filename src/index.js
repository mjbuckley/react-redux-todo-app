import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Below syntax was unfamiliar to me (importing a directory rather than a file). It is shorthand for
// "import todoApp from './reducers/index.js';". Not sure the value of this syntax, but will keep
// for now.
import todoApp from './reducers';
import './index.css';
import App from './components/app.js';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);