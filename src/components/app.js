import React from 'react';
import Footer from './footer.js';
import AddTodo from '../containers/addtodo.js';
import VisibleTodoList from '../containers/visibletodolist.js';
// import '../css/App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
