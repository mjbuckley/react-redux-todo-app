import React from 'react';
import FilterLink from '../containers/filterlink.js';
import StartOver from '../containers/startover.js';

const Footer = () => (
  <div>
    <p className="footer">
      Filters:
      {' '}
      <FilterLink filter="SHOW_ALL" className="filter-link">
        SHOW ALL
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_ACTIVE" className="filter-link">
        SHOW ACTIVE
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_COMPLETED" className="filter-link">
        SHOW COMPLETED
      </FilterLink>
    </p>
    <p className="github"><a href="https://github.com/mjbuckley/react-redux-todo-app">View app code on GitHub</a></p>
    <StartOver />
  </div>
);

export default Footer;
