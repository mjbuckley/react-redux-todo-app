import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <div className="todo-input">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
AddToDo = connect()(AddToDo);

export default AddToDo;
