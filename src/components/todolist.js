import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo.js';

const TodoList = ({ todos, filter, onTodoClick }) => {

  if (todos.length > 0) {
    return (
      <div className="todolist">
        <h2>TODO LIST</h2>
        <ul className="todolist-list">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
          ))}
        </ul>
        {filter === "SHOW_COMPLETED" ? null : (<p>(Click on a todo to mark it as complete)</p>)}
      </div>
    );
  }

  let filterName ='';

  if (filter === 'SHOW_ACTIVE') {
    filterName = "No active todos.";
  } else if (filter === 'SHOW_COMPLETED') {
    filterName = "No completed todos.";
  } else {
    filterName = "No todos yet. Add one in text area above."
  }

  return (
    <div className="todolist notodos">
      <h2>TODO LIST</h2>
      <ul className="todolist-list">
        <li>{filterName}</li>
      </ul>
    </div>
  );
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
