import React from 'react';
import FilterLink from '../containers/filterlink.js';

// const Footer = () => (
//   <p>
//     FILTERS:
//     {' '}
//     <FilterLink filter="SHOW_ALL">
//       Show All
//     </FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_ACTIVE">
//       Show Active
//     </FilterLink>
//     {' '}
//     <FilterLink filter="SHOW_COMPLETED">
//       Show Completed
//     </FilterLink>
//   </p>
// );

// const Footer = () => (
//   <div>
//     FILTERS:
//     <ul>
//       <li>
//         <FilterLink filter="SHOW_ALL">Show All</FilterLink>
//       </li>
//       <li><FilterLink filter="SHOW_ACTIVE">Show Active</FilterLink>
//       </li>
//       <li><FilterLink filter="SHOW_COMPLETED">Show Completed</FilterLink>
//       </li>
//     </ul>
//   </div>
// );


// const Footer = () => (
//   <div>
//     FILTERS:
// <FilterLink filter="SHOW_ALL">Show All</FilterLink>
// <FilterLink filter="SHOW_ACTIVE">Show Active</FilterLink>
// <FilterLink filter="SHOW_COMPLETED">Show Completed</FilterLink>
//   </div>
// );


const Footer = () => (
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
);

export default Footer;
