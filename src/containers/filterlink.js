// import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions';
// import Link from '../components/link.js';
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   };
// };
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);
//
// export default FilterLink;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
//
// const FilterLink = ({ filter, children }) => (
//   <NavLink
//     exact
//     to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
//     activeStyle={ {
//       textDecoration: 'none',
//       color: 'black'
//     }}
//   >
//     {children}
//   </NavLink>
// );
//
// export default FilterLink;


import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
    activeClassName="active-link"
  >
    {children}
  </NavLink>
);

export default FilterLink;
