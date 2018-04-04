import React from 'react';
import FilterLink from '../containers/filterlink.js';

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
    <p className="github"><a href="https://github.com/mjbuckley/redux-test">View app code on GitHub</a></p>
  </div>
);

export default Footer;
