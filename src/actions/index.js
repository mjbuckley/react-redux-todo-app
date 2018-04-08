import { v4 } from 'uuid'; // UUID creator

// I was unfamiliar with the method used below to add text to the returned object. What's happening
// is that you can use a variable name (including function parameters) alone when creating object
// literals and it will be converted to a property name matching the variable name and a value
// matching the value of the variable. The use of "text" below is the same as "text: text". Related,
// a shorthand way to add a function is by just defining the function like "funcName(){stuff}" and
// it will be converted to "funcName: function()".
export const addToDo = text => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const clearAll = () => {
  return {
    type: 'CLEAR_ALL'
  }
};
