import React from 'react';
import Footer from './footer.js';
import AddTodo from '../containers/addtodo.js';
import VisibleTodoList from '../containers/visibletodolist.js';
// import '../css/app.css';

const App = ({ match: { params} }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
);

export default App;
