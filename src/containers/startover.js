// Clears all todos. This could have been done as a seperate container and component, but this
// seems ok because it'sso simple.

import React from 'react';
import { connect } from 'react-redux';
import { clearAll } from '../actions';

let StartOver = ({ dispatch }) => {
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        dispatch(clearAll());
      }}
    >
      CLEAR ALL
    </a>
  );
};

StartOver = connect()(StartOver);

export default StartOver;
